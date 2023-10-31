import Image from "next/image";
import Link from "next/link";
import imgPoke from "../../public/pokedex.png";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <h2>Hello world</h2>
    </main>
  );
}
