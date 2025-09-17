import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

const FirstPage = () => {
  return (
    <div className="w-full h-full py-4 relative snap-start overflow-hidden">
      <img
        src="https://hvctcand.bocongan.gov.vn/Uploads/2020/2/3/13/anhkyniemdang2019.jpg"
        alt="background image"
        className="absolute inset-0 w-full h-full object-cover brightness-70 blur-sm pointer-events-none"
      />
      <LampContainer className="bg-transparent">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -100 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-gray-300 to-yellow-300 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Vai trò lãnh đạo của <br />{" "}
          <span className="text-red-600">Đảng Cộng sản Việt Nam</span>
        </motion.h1>
      </LampContainer>
    </div>
  );
};

export default FirstPage;
