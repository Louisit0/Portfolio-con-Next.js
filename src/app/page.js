import Image from "next/image";
import Nav from "./components/Nav";
import avatar from "../assets/avatarluigi.jpeg";
import turisme from "../assets/turisme1.png";
import pokedex from "../assets/pokedex.png";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-3 w-full gap-4 text-slate-200">
        <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10 h-72">
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
        <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10 h-72">
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
        <div>
          <Image
            className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl h-72 object-cover"
            src={turisme}
            width={"100%"}
            height={"100%"}
          ></Image>
        </div>
        <div>
          <Image
            className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl h-72 object-cover"
            src={pokedex}
            width={"100%"}
            height={"100%"}
          ></Image>
        </div>
        <div className="grid grid-rows-2 h-72 gap-4">
          <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10">
            <h2>About me</h2>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10">
            <h2>ENJOY</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10 h-72">
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
        <div className="grid grid-cols-4 h-20 gap-4">
          <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10">
            1
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10">
            1
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10">
            1
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-800 border-white rounded-3xl p-10">
            1
          </div>
        </div>
      </div>
    </>
  );
}
