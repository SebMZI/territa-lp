"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article onClick={() => setIsOpen(!isOpen)}>
      <div className="flex flex-row gap-20 items-center justify-between">
        <h3 className="font-semibold">{question}</h3>
        <div className="bg-[#EE7519] min-w-6 min-h-6 rounded-full grid place-content-center relative cursor-pointer">
          <div className="h-[2px] w-4 bg-white rounded-lg relative "></div>
          <div
            className={`h-4 w-[2px] bg-white rounded-lg absolute left-[45%] top-[15%] transition-all duration-500 ease-in-out ${
              isOpen ? "rotate-90" : "rotate-0"
            } `}
          ></div>
        </div>
      </div>
      <div
        className={`mt-3 relative transition-all duration-500 ease-in-out ${
          isOpen
            ? "bottom-0 opacity-100 h-full max-h-80"
            : "bottom-0  opacity-0 h-full max-h-0"
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
