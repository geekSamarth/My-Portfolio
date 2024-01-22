import React from "react";
// import CompanyLogo from "../../assets/FirstStore_logo.png";
function Experience() {
  return (
    <section className="flex flex-col justify-center items-center mt-16 text-white mx-2 md:mx-0">
      <h1 className="mb-3 font-bold text-5xl">Experience </h1>
      <p className="text-xl md:text-2xl  w-full max-w-xl text-center leading-8">
        My Work Experience as a frontend developer and working in companies and
        projects.
      </p>

      <div className="bg-[rgb(24,24,31)] w-full max-w-2xl rounded-lg border-[1px] border-violet-700 experience__box__shadow py-4 px-5 my-12 hover:-translate-y-1.5 duration-500 ease-in-out cursor-pointer">
        <div className="flex gap-4 items-center">
          <div className="bg-white rounded-lg w-[65px] h-[65px] flex justify-center items-center">
            <img
              src={"./FirstStore_logo.png"}
              alt="company logo"
              className="w-[70%]  object-fit  mix-blend-difference"
            />
          </div>
          <div className="flex flex-col gap-0.5 tracking-wider">
            <h1 className="text-[17px] md:text-xl text-[rgba(255,255,255,0.8)] font-bold">
              Frontend Developer Intern
            </h1>
            <p className="text-base md:text-lg text-[rgba(255,255,255,0.75)]">
              FirstStore
            </p>
            <p className="text-sm text-[rgba(255,255,255,0.65)] tracking-wider">
              Sept 2023 - Present
            </p>
          </div>
        </div>
        <p className="my-4 leading-6 tracking-wide font-medium text-[rgba(255,255,255,0.9)]">
          Working on FirstStore platforms, managing Frontend development and its
          related task with their team.
        </p>
        <div className="flex gap-4 ">
          <span className="font-bold text-lg">Skills:</span>
          <ul className="flex flex-wrap gap-2  items-center font-medium tracking-wider">
            <li>ReactJS,</li>
            <li>Redux Toolkit,</li>
            <li>React Query,</li>
            <li>TailwindCSS,</li>
            <li>HTML,</li>
            <li>CSS,</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
