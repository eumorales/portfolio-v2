"use client";
import React, { useState, useEffect } from 'react';
import { Cake, GithubLogo, Star, Headphones, Microphone, MusicNotes, Wrench } from '@phosphor-icons/react';

// Dados de nascimento
const dataNascimento = new Date('2004-06-01');

// URL da API do GitHub
const githubUrl = 'https://api.github.com/users/eumorales';

const Stats = () => {
  const [idade, setIdade] = useState('...');
  const [repositorios, setRepositorios] = useState('...');
  const [estrelas, setEstrelas] = useState('...');

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
        <div className="text-center">
          <span className="text-3xl font-semibold text-gray-800">{anos}y</span>
          <div className="flex flex-wrap justify-center text-lg text-gray-500 mt-1 sm:inline">
            <span>{meses}mo </span>
            <span>{dias}d </span>
            <span>{horas}h </span>
            <span>{minutos}min </span>
            <span>{segundos}s</span>
          </div>
        </div>
      );
    };

    setIdade(calcularIdade());

    const intervalo = setInterval(() => {
      setIdade(calcularIdade());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // Função para buscar dados do GitHub
  useEffect(() => {
    const carregarGitHub = async () => {
      try {
        // Buscar informações do usuário
        const response = await fetch(githubUrl);
        if (!response.ok) throw new Error('Falha ao buscar dados do GitHub');
        const data = await response.json();
        setRepositorios(data.public_repos);

        // Buscar todos os repositórios do usuário
        const reposResponse = await fetch(`${githubUrl}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Falha ao buscar repositórios');
        const reposData = await reposResponse.json();

        // Somar as estrelas de todos os repositórios
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        setEstrelas(totalStars);
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        setRepositorios('Erro');
        setEstrelas('Erro');
      }
    };

    carregarGitHub();
  }, []);

  // Dados das estatísticas
  const estatisticas = [
    { label: 'My Age', valor: idade, icone: <Cake size={24} color="black" /> },
    { label: 'Github Repositories', valor: repositorios, icone: <GithubLogo size={24} color="black" />, link: 'https://github.com/eumorales' },
    { label: 'Github Stars', valor: estrelas, icone: <Star size={24} color="black" />, link: 'https://github.com/eumorales' },
    { label: 'Listening', valor: 'Work in progress', icone: <MusicNotes size={24} color="black" />, isSpotify: true },
    { label: 'Top Artist', valor: 'Work in progress', icone: <Microphone size={24} color="black" />, isSpotify: true },
    { label: 'Spotify Plays', valor: 'Work in progress', icone: <Headphones size={24} color="black" />, isSpotify: true }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
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
              <p className="text-3xl font-semibold text-gray-800">{stat.valor}</p>
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
              {stat.isSpotify ? (
                <div className="flex items-center mt-2">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center">
                    <Wrench size={16} className="mr-1" /> {stat.valor}
                  </span>
                </div>
              ) : (
                <p className="text-3xl font-semibold text-gray-800">{stat.valor}</p>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Stats;
