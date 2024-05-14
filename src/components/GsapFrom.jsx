import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapFrom = () => {

    useGSAP(()=>{
        gsap.from('#green_box',{
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
        <p><code><b>gsap.from()</b></code> method used to animate element from new state to current state</p>
        <div id="green_box"></div>
    </>
  )
}

export default GsapFrom