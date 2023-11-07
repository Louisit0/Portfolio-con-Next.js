"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import PROJECTS_DATA from "@/app/utilities/ProjectsData";

//Components
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";

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
      <div className="grid grid-cols-3 w-full gap-4 text-slate-200 pb-10">
        {tabs === "home" ? (
          <>
            <About />
            <Stack />
            <Contact />
            <Projects />
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
