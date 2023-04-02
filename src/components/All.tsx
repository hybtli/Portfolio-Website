import React from "react";
import TimeLine from "./TimeLine";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const All = () => {
  return (
    <div className="flex flex-col min-h-screen space-y-12">
      <Navbar />
      <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
        <About />
        <TimeLine />
      </main>
      <Contact />
    </div>
  );
};

export default All;
