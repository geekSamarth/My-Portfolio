import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div className="bg-[#010B13] w-full text-white py-2 flex justify-center items-center border-t border-[rgba(255,255,255,0.3)]">
      <span className="font-semibold text-center md:tracking-wider text-xs md:text-base">
      Designed and built by <strong className="footer_text__gradient">Samarth Goyal</strong> with <strong className="footer_text__gradient">Love</strong> & <strong className="footer_text__gradient">Coffee</strong>
      </span>
    </div>
  );
};

export default Footer;
