import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-sm flex flex-col items-start  mt-20 gap-10 py-5 w-full">
      <div className="md:flex md:flex-row md:justify-between w-full">
        <Image
          src={"/images/logo.png"}
          width={128}
          height={69}
          className="relative -left-[16px] mb-4 object-contain md:-top-7"
          alt="Logo Territa : Un design épuré et élégant pour la marque Territa, spécialisée dans la création de pages de vente, offrant une identité visuelle distinctive et moderne."
        />

        <ul className="flex flex-col gap-2 md:text-right">
          <li>
            <Link href={""}>Accueil</Link>
          </li>
          <li>
            <Link href={""}>Bénéfices</Link>
          </li>
          <li>
            <Link href={""}>Offres</Link>
          </li>
          <li>
            <Link href={""}>FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 md:flex-row-reverse md:justify-between w-full">
        <Link href={""}>Mentions Légales</Link>
        <p>Copyright &copy; 2024 - Territa</p>
      </div>
    </footer>
  );
};

export default Footer;
