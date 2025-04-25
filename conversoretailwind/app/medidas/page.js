"use client";
import { useState } from "react";

export default function ConversorMedidas() {
  const [metros, setMetros] = useState("");
  const [centimetros, setCentimetros] = useState("");

  function handleMetrosChange(e) {
    const valor = e.target.value;
    setMetros(valor);
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setCentimetros((numero * 100).toFixed(2));
    } else {
      setCentimetros("");
    }
  }

  function handleCentimetrosChange(e) {
    const valor = e.target.value;
    setCentimetros(valor);
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setMetros((numero / 100).toFixed(2));
    } else {
      setMetros("");
    }
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Conversor de Medidas</h1>
      <p className="text-lg sm:text-xl max-w-xl text-center">
        Converta automaticamente entre metros e centímetros.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="number"
          placeholder="Metros (m)"
          className="bg-white border rounded px-4 py-2 text-black"
          value={metros}
          onChange={handleMetrosChange}
        />
        <input
          type="number"
          placeholder="Centímetros (cm)"
          className="bg-white border rounded px-4 py-2 text-black"
          value={centimetros}
          onChange={handleCentimetrosChange}
        />
      </div>
    </main>
  );
}
