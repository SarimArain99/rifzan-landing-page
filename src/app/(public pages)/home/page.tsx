import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#EBFEFF] p-6 md:p-20 items-center justify-center pt-20 md:pt-44 gap-y-10 md:gap-y-0">
      <div className="flex flex-col gap-y-3 text-center md:text-left items-center md:items-start">
        <h2 className="text-[#457B9D] text-[18px] md:text-[24px]">Hi Everyone, I am</h2>
        <h1 className="font-bold text-[36px] md:text-[48px]">Rizfan Herlaya</h1>
        <p className="max-w-xs md:max-w-md text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Vitae maecenas pellentesque tellus tempus purus integer nisi cras fermentum.
        </p>
        <div className="flex items-center gap-x-4 md:gap-x-10 justify-center md:justify-start px-0 md:px-20 mt-4">
          <button className="flex bg-[#457B9D] text-white gap-x-2 py-2 px-4 md:p-3 items-center justify-center rounded-lg">
            Download CV{" "}
            <Image
              src="/CV.png"
              alt="CV"
              width={1000}
              height={1000}
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </button>
          <button className="border border-[#457B9D] py-2 px-4 md:p-3 bg-[#457B9D1A] rounded-lg">
            Explore More
          </button>
        </div>
      </div>

      <div className="flex justify-center md:mt-24">
        <div className="relative w-[300px] h-[250px] md:w-[479px] md:h-[390px] bg-[#457B9D] rounded-3xl flex justify-center items-end">
          <Image
            src="/profile.png"
            alt="Profile"
            width={1000}
            height={1000}
            className="absolute bottom-0 w-[270px] h-[350px] md:w-[405px] md:h-[524px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
