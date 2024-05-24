const Footer = () => {

    let data=['Ready',' to start','the project?']
  return (
    <footer className="min-h-screen bg-[#CDEA68] w-full flex flex-col justify-center items-center">
        <div className="mb-10">
            {data.map((text)=>(
                <h1 key={text} className="text-[220px] text-center font-founders tracking-normal leading-[13vw] px-12 font-semibold uppercase text-black">
                {text}
              </h1>
            ))}
        </div>

        <div className="flex flex-col gap-4 justify-center items-center text-white pb-6">
        <div className="bg-zinc-800 w-[215px] text-sm flex justify-between items-center px-5 py-4 rounded-full">
          <span className="inline-block">START THE PROJECT</span>
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
        <h1>OR</h1>
        <div className="bg-transparent text-black border border-zinc-700 w-[215px] text-sm flex justify-between items-center px-5 py-4 rounded-full">
          <span className="inline-block">HELLO@OCHI.DESiGN</span>
          <div className="h-2 w-2 rounded-full bg-black"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

