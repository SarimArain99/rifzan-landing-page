"use client"
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full z-20 flex justify-between items-center bg-[#EBFEFF] p-5 px-7 shadow-md">
      <h1 className="font-bold text-xl">Rizfan</h1>
      <div className="flex items-center">
        <div className="hidden md:flex uppercase gap-x-[40px]">
          <Link href="/home" className="hover:text-[#457B9D] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#457B9D] transition">
            About
          </Link>
          <Link href="/skill" className="hover:text-[#457B9D] transition">
            Skill
          </Link>
          <Link href="/project" className="hover:text-[#457B9D] transition">
            Project
          </Link>
          <Link href="/contact" className="hover:text-[#457B9D] transition">
            Contact
          </Link>
        </div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-1 w-6 bg-black mb-1 transition ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-black mb-1 transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-black transition ${
              isOpen ? "-rotate-45 -translate-y-[10px]" : ""
            }`}
          ></div>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-[#EBFEFF] w-full p-5 flex flex-col items-center shadow-md md:hidden">
          <Link
            href="/home"
            className="py-2 uppercase hover:text-[#457B9D] transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-2 uppercase hover:text-[#457B9D] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/skill"
            className="py-2 uppercase hover:text-[#457B9D] transition"
            onClick={() => setIsOpen(false)}
          >
            Skill
          </Link>
          <Link
            href="/project"
            className="py-2 uppercase hover:text-[#457B9D] transition"
            onClick={() => setIsOpen(false)}
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="py-2 uppercase hover:text-[#457B9D] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
