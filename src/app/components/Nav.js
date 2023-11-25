"use client";

const Nav = ({ tabs, changeTabs }) => {
  return (
    <nav className="flex flex-row justify-center fixed py-4 md:py-10 w-full">
      <ul className="flex border rounded-3xl px-4 py-2 backdrop-filter backdrop-blur-md bg-opacity-60 bg-white text-sm md:text-base">
        <li
          className={`rounded-3xl cursor-pointer ${
            tabs === "home" ? "bg-zinc-800" : "hover:text-blue-500"
          }`}
        >
          <a className="px-3 md:px-4" href="#home">
            Home
          </a>
        </li>
        <li
          className={`rounded-3xl cursor-pointer ${
            tabs === "about" ? "bg-zinc-800" : "hover:text-blue-500"
          }`}
        >
          <a className="px-3 md:px-4" href="#about">
            About
          </a>
        </li>
        <li
          className={`rounded-3xl cursor-pointer ${
            tabs === "projects" ? "bg-zinc-800" : "hover:text-blue-500"
          }`}
        >
          <a className="px-3 md:px-4" href="#projects">
            Projects
          </a>
        </li>
        <li
          className={`rounded-3xl cursor-pointer ${
            tabs === "contact" ? "bg-zinc-800" : "hover:text-blue-500"
          }`}
        >
          <a className="px-3 md:px-4" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
