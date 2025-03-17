"use client";

import { useState } from "react";

// Componente do dado
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

// Função para gerar número aleatório entre 1 e 6
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
  const [mensagem, setMensagem] = useState("Bem-vindo ao jogo! Jogador 1 começa.");
  const [rodadaFinalizada, setRodadaFinalizada] = useState(false);

  function jogarDado(jogador) {
    if (jogador === 1 && !jogador1Rolou) {
      const valor = gerarNumeroDado();
      setDadoJogador1(valor);
      setJogador1Rolou(true);
      setMensagem("Você jogou, agora é a vez do Jogador 2");
    } else if (jogador === 2 && !jogador2Rolou) {
      const valor = gerarNumeroDado();
      setDadoJogador2(valor);
      setJogador2Rolou(true);
      setMensagem("Agora vamos ver quem ganhou esta rodada...");
  
      // Aguarde o próximo render para pegar o estado atualizado
      setTimeout(() => {
        setDadoJogador1((dadoAtualizadoJogador1) => {
          determinarVencedor(dadoAtualizadoJogador1, valor);
          return dadoAtualizadoJogador1; // Retorna o mesmo valor para não alterar o estado incorretamente
        });
      }, 0);
    }
  }  
  
  function determinarVencedor(valor1, valor2) {
    setTimeout(() => {
      let msg = "Empate!";
      if (valor1 > valor2) {
        setPontosJogador1((pontos) => pontos + 1);
        msg = "Jogador 1 ganhou 1 ponto!";
      } else if (valor2 > valor1) {
        setPontosJogador2((pontos) => pontos + 1);
        msg = "Jogador 2 ganhou 1 ponto!";
      }
      setMensagem(msg);
      setRodadaFinalizada(true);
    }, 1000);
  }
  

  function proximaRodada() {
    setRodada(rodada + 1);
    setJogador1Rolou(false);
    setJogador2Rolou(false);
    setRodadaFinalizada(false);
    setMensagem(`Rodada ${rodada + 1}, Jogador 1 começa!`);
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
    setMensagem("Bem-vindo ao jogo! Jogador 1 começa.");
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rodada {rodada}</h1>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{mensagem}</p>
      <hr />

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", margin: "20px 0" }}>
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <button onClick={() => jogarDado(1)} disabled={jogador1Rolou}>
            {jogador1Rolou ? "Você já jogou" : "Rolar Dado"}
          </button>
        </div>

        <div>
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <button onClick={() => jogarDado(2)} disabled={jogador2Rolou}>
            {jogador2Rolou ? "Você já jogou" : "Rolar Dado"}
          </button>
        </div>
      </div>

      <hr />
      <h2>Placar: {pontosJogador1} X {pontosJogador2}</h2>

      {rodadaFinalizada && rodada < 5 && (
        <button onClick={proximaRodada} style={{ marginTop: "10px" }}>
          Jogar próxima rodada
        </button>
      )}

      {rodada >= 5 && (
        <div style={{ marginTop: "20px" }}>
          <h2>{pontosJogador1 > pontosJogador2 ? "🏆 Jogador 1 ganhou!" : pontosJogador2 > pontosJogador1 ? "🏆 Jogador 2 ganhou!" : "Empate!"}</h2>
          <button onClick={reiniciarJogo}>
            Jogar novamente
          </button>
        </div>
      )}
    </div>
  );
}
