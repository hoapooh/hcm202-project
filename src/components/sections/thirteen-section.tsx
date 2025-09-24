"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";
import { Highlight } from "../ui/hero-highlight";
import { FocusCards } from "../ui/focus-cards";

export const ThirteenSection = () => {
  const [selectedAspect, setSelectedAspect] = useState(0);

  const professionalAspects = [
    {
      title: "Chính trị là linh hồn",
      content: "Chuyên môn là cái xác. Có chuyên môn mà không có chính trị thì chỉ còn cái xác không hồn",
      icon: "👻",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Hồng là gốc, Chuyên là phương tiện", 
      content: "Hồng định hướng để Chuyên phát triển đúng đắn, phụng sự nhân dân chứ không phải trục lợi",
      icon: "🌳",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tác phong khoa học",
      content: "Phương pháp làm việc hiệu quả, học hỏi thực tiễn, vận dụng sáng tạo đường lối Đảng",
      icon: "🔬",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const competencyCards = [
    {
      title: "Giỏi về chuyên môn",
      src: "https://thuviennguyenvanhuong.vn/wp-content/uploads/2022/12/qdnd002-1404x2048.jpg"
    },
    {
      title: "Tác phong khoa học",
      src: "https://tse1.mm.bing.net/th/id/OIP.jwVIzVrOEcHVL0iJW8nuZQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Phương pháp hiệu quả",
      src: "https://thuviennguyenvanhuong.vn/wp-content/uploads/2022/12/qdnd035-scaled.jpg"
    }
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden pb-24">
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://image.sggp.org.vn/w1000/Uploaded/2025/ohpohuo/2020_01_06/f6b_GUSY.jpg.webp')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <Highlight className="text-white">"Vừa hồng, vừa chuyên"</Highlight>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
              Yêu cầu về năng lực, chuyên môn
            </h3>
          </motion.div>

          {/* Main Concept Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Mối quan hệ giữa "Hồng" và "Chuyên"
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {professionalAspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onClick={() => setSelectedAspect(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedAspect === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <GlowingEffect
                    blur={12}
                    proximity={0.7}
                    spread={40}
                  />
                  <div className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-80 text-center ${
                    selectedAspect === index ? 'bg-white/20 border-white/40' : ''
                  }`}>
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${aspect.color} rounded-full flex items-center justify-center text-3xl`}>
                      {aspect.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      {aspect.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {aspect.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hồng vs Chuyên Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <GlowingEffect
                  blur={15}
                  proximity={0.6}
                  spread={60}
                />
                <div className="relative bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-4xl">
                    ❤️
                  </div>
                  <h4 className="text-3xl font-bold text-red-400 mb-4">HỒNG</h4>
                  <p className="text-white text-lg font-semibold mb-3">Đạo đức cách mạng</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Phẩm chất chính trị vững vàng<br/>
                    Cần, kiệm, liêm, chính, chí công vô tư
                  </p>
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-400/20 rounded-lg">
                    <p className="text-red-200 text-xs italic">
                      "Hồng là cái gốc, là linh hồn"
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <GlowingEffect
                  blur={15}
                  proximity={0.6}
                  spread={60}
                />
                <div className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl">
                    🎓
                  </div>
                  <h4 className="text-3xl font-bold text-blue-400 mb-4">CHUYÊN</h4>
                  <p className="text-white text-lg font-semibold mb-3">Năng lực chuyên môn</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Giỏi nghề, tác phong khoa học<br/>
                    Phương pháp làm việc hiệu quả
                  </p>
                  <div className="mt-4 p-3 bg-blue-500/10 border border-blue-400/20 rounded-lg">
                    <p className="text-blue-200 text-xs italic">
                      "Chuyên phải có Hồng định hướng"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connection Arrow */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center mt-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 to-blue-400"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-400 to-blue-400"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Focus Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Yêu cầu cốt lõi về năng lực chuyên môn
            </h3>
            <FocusCards cards={competencyCards} />
          </motion.div>

          {/* Key Requirements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <GlowingEffect
                  blur={15}
                  proximity={0.6}
                  spread={60}
                />
                <div className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Yêu cầu cốt lõi</h4>
                  </div>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <span className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Giỏi về chuyên môn, có tác phong khoa học</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Phương pháp làm việc hiệu quả</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Khả năng giải quyết vấn đề trong hoàn cảnh khó khăn</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <GlowingEffect
                  blur={15}
                  proximity={0.6}
                  spread={60}
                />
                <div className="relative bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Học hỏi thực tiễn</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Biết học hỏi nhân dân, vận dụng sáng tạo đường lối của Đảng vào thực tiễn cụ thể. 
                    Luôn cải tiến phương pháp làm việc để đạt hiệu quả cao nhất.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8">
              <blockquote className="text-2xl italic text-cyan-300 leading-relaxed mb-4">
                "Chính trị là linh hồn, chuyên môn là cái xác. Có chuyên môn mà không có chính trị thì chỉ còn cái xác không hồn"
              </blockquote>
              <p className="text-lg text-gray-200">
                Năng lực chuyên môn phải được định hướng bởi phẩm chất chính trị để phụng sự nhân dân
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirteenSection;