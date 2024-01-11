import React from "react";
import { projectData } from "../../data/projectData";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Projects() {
  return (
    <>
      <section className="h-full flex flex-col text-center pt-20 md:pt-28">
        <h1 className="text-5xl font-bold  mb-3 text-white pl-3">Projects</h1>
        <p className="text-2xl  text-[rgba(255,255,255,0.75)] mb-6 md:mb-8 md:pl-5">
          Things I have built so far to enhancing my skills.
        </p>
        <div className="flex items-center my-12">
          <div className="flex flex-wrap justify-center items-center gap-7 md:gap-16  mx-4">
            {projectData.map((project) => {
              return (
                <div
                  className="w-full md:w-[320px] rounded-xl flex flex-col border-white border-2 hover:scale-105 hover:transition-all hover:duration-700 hover:ease-out"
                  key={project.id}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[170px] object-cover aspect-video rounded-t-xl"
                  />
                  <div className="h-fit md:h-[240px]  flex flex-col px-3 bg-gradient-to-r from-sky-300 to-indigo-300 rounded-b-xl">
                    <h1 className="text-center text-xl font-bold tracking-wider my-2">
                      {project.name}
                    </h1>
                    <p className="text-left">{project.description}</p>
                    <span className="my-3 font-bold text-left">{`Tech Stack: ${project.techStack}`}</span>
                    <div className="flex gap-2 items-center">
                      <span>
                        <FaLink />
                      </span>
                      <Link
                        to={project.projectLink}
                        className="font-semibold hover:underline duration-150"
                      >
                        Live Preview
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
