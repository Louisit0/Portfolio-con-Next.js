import Image from "next/image";
import Nav from "./components/Nav";
import avatar from "../assets/avatarluigi.jpeg";
import turisme from "../assets/turisme1.png";
import pokedex from "../assets/pokedex.png";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-3 w-full gap-4 text-slate-200 pb-10">
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
        <div>
          <Image
            className="flex flex-col justify-center gap-4 bg-zinc-800 border-white rounded-3xl h-72 object-cover"
            src={turisme}
            width={"100%"}
            height={"100%"}
          ></Image>
        </div>
        <div>
          <Image
            className="flex flex-col justify-center gap-4 bg-zinc-800 border-white rounded-3xl h-72 object-cover"
            src={pokedex}
            width={"100%"}
            height={"100%"}
          ></Image>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=html" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=css" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=javascript" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=typescript" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=tailwind" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=bootstrap" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=react" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=next" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=github" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=gitlab" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=mongo" />
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl">
            <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=net" />
              </a>
            </p>
          </div>
        </div>
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
      </div>
    </>
  );
}
