import Image from "next/image";
import React from "react";

function Skill() {
  return (
    <div className="bg-[#EBFEFF] flex items-center flex-col justify-center gap-y-5 py-20 min-h-screen">
      <h1 className="text-[#457B9D] text-[24px] md:text-[32px] font-semibold">
        Skills
      </h1>
      <h3 className="text-[28px] md:text-[48px] font-bold text-center">
        What I am capable of?
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-5 justify-center items-center">
        <Image
          src="/html.png"
          alt="HTML"
          width={1000}
          height={1000}
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <Image
          src="/CSS.png"
          alt="CSS"
          width={1000}
          height={1000}
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <Image
          src="/bootstrap.png"
          alt="Bootstrap"
          width={1000}
          height={1000}
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <Image
          src="/tailwindcss.png"
          alt="Tailwind CSS"
          width={1000}
          height={1000}
          className="h-10 w-20 md:h-12 md:w-24"
        />
        <Image
          src="/laravel.png"
          alt="Laravel"
          width={1000}
          height={1000}
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <Image
          src="/php.png"
          alt="PHP"
          width={1000}
          height={1000}
          className="h-16 w-16 md:h-20 md:w-20"
        />
      </div>
    </div>
  );
}

export default Skill;
