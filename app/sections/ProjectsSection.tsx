import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const imageVariant = {
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



export default function ProjectsSection() {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section className="min-h-screen flex flex-col items-center text-white px-10 py-20">

      {/* Title (TOP) */}
      <h1 className="text-4xl md:text-6xl font-bold italic mt-12">
        My Projects
      </h1>

      {/* Internship Experience*/}
      <h1 className="text-5xl text-center font-bold italic mt-10 md:mt-25 mb-15">
        Internship Experience
      </h1>

    {/* Content 1 */}
      {/* Content Wrapper (Image + Text) */}
      <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10">
        {/* Image LEFT */}
        <motion.div variants={imageVariant } className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
        <h1 className="text-5xl text-center font-bold italic">
        HAI app
      </h1>
          <Image
            src="/images/HAI.PNG"
            alt="HAI"
            fill
            className="object-contain rounded-2xl "
          />
        </motion.div>

        {/* Text RIGHT */}
        <motion.div variants={textRightVariant} className="flex-1 sm:mt-[-20vh] md:mt-0">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          I was able to identify and fix several bugs within the application, which improved its overall performance and stability. In addition to bug fixes, I also collaborated with the team to re-design the frontend of the application, enhancing its user interface and user experience. This redesign involved updating the layout, colors, and visual elements to make the application more modern and visually appealing. I worked closely with the design team to ensure that the new design aligned with user needs and provided a more intuitive navigation experience. As a result, the application became more user-friendly and was well-received by its users.
          </p>
        </motion.div>
      </motion.div>

    {/* Content 2 */}
      {/* Content Wrapper (Image + Text) */}
      <motion.div
       initial="hidden" whileInView="show" 
       viewport={{ amount: 0.3, once: true }}
      className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10 p-4">
        {/* Text Left */}
        <motion.div variants={textLeftVariant} className="flex-1 sm:mt-[-20vh] md:mt-0">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          I successfully integrated data from the Laravel API into the Record Modules page using React, ensuring seamless data flow between the frontend and backend. This integration involved configuring API endpoints and managing the state within the React components to display dynamic data efficiently. I collaborated with the backend team to ensure that the API responses were optimized and properly formatted for use in the frontend. Additionally, I implemented error handling and loading states to improve the user experience during data retrieval. As a result, the Record Modules page now displays real-time, accurate data, enhancing the functionality of the application.
          </p>
        </motion.div>

        {/* Image Right */}
        <motion.div variants={imageVariant } className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
        <h1 className="text-5xl text-center font-bold italic">
        HMS app
      </h1>
          <Image
            src="/images/HMS.png"
            alt="graduation picture"
            fill
            className="object-contain rounded-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Content 3 */}
      {/* Content Wrapper (Image + Text) */}
      <motion.div
      initial="hidden" whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10">
        {/* Image LEFT */}
        <motion.div variants={imageVariant } className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
        <h1 className="text-5xl text-center font-bold italic">
        HRMS app
      </h1>
          <Image
            src="/images/HRMS.png"
            alt="graduation picture"
            fill
            className="object-contain rounded-2xl"
          />
        </motion.div>

        {/* Text RIGHT */}
        <motion.div variants={textRightVariant} className="flex-1 sm:mt-[-20vh] md:mt-0">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          I designed and created several key database entities, including Documents, Employee, and Benefits, using Laravel's Eloquent ORM to ensure efficient and scalable database management. For each entity, I defined appropriate relationships, such as one-to-many and many-to-many, to model the data structure accurately and facilitate seamless interaction between different entities. I also ensured data integrity by setting up validation rules and constraints for the attributes of each entity. Additionally, I implemented migration files to handle the creation and modification of database tables, which allowed for smooth deployment across different environments. As a result, the system now supports complex data operations and is easily extendable for future features.
          </p>
        </motion.div>
      </motion.div>


      {/* Work Experience */}
       <h1 className="text-5xl text-center font-bold italic mt-10 md:mt-25 mb-15">  
        Work Experience
      </h1>

    {/* Work Experience Content 1 */}
      {/* Content Wrapper (Image + Text) */}
      <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10">
        {/* Image LEFT */}
        <motion.div variants={imageVariant } className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
        <h1 className="text-5xl text-center font-bold italic">
        Healmon app
      </h1>
          <Image
            src="/images/Dashboard.PNG"
            alt="HAI"
            fill
            className="object-contain rounded-2xl "
          />
        </motion.div>

        {/* Text RIGHT */}
        <motion.div variants={textRightVariant} className="flex-1 sm:mt-[-20vh] md:mt-0">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
         I worked as a full-stack developer on a web application for monitoring tester machine errors in the P4 production environment, where I built the frontend using Next.js to deliver a responsive and user-friendly interface for real-time monitoring, and developed the backend using C# .NET to create reliable APIs and handle data processing, ensuring accurate error tracking, efficient system communication, and stable performance in an industrial testing environment.
          </p>
        </motion.div>
      </motion.div>

    {/* Content 2 */}
      {/* Content Wrapper (Image + Text) */}
      <motion.div
       initial="hidden" whileInView="show" 
       viewport={{ amount: 0.3, once: true }}
      className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10 p-4">
        {/* Text Left */}
        <motion.div variants={textLeftVariant} className="flex-1 sm:mt-[-20vh] md:mt-0">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          I maintained and debugged an existing legacy WebTool application built using the Yii framework, originally developed in the 2000s, by identifying and resolving various system errors, improving stability, and ensuring the continued functionality of the application within the production environment.
          </p>
        </motion.div>

        {/* Image Right */}
        <motion.div variants={imageVariant } className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
        <h1 className="text-5xl text-center font-bold italic">
        Webtool app
      </h1>
          <Image
            src="/images/FTP-SFTP.png"
            alt="graduation picture"
            fill
            className="object-contain rounded-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Content 3 */}
      {/* Content Wrapper (Image + Text) */}
      <motion.div
      initial="hidden" whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10">
        {/* Image LEFT */}
        <motion.div variants={imageVariant } className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
        <h1 className="text-5xl text-center font-bold italic">
        RRF app
      </h1>
          <Image
            src="/images/HRMS.png"
            alt="graduation picture"
            fill
            className="object-contain rounded-2xl"
          />
        </motion.div>

        {/* Text RIGHT */}
        <motion.div variants={textRightVariant} className="flex-1 sm:mt-[-20vh] md:mt-0">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          I worked as a front-end developer for the RRF application, a system designed to promote a paperless workflow by reducing manual paperwork for process engineers through the digitization of the request process for rework products. I developed user-friendly and responsive interfaces that allowed efficient submission, tracking, and approval of requests, improving workflow efficiency, reducing manual errors, and enhancing overall usability in a production environment.  
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
}