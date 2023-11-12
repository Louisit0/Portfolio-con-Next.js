import Image from "next/image";
import { setup } from "../assets/Images";

const About = () => {
  return (
    <>
      <section className="flex flex-row justify-evenly h-full gap-20 py-20 ">
        <Image
          className="flex flex-col justify-center object-cover rounded-2xl"
          width={410}
          height={350}
          src={setup}
          alt="setup"
        ></Image>
        <div className="">
          <h3 className="text-blue-500 font-bold uppercase">About me</h3>
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
        </div>
      </section>
      {/* {ABOUT_DATA.map((about) => (
        <section
          key={about.id}
          className={` ${
            about.id === 1 ? "p-10" : "p-0"
          } rounded-3xl h-72 bg-zinc-800 col-span-2`}
        >
          {about.img ? (
            <Image
              className={`flex flex-col justify-center object-cover ${
                about.id === 1
                  ? "w-24 h-24 rounded-full"
                  : "w-full h-full rounded-3xl"
              }`}
              src={about.img}
              alt={about.alt}
            ></Image>
          ) : null}
          {about.srcVideo ? (
            <video
              loop
              autoPlay={true}
              className="flex flex-col justify-center bg-zinc-800 rounded-3xl object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              type="video/mp4"
            >
              <source src={about.srcVideo} type="video/mp4"></source>
            </video>
          ) : null}
          <p>{about.description}</p>
        </section>
      ))} */}
    </>
  );
};

export default About;
