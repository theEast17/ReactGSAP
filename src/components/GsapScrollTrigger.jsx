import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTrigger = () => {

    const scrollRef=useRef()
    const tl = gsap.timeline();

    useGSAP(()=>{
        const boxes=gsap.utils.toArray(scrollRef.current.children)
        boxes.forEach((box)=>{
            tl.to(box,{
                x:550,
                rotation:360,
                duration:2,
                yoyo:true,
                borderRadius:'100%',
                scrollTrigger:{
                    trigger:box,
                    scrub:true,
                    ease:'power'
                }
            })
            tl.to(box,{
                x:1000,
                rotation:360,
                yoyo:true,
                borderRadius:'0%',
                scrollTrigger:{
                    trigger:box,
                    scrub:true,
                    ease:'power.inOut'
                }
            })
        })
    },{scope:scrollRef})


 

  return (
    <>
      <p>
        <code>
          <b>gsap.scrollTrigger()</b>
        </code>
        is plugin that allows you to create animations that are triggered by the
        scroll positions of the page.
      </p>
      <section ref={scrollRef}>
        <div id="purple_box"></div>
        <div id="lightgreen_box"></div>
      </section>
    </>
  );
};

export default GsapScrollTrigger;
