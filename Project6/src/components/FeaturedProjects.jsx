import { motion } from "framer-motion";
import { useState } from "react";

const FeaturedProjects = () => {
  let projectData = [
    {
      id: 1,
      company: "FYDE",
      img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
      service: ["Audit", "Copywriting", "sales deck", "slides Design"],
    },
    {
      id: 2,
      company: "WISE",
      img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
      service: ["Agency", "Company Presentation"],
    },
    {
      id: 3,
      company: "TRAWA",
      img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
      service: ["Brand identity", "design research", "investor deck"],
    },
    {
      id: 4,
      company: "PREMIUMBLEND",
      img: "	https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
      service: ["branded template"],
    },
  ];

  const [text, setText] = useState("");
  const [number, setNumber] = useState();
  const [isHover, setIsHover] = useState(false);

  function moved(index) {
    switch (index) {
      case 0:
        setText("FYDE");
        setNumber(0);
        setIsHover(true);
        break;
      case 1:
        setText("VISE");
        setNumber(1);
        setIsHover(true);
        break;
      case 2:
        setText("TRAWA");
        setNumber(2);
        setIsHover(true);
        break;
      case 3:
        setText("PREMIUMBLEND");
        setNumber(3);
        setIsHover(true);
        break;
    }
  }

  return (
    <section className="w-full pt-32 bg-zinc-500 rounded-tl-3xl rounded-tr-3xl pb-14">
      <h1 className="px-12 font-montreal text-5xl pb-16 leading-none">
        Featured projects
      </h1>
      <div className="border-t-zinc-100 border-t-[1px] pt-9 px-12 grid grid-cols-2 gap-x-4 gap-y-10 relative mb-10">
        {projectData.map((project, i) => (
          <div key={project.id} className="relative">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-4 w-4 rounded-full bg-white"></span>
              <h5 className="uppercase">{project.company}</h5>
            </div>

            <div className="mb-4 cursor-pointer relative">
              <img
                src={project.img}
                className="rounded-lg object-cover hover:scale-95 duration-700 transition-all"
                alt="pic of project"
                onMouseOver={() => moved(i)}
                onMouseLeave={() => {
                  setText("");
                  setIsHover(false);
                }}
              />
            </div>

            <div className="flex gap-3">
              {project.service.map((service) => (
                <p
                  key={service}
                  className="cursor-pointer border border-white rounded-full px-3 py-1 uppercase"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        ))}
        {(number === 0 || number === 1) && (
          <div className="z-20 h-[10%] absolute top-[25%] right-[40%] flex justify-center items-center">
            <motion.h1
              initial={{ y: "-20%" }}
              animate={isHover ? { y: "0%" } : { y: "-20%" }}
              transition={{ duration: 0.5 }}
              className="h-[120px] w-[120px] text-5xl text-[#CDEA68] font-semibold font-montreal"
            >
              {text}
            </motion.h1>
          </div>
        )}
        {number === 2 && (
          <div className="z-20 h-[10%] absolute top-[75%] right-[40%] flex justify-center items-center">
            <motion.h1
              initial={{ y: "-20%" }}
              animate={isHover ? { y: "0%" } : { y: "-20%" }}
              transition={{ duration: 0.5 }}
              className="h-[120px] w-[120px] text-5xl text-[#CDEA68] font-semibold font-montreal"
            >
              {text}
            </motion.h1>
          </div>
        )}
        {number === 3 && (
          <div className="z-20 h-[10%] absolute top-[75%] right-[60%] flex justify-center items-center">
            <motion.h1
              initial={{ y: "-20%" }}
              animate={isHover ? { y: "0%" } : { y: "-20%" }}
              transition={{ duration: 0.5 }}
              className="h-[120px] w-[120px] text-5xl text-[#CDEA68] font-semibold font-montreal"
            >
              {text}
            </motion.h1>
          </div>
        )}
      </div>

      <div className=" flex justify-center items-center text-white">
        <div className="bg-zinc-800 w-[215px] text-sm flex justify-between items-center px-5 py-4 rounded-full">
          <span className="inline-block">VIEW ALL CASE STUDIES</span>
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
