import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 text-center font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-4">Conversores Online</h1>
      <p className="mb-8 text-lg">
        Escolha uma das opções abaixo para utilizar um dos nossos conversores.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <Link
          href="/dolar"
          className="bg-background text-foreground px-6 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
        >
          Conversor de Dólar
        </Link>
        <Link
          href="/temperatura"
          className="bg-background text-foreground px-6 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
        >
          Conversor de Temperatura
        </Link>
        <Link
          href="/medidas"
          className="bg-background text-foreground px-6 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
        >
          Conversor de Medidas
        </Link>
      </div>

      {/* "Sobre o Projeto" posicionado como se fosse um rodapé simples */}
      <div className="mt-auto pt-8 border-t border-white/10 w-full max-w-md text-center">
        <Link
          href="/sobre"
          className="text-sm text-foreground hover:underline"
        >
          Sobre o Projeto
        </Link>
      </div>
    </main>
  );
}
