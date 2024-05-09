"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { duration } from "@mui/material";

const Features = () => {
  return (
    <section className="mt-20 w-full lg:mb-20">
      <article className="md:grid md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:flex md:flex-col md:justify-between lg:justify-start mb-10 md:mb-0"
        >
          <div className="mb-14 md:mb-auto lg:mb-14">
            <span>Template</span>
            <h2 className="text-2xl font-bold mt-2.5 lg:text-5xl">
              Fini les templates, place au sur-mesure
            </h2>
            <p className="mt-5 md:mt-2 lg:text-lg">
              Marre de voir tout le temps les mêmes pages de vente issues de
              templates ? Nous garantissons une page 100% personnalisée à tes
              besoins. Et tu ne sera pas comme tout le monde!
            </p>
            <ul className="mt-7 mb-12 md:mb-8 flex flex-col gap-3">
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
          </div>
          <Button
            containerStyle={
              "w-full text-sm h-[45px] md:w-auto md:px-10 md:text-lg"
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={"/images/features/feature-1.svg"}
            width={370}
            height={382}
            className="md:h-full md:object-cover md:w-full max-h-[557px]"
          />
        </motion.div>
      </article>
      <article className="mt-20 md:grid md:grid-cols-2 md:gap-8 lg:mt-28">
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 mb-10 md:mb-0"
        >
          <div className="mb-14">
            <span>Responsive</span>
            <h2 className="text-2xl font-bold mt-2.5 lg:text-5xl">
              Ta page sur tous les types d’écrans
            </h2>
            <p className="mt-5 lg:text-lg">
              Nombreuses sont les pages qui ne sont pas adaptées à tous les
              formats, et il s’agit là d’une erreur importante. Maximises tes
              opportunités de conversion en capturant efficacement l'attention
              des prospects sur tous les appareils.
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
          </div>
          <Button
            containerStyle={
              "w-full text-sm h-[45px] md:w-auto md:px-10 md:text-lg"
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src={"/images/features/feature-2.svg"}
            width={370}
            height={344}
            className="md:h-full md:object-contain md:w-full max-h-[626px]"
          />
        </motion.div>
      </article>
    </section>
  );
};

export default Features;
