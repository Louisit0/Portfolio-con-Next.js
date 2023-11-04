import Image from "next/image";
import Nav from "./components/Nav";

//Components
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-3 w-full gap-4 text-slate-200 pb-10">
        <About />
        <About />
        <About />
        <About />
        <Stack />
        <About />
        <About />
      </div>
    </>
  );
}
