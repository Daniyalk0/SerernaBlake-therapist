"use client";
import React, { useEffect, useState } from "react";
import InViewMotion from "./ui/InViewMotion";

const ServiceCard = ({ heading, content, img }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check window width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* Image */}
      <div className="rounded-full w-[80vw] sm:w-[40vw] md:w-[25vw] h-[80vw] sm:h-[40vw] md:h-[25vw] overflow-hidden">
        {isMobile ? (
          <InViewMotion
            as="img"
            src={img}
            alt=""
            className="w-full h-full object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={childVariants}
          />
        ) : (
          <img src={img} alt="" className="w-full h-full object-cover" />
        )}
      </div>

      {/* Text */}
      <div className="flex items-center justify-center gap-5 lg:gap-3 px-[0.6rem] sm:px-0 flex-col">
        {/* Title always animated */}
        <InViewMotion
          as="h1"
          className="font-playfair2 text-[1.2rem] lg:text-[1.9rem] sm:px-0 xl:text-[2rem] text-center lg:font-freightdisplay2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={childVariants}
        >
          {heading}
        </InViewMotion>

        {/* Paragraph */}
        {isMobile ? (
          <InViewMotion
            as="p"
            className="text-[#41413fa1] fake-bold font-freightdisplay2 text-[1.1rem] leading-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={childVariants}
          >
            {content}
          </InViewMotion>
        ) : (
          <p className="text-[#41413fa1] fake-bold font-freightdisplay2 text-[1.1rem] leading-8 text-center">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
