"use client";
import { useState } from "react";

const Nav = ({ tabs, changeTabs }) => {
  return (
    <nav className="flex flex-row justify-between py-10 text-slate-200">
      <h1 className="text-3xl font-bold">Luis</h1>
      <ul className="flex border border-white rounded-3xl px-4 py-2">
        <li
          className={`rounded-3xl px-4 cursor-pointer ${
            tabs === "home" ? "bg-zinc-800" : "hover:text-zinc-400"
          }`}
          onClick={() => changeTabs("home")}
        >
          <a>All</a>
        </li>
        <li
          className={`rounded-3xl px-4 cursor-pointer ${
            tabs === "about" ? "bg-zinc-800" : "hover:text-zinc-400"
          }`}
          onClick={() => changeTabs("about")}
        >
          <a>About</a>
        </li>
        <li
          className={`rounded-3xl px-4 cursor-pointer ${
            tabs === "projects" ? "bg-zinc-800" : "hover:text-zinc-400"
          }`}
          onClick={() => changeTabs("projects")}
        >
          <a>Projects</a>
        </li>
        <li
          className={`rounded-3xl px-4 cursor-pointer ${
            tabs === "contact" ? "bg-zinc-800" : "hover:text-zinc-400"
          }`}
          onClick={() => changeTabs("contact")}
        >
          <a>Contact</a>
        </li>
      </ul>
      <p>Resumé</p>
    </nav>
  );
};

export default Nav;
