import React from "react";
import { BenefitCard } from ".";

const Benefits = () => {
  return (
    <section>
      <h2 className="font-bold text-2xl text-center relative -top-5">
        Ce que tu obtiens avec nos services
      </h2>
      <div className="flex flex-col gap-16 mt-7">
        <BenefitCard
          img={"/images/benefits/benefits-1.svg"}
          title={"Personnalisation"}
          text={
            "Une page de vente codé sur-mesure de A à Z, conçu pour maximiser tes conversions."
          }
        />
        <BenefitCard
          img={"/images/benefits/benefits-2.svg"}
          title={"Conversions"}
          text={
            "Nous rédigeons un contenu captivant et persuasif pour convertir les visiteurs."
          }
        />
        <BenefitCard
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
