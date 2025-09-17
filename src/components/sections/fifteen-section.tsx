"use client";

import React from "react";
import { motion } from "motion/react";
import { CometCard } from "../ui/comet-card";
import { DraggableCardContainer } from "../ui/draggable-card";

export const FifteenSection = () => {
  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden">
      <img
        src="https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/202012/original/images2335076_5.jpg"
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
            "Công việc gốc của Đảng"
            </h2>
            <h3 className="text-2xl md:text-4xl font-semibold text-yellow-400 mb-4">
              Đào tạo, bồi dưỡng và sử dụng cán bộ
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
              <CometCard className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Quan điểm cốt lõi</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    <span className="font-bold text-yellow-400">"Huấn luyện cán bộ là công việc gốc của Đảng"</span> - 
                    Đào tạo toàn diện cả về đạo đức và năng lực, gắn với thực tiễn.
                  </p>
                </div>
              </CometCard>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Đào tạo toàn diện", icon: "📚", color: "bg-blue-500/20" },
                  { title: "Đúng người, đúng việc", icon: "🎯", color: "bg-green-500/20" },
                  { title: "Kiểm tra giám sát", icon: "🔍", color: "bg-purple-500/20" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`${item.color} backdrop-blur-md rounded-xl p-4 text-center border border-white/20`}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="text-white font-semibold text-xs">{item.title}</h4>
                  </motion.div>
                ))}
              </div>

              <CometCard className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">⚖️</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Sử dụng cán bộ</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    "Đúng người, đúng việc", "tùy tài mà dùng", tránh dùng người thân quen hay kẻ nịnh hót. 
                    Kiểm tra giám sát thường xuyên.
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
                  src="https://i.pinimg.com/originals/8e/81/53/8e8153f8bd9eecfc9939f49202742464.png"
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

export default FifteenSection;