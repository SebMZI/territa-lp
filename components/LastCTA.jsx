import React from "react";
import Button from "./Button";
import AdviseCard from "./Advise-card";

const LastCTA = () => {
  return (
    <section className=" mt-20 md:flex md:flex-row md:justify-between md:items-center ">
      <div className="flex flex-col items-center gap-5 md:items-start md:w-2/4">
        <h2 className="text-center text-3xl font-bold md:text-left md:text-4xl">
          Prêt à convertir tes visiteurs en clients ?
        </h2>
        <Button containerStyle={" text-sm h-[45px] px-10"} />
      </div>
      <div className="hidden md:block">
        <AdviseCard
          text={
            "Il a parfaitement compris mes besoins et a livré un site web qui dépasse mes attentes."
          }
          rating={5}
          name={"Moulay E."}
        />
      </div>
    </section>
  );
};

export default LastCTA;
