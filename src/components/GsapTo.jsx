import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapTo = () => {


    useGSAP(()=>{
        gsap.to('#blue_box',{
            x:240,
            yoyo:true,
            repeat:-1,
            duration:1,
            background:'yellow',
            ease:'power2',
            rotation:360
        })
    },[])

  return (
    <>
        <p><code><b>gsap.to()</b></code> method used to animate element from current state to new state</p>
        <div id="blue_box"></div>
    </>
  )
}

export default GsapTo