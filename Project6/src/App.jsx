import About from "./components/About"
import Eyes from "./components/Eyes"
import FeaturedProjects from "./components/FeaturedProjects"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className="min-h-screen w-full bg-[#F1F1F1] text-white">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <FeaturedProjects/>
      <Footer/>
    </main>
  )
}

export default App