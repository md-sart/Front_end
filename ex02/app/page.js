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
  const [mensagem, setMensagem] = useState("Jogador 1 começa!");

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
    }
  }

  // Efeito colateral para determinar vencedor e avançar rodada
  if (jogador1Rolou && jogador2Rolou) {
    setTimeout(() => {
      setRodada((prevRodada) => prevRodada + 1);

      setPontosJogador1((prevPontos) =>
        dadoJogador1 > dadoJogador2 ? prevPontos + 1 : prevPontos
      );
      setPontosJogador2((prevPontos) =>
        dadoJogador2 > dadoJogador1 ? prevPontos + 1 : prevPontos
      );

      if (rodada < 5) {
        setJogador1Rolou(false);
        setJogador2Rolou(false);
        setMensagem(`Rodada ${rodada + 1}, Jogador 1 começa!`);
      } else {
        setMensagem(
          pontosJogador1 > pontosJogador2
            ? "🏆 Jogador 1 ganhou!"
            : pontosJogador2 > pontosJogador1
            ? "🏆 Jogador 2 ganhou!"
            : "Empate!"
        );
      }
    }, 1000);
  }

  function reiniciarJogo() {
    setRodada(1);
    setPontosJogador1(0);
    setPontosJogador2(0);
    setDadoJogador1(1);
    setDadoJogador2(1);
    setJogador1Rolou(false);
    setJogador2Rolou(false);
    setMensagem("Jogador 1 começa!");
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rodada {rodada}</h1>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{mensagem}</p>
      <hr />

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", margin: "20px 0" }}>
        {/* Jogador 1 */}
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <button
            onClick={() => jogarDado(1)}
            disabled={jogador1Rolou}
            style={{
              backgroundColor: jogador1Rolou ? "#ccc" : "#007bff",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: jogador1Rolou ? "not-allowed" : "pointer",
              marginTop: "10px",
            }}
          >
            {jogador1Rolou ? "Você já jogou" : "Rolar Dado"}
          </button>
        </div>

        {/* Jogador 2 */}
        <div>
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <button
            onClick={() => jogarDado(2)}
            disabled={jogador2Rolou}
            style={{
              backgroundColor: jogador2Rolou ? "#ccc" : "#007bff",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: jogador2Rolou ? "not-allowed" : "pointer",
              marginTop: "10px",
            }}
          >
            {jogador2Rolou ? "Você já jogou" : "Rolar Dado"}
          </button>
        </div>
      </div>

      <hr />
      <h2>Placar: {pontosJogador1} X {pontosJogador2}</h2>

      {rodada > 5 && (
        <div style={{ marginTop: "20px" }}>
          <h2>{mensagem}</h2>
          <button
            onClick={reiniciarJogo}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "12px 24px",
              fontSize: "18px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Jogar novamente
          </button>
        </div>
      )}
    </div>
  );
}
