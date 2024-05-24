import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <section data-scroll data-scroll-section data-scroll-speed='-.3' className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-32 px-14">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((text1, i) => (
          <>
            <div className="masker font-founders flex" key={text1}>
              {i === 1 && (
                <motion.div
                  initial={{ width: 0, opacity: 0.4 }}
                  animate={{ width: "9vw", opacity: 1 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.4 }}
                  className="bg-red-600 mr-3 rounded-md relative top-[20.5px] h-[6.39vw] w-[9vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-center bg-cover"
                ></motion.div>
              )}
              <h1 className="text-9xl leading-[8.5vw]">{text1}</h1>
            </div>
          </>
        ))}
      </div>

      <div className="border-t-2 border-zinc-800 mt-40 px-14 py-2 flex justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((text, index) => (
          <div key={index} className="py-5 text-lg">
            {text}
          </div>
        ))}

        <div className="flex items-center gap-2">
          <button className="uppercase border-[1px] border-zinc-400 text-md rounded-full py-[6px] px-[10px] cursor-pointer">
            Start the Project
          </button>
          <span className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-zinc-400 cursor-pointer">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
