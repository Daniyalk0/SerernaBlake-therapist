import React from "react";
import Container from "./Container";
import InViewMotion from "./ui/InViewMotion";

const Rates = () => {
  const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <Container
        className={
          "bg-[#94B0B0] text-black py-10 flex items-center justify-center flex-col  lg:py-16"
        }
      >
        <InViewMotion
          variants={childVariants}
          as="div"
          className="flex font-freightdisplay2 flex-col items-center justify-center gap-2"
        >
          <p className="mb-2 text-xl md:text-3xl lg:mb-6">Consultation Fees -</p>
          <p className="font-freightdisplay2 md:text-xl">
            ₹1,500 / Individual Session
          </p>
          <p className="font-freightdisplay2 md:text-xl">
           ₹2,500 / Couple or Family Session
          </p>
        </InViewMotion>
      </Container>
      <div>
        <div
          className="bg-[#F3F0E8] w-full py-10 lg:py-14 lg:text-2xl text-[#41413F] font-freightdisplay text-center "
        >
          <InViewMotion
          variants={childVariants}
          as="div">Now Accepting New Appointments
Flexible scheduling available.</InViewMotion>
        </div>
        <div className="relative h-[400px] w-full ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{ backgroundImage: "url('/quote_bg.jpg')" }}
          ></div>

          {/* Content Overlay */}
          <div className="relative z-10 flex items-center justify-center h-full text-[#ffffffd5] flex-col gap-7 px-8 sm:px-14 md:px-32 lg:px-64 xl:px-80 ">
            <InViewMotion
              variants={childVariants}
              as="h1"
              className="text-2xl font-freightdisplay2 text-center md:text-3xl lg:text-4xl lg:leading-tight"
            >
             “Taking the first step toward care is a sign of strength, not weakness.”
            </InViewMotion>
            <InViewMotion
              variants={childVariants}
              as="p"
              className="font-freightdisplay2 md:text-lg"
            >
              — Your Clinic Name
            </InViewMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rates;
