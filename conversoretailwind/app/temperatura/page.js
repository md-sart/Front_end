"use client";
import { useState } from "react";

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  function handleCelsiusChange(e) {
    const valor = e.target.value;
    setCelsius(valor);
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setFahrenheit(((numero * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  }

  function handleFahrenheitChange(e) {
    const valor = e.target.value;
    setFahrenheit(valor);
    const numero = parseFloat(valor);
    if (!isNaN(numero)) {
      setCelsius((((numero - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  }

  return (
    <main className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center gap-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Conversor de Temperatura</h1>
      <p className="text-lg sm:text-xl max-w-xl text-center">
        Converta entre Celsius (°C) e Fahrenheit (°F) automaticamente.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="number"
          placeholder="Temperatura em °C"
          className="bg-white border rounded px-4 py-2 text-black"
          value={celsius}
          onChange={handleCelsiusChange}
        />

        <input
          type="number"
          placeholder="Temperatura em °F"
          className="bg-white border rounded px-4 py-2 text-black"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </main>
  );
}
