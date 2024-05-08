import Image from "next/image";
import React from "react";
import Button from "./Button";

const Offer = () => {
  return (
    <section className="w-full mt-28" id="offer">
      <h2 className="font-bold text-2xl text-center mb-10 md:mb-10 md:w-2/4 md:m-auto lg:text-5xl">
        Fais passer ton business au niveau supérieur
      </h2>

      <article className="bg-white shadow-[0_0_37.8px_0_rgba(0,0,0,0.07)] rounded-[10px] px-5 py-6 flex flex-col max-w-[633px] md:w-full md:m-auto ">
        <span className="font-extralight text-sm">Beta Test</span>
        <span className="text-xl font-medium line-through">900 €</span>
        <div className="flex flex-row items-center gap-5 mb-8">
          <div className="flex flex-row ">
            <p className="font-bold text-5xl ">397</p>
            <span className="text-2xl font-medium relative -top-3 left-1">
              €
            </span>
          </div>
          <div className="rounded-[10px] bg-[#F74040] text-white text-sm font-medium py-1.5 px-3 ">
            3 places restantes
          </div>
        </div>
        <p>
          Augmenter la conversion des visiteurs en leads qualifiés avec une page
          de vente authentique et sur-mesure.
        </p>
        <div className="h-[1px] w-full bg-[rgba(0,0,0,0.5)] rounded-[10px] my-3.5"></div>
        <ul className="mt-7 flex flex-col gap-3 mb-7">
          <li className="flex flex-row gap-5 items-center">
            <Image
              src={"/images/green-check.png"}
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
            />
            <p className="">Un entretien individuel</p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <Image
              src={"/images/green-check.png"}
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
            />
            <p className="">Une rédaction optimisée et personnalisée</p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <Image
              src={"/images/green-check.png"}
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
            />
            <p className="">Une maquette avant validation</p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <Image
              src={"/images/green-check.png"}
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
            />
            <p className="">
              Une page de vente codée sur-mesure livrée en 1 semaine
            </p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <Image
              src={"/images/green-check.png"}
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
            />
            <p className="">Mise en ligne et Maintenance</p>
          </li>
        </ul>

        <p className="font-semibold text-lg mt-5">Bonus</p>
        <ul className="mt-3 flex flex-col gap-3 mb-7">
          <li className="flex flex-row gap-5 items-center">
            <Image
              src={"/images/blue-check.png"}
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              alt="Icône de validation : Un check bleu symbolisant une liste de bonus"
            />
            <p className="">Hébergement + Nom de domaine offert (1 an)</p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <Image
              src={"/images/blue-check.png"}
              width={25}
              height={25}
              className="w-[20px] h-[20px]"
              alt="Icône de validation : Un check bleu symbolisant une liste de bonus"
            />
            <p className="">Modification à l’infini (6 mois)</p>
          </li>
        </ul>
        <Button containerStyle={"w-full text-sm h-[45px]"} />
        <span className="text-sm text-center mt-4">
          Accompte de 30% , puis facturation du solde à la remise du projet
        </span>
      </article>
    </section>
  );
};

export default Offer;
