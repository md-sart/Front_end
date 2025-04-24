"use client";
import { useState } from "react";

export default function ConversorTemperatura() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  function converterTemperatura() {
    const celsius = parseFloat(valor);
    if (isNaN(celsius)) return setResultado("Digite um número válido.");

    const fahrenheit = (celsius * 9) / 5 + 32;
    setResultado(`${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Conversor de Temperatura</h1>
      <input
        type="number"
        placeholder="Digite a temperatura em °C"
        className="border rounded px-4 py-2 w-full max-w-sm text-black"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button
        onClick={converterTemperatura}
        className="bg-foreground text-background rounded px-6 py-2 hover:opacity-90 transition"
      >
        Converter
      </button>
      {resultado && (
        <p className="mt-4 text-xl font-medium text-center">{resultado}</p>
      )}
    </main>
  );
}
