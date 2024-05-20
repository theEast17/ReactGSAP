import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

const App = () => {
 
  useGSAP(()=>{
    gsap.to('.first h1',{
      y:-100,
      duration:1
    })
    gsap.to('.second h1',{
      transform:'translateX(-52%)',
      duration:2,
      scrollTrigger:{
        trigger:'.second',
        scroller:'body',
        markers:true,
        start:'top 0%',
        end:'top -150%',
        scrub:2,
        pin:true
      }
    })
  },[])
 
  return (
    <>
    <div className="first">
      <h1>Poorv Nagar</h1>
    </div>
    <div className="second"><h1>Experience</h1></div>
    <div className="third"><h1>
      Well</h1></div>
    </>
  )
}

export default App