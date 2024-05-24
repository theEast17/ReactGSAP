import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <section data-scroll data-scroll-section data-scroll-speed='.2' className="bg-[#004D43] py-10 pb-4 rounded-tl-3xl rounded-tr-3xl w-full">
      <div className="overflow-hidden border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="text-[367px] font-founders leading-none font-bold"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="text-[367px] font-founders leading-none font-bold pl-24"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </section>
  );
};

export default Marquee;
