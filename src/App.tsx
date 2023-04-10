import React, { useEffect, useState } from "react";
import TimeLine from "./components/TimeLine";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import "./App.css";
import SocialMedias from "./components/SocialMedias";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen space-y-12">
      <Navbar />
      <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
        <SocialMedias />
        <Intro />
        <About />
        <TimeLine />
      </main>
      <Contact />
    </div>
  );
}

export default App;
