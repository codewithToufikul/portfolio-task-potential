import About from "./component/About/About"
import Banner from "./component/Banner/Banner"
import Navbar from "./component/Navbar/Navbar"

function App() {

  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar/>
      <Banner/>
      <About/>
    </div>
  )
}

export default App
