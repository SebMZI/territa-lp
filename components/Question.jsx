"use client";
import Image from "next/image";
import React, { useState } from "react";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article onClick={() => setIsOpen(!isOpen)}>
      <div className="flex flex-row gap-20 items-center justify-between">
        <h3 className="font-semibold">{question}</h3>
        <Image
          src={"/images/arrow.png"}
          width={15}
          height={15}
          alt=""
          className={`w-4 h-4 transition-all ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`mt-3 relative transition-all ${
          isOpen ? "visible bottom-0 opacity-100" : "hidden bottom-5 opacity-0"
        }`}
      >
        {answer}
      </div>
    </article>
  );
};

export default Question;

// isOpen ? (
//     <article onClick={() => setIsOpen(false)} className="cursor-pointer">
//       <div className="flex flex-row justify-between items-center gap-20 ">
//         <h3 className="font-medium">{question}</h3>
//         <Image
//           src={"/images/arrow.png"}
//           width={20}
//           height={20}
//           alt=""
//           className={
//             isOpen ? "rotate-180 w-[15px] h-[15px]" : "w-[15px] h-[15px]"
//           }
//         />
//       </div>
//       <div className="text-sm mt-4">{answer}</div>
//     </article>
//   ) : (
//     <article
//       className="flex flex-row justify-between items-center gap-20 cursor-pointer"
//       onClick={() => setIsOpen(true)}
//     >
//       <h3 className="font-medium">{question}</h3>
//       <Image
//         src={"/images/arrow.png"}
//         width={20}
//         height={20}
//         alt=""
//         className="w-[15px] h-[15px]"
//       />
//     </article>
