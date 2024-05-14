import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to("#white_box", {
      x: 240,
      yoyo: true,
      repeat: -1,
      duration: 1,
      background: "black",
      ease: "power2",
      rotation: 360,
    });

    tl.to("#white_box", {
        scale:.8,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "power2",
      })

    tl.to("#white_box", {
      x: 500,
      yoyo: true,
      duration: 2,
      background: "white",
      ease: "bounce",
    });
  }, []);

  const handleBtn = () => {
    if(tl.paused()){
        tl.play()
    }else{
        tl.pause()
    }
  };

  return (
    <>
      <p>
        <code>
          <b>gsap.timeline()</b>
        </code>{" "}
        method used to create a timeline insatance that can be used to manage
        multiple animations.
      </p>
      <button onClick={handleBtn} style={{ height: "30px", width: "10%" }}>
        Play/Pause
      </button>
      <div id="white_box"></div>
    </>
  );
};

export default GsapTimeline;
