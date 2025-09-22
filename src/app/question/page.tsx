"use client";
import HeaderNav from "@/components/navigation/header-nav";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/stateful-button";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const QuestionPage = () => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    setTimeout(() => {
      router.push(path);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-orange-500 flex justify-center items-center">
      <HeaderNav />

      <main className="px-4 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-8">
            <LayoutTextFlip
              text="Câu hỏi và Bài tập "
              words={["HCM", "Tư tưởng Hồ Chí Minh"]}
            />
            <p className="text-lg text-white mt-5">
              Luyện tập và kiểm tra kiến thức về tư tưởng Hồ Chí Minh
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-700 to-purple-600 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Ôn Tập
                </h3>
                <p className="text-white mb-4">
                  Ôn lại kiến thức đã học một cách hiệu quả
                </p>
                <Button
                  className="w-full bg-[#ffffff]/30 text-white py-2 px-4 rounded-lg hover:bg-[#ffffff]/50 transition-colors cursor-pointer"
                  onClick={() => handleNavigate("/question/practice")}
                >
                  Ôn tập
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Bài tập
                </h3>
                <p className="text-white mb-4">
                  Thực hành để củng cố và nâng cao kiến thức
                </p>
                <Button
                  className="w-full bg-[#ffffff]/30 text-white py-2 px-4 rounded-lg hover:bg-[#ffffff]/50 transition-colors cursor-pointer"
                  onClick={() => handleNavigate("/question/exercise")}
                >
                  Làm bài
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Kiểm Tra
                </h3>
                <p className="text-white mb-4">
                  Đánh giá mức độ hiểu bài qua bài kiểm tra
                </p>
                <Button
                  className="w-full bg-[#ffffff]/30 text-white py-2 px-4 rounded-lg hover:bg-[#ffffff]/50 transition-colors cursor-pointer"
                  onClick={() => handleNavigate("/question/quiz")}
                >
                  Kiểm tra
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuestionPage;
