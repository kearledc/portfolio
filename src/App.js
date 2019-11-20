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
    setComponent('project')
  }

  
  if(showComponent === "about") {
    return (
      <div>
        <Hero size="fullheight" color="info" gradient>
          <Hero.Body>
              <About />              
          </Hero.Body>
          <HeroFooter />   
        </Hero>
      </div>
    );
  }

  else if(showComponent === "contact"){
    return (
      <div>
        <Hero size="fullheight" color="dark" gradient>
         
          <Hero.Body>         
              <Contact />           
          </Hero.Body>
          <HeroFooter />   
          
        </Hero>
      </div>
    );
  }
  
  else if(showComponent === "projects"){
    return (
      <div>
        <Hero size="fullheight" color="primary" gradient>
          <Hero.Body>
              <Projects />
          </Hero.Body>
          <HeroFooter />   
      
        </Hero>
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