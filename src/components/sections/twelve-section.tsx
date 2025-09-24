"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";
import { Highlight } from "../ui/hero-highlight";
import { SparklesCore } from "../ui/sparkles";

export const TwelveSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const politicalQualities = [
    {
      title: "Bản lĩnh chính trị vững vàng",
      content: "Tận trung với nước, tận hiếu với dân. Kiên định với lý tưởng độc lập dân tộc và chủ nghĩa xã hội",
      icon: "🛡️",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Chống chủ nghĩa cá nhân", 
      content: "Chủ nghĩa cá nhân là 'vi trùng độc hại', 'bệnh mẹ' sinh ra các tệ nạn khác",
      icon: "⚔️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mối quan hệ biện chứng",
      content: "Bản lĩnh chính trị và đạo đức cách mạng hỗ trợ lẫn nhau, không thể tách rời",
      icon: "⚖️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const moralQualities = [
    { virtue: "Cần", meaning: "Siêng năng, chăm chỉ, lao động bền bỉ", icon: "💪" },
    { virtue: "Kiệm", meaning: "Tiết kiệm, tránh xa hoa, lãng phí", icon: "💰" },  
    { virtue: "Liêm", meaning: "Trong sạch, không tham lam", icon: "✨" },
    { virtue: "Chính", meaning: "Thẳng thắn, đứng đắn, không tà vạy", icon: "📏" },
    { virtue: "Chí công vô tư", meaning: "Đặt lợi ích Đảng và nhân dân lên trên", icon: "❤️" }
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://special.nhandan.vn/khang_chien_chong_my_cuu_nuoc_thang_loi_vi_dai_cua_Viet_Nam/assets/okFC5DldAK/thanh-nien-xung-phong-thanh-pho-ho-chi-minh-di-xay-dung-cac-khu-kinh-te-moi-san-sang-hoan-thanh-xuat-sac-moi-nhiem-vu-dang-va-nhan-dan-giao-pho-.-1900x1239.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 bg-black/80"/>

      {/* Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          id="twelve-section-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-7xl mx-auto pb-20">
          
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <Highlight className="text-white">Phẩm chất chính trị và đạo đức cách mạng</Highlight>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
              Yêu cầu cơ bản đối với cán bộ, đảng viên
            </h3>
          </motion.div>

          {/* Political Qualities Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Phẩm chất chính trị
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {politicalQualities.map((quality, index) => (
                <div key={index} className="relative">
                  <GlowingEffect
                    blur={15}
                    proximity={0.6}
                    spread={60}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-80 text-center"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${quality.color} rounded-full flex items-center justify-center text-3xl`}>
                      {quality.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      {quality.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {quality.content}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Moral Qualities - Interactive */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Đạo đức cách mạng: "Cần, Kiệm, Liêm, Chính, Chí công vô tư"
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {moralQualities.map((moral, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveCard(index)}
                  className={`p-4 rounded-xl transition-all duration-300 border ${
                    activeCard === index 
                      ? 'bg-gradient-to-br from-yellow-500/30 to-red-500/30 border-yellow-400/50 scale-105' 
                      : 'bg-white/10 border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div className="text-3xl mb-2">{moral.icon}</div>
                  <div className="text-lg font-bold text-white">{moral.virtue}</div>
                </motion.button>
              ))}
            </div>

            {/* Active Card Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <GlowingEffect
                  blur={20}
                  proximity={0.8}
                  spread={80}
                />
                <div className="relative bg-gradient-to-br from-yellow-500/20 to-red-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">{moralQualities[activeCard].icon}</div>
                  <h4 className="text-3xl font-bold text-yellow-300 mb-4">
                    {moralQualities[activeCard].virtue}
                  </h4>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    {moralQualities[activeCard].meaning}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-md border border-red-400/30 rounded-2xl p-8">
              <blockquote className="text-2xl italic text-yellow-300 leading-relaxed mb-4">
                "Đạo đức cách mạng không phải trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và củng cố"
              </blockquote>
              <p className="text-lg text-gray-200">
                Phẩm chất chính trị và đạo đức cách mạng là nền tảng cơ bản để xây dựng đội ngũ cán bộ trong sạch, vững mạnh
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwelveSection;