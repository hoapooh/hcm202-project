"use client";

import React from "react";
import { motion } from "motion/react";
import { CometCard } from "../ui/comet-card";
import { DraggableCardContainer } from "../ui/draggable-card";
import { PinContainer } from "../ui/3d-pin";
export const TwelveSection = () => {
  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden">
      {/* Background Image */}
      <img
        src="https://special.nhandan.vn/khang_chien_chong_my_cuu_nuoc_thang_loi_vi_dai_cua_Viet_Nam/assets/okFC5DldAK/thanh-nien-xung-phong-thanh-pho-ho-chi-minh-di-xay-dung-cac-khu-kinh-te-moi-san-sang-hoan-thanh-xuat-sac-moi-nhiem-vu-dang-va-nhan-dan-giao-pho-.-1900x1239.jpg"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"/>
      
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
              "Vừa hồng, vừa chuyên"
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
              Phẩm chất chính trị và đạo đức cách mạng
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hồ Chí Minh đòi hỏi cán bộ, đảng viên phải "vừa hồng, vừa chuyên"
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - 3D Pin Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <PinContainer
                title="Xem chi tiết về 'Vừa Hồng, Vừa Chuyên'"
                href="https://hcmcpv.org.vn/tin-tap-chi/so-tay-xay-dung-dang-4-2016/ban-ve-hong-va-chuyen-1463364277"
                className="w-[500px] h-[500px]"
                containerClassName="w-[500px] h-[450px]"
              >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-full">
                  {/* Main Image */}
                  <div className="relative w-[480px] h-[1000px] mb-4 rounded-xl overflow-hidden">
                    <img
                      src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/ngay-thanh-lap-Dang-Cong-san-Viet-Nam-2.jpg"
                      alt="Đảng Cộng sản Việt Nam"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                    
                </div>
              </PinContainer>
            </motion.div>

            {/* Right Side - Content Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <CometCard className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🔴</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Phẩm chất chính trị</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội, có bản lĩnh chính trị vững vàng, 
                    luôn đặt lợi ích Tổ quốc lên trên lợi ích cá nhân.
                  </p>
                </div>
              </CometCard>

              <CometCard className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🔵</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Đạo đức cách mạng</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Thực hành <span className="text-yellow-400 font-semibold">"cần, kiệm, liêm, chính, chí công vô tư"</span> 
                    để chống lại chủ nghĩa cá nhân.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-red-400 font-bold">"Hồng"</span> (đạo đức) là cái gốc để 
                    <span className="text-blue-400 font-bold"> "chuyên"</span> (chuyên môn) phát triển đúng hướng.
                  </p>
                </div>
              </CometCard>

              <CometCard className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-white/20">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💎</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Mục tiêu phụng sự</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Đảm bảo năng lực được sử dụng để phụng sự nhân dân, chứ không phải để trục lợi. 
                    Đạo đức và chuyên môn phải đi đôi với nhau.
                  </p>
                </div>
              </CometCard>
            </motion.div>
          </div>

          {/* Bottom Highlight - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-red-500/20 via-red-600/10 to-pink-500/20 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 text-center relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-red-400 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-pink-400 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔴</span>
                  </div>
                  <h4 className="text-3xl font-bold text-red-400 mb-3">HỒNG</h4>
                  <p className="text-white text-lg font-semibold">Đạo đức cách mạng</p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    Cần, kiệm, liêm, chính<br/>
                    Chí công vô tư
                  </p>
                  
                  {/* Quote */}
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-400/20 rounded-lg">
                    <p className="text-red-200 text-xs italic">
                      "Hồng là cái gốc"
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-indigo-500/20 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8 text-center relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-400 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-indigo-400 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔵</span>
                  </div>
                  <h4 className="text-3xl font-bold text-blue-400 mb-3">CHUYÊN</h4>
                  <p className="text-white text-lg font-semibold">Năng lực chuyên môn</p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    Giỏi nghề, hiệu quả<br/>
                    Tác phong khoa học
                  </p>
                  
                  {/* Quote */}
                  <div className="mt-4 p-3 bg-blue-500/10 border border-blue-400/20 rounded-lg">
                    <p className="text-blue-200 text-xs italic">
                      "Chuyên phát triển đúng hướng"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Connection Line */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
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
        </div>
      </div>
    </section>
  );
};

export default TwelveSection;