
"use client";

import {useState} from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavbarProps = {
    active: string;
    setActive: (value: string) => void;
  };

export default function Navbar({ active, setActive }: NavbarProps) {
  const [open, setOpen] = useState(false);

    const linkClass = (name: string) =>
      `transition duration-200 ease-in-out ${
        active === name
          ? "border-b-2 text-zinc-400"
          : "hover:border-b-2 hover:text-zinc-400"
      }`;

    return (
      <nav className="fixed left-0 z-50 right-0 flex py-4 px-8 bg-gradient-to-r from-zinc-800 to-olive-950 shadow-xl shadow-neutral-900/90">
        <div className="flex-1 italic font-bold text-lg z-50">
          Jake Russel's Portfolio
        </div>
  
    {/* Desktop */}
    <div className="hidden md:flex">
        <div className="flex-1 text-center flex justify-end md:gap-10 lg:gap-12 md:text-[13.91px] lg:text-[16px] font-bold">
          <button onClick={() => setActive("home")} className={linkClass("home")}>
            Home
          </button>
          <button onClick={() => setActive("about")} className={linkClass("about")}>
            About Me
          </button>
          <button onClick={() => setActive("project")} className={linkClass("project")}>
            My Projects
          </button>
          <button onClick={() => setActive("contact")} className={linkClass("contact")}>
            Contact
          </button>
        </div>
    </div>

    {/* Overlay */}
      

      {/* Mobile Menu */}
      <div className="block md:hidden z-[60] relative">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>

       

  <AnimatePresence>
  {open && (<> 

    {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/50 z-30"
        onClick={() => setOpen(false)}
      />
  
  
     <motion.ul
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="fixed top-0 right-0 h-screen w-2/3 flex flex-col items-center justify-center gap-8 text-xl font-bold z-50 bg-gradient-to-r from-zinc-800 to-olive-950 shadow-xl shadow-neutral-900/90"
    >
      <li onClick={() => {setActive("home");  setOpen(false); }} className={linkClass("home")}>Home</li>
      <li onClick={() => {setActive("about");  setOpen(false);}} className={linkClass("about")}>About Me</li>
      <li onClick={() => {setActive("project");  setOpen(false);}} className={linkClass("project")}>My Projects</li>
      <li onClick={() => {setActive("contact");  setOpen(false);}} className={linkClass("contact")}>Contact</li>
    </motion.ul>

    </>
  )}
</AnimatePresence>
      </nav>
    );
  }