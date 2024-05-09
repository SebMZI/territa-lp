import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Rating } from "@mui/material";

const Hero = () => {
  return (
    <section className="w-full pt-7 ">
      <div className="md:flex md:flex-row md:justify-center">
        <span className="uppercase text-xs bg-[#F9D2B4] rounded-[10px] w-full text-center py-1 font-medium inline-block md:w-auto md:px-5 md:text-sm ">
          pages de vente sur-mesure pour les indépendants
        </span>
      </div>
      <h1 className="font-bold text-center text-[28px] leading-9 mt-4 mb-3 md:text-4xl lg:w-3/4 lg:m-auto lg:my-4 lg:text-5xl">
        <span className="text-ascent">Augmente tes conversions</span> grâce à
        une page de vente authentique et personnalisée
      </h1>
      <p className="text-sm text-center mt-2 font-medium md:text-base lg:text-xl">
        Construisons ensemble la page de vente qui te colle à la peau.
      </p>

      <ul className="mt-7 flex flex-col gap-3 mb-7 md:flex-row md:justify-around lg:px-10 lg:mt-8">
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

      <div className="w-full md:flex md:flex-row md:justify-center lg:mt-16">
        <Button
          containerStyle={
            "w-full text-sm h-[45px] md:w-auto md:px-10 md:text-lg "
          }
        />
      </div>
      <div className="flex flex-row justify-center gap-2 mt-3 ">
        <Rating name="text-feedback" value={5} readOnly precision={0.5} />
        <span className="font-medium">-</span>
        <p className="font-medium">5/5</p>
      </div>

      <div className="flex justify-center relative mt-10">
        <div className="shadow-info h-[44px] w-[99px] text-center absolute top-2 md:-top-4 left-0 md:left-7 md:px-4 md:h-auto md:w-auto md:py-1  bg-white rounded-[10px] z-10 flex flex-col items-center justify-center lg:left-36">
          <h2 className="text-lg text-ascent md:text-3xl">+ 10%</h2>
          <p className="text-[8px] md:text-sm">taux de conversion</p>
        </div>
        <div className="shadow-info h-[44px] w-[99px] text-center absolute top-6 right-3 md:right-7 md:top-20 bg-white rounded-[10px] z-10 flex flex-col items-center justify-center md:px-8 md:h-auto md:w-auto md:py-1 lg:right-24 lg:top-36">
          <h2 className="text-lg text-ascent md:text-3xl">3 écrans</h2>
          <p className="text-[8px] md:text-sm">responsive</p>
        </div>
        <div className="relative">
          <Image
            src={"/images/laptop.svg"}
            width={1456}
            height={1349}
            className="md:w-10/12 md:m-auto"
            alt="Capture d'écran de la page de vente : Un écran d'ordinateur affichant une page de vente attrayante."
          />
          <div className="absolute bottom-6 md:bottom-16 left-0 right-0 h-24 md:h-72 bg-gradient-to-t from-[#FAFAFA] to-[rgba(250,250,250,0)]"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-[#FAFAFA] md:h-16 h-6 "></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
