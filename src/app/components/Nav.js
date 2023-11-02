import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between py-10 text-slate-200">
      <h1 className="text-3xl font-bold">Luis</h1>
      <ul className="flex border border-white rounded-3xl px-4 py-2">
        <li className="hover:bg-gray-800 rounded-3xl px-4">
          <Link href="/">All</Link>
        </li>
        <li className="hover:text-gray-500 rounded-3xl px-4 ">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-500 rounded-3xl px-4 ">
          <Link href="/contact">Projects</Link>
        </li>
        <li className="hover:text-gray-500 rounded-3xl px-4 ">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <p>Resumé</p>
    </nav>
  );
};

export default Nav;
