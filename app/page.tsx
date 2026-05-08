"use client";

import { useState } from "react";

import Wallpaper from "./components/Wallpaper";
import Navbar from "./components/Navbar";

import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {

  const [active, setActive] = useState("home"); 

  const renderSection = () => {
    switch (active){
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "project":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  }

  return (
    <>
      <main className="relative min-h-screen bg-red-900">

        <Wallpaper/>

     <div className="relative z-50">
      <Navbar active={active} setActive={setActive} />
      </div>

    <div className="relative z-40">
        {renderSection()}
      </div>
     </main>
    </>
  )
}