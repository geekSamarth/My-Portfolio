import React from "react";
import { projectData } from "../data/projectData";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Project() {
  return (
    <>
      <section className="min-h-screen flex flex-col ">
        <h1 className="text-4xl font-bold pt-10 mb-3 text-white pl-3">
          Projects
        </h1>
        <p className="text-2xl  text-[rgba(255,255,255,0.75)] mb-6 md:mb-12 pl-5">
          Things I have built so far to enhancing my skills.
        </p>
        <div className="flex items-center my-12">
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-14 md:mx-6 mx-3">
            {projectData.map((project) => {
              return (
                <div
                  className="w-full md:w-[320px] rounded-xl flex flex-col border-white border-2 "
                  key={project.id}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[170px] object-cover aspect-video rounded-t-xl"
                  />
                  <div className="h-[230px]  flex flex-col px-3 bg-gradient-to-r from-violet-200 to-fuchsia-200 rounded-b-xl">
                    <h1 className="text-center text-xl font-bold tracking-wider my-2">{project.name}</h1>
                    <p className="">{project.description}</p>
                    <span className="my-2 font-bold">{`Tech Stack: ${project.techStack}`}</span>
                    <div className="flex gap-2 items-center">
                      <span>
                        <FaLink />
                      </span>
                      <Link to={project.projectLink} className="font-semibold hover:underline duration-150">Live Preview</Link>
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

export default Project;
