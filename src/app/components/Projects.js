import Image from "next/image";
import PROJECTS_DATA from "@/app/utilities/ProjectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="rounded-3xl max-w-screen-lg mx-auto px-6 md:px-20 xl:px-0"
    >
      <div className="flex flex-row  items-center mb-8 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>

        <p className="text-2xl lg:text-4xl text-stone-800 font-bold tracking-tight ">
          Proyectos
        </p>
      </div>
      {/* <h3 className="text-2xl mt-2 mb-8 font-semibold text-stone-800 tracking-tight">
        A blend of personal and professional work 🚀
      </h3> */}
      {PROJECTS_DATA.map((project, tags) => (
        <div
          key={project.id}
          className={`p-6 md:p-12 lg:p-8 rounded-3xl border bg-white mb-8 ${
            project.id % 2 !== 0
              ? "flex flex-col lg:flex-row"
              : "lg:flex lg:flex-row-reverse"
          } `}
        >
          <Image
            className="bg-zinc-800 rounded-3xl object-cover mx-auto w-full h-80 lg:h-80 lg:w-1/2"
            src={project.img}
            alt={project.alt}
            // style={{ width: 530, height: 360 }}
          ></Image>
          <div className="flex flex-col justify-center items-center mx-auto lg:text-center">
            {/* lg:w-3/4 */}
            <div className="lg:w-4/5 mx-auto mt-4 md:mt-10 lg:mt-0 lg:text-start">
              <h3 className="font-bold text-xl lg:text-2xl">
                {project.title} {""}
              </h3>
              <span className="text-blue-500 font-medium text-lg">
                {project.date}
              </span>
              <p className="my-4 text-zinc-600 md:w-3/4 lg:w-full lg:mx-0 text-base">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-sm lg:justify-start">
                {project.tags.map((tag) => (
                  <li
                    key={tag.name}
                    className={`flex items-center px-2.5 py-0.5 gap-x-2 rounded-full ${tag.class}`}
                  >
                    {tag.icon === null ? (
                      <span>⭐</span>
                    ) : (
                      <span>{tag.icon}</span>
                    )}
                    <span>{tag.name}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row lg:justify-start gap-8 mt-12 text-lg">
                <a
                  className="flex flex-row font-medium gap-2 items-center hover:text-blue-500 cursor-pointer"
                  target="_blank"
                  href={project.linkCode}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  <span className="sr-only">{project.linkCode}</span>
                  Code
                </a>
                <a
                  className="flex flex-row font-medium gap-2 items-center hover:text-blue-500 cursor-pointer"
                  target="_blank"
                  href={project.linkDemo}
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Live demo
                  <span className="sr-only">{project.linkDemo}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p className=" text-blue-500">
        Estaré subiendo proyectos que aún tengo en desarrollo ✨
      </p>
    </section>
  );
};

export default Projects;
