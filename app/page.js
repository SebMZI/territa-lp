import { Advise, Benefits, Button, Features, Header, Hero, Offer, Process } from "@/components";
import Image from "next/image";

// flex min-h-screen flex-col items-center justify-between p-24

export default function Home() {
  return (
    <main className="h-full max-w-screen-xl m-auto flex flex-col items-center px-7 bg-[#FAFAFA] ">
      <Header />
      <Hero/>
      <Benefits/>
      <Features/>
      <Advise/>
      <Process/>
      <Offer/>
    </main>
  );
}
