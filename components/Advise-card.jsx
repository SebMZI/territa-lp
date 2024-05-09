"use client";
import { Rating } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const AdviseCard = ({ text, rating, name, containerStyle, delay }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, ease: "easeInOut", duration: 0.6 }}
      className={`max-w-[320px] md:min-w-[320px]  w-full py-9 px-5 bg-white shadow-[0_0_79.4px_-21px_rgba(0,0,0,0.20)]   rounded-[10px] flex flex-col justify-between h-[345px] ${containerStyle}`}
    >
      <span>"</span>
      <p className="text-lg">{text}</p>

      <div className="mt-6">
        <p className="font-medium text-lg">{name}</p>
        <div className="relative -left-1">
          <Rating
            name="text-feedback"
            value={rating}
            readOnly
            precision={0.5}
          />
        </div>
      </div>
    </motion.article>
  );
};

export default AdviseCard;
