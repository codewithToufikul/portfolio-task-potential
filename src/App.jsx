import About from "./component/About/About"
import Banner from "./component/Banner/Banner"
import Contract from "./component/Contract/Contract"
import Footer from "./component/Footer/Footer"
import Navbar from "./component/Navbar/Navbar"
import Projects from "./component/Projects/Projects"
import Services from "./component/Services/Services"
import Testimonial from "./component/Testimonial/Testimonial"

function App() {

  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto">
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
    </div>
    <Testimonial/>
    <div className="max-w-[1400px] mx-auto">
      <Contract/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
