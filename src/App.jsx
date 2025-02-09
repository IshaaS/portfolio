import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Contact from './Components/ContactMe/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Contact />
    </div>
  )
}

export default App