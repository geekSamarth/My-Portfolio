import React from "react";
import Typewriter from "typewriter-effect";
// import profilePicture from "../../assets/Samarth_Profile_Picture.png";
// import Resume from "../../assets/Samarth_Resume.pdf";
function About() {
  return (
    <section className="pt-28 md:pt-24 flex flex-col-reverse gap-10 lg:flex-row justify-between items-center px-4 text-white">
      <div className="w-full md:w-[80%] lg:w-[50%] text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide ">
          Hi, I am
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mt-2.5">
          Samarth Goyal
        </h1>
        <span className="flex justify-center lg:justify-start mt-6 text-2xl md:text-4xl font-semibold ">
          <h2 className="mr-3">I am a </h2>
          <span className="text-fuchsia-600">
            <Typewriter
              options={{ loop: true, autoStart: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Programmer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Web Designer")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </span>
        <p className="my-6 text-xl leading-8 text-center md:text-left text-[rgba(255,255,255,0.75)] w-full md:w-[95%]">
          Welcome to my digital space! I'm a passionate and versatile frontend
          developer dedicated to crafting innovative solutions that bring ideas
          to life. I create visually stunning and highly responsive web
          applications. Explore my work, where aesthetics meet seamless user
          experiences, I thrive on turning challenges into opportunities.
        </p>
        <a
          href={"./Samarth_Resume.pdf"}
          download="Samarth_Resume.pdf"
          className=" flex justify-center w-full md:w-[280px] md:mx-auto lg:mx-0 px-10 py-3.5 rounded-xl text-xl font-semibold bg-gradient-to-r from-fuchsia-600 to-violet-600 mt-4"
        >
          My Resume
        </a>
      </div>
      <div className="w-full md:w-[70%] lg:w-[40%]">
        <img
          src={"./Samarth_Profile_Picture.png"}
          alt="profile picture"
          className="w-full object-fit rounded-full border-[3px] border-violet-700  image_shadow hover:-rotate-2 duration-500 ease-in-out profile_picture"
        />
      </div>
    </section>
  );
}

export default About;
