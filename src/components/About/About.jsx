import React from "react";
import Typewriter from "typewriter-effect";
import profilePicture from "../../assets/Samarth Profile Picture.png";
function About() {
  return (
    <section className="pt-32 flex flex-col-reverse gap-10 lg:flex-row justify-between items-center px-4 text-white">
      <div className="w-full md:w-[80%] lg:w-[50%] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide ">
          Hi, I am
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mt-3">
          Samarth Goyal
        </h1>
        <span className="flex justify-center md:justify-start mt-6 text-2xl md:text-4xl font-semibold ">
          <h2 className="mr-3">I am a </h2>
          <span className="text-fuchsia-700">
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
          href="https://drive.google.com/file/d/1uCtOfQsl3LOsk8VHkVDL3uzn3DvVwAcZ/view?usp=sharing"
          target="_blank"
          className=" flex justify-center w-full md:w-[280px] px-10 py-3.5 rounded-xl text-xl font-semibold bg-gradient-to-r from-fuchsia-600 to-violet-600 mt-4"
        >
          My Resume
        </a>
      </div>
      <div className="w-full md:w-[70%] lg:w-[40%]">
        <img
          src={profilePicture}
          alt="profile picture"
          className="w-full object-fit rounded-full border-[3px] border-violet-700  image_shadow "
        />
      </div>
    </section>
  );
}

export default About;
