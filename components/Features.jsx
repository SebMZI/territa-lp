import Image from "next/image";
import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <section className="mt-16 w-full">
      <article>
        <div className="mb-14">
          <span>Template</span>
          <h2 className="text-2xl font-bold mt-2.5">
            Fini les templates, place au sur-mesure
          </h2>
          <p className="mt-5">
            Marre de voir tout le temps les mêmes pages de vente issues de
            templates ? Nous garantissons une page 100% personnalisée à tes
            besoins. Et tu ne sera pas comme tout le monde!
          </p>
          <ul className="mt-7 mb-12 flex flex-col gap-3">
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Optimisation pour les conversions</p>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Design personnalisé et professionnel</p>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Performance optimale sur tous les appareils</p>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Évolutivité pour accompagner ta croissance</p>
            </li>
          </ul>
          <Button containerStyle={"w-full text-sm h-[45px]"} />
        </div>
        <Image
          src={"/images/features/feature-1.png"}
          width={370}
          height={382}
        />
      </article>
      <article className="mt-20">
        <div className="mb-14">
          <span>Responsive</span>
          <h2 className="text-2xl font-bold mt-2.5">
            Ta page sur tous les types d’écrans
          </h2>
          <p className="mt-5">
            Nombreuses sont les pages qui ne sont pas adaptées à tous les
            formats, et il s’agit là d’une erreur importante. Maximises tes
            opportunités de conversion en capturant efficacement l'attention des
            prospects sur tous les appareils.
          </p>
          <ul className="mt-7 mb-12 flex flex-col gap-3">
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Capture efficace des prospects</p>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Augmentation des taux de conversions</p>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Renforcement de ta crédibilité </p>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <Image
                src={"/images/green-check.png"}
                width={25}
                height={25}
                className="w-[25px] h-[25px]"
                alt="Icône de validation : Un check vert symbolisant une liste de bénéfices"
              />
              <p>Amélioration de l’expérience utilisateur</p>
            </li>
          </ul>
          <Button containerStyle={"w-full text-sm h-[45px]"} />
        </div>
        <Image
          src={"/images/features/feature-2.png"}
          width={370}
          height={344}
        />
      </article>
    </section>
  );
};

export default Features;
