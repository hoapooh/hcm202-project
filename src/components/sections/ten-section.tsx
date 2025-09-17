"use client";

import React from "react";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TenSection = () => {
  const sections = [
    {
      title: "Vị trí, vai trò của cán bộ",
      subtitle: "Cái gốc của mọi công việc",
      description: "Cán bộ là lực lượng trực tiếp tổ chức, triển khai đường lối, chính sách của Đảng",
      color: "bg-emerald-900",
      icon: "🌳"
    },
    {
      title: "Phẩm chất chính trị và đạo đức",
      subtitle: "Vừa hồng, vừa chuyên",
      description: "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội",
      color: "bg-black",
      icon: "⚖️"
    },
    {
      title: "Năng lực, chuyên môn",
      subtitle: "Tác phong khoa học",
      description: "Giỏi về chuyên môn, có phương pháp làm việc hiệu quả",
      color: "bg-sky-600",
      icon: "🎓"
    },
    {
      title: "Gắn bó mật thiết với nhân dân",
      subtitle: "Dân như nước, cán bộ như cá",
      description: "Dân biết, dân bàn, dân làm, dân kiểm tra",
      color: "bg-emerald-900",
      icon: "🤝"
    },
    {
      title: "Đào tạo, bồi dưỡng cán bộ",
      subtitle: "Công việc gốc của Đảng",
      description: "Huấn luyện cán bộ là công việc cốt lõi",
      color: "bg-black",
      icon: "📚"
    },
    {
      title: "Thách thức và giải pháp",
      subtitle: "Vận dụng sáng tạo",
      description: "Ứng phó với suy thoái tư tưởng, đạo đức hiện nay",
      color: "bg-sky-600",
      icon: "🚀"
    }
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden" id="hcm-thoughts">
      {/* Background Image */}
      <img
        src="https://bvhttdl.mediacdn.vn/2019/5/31/photo-1-15592695565171101555745.jpg"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Đảng phải trong sạch lành mạnh
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
            Xây dựng đội ngũ cán bộ, công nhân viên
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Tư tưởng Hồ Chí Minh về xây dựng đội ngũ cán bộ trong sạch, vững mạnh
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="group/canvas-card relative h-[25rem] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName={cn("absolute inset-0 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300", section.color)}
                colors={[
                  [59, 130, 246],
                  [139, 69, 19],
                ]}
                dotSize={2}
              />
              <div className="absolute inset-0 [background:radial-gradient(400px_at_center,rgba(255,255,255,.1),transparent)] opacity-0 group-hover/canvas-card:opacity-100 transition duration-200" />
              
              {/* Card Content */}
              <div className="relative z-20 p-6 text-center h-full flex flex-col justify-center">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {section.title}
                </h3>
                <h4 className="text-md font-semibold text-yellow-400 mb-3">
                  {section.subtitle}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white mb-4">Cuộn xuống để tìm hiểu chi tiết</p>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TenSection;