import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="h-screen max-w-screen-xl m-auto flex flex-col items-center justify-between px-7 overflow-hidden">
      <header className="w-full grid place-content-center py-1">
        <Image
          width={215}
          height={22}
          src="/images/logo.png"
          alt="Logo de l'entreprise Territa écrit en noir"
          className="w-3/4"
        />
      </header>
      <section className="w-full h-full flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/validationCheck.svg"
          alt="Cercle avec une marque check signifiant une validation"
          width={196}
          height={196}
          className="lg:w-[196px] w-[140px]"
        />
        <div className="flex flex-col items-center">
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-center md:w-2/4">
            <span className="text-ascent">Merci</span> pour ton achat!
          </h1>
          <p className="lg:text-3xl md:text-xl text-center md:w-3/4 pt-5">
            Dans quelques instants, tu recevras un mail avec plus d’informations
            sur la suite. Alors surveille ta boîte mail!
          </p>
        </div>
      </section>
      <footer className="w-full flex flex-row items-center justify-between py-1">
        <Image
          width={199}
          height={69}
          src="/images/logo.png"
          alt="Logo de l'entreprise Territa écrit en noir"
          className="w-[140px]"
        />
        <p className="md:text-sm text-xs">Copyright &copy; 2024 - Territa</p>
      </footer>
    </main>
  );
};

export default page;
