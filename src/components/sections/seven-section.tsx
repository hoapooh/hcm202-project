"use client";

import React from "react";
import { motion } from "motion/react";
import { Highlight } from "../ui/hero-highlight";

export const SevenSection = () => {
  const purityStrengthAspects = [
    {
      title: "Trong sạch",
      description: "Không tham nhũng, không quan liêu",
      details: "Không lợi dụng quyền lực để mưu cầu lợi ích riêng. Luôn giữ vững phẩm chất đạo đức cách mạng",
      icon: "🌿",
      benefits: ["Giữ vững niềm tin của nhân dân", "Tăng cường uy tín của Đảng", "Xây dựng hình ảnh tốt đẹp"]
    },
    {
      title: "Vững mạnh", 
      description: "Có đường lối đúng đắn, đội ngũ cán bộ đoàn kết",
      details: "Kỷ luật nghiêm minh và gắn bó chặt chẽ với nhân dân. Tổ chức vững chắc từ Trung ương đến cơ sở",
      icon: "🏛️",
      benefits: ["Đảm bảo lãnh đạo hiệu quả", "Thống nhất ý chí và hành động", "Phát huy sức mạnh tập thể"]
    }
  ];

  const consequences = [
    {
      condition: "Nếu Đảng suy thoái, tha hóa",
      result: "Sẽ xa dân và đánh mất vai trò lãnh đạo lịch sử",
      icon: "⚠️"
    },
    {
      condition: "Nếu Đảng giấu giếm khuyết điểm", 
      result: "Là một Đảng hỏng, mất lòng tin của nhân dân",
      icon: "❌"
    },
    {
      condition: "Nếu Đảng có gan thừa nhận và sửa chữa khuyết điểm",
      result: "Là Đảng tiến bộ, mạnh dạn, chắc chắn, chân chính",
      icon: "✅"
    }
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden" id="party-purity-strength">
      {/* Background Image */}
     <img
        src="https://image.sggp.org.vn/w1000/Uploaded/2025/ohpohuo/2020_01_06/f6b_GUSY.jpg.webp"
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
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent mb-6 h-20">
              Đảng phải trong sạch, vững mạnh
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-6 max-w-5xl mx-auto"
            >
              <blockquote className="text-xl text-white italic leading-relaxed mb-4">
                "Một Đảng mà giấu giếm khuyết điểm của mình là một Đảng hỏng. 
                Một Đảng có gan thừa nhận khuyết điểm, vạch rõ khuyết điểm, 
                tìm cách sửa chữa khuyết điểm đó là một Đảng
                <Highlight>
                  tiến bộ, mạnh dạn, chắc chắn, chân chính
                </Highlight>"
              </blockquote>
              <cite className="text-yellow-300 text-lg">— Chủ tịch Hồ Chí Minh —</cite>
            </motion.div>
          </motion.div>

          {/* Main Content - Purity and Strength */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {purityStrengthAspects.map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{aspect.icon}</div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 text-center">
                    {aspect.title}
                  </h3>
                  
                  <p className="text-xl text-gray-200 leading-relaxed mb-6 text-center">
                    {aspect.description}
                  </p>
                  
                  <div className="border-t border-white/20 pt-6 mb-6">
                    <p className="text-base text-gray-300 leading-relaxed italic">
                      {aspect.details}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-yellow-400">Ý nghĩa:</h4>
                    {aspect.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Consequences Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Hệ quả và Bài học
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consequences.map((consequence, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className={`border rounded-xl p-6 ${
                    index === 2 
                      ? 'bg-green-900/20 border-green-400/30' 
                      : index === 1 
                      ? 'bg-red-900/20 border-red-400/30'
                      : 'bg-orange-900/20 border-orange-400/30'
                  }`}
                >
                  <div className="text-3xl mb-4 text-center">{consequence.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {consequence.condition}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {consequence.result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Key Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-white leading-relaxed">
                <Highlight className="bg-gradient-to-r from-red-300 to-yellow-300">
                  Xây dựng Đảng là nhiệm vụ sống còn của cách mạng
                </Highlight>. 
                Một Đảng trong sạch, vững mạnh mới có thể giữ vững niềm tin của nhân dân 
                và lãnh đạo đất nước đi đúng con đường độc lập dân tộc gắn liền với chủ nghĩa xã hội.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SevenSection;