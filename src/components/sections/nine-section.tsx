"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Highlight } from "../ui/hero-highlight";

export const NineSection = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(0);
  const [showEducationalValues, setShowEducationalValues] = useState(false);

  const principles = [
    {
      title: "Kiên định nền tảng tư tưởng",
      quote: "Đảng mà xa rời chủ nghĩa Mác – Lênin là Đảng mất phương hướng.",
      description:
        "Chủ nghĩa Mác – Lênin và tư tưởng Hồ Chí Minh là kim chỉ nam bảo đảm đường lối khoa học, cách mạng.",
      icon: "🧭",
      color: "from-blue-500 to-indigo-600",
      details:
        "Kiên định tư tưởng giúp Đảng định hướng đúng đắn trong mọi hoàn cảnh, bảo đảm đường lối khoa học, cách mạng."
    },
    {
      title: "Mục tiêu, lý tưởng rõ ràng",
      quote: "Không có gì quý hơn độc lập, tự do.",
      description:
        "Tuyệt đối trung thành với mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội; không có lợi ích nào khác ngoài lợi ích của nhân dân.",
      icon: "🎯",
      color: "from-red-500 to-orange-600",
      details:
        "Mục tiêu bất biến của Đảng và dân tộc là nền tảng để xây dựng chính sách dài hạn, bảo đảm mọi quyết sách hướng tới nâng cao đời sống và quyền lợi chính đáng của nhân dân."
    },
    {
      title: "Tập trung dân chủ",
      quote:
        "Dân chủ là để làm sao cho dân được mở miệng. Tập trung là thống nhất tư tưởng và hành động.",
      description:
        "Vừa phát huy dân chủ rộng rãi, vừa bảo đảm sự lãnh đạo tập trung, thống nhất từ Trung ương đến cơ sở.",
      icon: "🗳️",
      color: "from-green-500 to-emerald-600",
      details:
        "Nguyên tắc tập trung dân chủ đảm bảo phát huy trí tuệ tập thể, đồng thời giữ được tính đoàn kết, ổn định và hiệu quả trong chỉ đạo, điều hành."
    },
    {
      title: "Tự phê bình và phê bình",
      quote:
        "Cũng như mỗi ngày phải rửa mặt, người cách mạng cần thường xuyên tự phê bình và phê bình để cho tư tưởng, đạo đức ngày càng trong sáng.",
      description:
        "Coi như 'vũ khí sắc bén' để phát hiện, sửa chữa khuyết điểm, làm Đảng ngày càng trong sạch.",
      icon: "🪞",
      color: "from-purple-500 to-pink-600",
      details:
        "Thực hành tự phê bình, phê bình một cách xây dựng, chân thành, khách quan để phát huy ưu điểm, khắc phục nhược điểm, nâng cao chất lượng cán bộ, đảng viên."
    },
    {
      title: "Kỷ luật nghiêm minh, tự giác",
      quote:
        "Kỷ luật của Đảng là tự giác, nghiêm minh, từ trên xuống dưới, từ dưới lên trên.",
      description:
        "Mỗi đảng viên đều phải phục tùng tổ chức, không ai đứng ngoài hay đứng trên kỷ luật.",
      icon: "⚖️",
      color: "from-yellow-500 to-amber-600",
      details:
        "Kỷ luật tự giác xuất phát từ nhận thức chính trị và trách nhiệm; kỷ luật nghiêm minh giúp giữ vững trật tự nội bộ và nâng cao niềm tin của nhân dân."
    },
    {
      title: "Gắn bó mật thiết với nhân dân",
      quote:
        "Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân.",
      description:
        "Đảng vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân; mọi đường lối, chính sách phải xuất phát từ lợi ích chính đáng của nhân dân.",
      icon: "🤝",
      color: "from-cyan-500 to-blue-600",
      details:
        "Gắn bó với nhân dân nghĩa là lắng nghe, tôn trọng, bảo đảm quyền lợi và phúc lợi của nhân dân trong mọi quyết sách, đồng thời huy động sức mạnh quần chúng cho sự nghiệp chung."
    },
    {
      title: "Đoàn kết, thống nhất trong Đảng",
      quote:
        "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
      description:
        "Đoàn kết là 'then chốt của thành công', là điều kiện để phát huy sức mạnh khối đại đoàn kết toàn dân tộc.",
      icon: "🤲",
      color: "from-rose-500 to-red-600",
      details:
        "Phát huy truyền thống đoàn kết qua tinh thần trách nhiệm, tôn trọng, khoan dung và thống nhất ý chí để tạo thành sức mạnh tập thể thực hiện mục tiêu chung."
    },
  ];

  const educationalValues = [
    {
      title: "Bồi dưỡng lý tưởng, niềm tin cho thế hệ trẻ",
      description: "Truyền tải những giá trị tư tưởng cao đẹp, định hướng tương lai cho thế hệ kế tục",
      icon: "🌱",
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "Nâng cao ý thức trách nhiệm, đạo đức công vụ",
      description: "Rèn luyện phẩm chất và năng lực cho đội ngũ cán bộ, đảng viên",
      icon: "👥",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Chống lại các biểu hiện tiêu cực trong xã hội",
      description: "Đấu tranh với tham nhũng, lãng phí, suy thoái đạo đức",
      icon: "🛡️",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Khẳng định vai trò lãnh đạo của Đảng",
      description: "Giữ vững niềm tin của nhân dân trong sự nghiệp xây dựng đất nước giàu mạnh, văn minh",
      icon: "🏛️",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <section className="relative w-full min-h-screen snap-start overflow-hidden" id="party-principles">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://suckhoedoisong.qltns.mediacdn.vn/Images/duylinh/2017/08/31/Anh_3_TT_Pham_Kiet__resize.jpg')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-7xl mx-auto w-full pb-16">
          
          {/* Section Number and Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Những nguyên tắc cơ bản trong hoạt động của Đảng
            </h1>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
              <button
                onClick={() => setShowEducationalValues(false)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  !showEducationalValues 
                    ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Nguyên tắc cơ bản
              </button>
              <button
                onClick={() => setShowEducationalValues(true)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  showEducationalValues 
                    ? 'bg-gradient-to-r from-green-600 to-blue-500 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Giá trị giáo dục
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {!showEducationalValues ? (
              <motion.div
                key="principles"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Interactive Principles Grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mb-16"
                >
                   <div className="text-center mb-12">
                    <h2 className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <Highlight className="text-white">Bảy nguyên tắc bất di bất dịch</Highlight> để giữ gìn sự trong sạch, vững mạnh của Đảng
            </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {principles.map((principle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        onClick={() => setSelectedPrinciple(index)}
                        className={`relative cursor-pointer group transition-all duration-300 ${
                          selectedPrinciple === index ? 'scale-105' : 'hover:scale-102'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-xl`} />
                        <div className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-96 overflow-hidden transition-all duration-300 ${
                          selectedPrinciple === index ? 'bg-white/20 border-white/40' : 'hover:bg-white/15'
                        }`}>
                          <div className="text-5xl mb-6">{principle.icon}</div>
                          <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                            {principle.title}
                          </h3>
                          <p className="text-base text-gray-200 leading-relaxed line-clamp-4 mb-4">
                            {principle.description}
                          </p>
                          <blockquote className="text-sm italic text-yellow-300 line-clamp-3">
                            "{principle.quote}"
                          </blockquote>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Detailed View */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPrinciple}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-md border border-white/20 rounded-2xl p-8"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-6xl mr-6">{principles[selectedPrinciple].icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {principles[selectedPrinciple].title}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          {principles[selectedPrinciple].details}
                        </p>
                      </div>
                    </div>
                    <blockquote className="text-xl italic text-yellow-300 leading-relaxed border-l-4 border-yellow-400 pl-6 mb-4">
                      "{principles[selectedPrinciple].quote}"
                    </blockquote>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {principles[selectedPrinciple].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="educational"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Educational Values Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="mb-16"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                      Giá trị giáo dục và ý nghĩa thời đại
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      Những tư tưởng trên không chỉ là <Highlight className="text-white">kim chỉ nam trong quá trình xây dựng Đảng</Highlight>, mà còn mang giá trị giáo dục sâu sắc
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationalValues.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl blur-xl`} />
                        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/15">
                          <div className="text-5xl mb-6">{value.icon}</div>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {value.title}
                          </h3>
                          <p className="text-gray-200 leading-relaxed text-lg">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Summary Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                  >
                    <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                        Khẳng định vai trò lãnh đạo của Đảng
                      </h3>
                      <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                        Giữ vững niềm tin của nhân dân trong sự nghiệp xây dựng đất nước 
                        <span className="text-yellow-300 font-semibold"> giàu mạnh, văn minh</span>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default NineSection;