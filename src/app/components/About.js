import Image from "next/image";
import { setup, ssn } from "../assets/Images";
const About = () => {
  return (
    <section className="flex flex-col max-w-screen-lg mx-auto px-6 md:px-20 xl:px-0 mt-40 lg:mt-0">
      <section
        id="about"
        className="flex flex-col lg:w-3/5 justify-evenly h-full gap-10 lg:gap-20 lg:my-30 max-w-screen-lg  lg:px-0"
      >
        <ul className="xl:flex xl:flex-row lg:w-full lg:gap-12 lg:mx-0">
          <div className="flex flex-col">
            <div className="flex flex-row  items-center mb-8 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>

              <h3 className="text-2xl lg:text-4xl text-stone-800 font-bold tracking-tight">
                Sobre mí
              </h3>
            </div>
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
              Soy un apasionado desarrollador frontend con{" "}
              <span className="text-blue-500 font-medium">
                2 años de experiencia{" "}
              </span>
              en el diseño, implementación y resolución de interfaces de usuario
              tanto en páginas como en aplicaciones web.{" "}
              <span className="text-blue-500 font-medium">
                Mi enfoque principal es crear experiencias de usuario intuitivas
                y atractivas.
              </span>{" "}
              Utilizando tecnologías como HTML, CSS, JavaScript, React y
              herramientas de control de versiones como GitHub y GitLab. También
              cuento con conocimientos en .NET y Razor.
            </p>
            <div className="my-8 xl:mb-0">
              <h4 className="text-xl text-stone-800 font-semibold tracking-tight mb-4">
                Habilidades blandas
              </h4>
              <ul className="flex flex-wrap gap-2 text-sm lg:justify-start">
                <li className="px-2.5 py-0.5 border border-zinc-300 font-medium text-black rounded-full">
                  👁️ Meticuloso
                </li>
                <li className="px-2.5 py-0.5 border border-zinc-300 font-medium text-black rounded-full">
                  🔄 Adaptabilidad
                </li>
                <li className="px-2.5 py-0.5 border border-zinc-300 font-medium text-black rounded-full">
                  🧩 Resolución de problemas
                </li>
                <li className="px-2.5 py-0.5 border border-zinc-300 font-medium text-black rounded-full">
                  🚀 Proactivo
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
        <div className="flex flex-row  items-center mb-8 gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>

          <h3 className="text-2xl lg:text-4xl text-stone-800 font-bold tracking-tight">
            Experiencia laboral
          </h3>
        </div>
        <ol className="relative border-s border-zinc-200">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-zinc-500 rounded-full mt-1.5 -start-1.5 border border-zinc-50"></div>
            <time className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
              Abril 2022 - <span className="text-green-600">Presente</span>
            </time>
            <h4 className="font-medium text-lg lg:text-xl tracking-tight mt-4">
              Superintendencia de seguros de la nación
            </h4>
            <p className="text-base capitalize text-blue-500 font-semibold">
              Frontend developer
            </p>
            <p className="text-base tracking-tight  text-zinc-600 md:w-3/4 lg:w-1/2">
              Encargado del diseño UX/UI y el desarrollo frontend en las
              aplicaciones y páginas web del organismo.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-zinc-500 rounded-full mt-1.5 -start-1.5 border border-zinc-50"></div>
            <time className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
              Febrero 2021 - <span className="text-green-600">Presente</span>
            </time>
            <h4 className="font-medium text-lg lg:text-xl tracking-tight mt-4 ">
              Freelance esporádico
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
