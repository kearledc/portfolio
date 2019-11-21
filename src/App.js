import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import HeroFooter from "./component/HeroFooter";
import { Hero, Navbar, Container, Heading } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

function App() {
  const [showComponent, setComponent] = useState("landing");

  const landingClick = () => {
    setComponent("landing");
  };

  const aboutClick = () => {
    setComponent("about");
  };

  const contactClick = () => {
    setComponent("contact");
  };

  const projectClick = () => {
    setComponent("projects");
  };

  if (showComponent === "about") {
    return (
      <div>
        <Hero color="dark" gradient>
          <HeroFooter
            about={aboutClick}
            projects={projectClick}
            contact={contactClick}
          />
        </Hero>
        <About />

        {/* yung about={aboutClick} <- rinereference natin yung aboutclick sa herofooter.js same din yan sa projects and contact*/}
      </div>
    );
  } else if (showComponent === "contact") {
    return (
      <div>
        <Hero color="dark" gradient>
          <HeroFooter
            about={aboutClick}
            projects={projectClick}
            contact={contactClick}
          />
        </Hero>
        <Contact />
      </div>
    );
  } else if (showComponent === "projects") {
    return (
      <div>
        <Hero color="dark">
          <HeroFooter
            about={aboutClick}
            projects={projectClick}
            contact={contactClick}
          />
        </Hero>
        <Projects />
      </div>
    );
  } else if (showComponent === "landing") {
    return (
      <div>
        <Hero color="dark" gradient>
          <HeroFooter
            about={aboutClick}
            projects={projectClick}
            contact={contactClick}
          />
        </Hero>
        <Hero.Body className="containerBG">
          <Container className="has-text-centered">
            <Heading size={1}>
              <h1 className="heading-text animated rotateInUpLeft landingHeader">
                Kevin Earle Cruz
              </h1>
            </Heading>
            <Heading className="landingDesc animated rotateInUpRight">
              Web Developer Portfolio
            </Heading>

            <p className="smallFont">Liit nito nabasa mo pa? Hire me Please</p>
          </Container>
        </Hero.Body>
      </div>
    );
  }

  return null;

  // return (
  //   <div>
  //     <Hero size="fullheight" color="dark" gradient>
  //       <Hero.Body>
  //           <About />
  //           <Contact />
  //           <Projects />
  //       </Hero.Body>
  //     </Hero>
  //   </div>
  // );
}

export default App;
