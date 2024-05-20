import gsap from "gsap";
import { useState } from "react";

const App = () => {
  // here M 10 80 
  // width 190 - so where will be 10
  // height 160 - so where will be 80  - middle of svg 

  const [initialValue,setInitialValue]=useState('M 10 80 Q 500 80 990 80')

  function moved(e){
    setInitialValue(`M 10 80 Q ${e.clientX+10} ${e.clientY} 990 80`)
    gsap.to('svg path',{
        attr:{d:initialValue},
        duration:.5,
        ease:'power3.out',
    })
  }

  function out(){
   let finalPath='M 10 80 Q 500 80 990 80'
    gsap.to('svg path',{
      attr:{d:finalPath},
      duration:.5,
      ease:'elastic'
  })
  }


  return (
    <div className="string" >
      <svg onMouseMove={moved} onMouseLeave={out} width="1000" height="160" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 80 Q 500 80 990 80" stroke="white" fill="transparent" />
      </svg>
    </div>
  );
};

export default App;
