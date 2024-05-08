import Image from "next/image";
import React from "react";

const BenefitCard = ({ img, title, text }) => {
  return (
    <article className="flex flex-col items-center justify-between ">
      <Image src={img} width={100} height={100} />
      <div className="text-center">
        <h3 className="font-medium text-2xl ">{title}</h3>
        <p className="text-center w-72">{text}</p>
      </div>
    </article>
  );
};

export default BenefitCard;
