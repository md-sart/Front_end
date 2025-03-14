"use client";

import { useState } from "react";

function Dado({ valor }) {
  const imagens = {
    1: "/img/dado1.png",
    2: "/img/dado2.png",
    3: "/img/dado3.png",
    4: "/img/dado4.png",
    5: "/img/dado5.png",
    6: "/img/dado6.png",
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
