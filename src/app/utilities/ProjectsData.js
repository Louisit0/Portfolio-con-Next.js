import { avatar, pokedex, turisme, pcgear, pcgear2 } from "../assets/Images";
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Pokedex",
    img: pokedex,
    alt: "pokedex",
    description:
      "App que simula una pokedex, con la posibilidad de buscar pokemones por nombre o numero, y ver sus caracteristicas.",
    tech: ["React", "TailwindCSS", "PokeAPI"],
    date: "(Agosto 2022) 🐕",
  },
  {
    id: 2,
    title: "Turisme",
    img: turisme,
    alt: "turisme",
    description:
      "Una página web de turismo, con carrito de compras y formulario de contacto.",
    tech: ["Javascript", "Bootstrap", "SweetAlerts"],
    date: "(Julio 2022) ✈️",
  },
  {
    id: 3,
    title: "Pcgear",
    img: pcgear,
    alt: "pcgear",
    description: "Ecommerce de venta de componentes de pc.",
    tech: ["React", "TailwindCSS"],
    date: "(Julio 2022) 🖱️",
  },
  {
    id: 4,
    title: "Pcgear",
    img: pcgear2,
    alt: "pcgear2",
    description: "Ecommerce de venta de componentes de pc.",
    tech: ["React", "TailwindCSS"],
    date: "(Julio 2022) 🖱️",
  },
];

export default PROJECTS_DATA;
