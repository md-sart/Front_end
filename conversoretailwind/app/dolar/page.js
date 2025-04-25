"use client";

import { useState } from "react";

export default function Dolar() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);

  function converterRealParaDolar() {
    const valorEmNumero = parseFloat(valor);
    if (!isNaN(valorEmNumero)) {
      const cotacao = 5.68;
      const convertido = valorEmNumero / cotacao;
      setResultado(convertido.toFixed(2));
    } else {
      setResultado(null);
    }
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center flex flex-col items-center gap-8">
      <h1 className="text-3xl sm:text-4xl font-bold">Conversor de Dólar</h1>
      <p className="text-lg sm:text-xl max-w-xl">
        Aqui você poderá converter valores de Real para Dólar com base na cotação atual (R$ 5,68).
      </p>

      <input
        type="number"
        placeholder="Digite o valor em reais"
        className="bg-white border rounded px-4 py-2 w-full max-w-sm text-black"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <button
        onClick={converterRealParaDolar}
        className="bg-foreground text-background rounded px-6 py-2 hover:opacity-90 transition"
      >
        Converter
      </button>

      {resultado && (
        <p className="text-xl font-semibold">
          Valor em Dólar: <span className="text-green-600">${resultado}</span>
        </p>
      )}
    </main>
  );
}
