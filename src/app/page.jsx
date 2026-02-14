

import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Rates from "@/components/Rates";
import ReviewsSection from "@/components/Review";
import Services from "@/components/Services";
import React from "react";



const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services/>
      <FAQ/>
      <ReviewsSection/>
      <Rates/>
      <Contact/>
      <Footer/>
      <a
  href="https://wa.me/919999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M12 2a10 10 0 00-8.94 14.46L2 22l5.71-1.05A10 10 0 1012 2zm5.34 14.66c-.23.64-1.34 1.25-1.86 1.33-.48.08-1.1.12-1.77-.1-.41-.14-.93-.3-1.6-.6-2.82-1.22-4.66-4.08-4.8-4.27-.13-.2-1.15-1.53-1.15-2.91 0-1.38.72-2.06.97-2.34.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.5.23.56.78 1.94.85 2.08.07.14.11.31.02.5-.09.2-.14.31-.28.48-.14.17-.3.38-.43.51-.14.14-.28.29-.12.57.16.28.72 1.18 1.55 1.92 1.07.95 1.98 1.24 2.26 1.38.28.14.44.12.6-.07.17-.2.72-.84.92-1.13.2-.28.39-.23.66-.14.27.09 1.71.81 2 .96.28.14.47.21.54.33.07.12.07.69-.16 1.33z"/>
  </svg>
</a>

    </div>
  );
};

export default page;
