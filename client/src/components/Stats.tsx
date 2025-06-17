import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const stats = [
    {
      number: "0",
      suffix: "+",
      label: "Years of Experience",
      countUp: true
    },
    {
      number: "0",
      suffix: "+", 
      label: "Happy Clients",
      countUp: true
    },
    {
      number: "0",
      suffix: "+",
      label: "Projects Completed", 
      countUp: true
    },
    {
      number: "0",
      suffix: "+",
      label: "Expert Team Members",
      countUp: true
    }
  ];

  return (
    <section className="py-16 bg-dande-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-dande-primary mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-dande-text font-poppins text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}