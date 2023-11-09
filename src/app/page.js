"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import PROJECTS_DATA from "@/app/utilities/ProjectsData";

//Components
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Image from "next/image";
import {
  setup,
  mendoza,
  pcgear,
  turisme,
  pokedex,
  pcgear2,
} from "./assets/Images";

export default function Home() {
  //Nav
  const [tabs, setTabs] = useState("home");

  const changeTabs = (tabName) => {
    setTabs(tabName);
    console.log(tabName);
  };

  return (
    <>
      <Nav tabs={tabs} changeTabs={changeTabs} />
      <div className="grid auto-rows-[288px] grid-cols-4 gap-4 text-slate-200 pb-10">
        {tabs === "home" ? (
          <>
            <div className="rounded-3xl bg-zinc-800 p-10 col-span-2">
              <About />
            </div>
            <div className="rounded-3xl bg-zinc-800">
              <Image
                src={turisme}
                alt="turisme"
                className="object-cover rounded-3xl w-full h-full"
              ></Image>
            </div>
            <div className="rounded-3xl bg-zinc-800 row-span-2">
              <Image
                src={pcgear}
                alt="pcgear"
                className="object-cover rounded-3xl w-full h-full"
              ></Image>
            </div>
            <div className="rounded-3xl bg-zinc-800">
              <Image
                src={mendoza}
                alt="mendoza"
                className="object-cover rounded-3xl w-full h-full"
              ></Image>
            </div>
            <Stack />
            <div className="rounded-3xl bg-zinc-800">
              <Image
                src={pokedex}
                alt="pokedex"
                className="object-cover rounded-3xl w-full h-full"
              ></Image>
            </div>
            <div className="rounded-3xl bg-zinc-800">
              <Image
                src={pcgear}
                alt="pcgear"
                className="object-cover rounded-3xl w-full h-full"
              ></Image>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex justify-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75.121"
                height="61.052"
                viewBox="0 0 75.121 61.052"
                className="m-auto fill-sky-400"
              >
                <path
                  id="icons8-twitter"
                  d="M75.063,12.844a30.83,30.83,0,0,1-8.858,2.43A15.451,15.451,0,0,0,72.984,6.75,30.947,30.947,0,0,1,63.2,10.485,15.418,15.418,0,0,0,36.937,24.542,43.765,43.765,0,0,1,5.17,8.441,15.445,15.445,0,0,0,9.94,29.019a15.4,15.4,0,0,1-6.984-1.932v.193A15.438,15.438,0,0,0,15.317,42.4a15.421,15.421,0,0,1-4.057.538,14.847,14.847,0,0,1-2.9-.28,15.447,15.447,0,0,0,14.4,10.709,30.9,30.9,0,0,1-19.14,6.595,30.3,30.3,0,0,1-3.671-.217A43.544,43.544,0,0,0,23.56,66.666c28.348,0,43.852-23.483,43.852-43.846,0-.667-.018-1.341-.04-2a31.325,31.325,0,0,0,7.692-7.98Z"
                  transform="translate(0.058 -5.614)"
                ></path>
              </svg>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex justify-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75.121"
                height="61.052"
                viewBox="0 0 75.121 61.052"
                className="m-auto fill-sky-400"
              >
                <path
                  id="icons8-twitter"
                  d="M75.063,12.844a30.83,30.83,0,0,1-8.858,2.43A15.451,15.451,0,0,0,72.984,6.75,30.947,30.947,0,0,1,63.2,10.485,15.418,15.418,0,0,0,36.937,24.542,43.765,43.765,0,0,1,5.17,8.441,15.445,15.445,0,0,0,9.94,29.019a15.4,15.4,0,0,1-6.984-1.932v.193A15.438,15.438,0,0,0,15.317,42.4a15.421,15.421,0,0,1-4.057.538,14.847,14.847,0,0,1-2.9-.28,15.447,15.447,0,0,0,14.4,10.709,30.9,30.9,0,0,1-19.14,6.595,30.3,30.3,0,0,1-3.671-.217A43.544,43.544,0,0,0,23.56,66.666c28.348,0,43.852-23.483,43.852-43.846,0-.667-.018-1.341-.04-2a31.325,31.325,0,0,0,7.692-7.98Z"
                  transform="translate(0.058 -5.614)"
                ></path>
              </svg>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex justify-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75.121"
                height="61.052"
                viewBox="0 0 75.121 61.052"
                className="m-auto fill-sky-400"
              >
                <path
                  id="icons8-twitter"
                  d="M75.063,12.844a30.83,30.83,0,0,1-8.858,2.43A15.451,15.451,0,0,0,72.984,6.75,30.947,30.947,0,0,1,63.2,10.485,15.418,15.418,0,0,0,36.937,24.542,43.765,43.765,0,0,1,5.17,8.441,15.445,15.445,0,0,0,9.94,29.019a15.4,15.4,0,0,1-6.984-1.932v.193A15.438,15.438,0,0,0,15.317,42.4a15.421,15.421,0,0,1-4.057.538,14.847,14.847,0,0,1-2.9-.28,15.447,15.447,0,0,0,14.4,10.709,30.9,30.9,0,0,1-19.14,6.595,30.3,30.3,0,0,1-3.671-.217A43.544,43.544,0,0,0,23.56,66.666c28.348,0,43.852-23.483,43.852-43.846,0-.667-.018-1.341-.04-2a31.325,31.325,0,0,0,7.692-7.98Z"
                  transform="translate(0.058 -5.614)"
                ></path>
              </svg>
            </div>
            {/* <About />
            <Stack />
            <Contact />
            <Projects /> */}
          </>
        ) : tabs === "projects" ? (
          <Projects />
        ) : tabs === "about" ? (
          <>
            <About />
          </>
        ) : tabs === "contact" ? (
          <Contact />
        ) : (
          <>
            <About />
            <Contact />
            <Stack />
            <Projects />
          </>
        )}
      </div>
    </>
  );
}
