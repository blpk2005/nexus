"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "SEO & SEM",
    desc: "Boost your business with search visibility and campaigns.",
    img: "/nexus_logo.jpg",
  },
  {
    title: "Branding",
    desc: "Build a bold and unforgettable identity.",
    img: "/nexus_logo.jpg",
  },
  {
    title: "Web Development",
    desc: "Modern, responsive websites.",
    img: "/nexus_logo.jpg",
  },
  {
    title: "Social Media",
    desc: "Engage & grow your audience.",
    img: "/nexus_logo.jpg",
  },
];

function FullScreenSection({ title, desc, img }: any) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        controls.start({
          opacity: entry.isIntersecting ? 1 : 0,
          scale: entry.isIntersecting ? 1 : 0.96,
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="h-screen w-full flex flex-col justify-center items-center gap-6 bg-black text-white"
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="w-[400px] h-[300px] object-cover rounded-xl shadow-xl"
      />

      {/* TEXT CONTENT */}
      <div className="text-center max-w-xl px-6">
        <h2 className="text-5xl font-bold mb-3">{title}</h2>
        <p className="text-lg opacity-90">{desc}</p>
      </div>
    </motion.section>
  );
}

export default function Team() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {services.map((service, index) => (
        <div className="snap-start" key={index}>
          <FullScreenSection {...service} />
        </div>
      ))}
    </main>
  );
}
