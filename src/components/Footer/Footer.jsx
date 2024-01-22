import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#010B13] w-full text-white py-3.5 flex justify-center items-center border-t border-[rgba(255,255,255,0.4)]">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-5 justify-center items-center text-2xl md:text-[20px]">
          <Link
            to={"https://github.com/geekSamarth"}
            className="hover:scale-110 duration-300 ease-in-out hover:text-violet-600 "
          >
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/samarth-goyal-0486401b2/"}
            className="hover:scale-110 duration-300 ease-in-out hover:text-violet-600 "
          >
            <FaLinkedin />
          </Link>
          <Link
            to={"https://www.instagram.com/_samarth_agrawal1/"}
            className="hover:scale-110 duration-300 ease-in-out hover:text-violet-600 "
          >
            <BsInstagram />
          </Link>
          <Link
            to={"https://www.hackerrank.com/profile/samarthagrawal11"}
            className="hover:scale-110 duration-300 ease-in-out hover:text-violet-600 "
          >
            <FaHackerrank />
          </Link>
        </div>
        <div className="font-semibold tracking-wider text-xs md:text-base">
          &copy; 2024 Samarth Goyal. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
