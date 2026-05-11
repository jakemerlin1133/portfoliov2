import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col items-center text-white px-10 py-20">

      {/* Title (TOP) */}
      <h1 className="text-5xl font-bold italic mb-12">
        About Me
      </h1>

    {/* Content 1 */}
      {/* Content Wrapper (Image + Text) */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10">
        {/* Image LEFT */}
        <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
          <Image
            src="/images/1.jpg"
            alt="graduation picture"
            fill
            className="object-cover object-[50%_30%] rounded-2xl"
          />
        </div>

        {/* Text RIGHT */}
        <div className="flex-1">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
            As a passionate and driven developer, I am constantly seeking opportunities to enhance my expertise in web development, software engineering, and machine learning. With hands-on experience in building full-stack applications using frameworks like Laravel, Django, and React, I am committed to crafting efficient, scalable, and user-friendly solutions. I have a solid understanding of machine learning concepts and geospatial analysis, leveraging tools like Google Earth Engine and Azure Machine Learning. My goal is to continuously grow my skill set and contribute to innovative projects that make a meaningful impact.
          </p>
        </div>
      </div>

    {/* Content 2 */}
      {/* Content Wrapper (Image + Text) */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10 p-4">
        {/* Text Left */}
        <div className="flex-1">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          I am a Bachelor of Science in Computer Science graduate from Universidad de Dagupan, and I proudly hail from Pangasinan. During my internship at Highly Succeed Inc. in Mandaluyong City, Manila, I gained valuable hands-on experience in software development. My journey into the world of technology has been largely self-driven, as I have continuously honed my skills through self-study and dedication to learning from online resources. I am committed to expanding my knowledge and improving myself every day, with the goal of becoming a highly skilled and impactful developer.
          </p>
        </div>

        {/* Image Right */}
        <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
          <Image
            src="/images/2.jpg"
            alt="graduation picture"
            fill
            className="object-cover object-[50%_20%] rounded-2xl"
          />
        </div>
      </div>

      {/* Content 3 */}
      {/* Content Wrapper (Image + Text) */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10">
        {/* Image LEFT */}
        <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
          <Image
            src="/images/3.jpg"
            alt="graduation picture"
            fill
            className="object-cover object-[50%_30%] rounded-2xl"
          />
        </div>

        {/* Text RIGHT */}
        <div className="flex-1">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          In addition to my technical abilities, I am a strong believer in the importance of collaboration and communication within a team. I enjoy working in dynamic environments where I can learn from others while also sharing my insights. Whether it's developing new features, solving complex problems, or optimizing existing systems, I am always eager to take on new challenges and contribute to the success of any project. My adaptability and passion for continuous learning make me confident in my ability to navigate the ever-evolving world of technology.
          </p>
        </div>
      </div>


      {/* Content 4 */}
      {/* Content Wrapper (Image + Text) */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl mb-10 p-4">
        {/* Text Left */}
        <div className="flex-1">
          <p className="text-lg text-zinc-300 leading-relaxed text-center md:text-left">
          During my apprenticeship at Amkor Technology from October 21, 2025 to March 21, 2026, I worked as a Web Developer where I was responsible for developing and debugging internal web applications. I assisted in building new features, fixing bugs, and improving existing system functionality to ensure better performance and user experience. I collaborated with senior developers and team members throughout the development process, which helped me gain practical experience in real-world software development workflows, code debugging, and application maintenance in an enterprise environment.
          </p>
        </div>

        {/* Image Right */}
        <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
          <Image
            src="/images/4.jpg"
            alt="graduation picture"
            fill
            className="object-cover object-[50%_20%] rounded-2xl"
          />
        </div>
      </div>







    </section>
  );
}