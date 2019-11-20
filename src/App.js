import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Contact from './component/Contact'
import Projects from './component/Projects';
import HeroFooter from './component/HeroFooter'
import { Hero, Navbar, Container, Heading } from "react-bulma-components"
import 'react-bulma-components/dist/react-bulma-components.min.css';


function App() {

  const [showComponent, setComponent] = useState("about")

  const landingClick = () => {
    setComponent('landing')
  }

  const aboutClick = () => {
    setComponent('about')
  }
  
  const contactClick = () => {
    setComponent('contact')
  }

  const projectClick = () => {
    setComponent('projects')
  }

  
  if(showComponent === "about") {
    return (
      <div>
        <Hero size="fullheight" color="info" gradient>
          <HeroFooter about={aboutClick} projects={projectClick} contact={contactClick}/>
          <Hero.Body>
              <About />              
          </Hero.Body>
             
        {/* yung about={aboutClick} <- rinereference natin yung aboutclick sa herofooter.js same din yan sa projects and contact*/}
        </Hero>
      </div>
    );
  }

  else if(showComponent === "contact"){
    return (
      <div>
        <Hero size="fullheight" color="dark" gradient>
          <HeroFooter about={aboutClick} projects={projectClick} contact={contactClick}/>  
          <Hero.Body>         
              <Contact />           
          </Hero.Body>
           
          
        </Hero>
      </div>
    );
  }
  
  else if(showComponent === "projects"){
    return (
      <div>
        <Hero color="primary">
          <HeroFooter about={aboutClick} projects={projectClick} contact={contactClick}/>     
        </Hero>
        <Projects />  
      </div>
    );
  }

  else if(showComponent === "landing"){
    return (
      <div>
        <Hero size="fullheight" color="dark" gradient>
          <Hero.Body>
            <Container className="has-text-centered">
              <Heading size={1}>
                <h1 className="heading-text">Earle Cruz</h1>
              </Heading>
              <Heading>
                Web Developer Portfolio
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
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
