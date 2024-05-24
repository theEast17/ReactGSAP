import React, { useState } from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const HomeSectionCarosel = ({Data,SectionName}) => {
  const[activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5},
    
  };
  const slidePrev=()=>setActiveIndex(activeIndex-1)
  const slideNext=()=>setActiveIndex(activeIndex+1);
  

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = Data.slice(1,10).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className=" border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{SectionName}</h2>
      <div className="relative p-5">
      <AliceCarousel
        items={items}
        // disableButtonsControls
        responsive={responsive}
        disableDotsControls
         onSlideChanged={syncActiveIndex}
         activeIndex={activeIndex}
      />
    
    { activeIndex!==items.lenghth-5 && <Button variant="contained" className="z-50 bg-white" onClick={slideNext}
    sx={{position:"absolute",top:"8rem",
    right:"0rem",transform:"translateX(50%) rotate(90deg)",bgcolor:"white",}} 
    aria-label="next">
      <ChevronLeftIcon 
      sx={{transform:"rotate(90deg)",color:"black"}}/>
    </Button>}

      {activeIndex!==0 && <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" 
      sx={{position:'absolute',top:"8rem",
      left:"0rem",transform:"translateX(-50%) rotate(-90deg)",bgcolor:"white",}} 
      aria-label="next">
        <ChevronLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
      </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;