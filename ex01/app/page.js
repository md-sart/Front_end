"use client";

import { useState } from "react";

function Dado({ valor }) {
  const imagens = {
    1: "/public/dado1.png",
    2: "/public/dado2.png",
    3: "/public/dado3.png",
    4: "/public/dado4.png",
    5: "/public/dado5.png",
    6: "/public/dado6.png",
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
