"use client";

import React from "react";
import { motion } from "motion/react";
import { CometCard } from "../ui/comet-card";
import { DraggableCardContainer } from "../ui/draggable-card";

export const FourteenSection = () => {
  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden">
      <img
        src="https://tuyenquang.dcs.vn/Image/Large/202182073336_48118.jpg"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-5xl font-bold text-white mb-4">
             Gắn bó mật thiết với nhân dân
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-3">
              "Người đầy tớ trung thành" của nhân dân
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <DraggableCardContainer className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                  <img
                  src="https://dhannd.edu.vn/image/catalog/00_hinh_anh/kt/220519_bh2.ok.jpg"
                  alt="Hình ảnh minh họa"
                  className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </DraggableCardContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <CometCard className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Nền tảng cốt lõi</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Cán bộ, đảng viên phải luôn gần dân, hiểu dân, lắng nghe dân và chịu sự giám sát của nhân dân. 
                    Làm "người đầy tớ trung thành" của nhân dân.
                  </p>
                </div>
              </CometCard>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Dân biết", icon: "👁️", color: "bg-blue-500/20 border-blue-400/30" },
                  { title: "Dân bàn", icon: "💬", color: "bg-green-500/20 border-green-400/30" },
                  { title: "Dân làm", icon: "🔨", color: "bg-yellow-500/20 border-yellow-400/30" },
                  { title: "Dân kiểm tra", icon: "✅", color: "bg-purple-500/20 border-purple-400/30" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`${item.color} backdrop-blur-md rounded-xl p-3 text-center border`}
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  </motion.div>
                ))}
              </div>

              <CometCard className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-white/20">
                <div className="p-4 text-center">
                  <h4 className="text-xl font-bold text-white mb-2">Phương pháp hiệu quả</h4>
                  <p className="text-gray-300 text-sm">
                    Sự kiểm soát của nhân dân là phương pháp hiệu quả để phòng chống suy thoái
                  </p>
                </div>
              </CometCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourteenSection;