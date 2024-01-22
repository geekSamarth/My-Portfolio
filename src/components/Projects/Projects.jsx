import React from "react";
import { projectData } from "../../data/projectData";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ProjectCard = ({
  image,
  name,
  description,
  projectLink,
  techStack,
}) => {};
function Projects() {
  return (
    <>
      <section className="h-full flex flex-col text-center pt-12">
        <h1 className="text-5xl font-bold  mb-3 text-white pl-3 md:pl-0">
          Projects
        </h1>
        <p className="text-2xl  text-[rgba(255,255,255,0.75)] mb-6 md:mb-8 md:pl-5">
          Things I have built so far to enhancing my skills.
        </p>
        <div className="flex items-center my-10  ">
          <div className="flex flex-wrap justify-center items-center gap-7 md:gap-16  mx-4">
            {projectData.map((project) => {
              return (
                <div
                  className=" bg-[rgb(23,23,27)] w-full md:w-[320px] rounded-xl flex flex-col  hover:-translate-y-1.5 ease-in-out duration-300 project_box_shaodw border-[rgb(23,23,27)] border-[1px] py-3.5"
                  key={project.id}
                >
                  <div className="w-full px-3 py-3">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full  object-cover aspect-video rounded-xl"
                    />
                  </div>
                  <div className="h-fit md:h-[240px] text-white flex flex-col px-4 ">
                    <h1 className="text-center text-xl font-bold tracking-wider my-2 text-[rgba(255,255,255,0.75)]">
                      {project.name}
                    </h1>
                    <p className="text-left text-[rgba(255,255,255,0.55)]">
                      {project.description}
                    </p>
                    <span className="my-3 font-semibold text-left text-violet-600">{`Tech Stack: ${project.techStack}`}</span>
                    <div className="flex gap-2 items-center  ">
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
