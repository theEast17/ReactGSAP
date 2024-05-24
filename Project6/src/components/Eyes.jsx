import { useEffect } from "react";
import RepeatEye from "../EyeComponent/RepeatEye";
import { useState } from "react";


const Eyes = () => {

    const [rotate,setRotate]=useState(0)

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            let mouseX=e.clientX;
            let mouseY=e.clientY;

            let deltaX=mouseX-window.innerWidth/2
            let deltaY=mouseY-window.innerHeight/2

            let angle=Math.atan2(deltaY,deltaX) * (180/Math.PI)
            setRotate(angle-180)
        })
    },[])

  return (
    <section className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed='-.7' className="w-full h-full bg-cover flex items-center justify-center gap-10 bg-center relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <RepeatEye rotate={rotate}/>
        <RepeatEye rotate={rotate}/>
      </div>
    </section>
  );
};

export default Eyes;
