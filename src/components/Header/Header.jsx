import React from "react";
import { navLinks } from "../../data/navLinks";
import { FaFingerprint } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-4 border-b border-[rgba(255,255,255,0.3)] px-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-2 ml-6 text-[#00FF40]">
        <span className="p-1.5 rounded-full border border-[#00FF40] text-xl">
          <FaFingerprint color="#00FF40" />{" "}
        </span>
        <p className=" font-semibold text-xl ">Portfolio</p>
      </div>
      <div className="md:mr-16">
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => {
            return (
              <NavLink key={link.id} to={link.path}>
                <li>{link.title}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
