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
  proyectos,
  github,
} from "./assets/Images";

export default function Home() {
  const [tabs, setTabs] = useState("home");
  const [themeDark, setThemeDark] = useState(true);

  const changeTabs = (tabName) => {
    setTabs(tabName);
    console.log(tabName);
  };

  const changeTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <>
      <div
        className={`${
          themeDark ? "bg-black" : "bg-white"
        } grid auto-rows-[268px] grid-cols-4 gap-4 text-slate-200 py-10`}
      >
        {tabs === "home" ? (
          <>
            <div className="rounded-3xl bg-zinc-800 p-10 col-span-2">
              <About />
            </div>
            <Stack />
            <div className="rounded-3xl bg-zinc-800 p-10 flex justify-center h-full">
              <button onClick={changeTheme}>
                {themeDark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-16 w-16 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-16 w-16 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex flex-col items-center justify-center h-full gap-2 uppercase">
              <p className="text-sm">edad</p>
              <h2 className="text-8xl font-bold">23</h2>
              <p className="text-sm font-semibold">años</p>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex flex-col items-center justify-center h-full gap-2 uppercase">
              <p className="text-sm">nivel de inglés</p>
              <h2 className="text-8xl font-bold">b2</h2>
              <p className="text-sm font-semibold">ef cer</p>
            </div>
            <div className="rounded-3xl flex justify-center h-full col-span-2 relative">
              <Image
                src={proyectos}
                alt="proyectos"
                className="object-cover rounded-3xl w-full h-full opacity-80"
              ></Image>
              <div className="absolute left-0 mx-8 mt-8">
                <h3 className="text-slate-50 font-bold text-2xl">Proyectos</h3>
                <p className="text-slate-50">
                  Tanto personales como profesionales
                </p>
              </div>
              <div className="bg-black border-2 border-white rounded-full right-0 mx-8 mt-8 absolute flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="inline-block h-5 w-5 m-1"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="rounded-3xl bg-zinc-800 flex justify-center h-full col-span-2 relative">
              <Image
                src={github}
                alt="github"
                className="object-cover rounded-3xl w-full h-full opacity-75"
              ></Image>
              <div className="absolute left-0 mx-8 mt-8">
                <h3 className="text-slate-50 font-bold text-2xl">Github</h3>
                <p className="text-slate-50">Donde subo mis proyectos</p>
              </div>
              <div className="bg-black border-2 border-white rounded-full right-0 mx-8 mt-8 absolute flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="inline-block h-5 w-5 m-1"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex justify-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-24 w-24 m-auto fill-blue-500"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex flex-col items-center justify-center h-full gap-2 uppercase">
              <h2 className="text-8xl font-bold">+2</h2>
              <p className="text-xl text-center font-semibold">
                años de experiencia
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-800 p-10 flex flex-col justify-center h-full gap-2 uppercase row-span-2">
              <div className="mx-auto">
                <h2 className="text-8xl font-bold">25°</h2>
                <h3 className="text-xl font-bold">Soleado</h3>
                <p className="">17:24 PM</p>
                <p className="text-sm font-semibold">en buenos aires</p>
              </div>
            </div>
            <div className="rounded-3xl bg-zinc-800 p-10 flex justify-center items-center h-full relative">
              <div className="bg-black border-2 border-white rounded-full right-0 top-0 mx-8 mt-8 absolute flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="inline-block h-5 w-5 m-1"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="75.121"
                height="61.052"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
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
