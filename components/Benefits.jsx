import React from "react";
import { BenefitCard } from ".";

const Benefits = () => {
  return (
    <section className="w-full mt-20 lg:mb-20 " id="benefits">
      <h2 className="font-bold text-2xl text-center pb-10 md:text-3xl md:w-2/4 md:m-auto lg:text-5xl">
        Ce que tu obtiens avec nos services
      </h2>
      <div className="flex flex-col gap-16 md:gap-8 mt-7 md:flex-row md:flex-wrap md:justify-center md:items-center lg:justify-between">
        <BenefitCard
          delay={0}
          img={"/images/benefits/benefits-1.svg"}
          title={"Personnalisation"}
          text={
            "Une page de vente codé sur-mesure de A à Z, conçu pour maximiser tes conversions."
          }
        />
        <BenefitCard
          delay={0.3}
          img={"/images/benefits/benefits-2.svg"}
          title={"Conversions"}
          text={
            "Nous rédigeons un contenu captivant et persuasif pour convertir les visiteurs."
          }
        />

        <BenefitCard
          delay={0.4}
          img={"/images/benefits/benefits-3.svg"}
          title={"Tranquillité"}
          text={
            "Ton site est prêt à  attirer des clients avec une garantie de fonctionnement continu."
          }
        />
      </div>
    </section>
  );
};

export default Benefits;
