import React, { useState, useEffect } from 'react';
import { Cake, GithubLogo, Star, Microphone, GitCommit, MusicNote } from '@phosphor-icons/react';
import { Fade } from 'react-awesome-reveal';

const dataNascimento = new Date('2004-06-01');
const reposUrl = 'https://api.github.com/users/eumorales/repos';
const commitsUrl = 'https://api.github.com/search/commits?q=author:eumorales';
const topArtistUrl = 'https://portfolio-backend-six-iota.vercel.app/api/artista';
const topPlayedUrl = 'https://portfolio-backend-six-iota.vercel.app/api/maistocada';

const gitToken = process.env.REACT_APP_GITTOKEN;

if (!gitToken) {
  console.error('Token do GitHub não definido.');
}

const mesesIngles = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const mesAtual = mesesIngles[new Date().getMonth()];

const Stats = () => {
  const [idade, setIdade] = useState('...');
  const [repositorios, setRepositorios] = useState('...');
  const [estrelas, setEstrelas] = useState('...');
  const [commits, setCommits] = useState('...');
  const [topArtist, setTopArtist] = useState({ name: '...', url: '#' });
  const [topPlayed, setTopPlayed] = useState({ name: '...', url: '#' });

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

  const carregarGitHubDados = async (url, headers, setFunc, setError) => {
    try {
      const response = await fetch(url, { headers });
      if (!response.ok) throw new Error('Falha na requisição');
      const data = await response.json();
      setFunc(data);
    } catch (error) {
      console.error(error.message);
      setError('Erro');
    }
  };

  useEffect(() => {
    if (gitToken) {
      const headers = { 'Authorization': `token ${gitToken}` };

      carregarGitHubDados(reposUrl, headers, (data) => {
        const totalStars = data.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        setRepositorios(data.length);
        setEstrelas(totalStars);
      }, setRepositorios);

      carregarGitHubDados(commitsUrl, headers, (data) => {
        setCommits(data.total_count || 0);
      }, setCommits);
    }
  }, [gitToken]);

  useEffect(() => {
    carregarGitHubDados(topArtistUrl, {}, (data) => {
      setTopArtist({ name: data.topArtist, url: data.artistUrl });
    }, setTopArtist);
  }, []);

  useEffect(() => {
    carregarGitHubDados(topPlayedUrl, {}, (data) => {
      setTopPlayed({ name: data.topTrack, url: data.trackUrl });
    }, setTopPlayed);
  }, []);

  const estatisticas = [
    { label: `My Age`, valor: idade, icone: <Cake size={24} color="black" /> },
    { label: `Top Artist (${mesAtual})`, valor: topArtist.name, icone: <Microphone size={24} color="black" />, link: topArtist.url },
    { label: `Top Played (${mesAtual})`, valor: topPlayed.name, icone: <MusicNote size={24} color="black" />, link: topPlayed.url },
    { label: 'Github Repositories', valor: <p className="text-2xl">{repositorios}</p>, icone: <GithubLogo size={24} color="black" />, link: 'https://github.com/eumorales' },
    { label: 'Github Stars', valor: <p className="text-2xl">{estrelas}</p>, icone: <Star size={24} color="black" />, link: 'https://github.com/eumorales' },
    { label: 'Commits', valor: <p className="text-2xl">{commits}</p>, icone: <GitCommit size={24} color="black" />, link: 'https://github.com/eumorales' }
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
                <h3 className="text-base font-medium text-gray-600">{stat.label}</h3>
              </div>
              <div className="text-lg font-semibold text-gray-800 break-words text-center">{stat.valor}</div>
            </a>
          ) : (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center shadow-md"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{stat.icone}</span>
                <h3 className="text-base font-medium text-gray-600">{stat.label}</h3>
              </div>
              <div className="text-lg font-semibold text-gray-800 break-words text-center">{stat.valor}</div>
            </div>
          )
        ))}
      </div>
      </Fade>
    </div>
  );
};

export default Stats;
