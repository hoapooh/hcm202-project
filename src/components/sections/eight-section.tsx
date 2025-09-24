"use client";

import React from "react";
import { motion } from "motion/react";
import { Highlight } from "../ui/hero-highlight";

export const EightSection = () => {
  const moralValues = [
    {
      title: "Đảng là đạo đức",
      description: "Luôn hành động vì lợi ích chung của dân tộc và nhân dân",
      details: "Mỗi cán bộ, đảng viên phải suốt đời rèn luyện, thực hành cần – kiệm – liêm – chính – chí công vô tư",
      icon: "⚖️",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Đảng là văn minh",
      description: "Phải tiêu biểu cho trí tuệ, danh dự, lương tâm dân tộc",
      details: "Gương mẫu trong tuân thủ pháp luật, ứng xử đối ngoại trong sáng, vì hòa bình và hợp tác",
      icon: "🏛️",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const warningPoints = [
    {
      quote: "Tham ô, lãng phí, quan liêu là thứ giặc ở trong lòng",
      explanation: "Giặc ở ngoài không đáng sợ, giặc ở trong mới đáng sợ"
    },
    {
      quote: "Cây không có gốc thì cây héo",
      explanation: "Người không có đạo đức là không có căn bản"
    }
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden" id="party-morality-civilization">
      {/* Background Image */}
      <img
        src="https://special.nhandan.vn/khang_chien_chong_my_cuu_nuoc_thang_loi_vi_dai_cua_Viet_Nam/assets/okFC5DldAK/thanh-nien-xung-phong-thanh-pho-ho-chi-minh-di-xay-dung-cac-khu-kinh-te-moi-san-sang-hoan-thanh-xuat-sac-moi-nhiem-vu-dang-va-nhan-dan-giao-pho-.-1900x1239.jpg"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-7xl mx-auto pb-16">
          
          {/* Section Number and Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Đảng là đạo đức, là văn minh
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-6 max-w-4xl mx-auto"
            >
              <blockquote className="text-xl text-white italic leading-relaxed">
                <Highlight className="bg-gradient-to-r from-yellow-300 to-orange-300">
                  "Đảng ta là đạo đức, là văn minh. Ngoài lợi ích của nhân dân, Đảng ta không có lợi ích nào khác"
                </Highlight>
              </blockquote>
              <cite className="text-gray-300 mt-4 block">— Chủ tịch Hồ Chí Minh —</cite>
            </motion.div>
          </motion.div>

            {/* Two Main Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            >
              {moralValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl"
                    style={{ background: `linear-gradient(to right, ${value.color.split(' ')[1]}, ${value.color.split(' ')[3]})` }}
                  />
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                    <div className="text-6xl mb-6 text-center">{value.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {value.title}
                    </h3>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4 text-center">
                      {value.description}
                    </p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-sm text-gray-300 leading-relaxed italic">
                        {value.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Warning Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
              className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-md border border-red-400/30 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-red-400 mb-6 text-center">
                ⚠️ Cảnh báo của Bác Hồ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {warningPoints.map((warning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                    className="bg-red-900/20 border border-red-400/20 rounded-xl p-6"
                  >
                    <blockquote className="text-lg text-red-200 font-semibold mb-3 italic">
                      "{warning.quote}"
                    </blockquote>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {warning.explanation}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EightSection;