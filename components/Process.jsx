"use client";
import React from "react";
import { motion } from "framer-motion";
const Process = () => {
  return (
    <section className="w-full mt-20 lg:mb-20">
      <h2 className="text-center font-bold text-2xl md:text-3xl md:w-2/4 md:m-auto lg:text-5xl">
        Comment se passe la création de ma page ?
      </h2>
      {/* Container */}
      <div className="mt-20">
        {/* 1. */}
        {/* <div className="grid grid-cols-3 h-[310px] place-content-center">
          <div className=" flex justify-center items-center lg:col-start-2 lg:col-end-3">
            <div className="h-[310px] w-[2px] bg-ascent absolute"></div>
            <div className="w-[60px] h-[60px] border-[2px] border-ascent rounded-full absolute bg-[#FAFAFA] grid place-content-center">
              <span className="text-4xl text-ascent">1.</span>
            </div>
          </div>
          <div className="col-start-2 col-end-4 md:w-3/4 lg:col-start-1 lg:col-end-3">
            <h3 className="font-medium w-full text-xl md:text-2xl">
              Prise de rendez-vous
            </h3>
            <p className="md:text-lg lg:w-3/4">
              Le rendez-vous est optionnel mais recommandé, il s’agit d’un
              moment d’échange pour mieux comprendre tes besoins et te rassurer
              pour délivré la meilleure page de vente possible.
            </p>
          </div>
        </div> */}
        {/* 2. */}

        <div className="grid  h-[300px] md:h-[310px] place-content-center lg:grid-cols-[40%_20%_40%] grid-cols-[20%_80%] md:grid-cols-[30%_70%] gap-3 md:gap-0">
          <div className=" flex justify-center items-center lg:col-start-2 lg:order-2">
            <div className="h-[300px] w-[2px] md:h-[310px] md:h bg-ascent absolute"></div>
            <div className="w-[50px] md:h-[60px] md:w-[60px] h-[50px] border-[2px] border-ascent rounded-full absolute bg-[#FAFAFA] grid place-content-center">
              <span className="text-2xl md:text-4xl text-ascent">1</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="lg:col-start-1 lg:order-1"
          >
            <h3 className="font-medium w-full text-lg md:text-2xl mb-3">
              Prise de rendez-vous
            </h3>
            <p className="md:text-lg text-sm ">
              Le rendez-vous est optionnel mais recommandé, il s’agit d’un
              moment d’échange pour mieux comprendre tes besoins et te rassurer
              pour délivré la meilleure page de vente possible.
            </p>
          </motion.div>
        </div>

        <div className="grid   h-[300px] md:h-[310px] place-content-center lg:grid-cols-[40%_20%_40%] grid-cols-[20%_80%] md:grid-cols-[30%_70%] gap-3 md:gap-0">
          <div className=" flex justify-center items-center lg:col-start-2">
            <div className="h-[300px] md:h-[310px] w-[2px] bg-ascent absolute"></div>
            <div className="w-[50px] h-[50px] md:h-[60px] md:w-[60px] border-[2px] border-ascent rounded-full absolute bg-[#FAFAFA] grid place-content-center">
              <span className="text-2xl md:text-4xl text-ascent">2</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
            className="lg:col-start-3"
          >
            <h3 className="font-medium w-full text-lg md:text-2xl mb-3">
              Conception
            </h3>
            <p className="md:text-lg  text-sm mb-2">
              Après notre rendez-vous, je me mets à travailler sur le design,
              une fois terminé je t’ envoie la maquette pour validation.
            </p>
            <p className="md:text-lg  text-sm">
              Une fois validé, je commence la conception de ta page de vente.
            </p>
          </motion.div>
        </div>

        <div className="grid   h-[300px] md:h-[310px] place-content-center lg:grid-cols-[40%_20%_40%] grid-cols-[20%_80%] md:grid-cols-[30%_70%] gap-3 md:gap-0">
          <div className=" flex justify-center items-center lg:col-start-2 lg:order-2">
            <div className="h-[300px] md:h-[310px] w-[2px] bg-ascent absolute"></div>
            <div className="w-[50px] h-[50px] md:h-[60px] md:w-[60px] border-[2px] border-ascent rounded-full absolute bg-[#FAFAFA] grid place-content-center">
              <span className="text-2xl md:text-4xl text-ascent">3</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: "easeInOut" }}
            className="lg:col-start-1 lg:order-1"
          >
            <h3 className="font-medium w-full text-lg md:text-2xl mb-3">
              Mise en ligne
            </h3>
            <p className="md:text-lg  text-sm mb-2">
              Ta page de vente est mise en ligne immédiatement après validation
              de ta part sur le nom de domaine de ton choix.
            </p>
            <p className="md:text-lg  text-sm">
              Et c’est parti pour convertir !
            </p>
          </motion.div>
        </div>

        {/* 3. */}
        {/* <div className="grid grid-cols-3 h-[310px] place-content-center ">
          <div className="relative flex justify-center items-center lg:col-start-2 lg:col-end-3 ">
            <div className="h-[310px] w-[2px] bg-ascent absolute"></div>
            <div className="w-[60px] h-[60px] border-[2px] border-ascent rounded-full absolute bg-[#FAFAFA] grid place-content-center">
              <span className="text-4xl text-ascent">3.</span>
            </div>
          </div>
          <div className="col-start-2 col-end-4 md:w-3/4 lg:col-start-1 lg:col-end-3">
            <h3 className="font-medium w-full text-xl md:text-2xl">
              Mise en ligne
            </h3>
            <p className="md:text-lg lg:w-3/4">
              Ta page de vente est mise en ligne immédiatement après validation
              de ta part sur le nom de domaine de ton choix.
              <br />
              <br />
              Et c’est parti pour convertir !
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Process;

// <section className="w-full">
//       <h2 className="text-center font-bold text-2xl">
//         Comment se passe la création de ta page ?
//       </h2>
//       <div className="grid grid-cols-3">
//         <div className="h-[971px] w-[2px] bg-ascent ml-[30px] mt-16 relative flex flex-col justify-around">
//           <div className="h-[60px] w-[60px] border-2 rounded-full border-ascent relative -left-[30px] bg-[#FAFAFA] grid place-content-center  text-4xl text-ascent">
//             1.
//           </div>

//           <div className="h-[60px] w-[60px] border-2 rounded-full border-ascent relative -left-[30px] bg-[#FAFAFA] grid place-content-center  text-4xl text-ascent">
//             2.
//           </div>
//           <div className="h-[60px] w-[60px] border-2 rounded-full border-ascent relative -left-[30px] bg-[#FAFAFA] grid place-content-center  text-4xl text-ascent">
//             3.
//           </div>
//         </div>
//         <div className="col-start-2 col-end-4 flex flex-col justify-around">
//           <div className="">
//             <h3 className="font-medium w-full">Prise de rendez-vous</h3>
//             <p className="">
//               Le rendez-vous est optionnel mais recommandé, il s’agit d’un
//               moment d’échange pour mieux comprendre tes besoins et te rassurer
//               pour délivré la meilleure page de vente possible.
//             </p>
//           </div>
//           <div className="">
//             <h3 className="font-medium w-full">Conception</h3>
//             <p className="">
//               Après notre rendez-vous, je me mets à travailler sur le design,
//               une fois terminé je t’ envoie la maquette pour validation.
//               <br />
//               <br /> Une fois validé, je commence la conception de ta page de
//               vente.
//             </p>
//           </div>
//           <div className="">
//             <h3 className="font-medium w-full">Mise en ligne</h3>
//             <p className="">
//               Ta page de vente est mise en ligne immédiatement après validation
//               de ta part sur le nom de domaine de ton choix.
//               <br />
//               <br /> Et c’est parti pour convertir !
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
