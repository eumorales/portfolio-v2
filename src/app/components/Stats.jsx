"use client";
import React, { useState, useEffect } from 'react';
import { Cake, GithubLogo, Star, Microphone, MusicNote, GitCommit } from '@phosphor-icons/react';
import { Fade } from 'react-awesome-reveal';

const dataNascimento = new Date('2004-06-01');

const urlGithub = 'https://api.github.com/users/eumorales';
const urlCommits = 'https://api.github.com/search/commits?q=author:eumorales';
const urlTopArtista = 'https://api.gilbertomorales.com/api/artista';
const urlMaisTocada = 'https://api.gilbertomorales.com/api/maistocada';

const tokenGithub = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const salvarLocalStorage = (chave, dados, expMinutos = 10) => {
  const tempoExpiracao = new Date().getTime() + expMinutos * 60 * 1000;
  localStorage.setItem(chave, JSON.stringify({ dados, tempoExpiracao }));
};

const carregarLocalStorage = (chave) => {
  const dadosArmazenados = localStorage.getItem(chave);
  if (!dadosArmazenados) return null;

  const { dados, tempoExpiracao } = JSON.parse(dadosArmazenados);
  if (new Date().getTime() > tempoExpiracao) {
    localStorage.removeItem(chave);
    return null;
  }
  return dados;
};

const Stats = () => {
  const [idade, setIdade] = useState('...');
  const [repositorios, setRepositorios] = useState('...');
  const [estrelas, setEstrelas] = useState('...');
  const [totalCommits, setTotalCommits] = useState('...');
  const [topArtista, setTopArtista] = useState({ nome: '...', url: '#' });
  const [maisTocada, setMaisTocada] = useState({ nome: '...', url: '#' });
  
  useEffect(() => {
    const calcularIdade = () => {
      const agora = new Date();
      const diferencaMs = agora - dataNascimento;

      const anos = Math.floor(diferencaMs / (1000 * 60 * 60 * 24 * 365.25));
      const meses = Math.floor((diferencaMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const dias = Math.floor((diferencaMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);

      return (
        <span className="text-lg font-semibold">
          <span className="text-gray-800">{anos}y </span>
          <span className="text-gray-500 text-sm">
            {meses}mo {dias}d {horas}h {minutos}min {segundos}s
          </span>
        </span>
      );
    };

    setIdade(calcularIdade());

    const intervalo = setInterval(() => {
      setIdade(calcularIdade());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const carregarGithub = async () => {
      const cacheRepos = carregarLocalStorage('repositorios');
      const cacheEstrelas = carregarLocalStorage('estrelas');
      if (cacheRepos && cacheEstrelas) {
        setRepositorios(cacheRepos);
        setEstrelas(cacheEstrelas);
        return;
      }

      try {
        const resposta = await fetch(urlGithub, {
          headers: {
            Authorization: `Bearer ${tokenGithub}`,
          },
        });
        if (!resposta.ok) throw new Error('Falha ao buscar dados do GitHub');
        const dados = await resposta.json();
        setRepositorios(dados.public_repos);
        salvarLocalStorage('repositorios', dados.public_repos);

        const respostaRepos = await fetch(`${urlGithub}/repos?per_page=100`, {
          headers: {
            Authorization: `Bearer ${tokenGithub}`,
          },
        });
        if (!respostaRepos.ok) throw new Error('Falha ao buscar repositórios');
        const dadosRepos = await respostaRepos.json();

        let totalEstrelas = 0;
        for (const repo of dadosRepos) {
          totalEstrelas += repo.stargazers_count;
        }

        setEstrelas(totalEstrelas);
        salvarLocalStorage('estrelas', totalEstrelas);
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        setRepositorios('...');
        setEstrelas('...');
      }
    };

    carregarGithub();
  }, []);

  useEffect(() => {
    const carregarCommits = async () => {
      const cacheCommits = carregarLocalStorage('totalCommits');
      if (cacheCommits) {
        setTotalCommits(cacheCommits);
        return;
      }

      try {
        const resposta = await fetch(urlCommits, {
          headers: {
            Authorization: `Bearer ${tokenGithub}`,
            'Accept': 'application/vnd.github.cloak-preview',
          },
        });
        if (!resposta.ok) throw new Error('Falha ao buscar os commits');
        const dados = await resposta.json();
        setTotalCommits(dados.total_count || 0);
        salvarLocalStorage('totalCommits', dados.total_count || 0);
      } catch (error) {
        console.error('Erro ao buscar os commits:', error);
        setTotalCommits('...');
      }
    };

    carregarCommits();
  }, []);

  useEffect(() => {
    const carregarSpotify = async () => {
      const cacheArtista = carregarLocalStorage('topArtista');
      const cacheTocada = carregarLocalStorage('maisTocada');

      if (cacheArtista && cacheTocada) {
        setTopArtista(cacheArtista);
        setMaisTocada(cacheTocada);
        return;
      }

      try {
        const respostaArtista = await fetch(urlTopArtista);
        if (!respostaArtista.ok) throw new Error('Falha ao buscar artista mais escutado');
        const dadosArtista = await respostaArtista.json();
        const novoTopArtista = { nome: dadosArtista.topArtist, url: dadosArtista.artistUrl };
        setTopArtista(novoTopArtista);
        salvarLocalStorage('topArtista', novoTopArtista);

        const respostaTocada = await fetch(urlMaisTocada);
        if (!respostaTocada.ok) throw new Error('Falha ao buscar música mais tocada');
        const dadosTocada = await respostaTocada.json();
        const novaMaisTocada = { nome: dadosTocada.topTrack, url: dadosTocada.trackUrl };
        setMaisTocada(novaMaisTocada);
        salvarLocalStorage('maisTocada', novaMaisTocada);
      } catch (error) {
        console.error('Erro ao buscar dados do Spotify:', error);
        setTopArtista({ nome: 'Não encontrado', url: '#' });
        setMaisTocada({ nome: 'Não encontrada', url: '#' });
      }
    };

    carregarSpotify();
  }, []);

  const estatisticas = [
    { label: 'My Age', valor: idade, icone: <Cake size={24} color="black" /> },
    { label: 'Top Artist', valor: topArtista.nome, icone: <Microphone size={24} color="black" />, link: topArtista.url },
    { label: 'Top Played', valor: maisTocada.nome, icone: <MusicNote size={24} color="black" />, link: maisTocada.url },
    { label: 'Github Repositories', valor: repositorios, icone: <GithubLogo size={24} color="black" />, link: 'https://github.com/eumorales' },
    { label: 'Github Stars', valor: estrelas, icone: <Star size={24} color="black" />, link: 'https://github.com/eumorales' },
    { label: 'Total Commits', valor: totalCommits, icone: <GitCommit size={24} color="black" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <Fade triggerOnce={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {estatisticas.map((stat, index) => (
            stat.link ? (
              <a
                key={index}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center shadow-md cursor-pointer hover:bg-gray-200 transition"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{stat.icone}</span>
                  <h3 className="text-lg font-medium text-gray-600">{stat.label}</h3>
                </div>
                <div className="text-xl font-semibold text-gray-800 break-words text-center">{stat.valor}</div>
              </a>
            ) : (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center shadow-md"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{stat.icone}</span>
                  <h3 className="text-lg font-medium text-gray-600">{stat.label}</h3>
                </div>
                <div className="text-xl font-semibold text-gray-800 break-words text-center">{stat.valor}</div>
              </div>
            )
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Stats;
