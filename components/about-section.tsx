"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="section-padding bg-black text-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            About Me
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg mb-6">
            Video editing has always captivated me. The ability to craft visuals that convey deep emotion and evoke wonder has always felt like a superpower. After initially stepping away, I've now embraced this passion with over two years of intense experience. I'm excited to bring my creativity to new projects and opportunities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
