import Image from "next/image";
import React from "react";

const BenefitCard = ({ img, title, text }) => {
  return (
    <article className="flex flex-col items-center">
      <Image src={img} width={100} height={100} />
      <h3 className="font-medium text-2xl">{title}</h3>
      <p className="text-center w-72">{text}</p>
    </article>
  );
};

export default BenefitCard;
