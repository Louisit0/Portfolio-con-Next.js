import Image from "next/image";
import ABOUT_DATA from "../utilities/AboutData";

const About = () => {
  return (
    <>
      {ABOUT_DATA.map((about) => (
        <section
          key={about.id}
          className={` ${
            about.id === 1 ? "p-10" : "p-0"
          } rounded-3xl h-72 bg-zinc-800`}
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
      ))}
    </>
  );
};

export default About;
