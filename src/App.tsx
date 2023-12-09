import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import CommandInjection from "./components/Command-Injection";
import Navbar from "./components/Navbar";
import "./App.css";
import SocialMedias from "./components/SocialMedias";
import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";

import Login from "./components/login";

function App() {
  return (
    <div className="flex flex-col min-h-screen space-y-12">
      <Navbar />
      <main className="container flex-1 max-w-3xl px-6 mx-auto space-y-12 xl:max-w-5xl">
        <SocialMedias />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/" element={<CommandInjection />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
