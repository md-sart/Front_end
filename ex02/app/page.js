"use client";

import { useState } from "react";

function Dado({ valor }) {
  const imagens = {
    1: "/dado1.png",
    2: "/dado2.png",
    3: "/dado3.png",
    4: "/dado4.png",
    5: "/dado5.png",
    6: "/dado6.png",
  };
  return <img src={imagens[valor]} alt={`Dado mostrando ${valor}`} width={100} />;
}

function gerarNumeroDado() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function Home() {
  const [rodada, setRodada] = useState(1);
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);
  const [dadoJogador1, setDadoJogador1] = useState(1);
  const [dadoJogador2, setDadoJogador2] = useState(1);
  const [jogador1Rolou, setJogador1Rolou] = useState(false);
  const [jogador2Rolou, setJogador2Rolou] = useState(false);
  const [mensagem, setMensagem] = useState("Bem-vindo ao jogo, Jogador 1 começa!");
  const [rodadaFinalizada, setRodadaFinalizada] = useState(false);

  function jogarDado(jogador) {
    if (jogador === 1 && !jogador1Rolou) {
      setDadoJogador1(gerarNumeroDado());
      setJogador1Rolou(true);
      setMensagem("Agora é a vez do Jogador 2");
    } else if (jogador === 2 && !jogador2Rolou) {
      setDadoJogador2(gerarNumeroDado());
      setJogador2Rolou(true);
      definirVencedorRodada();
    }
  }

  function definirVencedorRodada() {
    setTimeout(() => {
      let mensagemRodada = "Empate! Ninguém ganhou ponto.";
      if (dadoJogador1 > dadoJogador2) {
        setPontosJogador1((prev) => prev + 1);
        mensagemRodada = "Jogador 1 ganhou 1 ponto!";
      } else if (dadoJogador2 > dadoJogador1) {
        setPontosJogador2((prev) => prev + 1);
        mensagemRodada = "Jogador 2 ganhou 1 ponto!";
      }
      setMensagem(mensagemRodada);
      setRodadaFinalizada(true);
    }, 1000);
  }

  function avancarRodada() {
    if (rodada < 5) {
      setRodada(rodada + 1);
      setJogador1Rolou(false);
      setJogador2Rolou(false);
      setRodadaFinalizada(false);
      setMensagem(`Bem-vindo ao jogo, Jogador 1 começa!`);
    } else {
      setMensagem(
        pontosJogador1 > pontosJogador2
          ? "🏆 Jogador 1 ganhou o jogo!"
          : pontosJogador2 > pontosJogador1
          ? "🏆 Jogador 2 ganhou o jogo!"
          : "O jogo terminou em empate!"
      );
    }
  }

  function reiniciarJogo() {
    setRodada(1);
    setPontosJogador1(0);
    setPontosJogador2(0);
    setDadoJogador1(1);
    setDadoJogador2(1);
    setJogador1Rolou(false);
    setJogador2Rolou(false);
    setRodadaFinalizada(false);
    setMensagem("Bem-vindo ao jogo, Jogador 1 começa!");
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rodada {rodada}</h1>
      <p>{mensagem}</p>
      <hr />
      <div style={{ display: "flex", justifyContent: "center", gap: "50px", margin: "20px 0" }}>
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <button onClick={() => jogarDado(1)} disabled={jogador1Rolou}>Rolar Dado</button>
        </div>
        <div>
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <button onClick={() => jogarDado(2)} disabled={jogador2Rolou}>Rolar Dado</button>
        </div>
      </div>
      <hr />
      <h2>Placar: {pontosJogador1} X {pontosJogador2}</h2>
      {rodadaFinalizada && rodada < 5 && (
        <button onClick={avancarRodada}>Próxima Rodada</button>
      )}
      {rodada === 5 && rodadaFinalizada && (
        <div>
          <button onClick={reiniciarJogo}>Jogar novamente</button>
        </div>
      )}
    </div>
  );
}
