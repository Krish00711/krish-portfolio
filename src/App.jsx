import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"
import Getting from "./components/Getting.jsx"
import NavBar from "./components/navBar"
import Pic from "./components/Pic.jsx"
import Skills from "./components/Skills.jsx"
import Add from "./components/Add.jsx"
import Projects from "./components/Projects.jsx"
import End from "./components/End.jsx"

function App() {
  return (
    <div className="bg-black overflow-x-hidden h-screen m-0 p-0">

    <NavBar/>

    <div className="w-full h-px bg-white opacity-20"></div>
    <Pic/>
    <Getting/>
    <br/>
    <div className="w-full h-px bg-white opacity-20"></div>
    <About/>
    <Detail/>
    <Skills/>
    <Add/>
    <Projects/>
    <End/>


    </div>
  )
}

export default App