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

  return (
    <div>
      <img src={imagens[valor]} alt={`Dado mostrando ${valor}`} width={100} />
    </div>
  );
}

function gerarNumeroDado() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function Home() {
  const [valorDado, setValorDado] = useState(1);

  return (
    <div>
      <h1>Jogue o Dado!</h1>
      <Dado valor={valorDado} />
      <button onClick={() => setValorDado(gerarNumeroDado())}>Jogar Dado</button>
    </div>
  );
}
