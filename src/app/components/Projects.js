import Image from "next/image";
import PROJECTS_DATA from "@/utilities/ProjectsData";

const Projects = () => {
  return (
    <section>
      {PROJECTS_DATA.map((project) => (
        <Image
          key={project.id}
          className="flex flex-col justify-center gap-4 bg-zinc-800 border-white rounded-3xl h-72 object-cover"
          src={project.img}
          width={100}
          height={100}
        ></Image>
      ))}
    </section>
  );
};

export default Projects;
