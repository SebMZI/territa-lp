import React from "react";
import { Question } from ".";

const FAQ = () => {
  return (
    <section className="w-full mt-20">
      <h2 className="font-bold text-2xl text-center mb-16">
        Encore des questions ?
      </h2>
      <div className="flex flex-col gap-6">
        <Question
          question="Combien de temps vous faut-il pour créer ma page de vente ?"
          answer="Le design peut prendre jusqu'à 1 semaine, suivi d'environ d'1 semaine pour la réalisation."
        />
        <Question
          question="Est-ce qu’il y a des garanties ?"
          answer="Les seuls garanties que tu peux avoir sont l'hébergement/nom de domaine offert pendant 1 an, et les modifcations à l'infini pendant 6 mois."
        />
        <Question
          question="Comment vais-je savoir si ma page fonctionne bien ?"
          answer="Je mets en place Google Analytics, Google Search Console et Microsoft Clarity, pour suivre au mieux le trafic de la page. "
        />
        <Question
          question="Proposez-vous le paiement en plusieurs fois ?"
          answer="Je ne propose pas de paiement en plusieurs fois, uniquement l'acompte de 30% au début, puis le solde à la livraison."
        />
      </div>
    </section>
  );
};

export default FAQ;
