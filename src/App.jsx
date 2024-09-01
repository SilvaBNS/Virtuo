import FeatureSection from "./components/FeatureSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Workflow from "./components/Workflow"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <Products/>
        <FeatureSection/>
        <Workflow/>
      </div>
      
    </>
  )
}

export default App