import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-20 flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)] gap-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">Conversores Online</h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl">
        Escolha uma das opções abaixo para utilizar um dos nossos conversores.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 w-full max-w-lg">
        <Link
          href="/sobre"
          className="bg-foreground text-background rounded-lg py-4 px-6 text-center hover:opacity-90 transition"
        >
          Sobre o Projeto
        </Link>
        <Link
          href="/dolar"
          className="bg-foreground text-background rounded-lg py-4 px-6 text-center hover:opacity-90 transition"
        >
          Conversor de Dólar
        </Link>
        <Link
          href="/temperatura"
          className="bg-foreground text-background rounded-lg py-4 px-6 text-center hover:opacity-90 transition"
        >
          Conversor de Temperatura
        </Link>
        <Link
          href="/medidas"
          className="bg-foreground text-background rounded-lg py-4 px-6 text-center hover:opacity-90 transition"
        >
          Conversor de Medidas
        </Link>
      </div>
    </main>
  );
}
