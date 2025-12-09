"use client";

import { FaUserCircle } from "react-icons/fa";
import InViewMotion from "./ui/InViewMotion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviews = [
  {
    name: "Sarah Mitchell",
    rating: 5,
    message:
      "Amazing experience! Very friendly, professional and helpful throughout the entire session.",
    date: "2 weeks ago",
  },
  {
    name: "Daniel Roberts",
    rating: 5,
    message:
      "The consultation went very smoothly. I felt heard and supported. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Emily Collins",
    rating: 4,
    message:
      "Good overall experience. Booking was easy and communication was quick.",
    date: "3 months ago",
  },
  {
    name: "Michael Thompson",
    rating: 5,
    message:
      "The therapist was very understanding and gave practical advice. I feel much better now.",
    date: "1 week ago",
  },
  {
    name: "Jessica Lee",
    rating: 4,
    message:
      "Professional and warm environment. Some waiting time, but overall very satisfied.",
    date: "3 weeks ago",
  },
  {
    name: "Robert Johnson",
    rating: 5,
    message:
      "Highly recommend! The sessions were personalized and effective. Great experience.",
    date: "2 months ago",
  },
  {
    name: "Sophia Martinez",
    rating: 4,
    message:
      "Very helpful and attentive. I appreciated the follow-up and guidance provided.",
    date: "1 month ago",
  },
  {
    name: "David Wilson",
    rating: 5,
    message:
      "The therapist really listened and helped me make significant progress. Excellent service.",
    date: "2 weeks ago",
  },
  {
    name: "Olivia Brown",
    rating: 5,
    message:
      "Friendly, knowledgeable, and supportive. The booking process was smooth too.",
    date: "3 weeks ago",
  },
  {
    name: "James Anderson",
    rating: 4,
    message:
      "Good experience overall. The session was insightful and very professional.",
    date: "2 months ago",
  },
];

const childVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ReviewsSection() {
  return (
    <section className="py-16  bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 text-[#41413F] overflow-x-auto">
        <InViewMotion
          variants={childVariants}
          as="h1"
          className="font-playfair2 text-[1.7rem] lg:text-[1.9rem] md:px-40 lg:px-64 sm:pb-14 xl:text-[2.7rem] text-center"
        >
          Reviews
        </InViewMotion>

        {/* Scrollable reviews container */}
        <Swiper
          spaceBetween={30} // gap between slides
          slidesPerView={"auto"} // auto width slides
          grabCursor={true} // cursor changes to grab on desktop
          freeMode={true} // smooth free scroll
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={review.name}
              style={{ width: "300px", overflow: "visible" }} // allow shadow to show
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 h-[200px] flex flex-col justify-between select-none">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <FaUserCircle className="text-gray-400 text-4xl" />
                  <div>
                    <h4 className="font-semibold text-gray-900 font-playfair2">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="text-yellow-500 mb-3 text-lg">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                {/* Message */}
                <p className="text-gray-700 text-sm leading-relaxed ">
                  {review.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
