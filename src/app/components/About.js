import Image from "next/image";
import { setup, ssn } from "../assets/Images";
const About = () => {
  return (
    <section className="flex flex-col max-w-screen-lg mx-auto px-8 md:px-20 lg:px-0 py-40">
      <section
        id="about"
        className="flex flex-col lg:flex-row justify-evenly h-full gap-10 lg:gap-20 mt-20 lg:my-30 max-w-screen-lg mx-auto lg:px-0"
      >
        <ul className=" lg:w-full lg:mx-0">
          <h3 className="text-4xl text-stone-800 font-bold tracking-tight mb-8">
            About me
          </h3>
          <p className="text-zinc-600 text-base">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </ul>
        <div>
          <h4 className="text-2xl text-stone-800 font-semibold tracking-tight mb-4">
            Soft skills
          </h4>
          <ul className="flex flex-wrap gap-2 text-sm lg:justify-start">
            <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
              Meticulousness 👁️
            </li>
            <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
              Adaptability 🔄
            </li>
            <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
              Problem Solving 🧩
            </li>
            <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
              Proactive 🚀
            </li>
          </ul>
        </div>
        <Image
          className="flex flex-col w-full h-96 lg:h-80 justify-center object-cover rounded-2xl md:mx-auto mb-40 lg:mx-0"
          src={setup}
          alt="setup"
        ></Image>
      </section>

      <div>
        <h3 className="text-4xl text-stone-800 font-bold tracking-tight mb-8">
          Work experience
        </h3>
        <div className="grid gap-12 w-full md:w-3/4 lg:w-1/2">
          <div className="flex flex-row gap-4">
            <Image
              className="object-cover w-20 h-20 p-3 border rounded-md"
              src={ssn}
              alt="ssn"
            ></Image>
            <div>
              <h4 className="font-medium text-xl tracking-tight">
                Superintendencia de seguros de la nación
              </h4>
              <p className="text-base capitalize">Frontend developer</p>
              <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
                April 20, 2022 - <span className="text-green-600">Present</span>
              </p>
              <p className="text-base tracking-tight my-4 text-zinc-600">
                Encargado de desarrollar y diseñar el frontend en las
                aplicaciones de la institución.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Image
              className="object-cover w-20 h-20 p-3 border rounded-md"
              src={ssn}
              alt="ssn"
            ></Image>
            <div>
              <h4 className="font-medium text-xl tracking-tight">Freelance</h4>
              <p className="text-base capitalize">Frontend developer</p>
              <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
                April 20, 2022 - August 30, 2022
              </p>
              <p className="text-base tracking-tight my-4 text-zinc-600">
                Encargado de desarrollar y diseñar el frontend en las
                aplicaciones de la institución.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
