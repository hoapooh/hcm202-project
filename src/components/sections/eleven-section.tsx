"use client";

import React from "react";
import { motion } from "motion/react";
import { CometCard } from "../ui/comet-card";
import { DraggableCardContainer } from "../ui/draggable-card";

export const ElevenSection = () => {
  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden">
      {/* Background Image */}
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.UkdQspWH6vnbGCyuAoBOCQHaEu?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              "Cái gốc của mọi công việc"
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
              Vị trí, vai trò của cán bộ, đảng viên
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Chủ tịch Hồ Chí Minh khẳng định cán bộ là "cái gốc của mọi công việc"
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <CometCard className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🌳</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Vai trò cốt lõi</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Cán bộ là lực lượng trực tiếp tổ chức, triển khai đường lối, chính sách của Đảng đến nhân dân. 
                    Mọi thành bại của cách mạng đều phụ thuộc vào phẩm chất và năng lực của đội ngũ cán bộ.
                  </p>
                </div>
              </CometCard>

              <CometCard className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Cầu nối quan trọng</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Người ví cán bộ như <span className="text-yellow-400 font-semibold">"cái dây chuyền của bộ máy"</span>, 
                    là <span className="text-yellow-400 font-semibold">"cầu nối"</span> giữa Đảng, Chính phủ và nhân dân.
                  </p>
                </div>
              </CometCard>

              <CometCard className="bg-gradient-to-br from-red-900/30 to-pink-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🐟</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Mối quan hệ máu thịt</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Quan điểm <span className="text-yellow-400 font-semibold">"dân như nước, cán bộ như cá"</span> 
                    nhấn mạnh mối quan hệ máu thịt giữa Đảng và nhân dân, khẳng định sức mạnh của sự thống nhất.
                  </p>
                </div>
              </CometCard>
            </motion.div>

            {/* Right Side - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <DraggableCardContainer>
                <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                  <img
                  src="https://file3.qdnd.vn/data/images/0/2021/09/05/dangloan/daidien.jpg?dpi=150&quality=100&w=870"
                  alt="Hình ảnh minh họa"
                  className="w-full h-full"
                  />
                </div>
                </DraggableCardContainer>
            </motion.div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">Lời dạy của Bác Hồ</h4>
              <blockquote className="text-xl text-white italic leading-relaxed">
                "Cán bộ là cái gốc của mọi công việc. Muốn làm việc gì thành công, 
                trước tiên phải có cán bộ tốt"
              </blockquote>
              <cite className="text-gray-300 mt-4 block">— Hồ Chí Minh</cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ElevenSection;