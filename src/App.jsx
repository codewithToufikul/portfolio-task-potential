import About from "./component/About/About"
import Banner from "./component/Banner/Banner"
import Navbar from "./component/Navbar/Navbar"
import Services from "./component/Services/Services"

function App() {

  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
    </div>
  )
}

export default App
