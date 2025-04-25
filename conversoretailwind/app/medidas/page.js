"use client";
import { useState } from "react";

export default function ConversorMedidas() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  function converterMetrosParaCentimetros() {
    const metros = parseFloat(valor);
    if (isNaN(metros)) return setResultado("Digite um número válido.");

    const centimetros = metros * 100;
    setResultado(`${metros} m = ${centimetros} cm`);
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Conversor de Medidas</h1>
      <p className="text-lg sm:text-xl max-w-xl">
        Aqui você poderá converter metros para centímetros.
      </p>
      <input
        type="number"
        placeholder="Digite o valor em metros"
        className="bg-white border rounded px-4 py-2 w-full max-w-sm text-black"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button
        onClick={converterMetrosParaCentimetros}
        className="bg-foreground text-background rounded px-6 py-2 hover:opacity-90 transition"
      >
        Converter
      </button>
      
      {resultado && (
      <p className="text-xl font-semibold text-center">
        Medida em centímetros: <span className="text-green-600">{resultado}</span>
      </p>
    )}

    </main>
  );
}
