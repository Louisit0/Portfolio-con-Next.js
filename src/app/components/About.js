import Image from "next/image";
import { setup, ssn } from "../assets/Images";
const About = () => {
  return (
    <section className="flex flex-col max-w-screen-lg mx-auto px-4 lg:px-0 pb-40">
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
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>{" "}
      </section>
      <div>
        <h3 className="text-blue-500 font-bold uppercase md:text-center lg:text-start mb-4">
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
              <h4 className="font-bold text-xl">
                Superintendencia de seguros de la nación
              </h4>
              <p className="text-blue-500 font-medium text-lg">
                Frontend developer
              </p>
              <p className="text-zinc-500 my-2 text-base">
                April 20, 2022 - <span className="text-green-600">PRESENT</span>
              </p>
              <p className="font-medium text-base">
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
              <h4 className="font-bold text-xl">
                Superintendencia de seguros de la nación
              </h4>
              <p className="text-blue-500 font-medium text-lg">
                Frontend developer
              </p>
              <p className="text-zinc-500 my-2 text-base">
                April 20, 2022 - <span className="text-green-600">PRESENT</span>
              </p>
              <p className="font-medium text-base">
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
              <h4 className="font-bold text-xl">
                Superintendencia de seguros de la nación
              </h4>
              <p className="text-blue-500 font-medium text-lg">
                Frontend developer
              </p>
              <p className="text-zinc-500 my-2 text-base">
                April 20, 2022 - <span className="text-green-600">PRESENT</span>
              </p>
              <p className="font-medium text-base">
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
              <h4 className="font-bold text-xl">
                Superintendencia de seguros de la nación
              </h4>
              <p className="text-blue-500 font-medium text-lg">
                Frontend developer
              </p>
              <p className="text-zinc-500 my-2 text-base">
                April 20, 2022 - <span className="text-green-600">PRESENT</span>
              </p>
              <p className="font-medium text-base">
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
