import Image from "next/image";
import { setup, ssn } from "../assets/Images";
const About = () => {
  return (
    <section className="flex flex-col max-w-screen-lg mx-auto px-4 lg:px-0 pb-40">
      <section
        id="about"
        className="flex flex-col lg:flex-row justify-evenly h-full gap-10 lg:gap-20 pt-60 pb-40 md:py-40 max-w-screen-lg mx-auto px-4 lg:px-0"
      >
        <div className="md:w-3/5 md:mx-auto lg:w-full lg:mx-0">
          <h3 className="text-4xl text-stone-800 font-bold tracking-tight md:text-center lg:text-start mb-8">
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
        </div>
        <Image
          className="flex flex-col justify-center object-cover rounded-2xl md:mx-auto lg:mx-0"
          width={410}
          height={350}
          src={setup}
          alt="setup"
        ></Image>
      </section>
      <div>
        <h3 className="text-4xl text-stone-800 font-bold tracking-tight md:text-center lg:text-start mb-8">
          Work experience
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
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
              <h4 className="font-medium text-xl tracking-tight">
                Superintendencia de seguros de la nación
              </h4>
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
                April 20, 2021 - August 30, 2022
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
              <h4 className="font-medium text-xl tracking-tight">
                Superintendencia de seguros de la nación
              </h4>
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
