import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <main className=" min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout;
