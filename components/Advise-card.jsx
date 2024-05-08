import { Rating } from "@mui/material";
import React from "react";

const AdviseCard = ({ text, rating, name, containerStyle }) => {
  return (
    <article
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
    </article>
  );
};

export default AdviseCard;
