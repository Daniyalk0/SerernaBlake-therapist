"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handle = () => {
    setIsOpen((prev) => !prev);
  };

  // Smooth scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="relative z-[1000]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="max-w-7xl px-4 flex items-center justify-between pb-8 sm:pb-10 sm:px-6 lg:pb-12 lg:px-2 xl:pb-11"
      >
        <Image
          src={"/logo (2).png"}
          width={300}
          height={100}
          className="w-[14rem] lg:w-[16rem]"
          alt="logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium cursor-pointer text-[#43534b] font-playfair2">
          {["home", "about", "services", "faq", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#53665D] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden flex-col gap-2 relative z-[1000]" onClick={handle}>
          <span
            className={`w-8 bg-black ${
              isOpen
                ? "-rotate-[135deg] translate-x-1 translate-y-2 h-[0.01rem]"
                : "h-[0.03rem]"
            } transition-all duration-200`}
          ></span>
          <span
            className={`w-8 h-[0.03rem] bg-black ${
              isOpen ? "opacity-0" : "opacity-1"
            } transition-all duration-200`}
          ></span>
          <span
            className={`w-8 h-[0.03rem] bg-black ${
              isOpen
                ? "rotate-[135deg] translate-x-1 -translate-y-2 h-[0.01rem]"
                : "h-[0.03rem]"
            } transition-all duration-200`}
          ></span>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <div
        className={`bg-[#F3F0E8] z-[999] fixed top-0 left-0 w-full h-full transition-all text-[#41413F] font-playfair2 duration-500 flex flex-col justify-center items-center gap-8 text-2xl ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("services")}>Services</li>
        <li onClick={() => scrollTo("faq")}>FAQ</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </div>
    </nav>
  );
};

export default Navbar;
