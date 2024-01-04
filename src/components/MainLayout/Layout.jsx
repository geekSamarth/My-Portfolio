import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <main className="bg-[#0F1624] w-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
