import React from "react";
import { FaArrowUp } from "react-icons/fa";
function Education() {
  return (
    <section className="flex flex-col justify-center items-center mt-16 text-white mx-2 md:mx-0">
      <h1 className="mb-3 font-bold text-5xl">Education </h1>
      <p className="text-2xl  w-full max-w-xl text-center leading-8">
        My Education has been a journey of self-learning and growth. Here is my
        educational details.
      </p>
      <div className="w-full max-w-2xl rounded-lg border-[1px] border-violet-700 experience__box__shadow py-4 px-3 md:px-5 mt-12 hover:-translate-y-1.5 duration-500 ease-in-out cursor-pointer">
        <div className="flex gap-4 items-start md:items-center">
          <div className=" md:w-[65px] md:h-[65px] w-[35%]">
            <img
              src={"./aktu_logo.png"}
              alt="aktu logo"
              className=" rounded-xl w-full object-fit "
            />
          </div>
          <div className="flex flex-col  tracking-tight">
            <h2 className="text-[18px] md:text-xl font-bold text-[rgba(255,255,255,0.8)]">
              Dr. A.P.J. Kalam Technical University, Lucknow
            </h2>
            <p className="text-[16px] md:text-base text-[rgba(255,255,255,0.75)]">
              Bachelor of Technology - BTech, Computer Science and Engineering
            </p>
            <p className="text-xs md:text-sm text-[rgba(255,255,255,0.65)] tracking-wider">
              Aug 2019 - June 2023
            </p>
          </div>
        </div>
        {/* <span className="mt-4 block font-bold text-lg">Aggregate: 85.1%</span> */}
        <p className="my-3 leading-6  text-[rgba(255,255,255,0.8)]">
          I have completed my Bachelor's degree in Computer Science and
          Engineering at AKTU Lucknow with the aggregate of 85.1%. I have done
          courses in Data Structures and Algorithms, Computer Networking, Design
          and Analysis of Algorithm, Database Management System etc. with among
          others.
        </p>
      </div>
      <span className=" mt-5">
        <FaArrowUp color="white" size={40} />
      </span>
      <div className="w-full max-w-2xl rounded-lg border-[1px] border-violet-700 experience__box__shadow py-4 px-3 md:px-5 mt-8 hover:-translate-y-1.5 duration-500 ease-in-out cursor-pointer">
        <div className="flex gap-4 items-center">
          <div className=" w-[65px] h-[65px]">
            <img
              src={"./cbse_logo.png"}
              alt="cbse logo"
              className=" rounded-xl w-full object-fit "
            />
          </div>
          <div className="flex flex-col  tracking-tight">
            <h2 className="text-[18px] md:text-xl text-[rgba(255,255,255,0.8)] font-bold">
              R.P.M. Public School, Hathras
            </h2>
            <p className="text-base text-[rgba(255,255,255,0.75)] mb-0.5">
              CBSE (XII), Science with Computer
            </p>
            <p className="text-xs md:text-sm text-[rgba(255,255,255,0.65)] tracking-wider">
              April 2018 - April 2019
            </p>
          </div>
        </div>
        {/* <span className="mt-4 block font-bold text-lg">Aggregate: 84.4%</span> */}
        <p className="my-3 leading-6  text-[rgba(255,255,255,0.8)]">
          I have completed my class 12 education from R.P.M. Public School,
          Hathras where I studied Science with Computer Science as an optional
          subject.
        </p>
      </div>
      <span className=" mt-5">
        <FaArrowUp color="white" size={40} />
      </span>
      <div className="w-full max-w-2xl rounded-lg border-[1px] border-violet-700 experience__box__shadow py-4 px-3 md:px-5 mt-8 hover:-translate-y-1.5 duration-500 ease-in-out cursor-pointer">
        <div className="flex gap-4 items-center">
          <div className=" w-[65px] h-[65px]">
            <img
              src={"./cbse_logo.png"}
              alt="cbse logo"
              className=" rounded-xl w-full object-fit "
            />
          </div>
          <div className="flex flex-col  tracking-tight">
            <h2 className="text-[18px] md:text-xl text-[rgba(255,255,255,0.8)] font-bold">
              R.P.M. Public School, Hathras
            </h2>
            <p className="text-base text-[rgba(255,255,255,0.75)] mb-0.5">
              CBSE (X), General
            </p>
            <p className="text-xs md:text-sm text-[rgba(255,255,255,0.65)] tracking-wider">
              April 2016 - March 2017
            </p>
          </div>
        </div>
        {/* <span className="mt-4 block font-bold text-lg">Aggregate: 9.0 CGPA</span> */}
        <p className="my-3 leading-6  text-[rgba(255,255,255,0.8)]">
          I have completed my class 10 high school education from R.P.M. Public
          School, Hathras where I studied all general subjects.
        </p>
      </div>
    </section>
  );
}

export default Education;
