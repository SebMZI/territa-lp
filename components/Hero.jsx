import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Rating } from "@mui/material";

const Hero = () => {
  return (
    <section className="w-full pt-7 ">
      <span className="uppercase text-xs bg-[#F9D2B4] rounded-[10px] w-full text-center py-1 font-medium inline-block">
        pages de vente sur-mesure pour les indépendants
      </span>
      <h1 className="font-bold text-center text-[28px] leading-9 mt-4 mb-3">
        <span className="text-ascent">Augmente tes conversions</span> grâce à
        une page de vente authentique et personnalisée
      </h1>
      <p className="text-sm text-center mt-2 font-medium">
        Construisons ensemble la page de vente qui te colle à la peau.
      </p>

      <ul className="mt-7 flex flex-col gap-3 mb-7">
        <li className="flex flex-row gap-5 items-center">
          <Image
            src={"/images/green-check.png"}
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
            alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
          />
          <p className="font-medium">Livré en moins de 1 semaine</p>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <Image
            src={"/images/green-check.png"}
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
            alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
          />
          <p className="font-medium">100% Personnalisé</p>
        </li>
        <li className="flex flex-row gap-5 items-center">
          <Image
            src={"/images/green-check.png"}
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
            alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
          />
          <p className="font-medium">Modifications à l'infini</p>
        </li>
      </ul>
      <Button containerStyle={"w-full text-sm h-[45px]"} />
      <div className="flex flex-row justify-center gap-2 mt-3">
        <Rating name="text-feedback" value={5} readOnly precision={0.5} />
        <span className="font-medium">-</span>
        <p className="font-medium">5/5</p>
      </div>

      <div className="flex justify-center relative">
        <div className="h-[44px] w-[99px] text-center absolute top-7 left-1 bg-white rounded-[10px] z-10">
          <h2 className="text-lg text-ascent">+ 10%</h2>
          <p className="text-[8px]">taux de conversion</p>
        </div>
        <div className="h-[44px] w-[99px] text-center absolute top-20 right-3 bg-white rounded-[10px] z-10">
          <h2 className="text-lg text-ascent">3 écrans</h2>
          <p className="text-[8px]">responsive</p>
        </div>
        <div className="relative">
          <Image
            src={"/images/laptop.svg"}
            width={944}
            height={582}
            alt="Capture d'écran de la page de vente : Un écran d'ordinateur affichant une page de vente attrayante."
          />
          <div className="absolute bottom-16 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-[rgba(250,250,250,0)]"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-[#FAFAFA] h-16"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
