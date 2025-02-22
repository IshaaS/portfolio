import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Contact from './Components/ContactMe/Contact'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
    </div>
  )
}

export default App