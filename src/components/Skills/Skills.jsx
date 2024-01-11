import React from "react";
import { Icon } from "@iconify/react";
function Skills() {
  return (
    <>
      <section className="h-full flex flex-col pt-16">
        <h1 className="text-5xl font-bold pt-10 mb-3 text-white text-center">Skills</h1>
        <p className="text-2xl  text-[rgba(255,255,255,0.75)] mb-6 md:mb-12 pl-2 text-center">
          Technolgies I've been working Recently.
        </p>
        <div className="flex items-center mt-5">
          <div className="flex flex-wrap justify-around md:justify-start items-center gap-5 md:gap-14 md:mx-6">
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-8xl p-2 ">
              <Icon icon="devicon:c" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-cpp3" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-html" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-css" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-js-official" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-7xl">
              <Icon icon="logos:tailwindcss-icon" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-8xl">
              <Icon icon="vscode-icons:file-type-reactjs" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-7xl">
              <Icon icon="skill-icons:redux" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-7xl">
              <Icon icon="logos:mysql" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-7xl">
              <Icon icon="simple-icons:appwrite" color="#db1a5a" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-7xl">
              <Icon icon="devicon:git" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-7xl">
              <Icon icon="akar-icons:github-fill" color="white" />
            </span>
            <span className="w-[130px] h-[120px] flex justify-center items-center border rounded-lg shadow-md shadow-[rgba(255,255,255,0.6)] text-6xl md:text-7xl">
              <Icon icon="devicon:vscode" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
