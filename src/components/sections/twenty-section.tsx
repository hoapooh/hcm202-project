"use client";

import React from "react";
import { motion } from "motion/react";
import { Highlight } from "../ui/hero-highlight";

export const TwentySection = () => {
  const conclusions = [
    {
      title: "Tính tất yếu ra đời của Đảng",
      content: "Bắt nguồn từ quy luật cách mạng vô sản và thực tiễn Việt Nam cuối thế kỷ XIX – đầu XX",
      details: "Chỉ một chính đảng kiểu mới, có lý luận cách mạng và gắn bó với nhân dân, mới đủ sức kết tinh, tổ chức và dẫn dắt phong trào đấu tranh giành độc lập, tiến lên CNXH",
      icon: "🌟",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vai trò lãnh đạo của Đảng",
      content: "Sự kết hợp biện chứng giữa chủ nghĩa Mác – Lênin, phong trào công nhân và phong trào yêu nước",
      details: "Làm nên Đảng – đội tiên phong của giai cấp công nhân và dân tộc, hạt nhân đại đoàn kết toàn dân tộc",
      icon: "🚩",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Đảng phải trong sạch, vững mạnh",
      content: "Kiên định nền tảng tư tưởng, thực hành tập trung dân chủ, tự phê bình và phê bình",
      details: "Kỷ luật nghiêm, gắn bó mật thiết với nhân dân; đồng thời chăm lo công tác cán bộ theo chuẩn 'vừa hồng, vừa chuyên'",
      icon: "💎",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Sứ mệnh trong thời đại mới",
      content: "Trong bối cảnh hội nhập, Đảng tiếp tục là hạt nhân đại đoàn kết",
      details: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, kiên định mục tiêu độc lập dân tộc gắn liền với CNXH",
      icon: "🌍",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const keyMessages = [
    "Sự lãnh đạo của Đảng vừa là tất yếu lịch sử",
    "Vừa là nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam hôm nay và mai sau",
    "Đảng Cộng sản Việt Nam - Đội tiên phong của giai cấp công nhân và dân tộc Việt Nam"
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden" id="conclusion">
      {/* Background Image */}
       <img
        src="https://bvhttdl.mediacdn.vn/2019/5/31/photo-1-15592695565171101555745.jpg"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Number and Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Kết luận
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-8">
              Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam
            </h2>
          </motion.div>

          {/* Key Conclusions Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {conclusions.map((conclusion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                className="group perspective-1000"
              >
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${conclusion.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 text-center">{conclusion.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      {conclusion.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed mb-4 text-center">
                      {conclusion.content}
                    </p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-sm text-gray-300 leading-relaxed italic">
                        {conclusion.details}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Key Messages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              Kết luận then chốt
            </h3>
            <div className="space-y-4">
              {keyMessages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className="flex items-center text-lg text-white leading-relaxed"
                >
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 flex-shrink-0" />
                  <Highlight className="bg-gradient-to-r from-yellow-300 to-orange-300">
                    {message}
                  </Highlight>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Historical Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <blockquote className="text-2xl text-white italic leading-relaxed mb-4">
                "Đảng ta phải thật sự là đạo đức, là văn minh; 
                phải thật sự trong sạch, vững mạnh; 
                phải thật sự là đội tiên phong của giai cấp công nhân, 
                của nhân dân lao động, của dân tộc Việt Nam"
              </blockquote>
              <cite className="text-yellow-300 text-lg">— Chủ tịch Hồ Chí Minh</cite>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
              Những tư tưởng của Chủ tịch Hồ Chí Minh về Đảng không chỉ có giá trị lịch sử 
              mà còn là kim chỉ nam sáng ngời cho sự nghiệp xây dựng và phát triển đất nước trong thời đại mới.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwentySection;