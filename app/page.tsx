"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
        <div
          className="relative max-w-xl w-full mx-auto"
          onMouseEnter={startSlideshow}
          onMouseLeave={stopSlideshow}
        >
          <div className="transition-all duration-500">
            <div className="bg-white rounded shadow p-8 min-h-[140px] flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{services[index].title}</h3>
              <p className="text-gray-700">{services[index].desc}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, i) => (
              <span
                key={i}
                className={`inline-block w-3 h-3 rounded-full ${i === index ? 'bg-blue-700' : 'bg-blue-200'}`}
              />
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-500">(Hover to see all services)</div>
        </div>
      </section>
      {/* HERO SECTION */}
      <section className="w-full bg-white py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4 max-w-2xl">
          We Help Small Businesses Get Real Customers Using Paid Ads
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-xl">
          Meta & Google Ads that generate leads, inquiries, and sales — not just likes and reach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <a href="#cta-growth-audit" className="bg-blue-700 text-white px-8 py-3 rounded shadow text-lg font-semibold hover:bg-blue-800 transition">
            👉 Get a Free Growth Audit
          </a>
          <a href="#cta-strategy-call" className="bg-white border border-blue-700 text-blue-700 px-8 py-3 rounded shadow text-lg font-semibold hover:bg-blue-50 transition">
            👉 Book a Free Strategy Call
          </a>
        </div>
      </section>
      {/* QUICK TRUST STRIP */}
      <section className="w-full bg-blue-100 py-4 flex flex-wrap justify-center gap-6 text-blue-900 text-base font-medium border-b border-blue-200">
        <span>📊 Data-Driven Ad Strategies</span>
        <span>🎯 Focused on Leads & Sales</span>
        <span>💼 Built for Small & Local Businesses</span>
        <span>📍 Works for Any Industry</span>
      </section>
      {/* WHO THIS IS FOR */}
      <section className="w-full py-16 px-4 flex flex-col items-center text-center bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">Built for Small Businesses That Want Growth — Not Guesswork</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          We work with local businesses, service providers, and growing brands who want predictable customers through digital advertising.<br />
          If you’re tired of low reach, random results, and wasted ad spend — we fix that.
        </p>
      </section>
      {/* HOW IT WORKS */}
      <section className="w-full py-16 px-4 flex flex-col items-center text-center bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8">Simple. Transparent. Results-Focused.</h2>
        <ol className="text-lg text-gray-700 space-y-2 max-w-xl mx-auto list-decimal list-inside">
          <li>Understand your business & audience</li>
          <li>Launch high-intent ad campaigns</li>
          <li>Optimize weekly using real data</li>
          <li>Scale what works, kill what doesn’t</li>
        </ol>
      </section>
      {/* WHY NEXUS DIGITAL SOLUTIONS */}
      <section className="w-full py-16 px-4 flex flex-col items-center text-center bg-blue-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8">Why Businesses Choose Nexus Digital Solutions</h2>
        <ul className="text-lg text-gray-700 space-y-2 max-w-xl mx-auto list-disc list-inside text-left">
          <li>We focus on ROI, not empty reach</li>
          <li>No copy-paste strategies</li>
          <li>Ads built for your specific business</li>
          <li>Clear reporting & honest communication</li>
        </ul>
      </section>
      {/* FINAL CTA */}
      <section className="w-full py-16 px-4 flex flex-col items-center text-center bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">Ready to Get More Customers Online?</h2>
        <a id="cta-growth-audit" href="#" className="bg-blue-700 text-white px-8 py-4 rounded shadow text-xl font-semibold hover:bg-blue-800 transition mb-2">
          👉 Get Your Free Growth Audit Today
        </a>
      </section>
      {/* BRUTAL ADVICE */}
      <section className="w-full py-8 px-4 flex flex-col items-center text-center bg-blue-100 border-t border-blue-200">
        <h3 className="text-lg font-bold text-blue-900 mb-2">⚠️ Brutal Advice (Don’t Ignore This)</h3>
        <ul className="text-base text-blue-900 space-y-1 max-w-2xl mx-auto list-disc list-inside text-left">
          <li>Don’t over-design the home screen. Simple &gt; fancy</li>
          <li>Don’t talk about yourself too much — talk about results</li>
          <li>Don’t promise “growth” without explaining how</li>
          <li>Don’t add blogs, portfolios, or random pages before this is solid</li>
        </ul>
        <p className="mt-4 text-blue-900 font-medium">This structure alone puts you ahead of 80% of small agencies.</p>
      </section>
    </div>
  );
}
