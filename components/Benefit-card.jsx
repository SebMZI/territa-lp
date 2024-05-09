"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BenefitCard = ({ img, title, text, delay }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center justify-between "
    >
      <Image src={img} width={100} height={100} />
      <div className="text-center">
        <h3 className="font-medium text-2xl ">{title}</h3>
        <p className="text-center w-72">{text}</p>
      </div>
    </motion.article>
  );
};

export default BenefitCard;
