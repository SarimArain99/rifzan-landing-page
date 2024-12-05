import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div className="bg-[#EBFEFF] px-5 py-10 md:px-10 lg:px-20 flex flex-col items-center gap-y-5 h-screen pt-20">
      <h1 className="text-[#457B9D] text-[24px] md:text-[32px] font-semibold cursor-default">
        Contacts
      </h1>
      <h3 className="text-[28px] md:text-[36px] font-bold cursor-default text-center">
        Get in touch
      </h3>
      <p className="text-[14px] md:text-[16px] text-center">
        rizfanher@gmail.com
      </p>
      <div className="flex gap-x-5 mt-5">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Instagram.png"
            alt="Instagram"
            width={56}
            height={56}
            className="h-14 w-14"
          />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/LinkedIn.png"
            alt="LinkedIn"
            width={56}
            height={56}
            className="h-14 w-14"
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/GitHub.png"
            alt="GitHub"
            width={56}
            height={56}
            className="h-14 w-14"
          />
        </a>
      </div>
      <p className="mt-10 text-center font-semibold text-[12px] md:text-[14px]">
        Copyright © 2023. Developed & Designed by Rizfan Herlaya
      </p>
    </div>
  );
}

export default Contact;
