import About from "./component/About/About"
import Banner from "./component/Banner/Banner"
import Navbar from "./component/Navbar/Navbar"
import Projects from "./component/Projects/Projects"
import Services from "./component/Services/Services"

function App() {

  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  )
}

export default App
