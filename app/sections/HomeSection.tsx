import { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import {
  FaReact,
  FaLaravel,
  FaPython,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaJs,
  FaGitAlt,
  FaBootstrap,
  FaBitbucket,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiJupyter,
  SiXampp,
  // SiVisualstudiocode,
  SiNextdotjs,
  SiDotnet,
  SiSharp,
} from "react-icons/si";

import {
  Monitor,
  Laptop,
  Cpu,
  Server,
} from "lucide-react";

type Props = {
  setActive: (value: string) => void;
};

const imageVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

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

const textTopVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const textBottomVariant = {
  hidden: { opacity: 0, y: -60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const stackStyle = () =>{
  return  "mx-auto my-10"
}


export default function HomeSection({ setActive }: Props) {
  return (
    <>

      {/* // First section */}
      <section className="px-14 mt-[-50px] md:mt-10 min-h-screen items-center overflow-hidden justify-center text-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
          className="flex flex-col md:flex-row mt-20">

          <motion.div variants={textLeftVariant} className="flex-1 pt-20">
            <h1 className="italic text-shadow-lg/40 text-3xl text-center md:text-left">Hello,</h1>
            <h1 className="text-5xl font-bold italic text-center md:text-left text-shadow-lg/40">I'm Jake Russel.</h1>
            <h1 className="text-shadow-lg/30 text-center md:text-left text-sky-400 text-3xl font-bold italic">Software Engineer</h1>
            <p className="text-sm text-center md:text-left text-zinc-300 text-shadow-lg/30">A passionate and driven developer, I am continuously seeking opportunities to deepen my expertise in web development, software engineering, and machine learning while building practical, impactful solutions.</p>

            <div className="flex items-center gap-4 mt-6">
              <a href="/Jake Russel L. Merlin - RESUME.pdf" download="/Jake Russel L. Merlin - RESUME.pdf" className="transition-all duration-200 ease-in hover:scale-115 bg-gradient-to-r from-zinc-600 to-olive-800 py-2 px-4 font-bold rounded-sm shadow-lg/30">Resume</a>
              <button onClick={() => setActive("contact")} className="transition-all duration-200 ease-in hover:scale-115 border-2 border-zinc-700 py-2 px-4 font-bold rounded-sm shadow-lg/30">Contact</button>
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


          <motion.div variants={imageVariant} className="flex-1 flex justify-center overflow-hidden items-center">
            <div className="hidden md:flex relative w-[280px] md:w-[500px] h-[450px] aspect-square">
              <Image
                src="/images/rmv-2.png"
                alt="profile"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills section  */}

      <section className="bg-black min-h-screen items-center overflow-hidden justify-center text-white md:mt-[-25] mt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
          className="w-full  pt-10 md:pt-20">
          <motion.h1 variants={titleVariant} className="text-center text-5xl font-bold italic">My Skills</motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}

          className="mx-5 mt-10 grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
          <motion.div variants={textTopVariant} className="rounded-lg border-4 border-zinc-500 p-4">
            <Monitor size={40} className="mx-auto mb-4" />
            <h1 className="font-bold text-3xl my-4">Web Development</h1>
            <p>Proficient in building dynamic web applications using frameworks like Laravel and Django, with experience in both front-end and back-end technologies, including React and Tailwind CSS for responsive design.</p>
          </motion.div>


          <motion.div variants={textBottomVariant} className="rounded-lg border-4 border-zinc-500 p-4">
            <Laptop size={40} className="mx-auto mb-4" />
            <h1 className="font-bold text-3xl my-4">Machine Learning</h1>
            <p>Experienced in applying machine learning algorithms and data processing techniques, with hands-on expertise in tools like Azure Machine Learning and libraries for geospatial analysis, such as Google Earth Engine and geemap.</p>
          </motion.div>


          <motion.div variants={textTopVariant} className="rounded-lg border-4 border-zinc-500 p-4">
            <Server size={40} className="mx-auto mb-4" />
            <h1 className="font-bold text-3xl my-4">Network Configuration</h1>
            <p> Experienced in network configuration and troubleshooting, including IP setup and connectivity monitoring. Knowledgeable in maintaining stable communication between systems and resolving common network-related issues.</p>
          </motion.div>

          <motion.div variants={textBottomVariant} className="rounded-lg border-4 border-zinc-500 p-4">
            <Cpu size={40} className="mx-auto mb-4" />
            <h1 className="font-bold text-3xl my-4">Software Development</h1>
            <p>Skilled in developing scalable software solutions, leveraging programming best practices, version control, and continuous integration, with a focus on delivering efficient and maintainable code.</p>
          </motion.div>
        </motion.div>
      </section>


      {/* My experience section */}
      <section className="min-h-screen items-center overflow-hidden justify-center text-white pt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
        >
          <motion.h1 variants={titleVariant} className="mt-10 text-center text-4xl md:text-5xl font-bold italic">My Experiences</motion.h1>

          <div className="flex flex-row md:flex-row items-center gap-10 w-full max-w-5xl mt-20 mb-10 p-4 text-center mx-auto">


            <div className="flex-1 text-center border-r-4 pr-4">
              <h1 className="text-center text-4xl mb-5 font-bold">Highly Succeed Inc</h1>
              <div className="mb-5">July 10, 2024 - August 22, 2024 (Internship)</div>
              <p className="text-center text-xl">- 3rd Flr., Royal Plaza Commercial Center, DM Guevarra St. Mandaluyong City, Philippines 1550</p>
              </div>

              <div className="flex-1 text-center">
              <h1 className="text-center text-4xl mb-5 font-bold">Amkor Technology Philippines</h1>
              <div className="mb-5">October 21, 2025 - March 21, 2026 (Apprenticeship)</div>
              <p className="text-center text-xl">- 119 N Science Ave, Laguna Technopark, Biñan, Laguna</p>
              </div>
          </div>
          </motion.div>
      </section>


{/* TechStack section */}
      <section className="bg-black min-h-screen items-center overflow-hidden justify-center text-white pt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.3, once: true }}
        >
          <motion.h1 variants={titleVariant} className="mt-10 text-center text-4xl md:text-5xl font-bold italic">My Technology Stack</motion.h1>

          <div className="grid grid-cols-2 md:grid-cols-7 mt-20 text-5xl text-center gap-4">
            <div >
              <FaReact className={`${stackStyle()} text-blue-400`}/>
              <h6 className="text-zinc-200 text-xl">React</h6>
            </div>

            <div>
              <FaLaravel className={`${stackStyle()} text-red-900`} />
              <h6 className="text-zinc-200 text-xl">Laravel</h6>
            </div>
            <div>
              <SiDjango className={`${stackStyle()} text-green-900`}/>
              <h6 className="text-zinc-200 text-xl">Django</h6>
            </div>
            <div>
              <SiMysql className={`${stackStyle()} text-blue-700`}/>
              <h6 className="text-zinc-200 text-xl">MySQL</h6>
            </div>
            <div>
              <FaHtml5 className={`${stackStyle()} text-orange-500`}/>
              <h6 className="text-zinc-200 text-xl">HTML5</h6>
            </div>
            <div>
              <FaCss3Alt className={`${stackStyle()} text-blue-500`}/>
              <h6 className="text-zinc-200 text-xl">CSS</h6>
            </div>
            <div>
              <SiTailwindcss className={`${stackStyle()} text-teal-500`}/>
              <h6 className="text-zinc-200 text-xl">Tailwind CSS</h6>
            </div>
            <div>
              <FaWordpress className={`${stackStyle()} text-white`}/>
              <h6 className="text-zinc-200 text-xl">WordPress</h6>
            </div>
            <div>
              <FaPython className={`${stackStyle()} text-yellow-500`}/>
              <h6 className="text-zinc-200 text-xl">Python</h6>
            </div>
            <div>
              <FaPhp className={`${stackStyle()} text-purple-500`}/>
              <h6 className="text-zinc-200 text-xl">PHP</h6>
            </div>
            <div>
              <FaJava className={`${stackStyle()} text-red-500`}/>
              <h6 className="text-zinc-200 text-xl">Java</h6>
            </div>
            <div>
              <SiPostman className={`${stackStyle()} text-orange-500`}/>
              <h6 className="text-zinc-200 text-xl">Postman</h6>
            </div>
            <div>
              <SiJupyter className={`${stackStyle()} text-orange-500`}/>
              <h6 className="text-zinc-200 text-xl">Jupyter</h6>
            </div>
            <div>
              <FaJs className={`${stackStyle()} text-yellow-500`}/>
              <h6 className="text-zinc-200 text-xl">JavaScript</h6>
            </div>
            <div>
              <FaGitAlt className={`${stackStyle()} text-orange-600`}/>
              <h6 className="text-zinc-200 text-xl">Git</h6>
            </div>
            <div>
              <FaGithub className={`${stackStyle()} text-white`}/>
              <h6 className="text-zinc-200 text-xl">GitHub</h6>
            </div>
            <div>
              <FaBootstrap className={`${stackStyle()} text-purple-500`}/>
              <h6 className="text-zinc-200 text-xl">Bootstrap</h6>
            </div>
            <div>
              <FaBitbucket className={`${stackStyle()} text-blue-500`}/>
              <h6 className="text-zinc-200 text-xl">Bitbucket</h6>
            </div>
            <div>
              <SiNextdotjs className={`${stackStyle()} text-white`}/>
              <h6 className="text-zinc-200 text-xl">Next.js</h6>
            </div>
            <div>
              <SiSharp className={`${stackStyle()} text-purple-500`}/>
              <h6 className="text-zinc-200 text-xl">C#</h6>
            </div>
            <div>
              <SiDotnet className={`${stackStyle()} text-gray-200`}/>
              <h6 className="text-zinc-200 text-xl">.NET</h6>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}