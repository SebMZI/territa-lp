import Image from "next/image";
import React from "react";
import { AdviseCard } from ".";

const Advise = () => {
  return (
    <section className="w-full mt-20 ">
      <div className="bg-[#F5F5F5] px-3.5 md:px-5 pt-10 pb-20 rounded-[10px] md:flex md:flex-row md:items-center lg:px-16">
        <div className="">
          <h2 className="text-2xl font-bold lg:text-5xl ">
            Les indépendants sont satisfaits de leur page de vente
          </h2>
          <p className="font-medium mt-4 md:text-xl">
            Ne nous crois pas sur parole, écoutes ce qu’ils ont à dire.
          </p>
        </div>
        <Image
          src={"/images/advise-icon.svg"}
          width={339}
          height={289}
          className="mt-4 md:w-2/4 m-auto"
          alt="Image d'avis : Une main qui tient un téléphone contenant des avis dans une main"
        />
      </div>
      <div className="max-w-80 m-auto relative -top-10 flex flex-col gap-7 md:flex-row md:max-w-none md:px-5  md:overflow-auto md:py-20 md:-top-36 lg:justify-center ">
        <AdviseCard
          delay={0}
          rating={5}
          name={"Hugo G."}
          text={
            "[...] a créé un site web parfait pour mon entreprise, en répondant rapidement à mes besoins et en étant très professionnel."
          }
          containerStyle={"lg:relative lg:-top-8 "}
        />
        <AdviseCard
          delay={0.4}
          rating={5}
          name={"Damien D."}
          text={
            "Il a su contribuer à mes projets en proposant des idées pertinentes."
          }
          containerStyle={"lg:relative lg:top-6"}
        />
        <AdviseCard
          delay={0.2}
          rating={5}
          name={"Moulay E."}
          text={
            "Il a parfaitement compris mes besoins et a livré un site web qui dépasse mes attentes."
          }
        />
      </div>
    </section>
  );
};

export default Advise;
