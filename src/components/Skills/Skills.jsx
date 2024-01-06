import React from "react";
import { Icon } from "@iconify/react";
function Skills() {
  return (
    <>
      <section className="h-screen flex flex-col   ">
        <h1 className="text-xl md:text-4xl font-bold pt-10 mb-3 text-white">
          Tech Stack
        </h1>
        <p className="text-2xl  text-[rgba(255,255,255,0.75)] mb-20 pl-2">
          Technolgies I've been working with recently
        </p>
        <div className="flex justify-content items-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-14 md:mx-20">
            <span className="text-6xl md:text-8xl ">
              <Icon icon="devicon:c" />
            </span>
            <span className="text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-cpp3" />
            </span>
            <span className="text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-html" />
            </span>
            <span className="text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-css" />
            </span>
            <span className="text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-js-official" />
            </span>
            <span className="text-6xl md:text-7xl">
              <Icon icon="logos:tailwindcss-icon" />
            </span>
            <span className="text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-reactjs" />
            </span>
            <span className="text-6xl md:text-7xl">
              <Icon icon="skill-icons:redux" />
            </span>
            <span className="text-6xl md:text-7xl">
              <Icon icon="logos:mysql" />
            </span>
            <span className="text-6xl md:text-7xl">
              <Icon icon="devicon:git" />
            </span>
            <span className="text-6xl md:text-7xl">
              <Icon icon="devicon:github" />
            </span>
            <span className="text-6xl md:text-7xl">
              <Icon icon="devicon:vscode" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

