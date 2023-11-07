import Image from "next/image";
import PROJECTS_DATA from "@/app/utilities/ProjectsData";

const Projects = () => {
  return (
    <>
      {PROJECTS_DATA.map((project) => (
        <section key={project.id} className="rounded-3xl h-72">
          <Image
            className="flex flex-col justify-center bg-zinc-800 border-white rounded-3xl object-cover"
            src={project.img}
            alt={project.alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
      ))}
    </>
  );
};

export default Projects;
