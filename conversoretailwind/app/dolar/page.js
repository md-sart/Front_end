"use client";
import { useState } from "react";

export default function ConversorDolar() {
  const [valor, setValor] = useState("");
  const [resultadoReal, setResultadoReal] = useState("");
  const [resultadoDolar, setResultadoDolar] = useState("");

  const cotacaoDolar = 5.68;

  function converter() {
    const valorEmNumero = parseFloat(valor);
    if (!isNaN(valorEmNumero)) {
      setResultadoReal((valorEmNumero * cotacaoDolar).toFixed(2));
      setResultadoDolar((valorEmNumero / cotacaoDolar).toFixed(2));
    } else {
      setResultadoReal("");
      setResultadoDolar("");
    }
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center flex flex-col items-center gap-8">
      <h1 className="text-3xl sm:text-4xl font-bold">Conversor de Dólar</h1>
      <p className="text-lg sm:text-xl max-w-xl">
        Aqui você poderá converter valores de Real para Dólar e vice-versa com base na cotação atual (R$ 5,68).
      </p>

      <input
        type="number"
        placeholder="Digite o valor em reais"
        className="bg-white border rounded px-4 py-2 w-full max-w-sm text-black"
        value={valor}
        onChange={(e) => { setValor(e.target.value); converter(); }}
      />

      <p className="text-xl font-semibold">
        Valor em Dólar: <span className="text-green-600">${resultadoDolar}</span>
      </p>
      <p className="text-xl font-semibold">
        Valor em Real: <span className="text-green-600">R${resultadoReal}</span>
      </p>
    </main>
  );
}
