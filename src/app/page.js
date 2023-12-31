"use client";
import { useState } from "react";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

//Components
import About from "./components/About";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

export default function Home() {
  const [tabs, setTabs] = useState("home");
  const [themeDark, setThemeDark] = useState(false);

  const changeTabs = (tabName) => {
    setTabs(tabName);
    console.log(tabName);
  };

  const changeTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <div>
      <Nav />
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
