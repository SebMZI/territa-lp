import Link from "next/link";
import Image from "next/image";
import { Navbar } from ".";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center py-2 max-w-[1440px] m-auto w-full">
      <Image
        src={"/images/logo.png"}
        width={145}
        height={50}
        className="relative -left-[22px]"
        alt="Logo Territa : Un design épuré et élégant pour la marque Territa, spécialisée dans la création de pages de vente, offrant une identité visuelle distinctive et moderne."
      />
      <Navbar />
    </header>
  );
};

export default Header;
