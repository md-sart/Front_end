"use client";

import { useState } from "react";

// Componente para exibir a imagem do dado
function Dado({ valor }) {
  const imagens = {
    1: "/dado1.png",
    2: "/dado2.png",
    3: "/dado3.png",
    4: "/dado4.png",
    5: "/dado5.png",
    6: "/dado6.png",
  };

  return (
    <div>
      <img src={imagens[valor]} alt={`Dado mostrando ${valor}`} width={100} />
    </div>
  );
}

// Função para gerar o número do dado aleatoriamente
function gerarNumeroDado() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function Home() {
  const [rodada, setRodada] = useState(1);
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);
  const [dadoJogador1, setDadoJogador1] = useState(1);
  const [dadoJogador2, setDadoJogador2] = useState(1);
  const [vencedor, setVencedor] = useState("");

  // Função para jogar o dado e determinar o vencedor da rodada
  function jogarRodada() {
    const dado1 = gerarNumeroDado();
    const dado2 = gerarNumeroDado();

    setDadoJogador1(dado1);
    setDadoJogador2(dado2);

    if (dado1 > dado2) {
      setPontosJogador1(pontosJogador1 + 1);
    } else if (dado2 > dado1) {
      setPontosJogador2(pontosJogador2 + 1);
    }

    if (rodada < 5) {
      setRodada(rodada + 1);
    } else {
      if (pontosJogador1 > pontosJogador2) {
        setVencedor("Jogador 1");
      } else if (pontosJogador2 > pontosJogador1) {
        setVencedor("Jogador 2");
      } else {
        setVencedor("Empate");
      }
    }
  }

  return (
    <div>
      <h1>Jogo de Dados</h1>
      <p>Rodada: {rodada}/5</p>
      <div>
        <h2>Jogador 1</h2>
        <Dado valor={dadoJogador1} />
        <p>Pontos: {pontosJogador1}</p>
      </div>
      <div>
        <h2>Jogador 2</h2>
        <Dado valor={dadoJogador2} />
        <p>Pontos: {pontosJogador2}</p>
      </div>
      <button onClick={jogarRodada}>Jogar Rodada</button>
      {vencedor && <h2>Vencedor: {vencedor}</h2>}
    </div>
  );
}
