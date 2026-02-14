"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Container from "./Container";
import { motion, useInView } from "framer-motion";
import InViewMotion from "./ui/InViewMotion";

const About = () => {
     const childVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", },
    },
  };

const aboutClinic = [
  "Our practice is led by a licensed mental health professional with years of clinical experience supporting individuals, couples, and families. We combine evidence-based approaches such as cognitive-behavioral therapy (CBT), mindfulness techniques, and solution-focused strategies to provide practical, goal-oriented care tailored to each client.",

  "We specialize in helping individuals manage anxiety, stress, relationship challenges, emotional burnout, and the impact of past experiences. Sessions are conducted in a confidential, respectful, and non-judgmental environment designed to promote clarity, resilience, and long-term emotional well-being.",

  "Appointments are available both in person and through secure virtual sessions, offering flexibility to fit your schedule. Our focus is to provide structured guidance and consistent support as you work toward meaningful personal growth and improved mental health."
];


  return (
    <Container
      className={
        "bg-[#FEFEFE] py-12 pb-80  md:pb-72   md:py-28  text-[#7E7E6B]"
      }
    >
      <div
      id="about"
        className="flex w-full items-center md:items-start justify-between  flex-col-reverse md:flex-row px-4 gap-10 sm:px-7 md:px-[10%] lg:px-[12%]  relative"
      >
        <div className="content w-full md:w-[50%]  flex flex-col items-start gap-4 lg:gap-6 ">
           <InViewMotion variants={childVariants} as="h1" className="hidden md:block font-playfair2 text-3xl lg:text-[2.2rem] font-[600]">
            About Dr. (your name)
          </InViewMotion>

          <motion.section className="font-freightdisplay2 sm:text-[1rem] md:text-[1.05rem] xl:text-[1.1rem] gap-5 text-[1rem] leading-8 flex items-start flex-col text-[#4b4b3e] fake-bold">
            {aboutClinic.map((text, index) => (
                <InViewMotion variants={childVariants} as="h2" key={index}>
                {text}
              </InViewMotion>
            ))}
          </motion.section>
        </div>
          <InViewMotion variants={childVariants}>
         <div className="relative w-[20rem] md:w-[30vw] lg:w-[20rem] xl:w-[23rem] md:mt-8">
  
  <Image
    src="/girlImage.jpg"
    width={500}
    height={200}
    alt="Doctor Image"
    className="w-full h-auto"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
    <span className="text-white text-lg md:text-2xl font-semibold tracking-wide">
      Your Photo Here
    </span>
  </div>

</div>

        </InViewMotion>

       <InViewMotion variants={childVariants} as="h1"
          className="md:hidden inline-block w-full font-freightdisplay  text-left text-2xl sm:text-[1.8rem]"
        >
          About Dr. Serena Blake
        </InViewMotion>
      </div>
    </Container>
  );
};

export default About;
