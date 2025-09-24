"use client";

import React from "react";
import { motion } from "motion/react";
import { CometCard } from "../ui/comet-card";
import { DraggableCardContainer } from "../ui/draggable-card";

export const SixteenSection = () => {
  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden">
      <img
        src="https://suckhoedoisong.qltns.mediacdn.vn/Images/duylinh/2017/08/31/Anh_3_TT_Pham_Kiet__resize.jpg"
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
            Thách thức và giải pháp hiện nay
            </h2>
            <h3 className="text-2xl md:text-4xl font-semibold text-yellow-400 mb-4">
              Vận dụng sáng tạo tư tưởng Hồ Chí Minh
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
                  src="https://btnmt.1cdn.vn/2020/07/27/anh-1-.jpg"
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
              className="space-y-9 order-1 lg:order-2"
            >
              <CometCard className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-md border border-red-500/30">
                <div className="p-9">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-4 text-3xl">⚠️</span>
                    Thách thức hiện nay
                  </h3>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start space-x-3">
                      <span className="text-red-400 mt-2 text-lg">•</span>
                      <span>Suy thoái về tư tưởng, đạo đức, lối sống</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-red-400 mt-2 text-lg">•</span>
                      <span>"Tự diễn biến, tự chuyển hóa"</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-red-400 mt-2 text-lg">•</span>
                      <span>Xa rời nhân dân, quan liêu</span>
                    </li>
                  </ul>
                </div>
              </CometCard>

              <CometCard className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-md border border-green-500/30">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="mr-3 text-xl">💡</span>
                    Giải pháp vận dụng
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1 text-sm">•</span>
                      <span>Tăng cường giáo dục chính trị</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1 text-sm">•</span>
                      <span>Đổi mới công tác cán bộ</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1 text-sm">•</span>
                      <span>Phát huy vai trò giám sát của nhân dân</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1 text-sm">•</span>
                      <span>Thực hiện nghiêm minh kỷ luật</span>
                    </li>
                  </ul>
                </div>
              </CometCard>

              <CometCard className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-md border border-blue-500/30">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <span className="mr-3 text-xl">🎯</span>
                    Ý nghĩa thời đại
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tư tưởng Hồ Chí Minh về công tác cán bộ vẫn còn nguyên giá trị, là kim chỉ nam 
                    trong việc xây dựng đội ngũ cán bộ <span className="font-bold text-yellow-400">trong sạch, vững mạnh</span>.
                  </p>
                </div>
              </CometCard>
            </motion.div>
          </div>

          {/* Final Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-6 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Kết luận</h4>
              <p className="text-lg text-white leading-relaxed">
                Việc vận dụng sáng tạo tư tưởng Hồ Chí Minh về xây dựng đội ngũ cán bộ 
                là nhiệm vụ cấp bách để đảm bảo Đảng luôn trong sạch, lành mạnh trong thời đại mới.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SixteenSection;