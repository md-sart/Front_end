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
  const [mensagem, setMensagem] = useState("Jogador 1 começa!");

  function jogarDado(jogador) {
    const valor = gerarNumeroDado();
    if (jogador === 1) {
      setDadoJogador1(valor);
      setJogador1Rolou(true);
      setMensagem("Jogador 2, sua vez!");
    } else {
      setDadoJogador2(valor);
      setJogador2Rolou(true);
      determinarVencedor(valor, dadoJogador1);
    }
  }

  function determinarVencedor(valor2, valor1) {
    setTimeout(() => {
      let msg = "Empate!";
      if (valor1 > valor2) {
        setPontosJogador1((pontos) => pontos + 1);
        msg = "Jogador 1 ganhou a rodada!";
      } else if (valor2 > valor1) {
        setPontosJogador2((pontos) => pontos + 1);
        msg = "Jogador 2 ganhou a rodada!";
      }
      setMensagem(msg);
    }, 1000);
  }

  function proximaRodada() {
    if (rodada < 5) {
      setRodada(rodada + 1);
      setJogador1Rolou(false);
      setJogador2Rolou(false);
      setMensagem(`Rodada ${rodada + 1}, Jogador 1 começa!`);
    }
  }

  function reiniciarJogo() {
    setRodada(1);
    setPontosJogador1(0);
    setPontosJogador2(0);
    setJogador1Rolou(false);
    setJogador2Rolou(false);
    setMensagem("Jogador 1 começa!");
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rodada {rodada}</h1>
      <p>{mensagem}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <button onClick={() => jogarDado(1)} disabled={jogador1Rolou}>
            {jogador1Rolou ? "Já jogou" : "Rolar Dado"}
          </button>
        </div>
        <div>
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <button onClick={() => jogarDado(2)} disabled={!jogador1Rolou || jogador2Rolou}>
            {jogador2Rolou ? "Já jogou" : "Rolar Dado"}
          </button>
        </div>
      </div>
      <h2>Placar: {pontosJogador1} X {pontosJogador2}</h2>
      {rodada < 5 && jogador1Rolou && jogador2Rolou && (
        <button onClick={proximaRodada}>Próxima Rodada</button>
      )}
      {rodada === 5 && jogador1Rolou && jogador2Rolou && (
        <div>
          <h2>{
            pontosJogador1 > pontosJogador2 ? "🏆 Jogador 1 venceu!" : 
            pontosJogador2 > pontosJogador1 ? "🏆 Jogador 2 venceu!" : "Empate!"
          }</h2>
          <button onClick={reiniciarJogo}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}
