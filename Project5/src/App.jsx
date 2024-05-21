import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const App = () => {
  const box = useRef();

  const [valueX, setValueX] = useState(0);

  const random = gsap.utils.random(-500, 500, 100);

  useGSAP(() => {
    gsap.to(box.current, {
      x: valueX,
      duration:1
    });
  }, [valueX]);

  return (
    <main>
      <button onClick={() => setValueX(random)}>Animate</button>
      <div className="move" ref={box}></div>
    </main>
  );
};

export default App;
