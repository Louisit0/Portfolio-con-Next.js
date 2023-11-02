import Image from "next/image";
import Nav from "./components/Nav";
import avatar from "../assets/avatarluigi.jpeg";
import turisme from "../assets/turisme1.png";
import pokedex from "../assets/pokedex.png";
import pcgear from "../assets/pcgear.png";
import pcgear2 from "../assets/pcgear2.png";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-3 w-full gap-4 text-slate-200 pb-10">
        <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-10 h-72">
          <Image
            className="rounded-full"
            src={avatar}
            alt="avatar"
            width={100}
            height={100}
          ></Image>
          <p>
            Hi, i'm Luis a frontend developer from Argentina. I'm interested in
            React, Node, Product Design, Jamstack, Startups, Cryptocurrencies
            and Music.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-10 h-72">
          <Image
            className="rounded-full"
            src={avatar}
            alt="avatar"
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
            className="flex flex-col justify-center gap-6 bg-zinc-9 00 border-white rounded-3xl h-72 object-cover"
            src={turisme}
            alt="avatar"
            width={"100%"}
            height={"100%"}
          ></Image>
        </div>
        <div>
          <Image
            className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl h-72 object-cover"
            src={pokedex}
            alt="avatar"
            width={"100%"}
            height={"100%"}
          ></Image>
        </div>
        <div className="grid grid-cols-4 gap-4 items-end">
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=html" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=css" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=javascript" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=typescript" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=react" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=next" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=tailwind" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=bootstrap" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=github" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=gitlab" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=mongo" />
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-6">
            <a>
              <img src="https://skillicons.dev/icons?i=net" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-10 h-72">
          <Image
            className="rounded-full"
            src={avatar}
            alt="avatar"
            width={100}
            height={100}
          ></Image>
          <p>
            Hi, i'm Luis a developer and product designer from Ireland. I'm
            interested in React, Node, Product Design, Jamstack, Startups,
            Cryptocurrencies and Music.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-10 h-72">
          <Image
            className="rounded-full"
            src={avatar}
            alt="avatar"
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
            className="flex flex-col justify-center gap-6 bg-zinc-9 00 border-white rounded-3xl h-72 object-cover"
            src={pcgear}
            alt="avatar"
            width={"100%"}
            height={"100%"}
          ></Image>
        </div>
        <div className="grid grid-rows-2 h-72 gap-4">
          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-10">
            <div className="flex justify-evenly">
              <p align="center">
                <a>
                  <img src="https://skillicons.dev/icons?i=html,css" />
                </a>
              </p>
              <p align="center">
                <a>
                  <img src="https://skillicons.dev/icons?i=javascript,typescript" />
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 bg-zinc-900 border-white rounded-3xl p-10">
            <div className="flex justify-evenly">
              <p align="center">
                <a>
                  <img src="https://skillicons.dev/icons?i=react,next" />
                </a>
              </p>
              <p align="center">
                <a>
                  <img src="https://skillicons.dev/icons?i=tailwind,github" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
