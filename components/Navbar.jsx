"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`z-40 `}>
      <button
        className={`z-50  md:hidden ${
          isOpen ? "fixed right-[30px] top-[30px]" : "relative top-0 right-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-[3px] bg-black relative transition-all ease-in-out ${
            isOpen ? "rotate-45 top-[5px]" : "rotate-0  -top-[6px]"
          }`}
        ></div>
        <div
          className={`w-6 h-[3px] bg-black ${isOpen ? "collapse" : "visible"}`}
        ></div>
        <div
          className={`w-6 h-[3px] bg-black relative transition-all ease-in-out ${
            isOpen ? "-rotate-45 bottom-[1px]" : "rotate-0 -bottom-[6px]"
          }`}
        ></div>
      </button>
      <ul
        className={`fixed h-screen w-full flex flex-col inset-0 items-center justify-center bg-[#FAFAFA] gap-10 text-lg transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:flex-row md:translate-x-0 md:bg-transparent md:static md:h-16
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <li>
          <Link href={"/"}>Accueil</Link>
        </li>
        <li>
          <Link href={"/#benefits"}>Bénéfices</Link>
        </li>
        <li>
          <Link href={"/#offer"}>Offre</Link>
        </li>
        <li>
          <Link href={"/#faq"}>FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
