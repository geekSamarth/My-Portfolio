import React from "react";
import {
  Container,
  Header,
  Footer,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
} from "../index";
import { Element } from "react-scroll";
import "../../App.css";
function Layout() {
  return (
    <main>
      <Header />
      <section className="outlet__bg">
        <Container>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="education">
            <Education />
          </Element>
          <Contact />
        </Container>
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
