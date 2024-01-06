import React from "react";
import { Outlet } from "react-router-dom";
import {Header} from "../index";
import {Footer} from "../index";
import "../../App.css"
function Layout() {
  return (
    <main className=" min-h-screen">
      <Header />
      <section className="bg-[#001524]"><Outlet /></section>
      <Footer />
    </main>
  );
}

export default Layout;
