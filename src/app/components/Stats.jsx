"use client";
import React, { useState, useEffect } from 'react';
import { Cake, GithubLogo, Star, Microphone, MusicNote, GitCommit } from '@phosphor-icons/react';
import { Fade } from 'react-awesome-reveal';

// Dados de nascimento
const dataNascimento = new Date('2004-06-01');

// URLs das APIs
const githubUrl = 'https://api.github.com/users/eumorales';
const commitsUrl = 'https://api.github.com/search/commits?q=author:eumorales';
const topArtistUrl = 'https://portfolio-backend-six-iota.vercel.app/api/artista';
const topPlayedUrl = 'https://portfolio-backend-six-iota.vercel.app/api/maistocada';

// Token do GitHub da variável de ambiente
const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// Função para obter o mês atual em inglês
const mesesIngles = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const mesAtual = mesesIngles[new Date().getMonth()];

// Função para salvar dados no localStorage com expiração
const saveToLocalStorage = (key, data, expMinutes = 10) => {
  const expirationTime = new Date().getTime() + expMinutes * 60 * 1000;
  localStorage.setItem(key, JSON.stringify({ data, expirationTime }));
};

// Função para carregar dados do localStorage com verificação de expiração
const loadFromLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  if (!storedData) return null;

  const { data, expirationTime } = JSON.parse(storedData);
  if (new Date().getTime() > expirationTime) {
    localStorage.removeItem(key); // Remove o cache expirado
    return null;
  }
  return data;
};

const Stats = () => {
  const [idade, setIdade] = useState('...');
  const [repositorios, setRepositorios] = useState('...');
  const [estrelas, setEstrelas] = useState('...');
  const [totalCommits, setTotalCommits] = useState('...');
  const [topArtist, setTopArtist] = useState({ name: '...', url: '#' });
  const [topPlayed, setTopPlayed] = useState({ name: '...', url: '#' });

  // Função para calcular a idade em tempo real
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
          <span className="text-gray-500">
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

  // Função para buscar dados do GitHub com cache e expiração
  useEffect(() => {
    const carregarGitHub = async () => {
      // Verificar o cache local
      const reposCache = loadFromLocalStorage('repositorios');
      const starsCache = loadFromLocalStorage('estrelas');
      if (reposCache && starsCache) {
        setRepositorios(reposCache);
        setEstrelas(starsCache);
        return;
      }

      try {
        // Buscar dados básicos do usuário
        const response = await fetch(githubUrl, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        });
        if (!response.ok) throw new Error('Falha ao buscar dados do GitHub');
        const data = await response.json();
        setRepositorios(data.public_repos);
        saveToLocalStorage('repositorios', data.public_repos);

        // Buscar repositórios para calcular as estrelas
        const reposResponse = await fetch(`${githubUrl}/repos?per_page=100`, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        });
        if (!reposResponse.ok) throw new Error('Falha ao buscar repositórios');
        const reposData = await reposResponse.json();

        let totalStars = 0;
        for (const repo of reposData) {
          totalStars += repo.stargazers_count;
        }

        setEstrelas(totalStars);
        saveToLocalStorage('estrelas', totalStars);
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        setRepositorios('Erro');
        setEstrelas('Erro');
      }
    };

    carregarGitHub();
  }, []);

  // Função para buscar o total de commits com cache e expiração
  useEffect(() => {
    const carregarCommits = async () => {
      const commitsCache = loadFromLocalStorage('totalCommits');
      if (commitsCache) {
        setTotalCommits(commitsCache);
        return;
      }

      try {
        const response = await fetch(commitsUrl, {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            'Accept': 'application/vnd.github.cloak-preview',
          },
        });
        if (!response.ok) throw new Error('Falha ao buscar os commits');
        const data = await response.json();
        setTotalCommits(data.total_count || 0);
        saveToLocalStorage('totalCommits', data.total_count || 0);
      } catch (error) {
        console.error('Erro ao buscar os commits:', error);
        setTotalCommits('Erro');
      }
    };

    carregarCommits();
  }, []);

  // Função para buscar dados do Spotify com cache e expiração
  useEffect(() => {
    const carregarSpotify = async () => {
      const artistCache = loadFromLocalStorage('topArtist');
      const playedCache = loadFromLocalStorage('topPlayed');

      if (artistCache && playedCache) {
        setTopArtist(artistCache);
        setTopPlayed(playedCache);
        return;
      }

      try {
        const topArtistResponse = await fetch(topArtistUrl);
        if (!topArtistResponse.ok) throw new Error('Falha ao buscar artista mais escutado');
        const artistData = await topArtistResponse.json();
        const newTopArtist = { name: artistData.topArtist, url: artistData.artistUrl };
        setTopArtist(newTopArtist);
        saveToLocalStorage('topArtist', newTopArtist);

        const topPlayedResponse = await fetch(topPlayedUrl);
        if (!topPlayedResponse.ok) throw new Error('Falha ao buscar música mais tocada');
        const playedData = await topPlayedResponse.json();
        const newTopPlayed = { name: playedData.topTrack, url: playedData.trackUrl };
        setTopPlayed(newTopPlayed);
        saveToLocalStorage('topPlayed', newTopPlayed);
      } catch (error) {
        console.error('Erro ao buscar dados do Spotify:', error);
        setTopArtist({ name: 'Não encontrado', url: '#' });
        setTopPlayed({ name: 'Não encontrada', url: '#' });
      }
    };

    carregarSpotify();
  }, []);

  const estatisticas = [
    { label: 'My Age', valor: idade, icone: <Cake size={24} color="black" /> },
    { label: `Top Artist (${mesAtual})`, valor: topArtist.name, icone: <Microphone size={24} color="black" />, link: topArtist.url },
    { label: `Top Played (${mesAtual})`, valor: topPlayed.name, icone: <MusicNote size={24} color="black" />, link: topPlayed.url },
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
