"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";
import { Highlight } from "../ui/hero-highlight";

export const FourteenSection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const corePhilosophies = [
    {
      title: "Cán bộ là 'công bộc của dân'",
      content: "Thay đổi hoàn toàn tư duy phong kiến cũ, coi cán bộ là người phục vụ nhân dân, không phải là 'quan phụ mẫu'",
      icon: "👥",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "'Dân như nước, cán bộ như cá'", 
      content: "Cá không thể sống thiếu nước - cán bộ không thể tồn tại nếu tách rời nhân dân",
      icon: "🐠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Trọng dân, thương dân, tin dân",
      content: "Gần dân, hiểu dân, lắng nghe dân, học hỏi dân và chịu sự giám sát của nhân dân",
      icon: "❤️",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const democraticPrinciples = [
    { principle: "Dân biết", icon: "👁️", color: "bg-blue-500", description: "Minh bạch thông tin" },
    { principle: "Dân bàn", icon: "💬", color: "bg-green-500", description: "Tham gia quyết định" },
    { principle: "Dân làm", icon: "🔨", color: "bg-yellow-500", description: "Thực hiện cùng nhau" },
    { principle: "Dân kiểm tra", icon: "✅", color: "bg-purple-500", description: "Giám sát hiệu quả" }
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden pb-24">
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://tuyenquang.dcs.vn/Image/Large/202182073336_48118.jpg')`,
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <Highlight className="text-white">Gắn bó mật thiết với nhân dân</Highlight>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-orange-400 mb-3">
              "Người đầy tớ trung thành" của nhân dân
            </h3>
          </motion.div>

          {/* Core Philosophies */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corePhilosophies.map((philosophy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onClick={() => setActivePhilosophy(index)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activePhilosophy === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className="relative">
                    <GlowingEffect
                      blur={15}
                      proximity={0.6}
                      spread={60}
                    />
                    <div className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-80 text-center ${
                      activePhilosophy === index ? 'bg-white/20 border-white/40' : ''
                    }`}>
                      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${philosophy.color} rounded-full flex items-center justify-center text-3xl`}>
                        {philosophy.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        {philosophy.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {philosophy.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Democratic Principles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Nguyên tắc dân chủ cơ sở
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {democraticPrinciples.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative">
                    <GlowingEffect
                      blur={10}
                      proximity={0.8}
                      spread={30}
                    />
                    <div className={`relative ${item.color}/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30 group-hover:border-white/50 transition-all duration-300`}>
                      <div className={`w-16 h-16 mx-auto mb-4 ${item.color} rounded-full flex items-center justify-center text-2xl`}>
                        {item.icon}
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">{item.principle}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Messages */}
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
                <div className="relative bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Nền tảng cốt lõi</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Cán bộ, đảng viên phải luôn gần dân, hiểu dân, lắng nghe dân và chịu sự giám sát của nhân dân. 
                    Làm "người đầy tớ trung thành" của nhân dân trong mọi hoạt động.
                  </p>
                </div>
              </div>

              <div className="relative">
                <GlowingEffect
                  blur={15}
                  proximity={0.6}
                  spread={60}
                />
                <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">Phương pháp hiệu quả</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Sự kiểm soát của nhân dân là phương pháp hiệu quả nhất để phòng chống suy thoái, 
                    tham nhũng và giữ gìn sự trong sạch của đội ngũ cán bộ.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Historical Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-400/30 rounded-2xl p-8">
              <blockquote className="text-2xl italic text-orange-300 leading-relaxed mb-4">
                "Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì có hại đến dân, ta phải hết sức tránh"
              </blockquote>
              <p className="text-lg text-gray-200">
                Đây là kim chỉ nam trong mọi hoạt động của cán bộ, đảng viên khi phục vụ nhân dân
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FourteenSection;