import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Header } from "../index";
import { Footer } from "../index";
import "../../App.css";
function Layout() {
  return (
    <main className="">
      <Header />
      <section className="outlet__bg">
        <Container>
          <Outlet />
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
