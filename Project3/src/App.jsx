import gsap from "gsap";
import { useState } from "react";

const App = () => {

  const [view,setView]=useState('')

  function moved(e) {
    gsap.to(".cursor", {
      x: e.pageX + 5,
      y: e.pageY + 20,
      ease: "expo.out",
      duration:1,
      boxShadow: "0 0 10px 2px yellow",
    });
  }

  function enter(){
    setView('View')
      gsap.to('.cursor',{
        scale:3
      })
  }

  function leave(){
    setView('')
    gsap.to('.cursor',{
      scale:1
    })
  }

  return (
    <>
      <div className="cursor">{view}</div>
      <main onMouseMove={moved}>
        <div id="image">
        <img onMouseEnter={enter} onMouseLeave={leave} src="https://images.unsplash.com/photo-1715704698525-6581ceb2d32f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="simple Img" />
        </div>
      </main>
    </>
  );
};

export default App;
