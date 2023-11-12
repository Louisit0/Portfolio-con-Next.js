"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import PROJECTS_DATA from "@/app/utilities/ProjectsData";

//Components
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
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
    <div>
      <HomePage />
    </div>
  );
}
