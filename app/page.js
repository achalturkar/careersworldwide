import Hero from "@/components/Hero/Hero";
import NumberCounter from "@/components/NumberCounter/NumberCounter";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <Hero />

      <NumberCounter />
      <div className="h-screen bg-blue-300"></div>
      <div className="h-screen bg-green-400"></div>




    </main>
  );
}
