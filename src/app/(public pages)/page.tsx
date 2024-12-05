import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Skill from "./skill/page";
import Project from "./project/page";
import Contact from "./contact/page";

function page() {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default page;
