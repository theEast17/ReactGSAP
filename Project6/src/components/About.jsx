const About = () => {
  return (
    <section className="h-full bg-[#CDEA68] rounded-3xl px-12 pt-28 text-black">
      <p className="font-montreal text-[52px] font-normal leading-none pb-20">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to <u>raise funds</u>, <u>sell products</u>,{" "}
        <u>explain complex ideas</u>, and <u>hire great people</u>.
      </p>
      <div className="grid grid-cols-2 border-t-[1px] text-base border-b-[1px] border-zinc-500 pt-4 pb-24">
        <p>What you can expect:</p>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-7">
            <p className="text-justify">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it&apos;s live or
              digital, delivered for one or a hundred people.
            </p>
            <p className="text-justify">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex justify-end flex-col gap-3 ml-28">
            <p className="text-start">S:</p>
            <div>
              {["Instagram", "Behance", "Facebook", "LinkedIn"].map((text) => (
                <p key={text} className="underline">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 grid grid-cols-2 pb-12">
        <div>
          <h1 className="font-montreal mb-[20px] text-5xl font-medium">
            Our approach:
          </h1>
          <div className="bg-zinc-800 w-[170px] flex justify-between items-center text-white rounded-full px-5 py-4">
            <span className=" inline-block">READ MORE</span>
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="rounded-md flex justify-between">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="image of couple"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
