import React from "react";
import Button from "./Button";

const LastCTA = () => {
  return (
    <section className="flex flex-col items-center gap-5">
      <h2 className="text-center text-3xl font-bold">
        Prêt à convertir tes visiteurs en clients ?
      </h2>
      <Button containerStyle={" text-sm h-[45px] px-10"} />
    </section>
  );
};

export default LastCTA;
