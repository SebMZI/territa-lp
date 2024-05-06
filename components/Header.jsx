import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between py-2">
      <Image
        src={"/images/logo.png"}
        width={145}
        height={50}
        className="relative -left-[22px]"
        alt="Logo Territa : Un design épuré et élégant pour la marque Territa, spécialisée dans la création de pages de vente, offrant une identité visuelle distinctive et moderne."
      />
      <Image src={"/images/menu-icon.svg"} width={20} height={14} alt="Icône de menu : Trois lignes horizontales représentant le menu de navigation, idéal pour une expérience conviviale sur mobile."/>
      {/* <nav>
        <ul className="flex flex-row gap-[50px]">
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
      </nav> */}
    </header>
  );
};

export default Header;
