import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  avatar,
  htmlcss,
  jsts,
  reactnext,
  tailwindnet,
  avatarwhite,
} from "../assets/Images";

const HomePage = () => {
  return (
    <div
      id="home"
      className="lg:h-screen flex flex-col px-6 gap-8 lg:gap-0 md:px-20 xl:px-0 lg:justify-center lg:max-w-screen-lg lg:mx-auto pt-11"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-8 md:mt-11 lg:mt-0">
        <div className="md:w-3/4 lg:w-1/2 my-auto md:mx-auto lg:mx-0">
          <a
            href="https://linkedin.com/in/iluigiw/"
            target="_blank"
            className="flex w-40 mx-auto lg:mx-0"
          >
            <span className="bg-green-600 text-green-50 text-xs font-medium px-2.5 py-0.5 rounded">
              Disponible para trabajar
            </span>
          </a>
          <h1 className="text-4xl mt-2 md:text-5xl lg:text-6xl text-center lg:text-start  font-extrabold text-stone-800">
            Desarrollador Front-End React
          </h1>
          <p className="text-base text-center lg:text-start text-stone-600 leading-7 lg:text-lg my-5 lg:my-8 text-balance max-w-[700px]">
            Soy Luis Ramirez.{" "}
            <span className="text-blue-500 font-medium">
              +2 años de experiencia.
            </span>{" "}
            Desarrollador web. Buenos Aires, Argentina.{" "}
            <span className="text-blue-500 font-medium">
              Creo aplicaciones intuitivas y funcionales.
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              className="flex hover:text-blue-500 cursor-pointer flex-row gap-2 border rounded-3xl px-2.5 py-0.5 duration-300"
              href="https://linkedin.com/in/iluigiw/"
              target="_blank"
            >
              <span className="sr-only">Linkedin</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              Linkedin
            </a>
            <a
              className="flex hover:text-blue-500 cursor-pointer flex-row gap-2 border rounded-3xl px-2.5 py-0.5 duration-300"
              href="https://github.com/Louisit0"
              target="_blank"
            >
              <span className="sr-only">Github</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Github
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
            <a
              className="flex hover:text-blue-500 cursor-pointer flex-row gap-2 border rounded-3xl px-2.5 py-0.5 duration-300"
              href="mailto:lrangarita7@gmail.com"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Lrangarita7@gmail.com
            </a>
            <a
              className="flex hover:text-blue-500 cursor-pointer flex-row gap-2 border rounded-3xl px-2.5 py-0.5 duration-300"
              href="./CV_LUISRAMIREZ_FRONTEND.pdf"
              target="_blank"
              download={true}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              CV
            </a>
          </div>
        </div>
        <Image
          src={avatar}
          className="w-60 h-60 lg:w-80 lg:h-80 object-cover rounded-full mx-auto lg:mx-0 mt-8 lg:mt-0 p-1 ring-2 ring-zinc-600"
          alt="avatar"
        ></Image>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-10">
        <p className="font-bold mb-5 lg:mb-0 lg:mr-16">Tech Stack</p>
        <ul className="grid grid-cols-2 lg:flex lg:flex-row gap-8">
          <li className="cursor-pointer  flex">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Image alt="htmlcss" src={htmlcss} width={100} />
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-white">
                  <p>Html | Css</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li className="cursor-pointer flex">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Image alt="jsts" src={jsts} width={100} />
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-white">
                  <p>Javascript | Aprendiendo: Typescript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li className="cursor-pointer flex">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Image alt="reactnext" src={reactnext} width={100} />
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-white">
                  <p>React.js | Aprendiendo: Next.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
          <li className="cursor-pointer flex">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <Image alt="tailwindnet" src={tailwindnet} width={100} />
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-white">
                  <p>Tailwind CSS | .Net</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
