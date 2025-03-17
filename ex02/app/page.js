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

  return <img src={imagens[valor]} alt={`Dado mostrando ${valor}`} width={100} />;
}

// Função para gerar um número aleatório de 1 a 6
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
  const [jogador1Rolou, setJogador1Rolou] = useState(false);
  const [jogador2Rolou, setJogador2Rolou] = useState(false);

  function jogarDado(jogador) {
    if (jogador === 1) {
      setDadoJogador1(gerarNumeroDado());
      setJogador1Rolou(true);
    } else {
      setDadoJogador2(gerarNumeroDado());
      setJogador2Rolou(true);
    }

    // Quando ambos os jogadores rolam, calcula o vencedor da rodada
    if (jogador1Rolou && jogador2Rolou) {
      if (dadoJogador1 > dadoJogador2) {
        setPontosJogador1(pontosJogador1 + 1);
      } else if (dadoJogador2 > dadoJogador1) {
        setPontosJogador2(pontosJogador2 + 1);
      }

      if (rodada < 5) {
        setRodada(rodada + 1);
        setJogador1Rolou(false);
        setJogador2Rolou(false);
      } else {
        // Define o vencedor após a última rodada
        if (pontosJogador1 > pontosJogador2) {
          setVencedor("Jogador 1");
        } else if (pontosJogador2 > pontosJogador1) {
          setVencedor("Jogador 2");
        } else {
          setVencedor("Empate");
        }
      }
    }
  }

  function reiniciarJogo() {
    setRodada(1);
    setPontosJogador1(0);
    setPontosJogador2(0);
    setDadoJogador1(1);
    setDadoJogador2(1);
    setVencedor("");
    setJogador1Rolou(false);
    setJogador2Rolou(false);
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rodada {rodada}</h1>
      <hr />

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", margin: "20px 0" }}>
        {/* Jogador 1 */}
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <button onClick={() => jogarDado(1)} disabled={jogador1Rolou}>
            Rolar Dado
          </button>
        </div>

        {/* Jogador 2 */}
        <div>
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <button onClick={() => jogarDado(2)} disabled={jogador2Rolou}>
            Rolar Dado
          </button>
        </div>
      </div>

      <hr />
      <h2>Placar: {pontosJogador1} X {pontosJogador2}</h2>

      {vencedor && (
        <div style={{ marginTop: "20px" }}>
          <h2>{vencedor === "Empate" ? "O jogo empatou!" : `🏆 ${vencedor} ganhou!`}</h2>
          <button onClick={reiniciarJogo}>Jogar novamente</button>
        </div>
      )}
    </div>
  );
}
