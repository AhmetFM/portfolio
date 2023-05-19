import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

export default function Home() {
  return (
    <main className=" mx-auto flex max-w-3xl  items-center flex-col px-3 mt-20">
      <Hero />
      <Projects />
    </main>
  );
}
