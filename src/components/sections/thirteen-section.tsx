"use client";

import React from "react";
import { motion } from "motion/react";
import { CometCard } from "../ui/comet-card";
import { DraggableCardContainer } from "../ui/draggable-card";

export const ThirteenSection = () => {
  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden">
      <img
        src="https://image.sggp.org.vn/w1000/Uploaded/2025/ohpohuo/2020_01_06/f6b_GUSY.jpg.webp"
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Năng lực, chuyên môn
            </h2>
            <h3 className="text-2xl md:text-4xl font-semibold text-yellow-400 mb-4">
              Tác phong khoa học, phương pháp hiệu quả
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <CometCard className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Yêu cầu cốt lõi</h4>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Giỏi về chuyên môn, có tác phong khoa học</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Phương pháp làm việc hiệu quả</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Khả năng giải quyết vấn đề trong hoàn cảnh khó khăn</span>
                    </li>
                  </ul>
                </div>
              </CometCard>

              <CometCard className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Học hỏi thực tiễn</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Biết học hỏi nhân dân, vận dụng sáng tạo đường lối của Đảng vào thực tiễn cụ thể. 
                    Luôn cải tiến phương pháp làm việc.
                  </p>
                </div>
              </CometCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <DraggableCardContainer className="w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                  <img
                  src="https://lacduong.lamdong.dcs.vn/resize.aspx?file=%2FPortals%2F13%2Fmedia%2Fnewsimage%2Fa%2F-%2F8%2Fa-869031ab-8b07-4cf9-bf60-781953870ed3.jpg&w=800&h=-1"
                  alt="Hình ảnh minh họa"
                  className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
              </DraggableCardContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirteenSection;