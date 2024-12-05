import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="md: pt-80  flex flex-col-reverse md:flex-row items-center justify-center gap-y-10 md:gap-x-20 py-20 md:py-40 h-screen">
      <div className="flex-shrink-0">
        <Image
          src="/Code.png"
          alt="Coding"
          width={1000}
          height={1000}
          className="w-60 h-60 md:w-96 md:h-96"
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-[#457B9D] text-[20px] md:text-[24px]">About</h3>
        <h1 className="text-[32px] md:text-[48px] font-bold">About Me?</h1>
        <p className="max-w-[300px] md:max-w-[500px] text-[#455A64] text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          obcaecati perferendis culpa cumque ipsum molestias. Labore cumque
          perferendis cupiditate, ratione repellendus officiis, at eius qui in
          obcaecati eos aut facilis. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Soluta, alias quibusdam perspiciatis quam quos
          tempore doloribus consectetur eum perferendis quisquam, obcaecati,
          optio hic natus blanditiis illum! Fuga, deleniti doloremque. Quo.
        </p>
      </div>
    </div>
  );
}

export default About;
