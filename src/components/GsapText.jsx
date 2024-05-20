import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapText = () => {
    useGSAP(()=>{
        gsap.to('h4',{
            ease:'circ',
            opacity:1,
            duration:2,
            x:200,
            yoyo:true,
            repeat:-1
        })
    },[])
  return (
    <>
    <h4>Hello Poorv</h4>
    </>
  )
}

export default GsapText