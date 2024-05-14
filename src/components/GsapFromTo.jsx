import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapFromTo = () => {


    useGSAP(()=>{
        gsap.fromTo('#red_box',{
            x:0,
            borderRadius:0,
            background:'red'
        },
        {
            x:240,
            yoyo:true,
            repeat:-1,
            duration:1,
            background:'orange',
            ease:'power2',
            rotation:360,
            borderRadius:50
        })
    },[])

  return (
    <>
        <p><code><b>gsap.fromTo()</b></code> method used to animate element from both side as we want</p>
        <div id="red_box"></div>
    </>
  )
}

export default GsapFromTo