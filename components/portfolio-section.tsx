"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface PortfolioItem {
  id: number;
  title: string;
  type: "youtube";
  src: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Sleep Project",
    type: "youtube",
    src: "https://www.youtube.com/embed/KJUnWq7jf8g?si=Tue9qk_WJaEYUGDI",
  },
  {
    id: 2,
    title: "Second Project",
    type: "youtube",
    src: "https://www.youtube.com/embed/Bea3sHnuQcQ?si=n_q5fi7pUfG5LvYB",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" className="section-padding bg-black text-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="video-container rounded-lg overflow-hidden shadow-lg animate-glow"
              >
                <iframe
                  src={item.src}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
