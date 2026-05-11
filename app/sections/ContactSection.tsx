"use client";

import { motion, Variants } from "framer-motion";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";


const titleVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const textLeftVariant = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const textRightVariant = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_hdr472p",
        "template_7alzboz",
        e.currentTarget,
        "yDsswMqbC4gCMJfGz"
      )
      .then(() => {
        alert("Message sent!");
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message.");
        setLoading(false);
      });
  };


  return (<>

    <section className="min-h-screen flex flex-col items-center text-white px-10 py-20">

      <motion.h1
            initial="hidden"
            whileInView="show"
            variants={titleVariant} 
            viewport={{ amount: 0.3, once: true }}
      className="text-5xl font-bold italic text-center md:text-left my-10">
        Contact Me
      </motion.h1>

      <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10">

        <motion.div variants={textLeftVariant} className="flex-1 w-full flex flex-col gap-4">

          <motion.h1  variants={titleVariant}  className="text-4xl text-center font-bold">
            Contact Details
          </motion.h1>
          <motion.p variants={textLeftVariant} className="text-zinc-300 text-center md:text-left w-full max-w-md border-b-2 border-zinc-400 pb-4">
            Feel free to reach out for collaboration, networking, or opportunities in web development, software engineering, and machine learning. I’m open to connecting with professionals and working on impactful, innovative projects.
          </motion.p>

          <div className="flex text-left gap-2">
            <Phone size={18} />
            <span>+63 918 758 4371</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>jakemerlin123@email.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>#54, Brgy. Bigaa, Cabuyao, Laguna, Philippines</span>
          </div>

          <div className="flex items-center gap-4 mt-4">

            <a href="https://www.facebook.com/jake.russel.365302" target="_blank">
              <FaFacebook size={20} className="hover:text-zinc-500 transition" />
            </a>

            <a href="https://www.linkedin.com/in/jake-russel-merlin-888b54283/" target="_blank">
              <FaLinkedin size={20} className="hover:text-zinc-400 transition" />
            </a>

            <a href="https://github.com/jakemerlin1133" target="_blank">
              <FaGithub size={20} className="hover:text-zinc-400 transition" />
            </a>

            <a href="https://www.instagram.com/jakemerlin123/" target="_blank">
              <FaInstagram size={20} className="hover:text-zinc-400 transition" />
            </a>

          </div>
        </motion.div>

        <motion.div
        initial="hidden"
        whileInView="show"
        variants={textRightVariant} 
        viewport={{ amount: 0.3, once: true }}        
        className="flex-1 w-full">
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-zinc-800 text-white outline-none"
            />

            <input
            name="email"
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-zinc-800 text-white outline-none"
            />

            <textarea
            name="message"
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-lg bg-zinc-800 text-white outline-none"
            />

            <button
              type="submit"
              className="p-3 bg-zinc-600 hover:bg-zinc-500 rounded"
            >
              {loading ? "Sending..." : "Send"}
            </button>

          </form>
        </motion.div>
      </motion.div>
    </section>
  </>
  );
}