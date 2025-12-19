"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Lead generation & sales campaigns that convert.",
  },
  {
    title: "Google Search Ads",
    desc: "Capture customers who are already searching.",
  },
  {
    title: "Instagram Growth That Drives Inquiries",
    desc: "Not vanity metrics — real business impact.",
  },
  {
    title: "Landing Page Optimization",
    desc: "Turning clicks into customers.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function startSlideshow() {
    if (intervalRef.current) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 1500);
  }

  function stopSlideshow() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIndex(0);
  }

  // Ensure interval is cleared on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* SLIDESHOW AT VERY TOP */}
      <section className="w-full pt-8 pb-4 px-4 flex flex-col items-center text-center bg-blue-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8">Our Core Services</h2>
        <div className="relative max-w-xl w-full mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full"
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded shadow p-8 min-h-[140px] flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full bg-white py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 max-w-2xl">
          We Help Small Businesses Get Real Customers Using Paid Ads
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-xl">
          Meta & Google Ads that generate leads, inquiries, and sales — not just likes and reach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">

          <a href="/Contact" className="bg-white border border-blue-700 text-blue-700 px-8 py-3 rounded shadow text-lg font-semibold hover:bg-blue-50 transition">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
