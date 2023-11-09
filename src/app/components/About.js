import Image from "next/image";
import { avatar } from "../assets/Images";

const About = () => {
  return (
    <>
      <section className="flex flex-col justify-evenly h-full">
        <Image
          className="flex flex-col justify-center object-cover w-24 h-24 rounded-full"
          src={avatar}
          alt="avatar"
        ></Image>
        <p>
          Hi, i'm Luis a developer and product designer from Ireland. I'm
          interested in React, Node, Product Design, Jamstack, Startups,
          Cryptocurrencies and Music.
        </p>
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
