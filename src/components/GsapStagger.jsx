import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapStagger = () => {


    useGSAP(()=>{
        gsap.to('.pink_box',{
            y:50,
            yoyo:true,
            repeat:-1,
            duration:1,
            stagger:{
                amount:1,
                grid:[2,1],
                from:'center'
            },
            scale:.7,
            ease:'power2',
            rotation:360
        })
    },[])

  return (
    <>
        <p><code><b>gsap.stagger()</b></code> method used to allow you to apply animations with a staggered delay to a group of elements </p>
        <div className="box">
        <div className="pink_box"></div>
        <div className="pink_box"></div>
        <div className="pink_box"></div>
        <div className="pink_box"></div>
        <div className="pink_box"></div>
        </div>
    </>
  )
}

export default GsapStagger