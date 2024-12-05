import Image from "next/image";
import React from "react";

function Project() {
  return (
    <div className="flex flex-col items-center py-20 gap-y-5">
      <h1 className="text-[#457B9D] text-[24px] md:text-[32px] font-semibold cursor-default">
        Projects
      </h1>
      <h3 className="text-[28px] md:text-[48px] font-bold cursor-default text-center">
        What I have made?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 md:px-10 lg:px-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="shadow-lg shadow-gray-400 rounded-lg overflow-hidden flex flex-col"
          >
            <Image
              src="/project.png"
              alt={`Project ${index + 1}`}
              width={1000}
              height={1000}
              className="object-cover w-full h-48"
            />
            <div className="p-4 flex flex-col gap-y-2">
              <h2 className="font-semibold text-[18px] md:text-[24px]">
                Portfolio Website Design
              </h2>
              <p className="text-[14px] md:text-[16px]">
                Lorem ipsum dolor, sit amet consectetur.
              </p>
              <h6 className="text-blue-500 text-[14px] md:text-[16px]">
                Figma
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
