import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skill";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      
       <Navbar></Navbar>
       <Hero></Hero>
       <About></About>
       <Projects></Projects>
       <Skills></Skills>
       <Contact></Contact>
       <Footer></Footer>
       


    </div>
  );
}

export default App;
