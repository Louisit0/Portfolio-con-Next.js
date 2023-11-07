import Image from "next/image";
import avatar from "../assets/avatarluigi.jpeg";

const About = ({ data }) => {
  return (
    <div className="flex flex-col justify-center gap-4 bg-zinc-800 border-white rounded-3xl p-10 h-72">
      <Image
        className="rounded-full"
        src={avatar}
        width={100}
        height={100}
      ></Image>
      <p>
        Hi, i'm Luis a developer and product designer from Ireland. I'm
        interested in React, Node, Product Design, Jamstack, Startups,
        Cryptocurrencies and Music.
      </p>
    </div>
  );
};

export default About;
