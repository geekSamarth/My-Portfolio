import React from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header__bg text-white flex justify-between items-center px-5 md:px-10 py-3.5 fixed top-0 w-full z-10  border-b-[1px] border-[rgba(255,255,255,0.4)] ">
      <button onClick={scrollToTop} className="font-semibold text-lg">
        <img src={"./Logo.png"} alt="logo" className="w-9 object-fit   " />
      </button>
      <nav className="hidden lg:flex lg:items-center">
        <ul className="lg:flex gap-8 items-center px-auto text-white ">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:border-b-[1px] text-lg p-1 duration-100 transition-all ease-in-out font-medium "
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:border-b-[1px] text-lg p-1 duration-100 transition-all ease-in-out font-medium "
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:border-b-[1px] text-lg p-1 duration-100 transition-all ease-in-out font-medium "
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:border-b-[1px] text-lg p-1 duration-100 transition-all ease-in-out font-medium "
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:border-b-[1px] text-lg p-1 duration-100 transition-all ease-in-out font-medium "
            >
              Education
            </Link>
          </li>
          <NavLink
            to="https://github.com/geekSamarth"
            target="_blank"
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center gap-2.5 tracking-wider rounded-lg px-8 py-1.5 font-semibold text-lg ml-4"
          >
            <span>
              <FaGithub size={22} />
            </span>
            Github
          </NavLink>
        </ul>
      </nav>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none duration-700 ease-in-out font-semibold"
        >
          {menuOpen ? <RxCross2 size={28} /> : <RiMenu3Fill size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-[63px] md:top-[62px] left-0 w-full  duration-700 ease-in-out">
          <nav className="">
            <ul className="h-[400px] md:h-[600px] text-lg md:text-xl flex flex-col justify-center gap-7 py-10 items-center  px-auto text-white font-semibold   bg-[rgba(20,12,29,0.98)] w-full rounded-b-[10%]   ">
              <li className="hover:scale-125 hover:border-b">
                <Link to="about" smooth={true} duration={500} className="p-1">
                  About
                </Link>
              </li>
              <li className="hover:scale-125 hover:border-b duration-300 ease-in-out">
                <Link to="skills" smooth={true} duration={500} className="p-1">
                  Skills
                </Link>
              </li>
              <li className="hover:scale-125 hover:border-b duration-300 ease-in-out">
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="p-1"
                >
                  Experience
                </Link>
              </li>
              <li className="hover:scale-125 hover:border-b duration-300 ease-in-out">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="p-1"
                >
                  Projects
                </Link>
              </li>
              <li className="hover:scale-125 hover:border-b duration-300 ease-in-out">
                <Link
                  to="education"
                  smooth={true}
                  duration={500}
                  className="p-1"
                >
                  Education
                </Link>
              </li>

              <NavLink
                to="https://github.com/geekSamarth"
                target="_blank"
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg px-16 py-2.5 mt-3"
              >
                Github
              </NavLink>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
