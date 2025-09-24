"use client";

import React from "react";
import { motion } from "motion/react";
import { SparklesCore } from "../ui/sparkles";
import { GlowingEffect } from "../ui/glowing-effect";

export const SixSection = () => {
  const keyPoints = [
    {
      number: "1",
      title: "Đảng phải trong sạch, vững mạnh",
      description: "Nhiệm vụ sống còn của cách mạng"
    },
    {
      number: "2", 
      title: "Đảng là đạo đức, là văn minh",
      description: "Sức mạnh tinh thần của Đảng"
    },
    {
      number: "3",
      title: "Những nguyên tắc cơ bản trong hoạt động",
      description: "Bảy nguyên tắc bất di bất dịch"
    },
    {
      number: "4",
      title: "Xây dựng đội ngũ cán bộ, công nhân viên",
      description: "Đội ngũ cán bộ, công nhân viên là nhân tố quyết định thành công của Đảng"
    },
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden" id="party-purity-intro">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Sparkles Effect */}
      <div className="absolute inset-0">
        <SparklesCore
          id="intro-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFD700"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-7xl mx-auto text-center">

          {/* Roman Numeral with Glowing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="relative">
                <GlowingEffect
                  blur={20}
                  proximity={0.8}
                  spread={80}
                  variant="default"
                  glow={true}
                  disabled={false}
                  movementDuration={1.5}
                  borderWidth={3}
                  className="absolute inset-0"
                />
                
              </div>
            </div>
          </motion.div>

          {/* Main Title with Enhanced Glow */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="block"
              >
                Đảng phải
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="block bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent"
              >
                trong sạch, vững mạnh
              </motion.span>
            </h1>
          </motion.div>

          {/* Key Points Preview with Glowing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3 + index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-full">
                  <GlowingEffect
                    blur={10}
                    proximity={0.7}
                    spread={40}
                    variant="default"
                    glow={true}
                    disabled={false}
                    movementDuration={1.8}
                    borderWidth={2}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full hover:bg-white/15 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl">
                    <div className="relative">
                      <div className="text-4xl font-bold text-yellow-400 mb-4 relative">
                        <div className="absolute inset-0 text-yellow-400 blur-sm opacity-50">
                          {point.number}
                        </div>
                        <div className="relative">
                          {point.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-200 transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator with Glowing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <GlowingEffect
                blur={8}
                proximity={0.9}
                spread={30}
                variant="default"
                glow={true}
                disabled={false}
                movementDuration={1}
                borderWidth={1}
                className="absolute inset-0 rounded-full"
              />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SixSection;