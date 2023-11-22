import Image from "next/image";
import { setup } from "../assets/Images";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row justify-evenly h-full gap-10 lg:gap-20 pt-60 pb-40 md:py-40 max-w-screen-lg mx-auto px-4 lg:px-0"
    >
      <Image
        className="flex flex-col justify-center object-cover rounded-2xl md:mx-auto lg:mx-0"
        width={410}
        height={350}
        src={setup}
        alt="setup"
      ></Image>
      <div className="md:w-3/5 md:mx-auto lg:w-full lg:mx-0">
        <h3 className="text-blue-500 font-bold uppercase md:text-center lg:text-start">
          About me
        </h3>
        <h4 className="text-2xl font-bold my-2 text-stone-800">
          A dedicated Front-end Developer based in Buenos Aires, Argentina 📍
        </h4>
        <p className="text-zinc-500">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
