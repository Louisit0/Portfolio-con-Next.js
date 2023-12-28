import Image from "next/image";
import { setup, ssn } from "../assets/Images";
const About = () => {
  return (
    <section className="flex flex-col max-w-screen-lg mx-auto px-8 md:px-20 xl:px-0 mt-40 lg:mt-0">
      <section
        id="about"
        className="flex flex-col lg:w-3/5 justify-evenly h-full gap-10 lg:gap-20 lg:my-30 max-w-screen-lg  lg:px-0"
      >
        <ul className="xl:flex xl:flex-row lg:w-full lg:gap-12 lg:mx-0">
          <div className="flex flex-col">
            <h3 className="text-4xl text-stone-800 font-bold tracking-tight mb-8">
              About me
            </h3>
            {/* <p className="text-zinc-600 text-base">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p> */}
            <p className="text-zinc-600 text-base">
              Soy un apasionado desarrollador frontend con más de 1 año de
              experiencia en el diseño, implementación y resolución de
              interfaces de usuario tanto en páginas como en aplicaciones web.
              Mi enfoque principal es crear experiencias de usuario intuitivas y
              atractivas utilizando tecnologías como HTML, CSS, JavaScript,
              React y herramientas de control de versiones como GitHub y GitLab.
              También cuento con conocimientos en .NET y Razor.{" "}
            </p>
            <div className="my-8 xl:mb-0">
              <h4 className="text-2xl text-stone-800 font-semibold tracking-tight mb-4">
                Soft skills
              </h4>
              <ul className="flex flex-wrap gap-2 text-sm lg:justify-start">
                <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
                  👁️ Meticulousness
                </li>
                <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
                  🔄 Adaptability
                </li>
                <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
                  🧩 Problem Solving
                </li>
                <li className="px-3 py-1 border border-zinc-300 font-medium text-black rounded-full">
                  🚀 Proactive
                </li>
              </ul>
            </div>
          </div>
          {/* <Image
            className="flex flex-col w-full h-96 lg:h-80 justify-center object-cover rounded-2xl md:mx-auto my-auto lg:mx-0"
            src={setup}
            alt="setup"
          ></Image> */}
        </ul>
      </section>

      <div className="my-40">
        <h3 className="text-4xl text-stone-800 font-bold tracking-tight mb-8">
          Work experience
        </h3>

        <ol class="relative border-s border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
              Abril 2022 - <span className="text-green-600">Presente</span>
            </time>
            <h4 className="font-medium text-xl tracking-tight mt-4">
              Superintendencia de seguros de la nación
            </h4>
            <p className="text-base capitalize text-blue-500 font-semibold">
              Frontend developer
            </p>
            <p className="text-base tracking-tight  text-zinc-600 md:w-3/4 lg:w-1/2">
              Encargado de desarrollar y diseñar el frontend en las aplicaciones
              de la institución.
            </p>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
              Febrero 2021 - Marzo 2022
            </time>
            <h4 className="font-medium text-xl tracking-tight mt-4 ">
              Freelance
            </h4>
            <p className="text-base capitalize text-blue-500 font-semibold">
              Frontend developer
            </p>
            <p className="text-base tracking-tight  text-zinc-600 md:w-3/4 lg:w-1/2">
              Creación de diseño y programación de páginas web.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default About;
