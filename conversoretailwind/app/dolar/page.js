"use client";

import { useState } from "react";

export default function Dolar() {
  const cotacao = 5.68;
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState("");

  function handleRealChange(e) {
    const valor = e.target.value;
    setReal(valor);
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setDolar((numero / cotacao).toFixed(2));
    } else {
      setDolar("");
    }
  }

  function handleDolarChange(e) {
    const valor = e.target.value;
    setDolar(valor);
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setReal((numero * cotacao).toFixed(2));
    } else {
      setReal("");
    }
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center flex flex-col items-center gap-8">
      <h1 className="text-3xl sm:text-4xl font-bold">Conversor de Dólar</h1>
      <p className="text-lg sm:text-xl max-w-xl">
        Converta automaticamente entre real e dólar
        <br></br>
        Cotação fixa do dólar em 14/04/2025: R$ 5,68
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="number"
          placeholder="Valor em reais (R$)"
          className="bg-white border rounded px-4 py-2 text-black"
          value={real}
          onChange={handleRealChange}
        />

        <input
          type="number"
          placeholder="Valor em dólares (US$)"
          className="bg-white border rounded px-4 py-2 text-black"
          value={dolar}
          onChange={handleDolarChange}
        />
      </div>
    </main>
  );
}
