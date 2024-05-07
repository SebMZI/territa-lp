import React from "react";

const Process = () => {
  return (
    <section className="w-full">
      <h2 className="text-center font-bold text-2xl">
        Comment se passe la création de ta page ?
      </h2>
      <div className="w-full">
        <div className="h-[971px] w-full border-l-2 border-ascent ml-[30px] mt-16 relative flex flex-col justify-around">
          <div className="grid grid-cols-3 content-center">
            <div className="col-span-1 h-[60px] w-[60px] border-2 rounded-full border-ascent relative -left-[30px] bg-[#FAFAFA] grid place-content-center  text-4xl text-ascent">
              1.
            </div>
            <div className="col-start-2 col-end-4">
              <h3 className="font-medium w-full">Prise de rendez-vous</h3>
              <p className="">
                Le rendez-vous est optionnel mais recommandé, il s’agit d’un
                moment d’échange pour mieux comprendre tes besoins et te
                rassurer pour délivré la meilleure page de vente possible.
              </p>
            </div>
          </div>

          <div className="h-[60px] w-[60px] border-2 rounded-full border-ascent relative -left-[30px] bg-[#FAFAFA] grid place-content-center  text-4xl text-ascent">
            2.
          </div>
          <div className="h-[60px] w-[60px] border-2 rounded-full border-ascent relative -left-[30px] bg-[#FAFAFA] grid place-content-center  text-4xl text-ascent">
            3.
          </div>
        </div>
        <div className="col-start-2 col-end-4 flex flex-col justify-around">
          <div className="">
            <h3 className="font-medium w-full">Prise de rendez-vous</h3>
            <p className="">
              Le rendez-vous est optionnel mais recommandé, il s’agit d’un
              moment d’échange pour mieux comprendre tes besoins et te rassurer
              pour délivré la meilleure page de vente possible.
            </p>
          </div>
          <div className="">
            <h3 className="font-medium w-full">Conception</h3>
            <p className="">
              Après notre rendez-vous, je me mets à travailler sur le design,
              une fois terminé je t’ envoie la maquette pour validation.
              <br />
              <br /> Une fois validé, je commence la conception de ta page de
              vente.
            </p>
          </div>
          <div className="">
            <h3 className="font-medium w-full">Mise en ligne</h3>
            <p className="">
              Ta page de vente est mise en ligne immédiatement après validation
              de ta part sur le nom de domaine de ton choix.
              <br />
              <br /> Et c’est parti pour convertir !
            </p>
          </div>
        </div>
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
