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
  const [mensagem, setMensagem] = useState("Jogador 1, role o dado!");
  const [rodadaFinalizada, setRodadaFinalizada] = useState(false);

  function jogarDados() {
    const valor1 = gerarNumeroDado();
    const valor2 = gerarNumeroDado();
    setDadoJogador1(valor1);
    setDadoJogador2(valor2);

    if (valor1 > valor2) {
      setPontosJogador1((p) => p + 1);
      setMensagem("Jogador 1 venceu a rodada!");
    } else if (valor2 > valor1) {
      setPontosJogador2((p) => p + 1);
      setMensagem("Jogador 2 venceu a rodada!");
    } else {
      setMensagem("Empate na rodada!");
    }

    setRodadaFinalizada(true);
  }

  function proximaRodada() {
    if (rodada < 5) {
      setRodada(rodada + 1);
      setRodadaFinalizada(false);
      setMensagem("Jogador 1, role o dado!");
    }
  }

  function reiniciarJogo() {
    setRodada(1);
    setPontosJogador1(0);
    setPontosJogador2(0);
    setRodadaFinalizada(false);
    setMensagem("Jogador 1, role o dado!");
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rodada {rodada} / 5</h1>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>{mensagem}</p>
      <hr />

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", margin: "20px 0" }}>
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
        </div>

        <div>
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
        </div>
      </div>

      {!rodadaFinalizada && rodada <= 5 && (
        <button onClick={jogarDados}>Rolar Dados</button>
      )}

      {rodadaFinalizada && rodada < 5 && (
        <button onClick={proximaRodada} style={{ marginTop: "10px" }}>
          Próxima Rodada
        </button>
      )}

      {rodada === 5 && rodadaFinalizada && (
        <div style={{ marginTop: "20px" }}>
          <h2>
            {pontosJogador1 > pontosJogador2
              ? "🏆 Jogador 1 venceu o jogo!"
              : pontosJogador2 > pontosJogador1
              ? "🏆 Jogador 2 venceu o jogo!"
              : "Empate no jogo!"}
          </h2>
          <button onClick={reiniciarJogo}>Jogar novamente</button>
        </div>
      )}

      <hr />
      <h2>Placar: {pontosJogador1} X {pontosJogador2}</h2>
    </div>
  );
}
