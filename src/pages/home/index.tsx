import React from "react"
import Hero from "./sections/hero"
import Projects from "./sections/projects"
import About from "./sections/about"
import Skills from "./sections/skills"
import Contact from "./sections/contact"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default Home
