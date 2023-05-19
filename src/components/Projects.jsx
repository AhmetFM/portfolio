import React from "react";
import SingleCard from "./SingleCard";
//Project Data
import { projectData } from "../../projectData";

function Projects() {
  return (
    <div
      id="projects"
      className="my-20 scroll-mt-20 h-auto flex flex-col gap-8 w-full pt-8 text-center"
    >
      <h3 className="text-3xl font-semibold border-b border-current pb-2 mx-20">
        Projects
      </h3>
      <div className="grid gap-4 grid-cols-1 h-full sm:grid-cols-2 mb-20">
        {projectData.map((project) => (
          <SingleCard key={project.id} user={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
