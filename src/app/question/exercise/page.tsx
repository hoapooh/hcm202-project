"use client";
import HeaderNav from "@/components/navigation/header-nav";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import questionsData from "../questions.json";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  type: string;
  no: string;
}

const exerciseQuestions: Question[] = questionsData.filter(
  (q: Question) => q.type === "quiz"
);

const ExercisePage: React.FC = () => {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [showResult, setShowResult] = useState<{ [key: number]: boolean }>({});

  const handleSelect = (questionId: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
    setShowResult((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  const handleQuestionClick = (idx: number) => {
    setCurrentIdx(idx);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const handleNext = () => {
    if (currentIdx < exerciseQuestions.length - 1)
      setCurrentIdx(currentIdx + 1);
  };

  const handleQuit = () => {
    router.push("/question");
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResult({});
    setCurrentIdx(0);
  };

  const currentQuestion = exerciseQuestions[currentIdx];

  return (
    <div className="h-screen bg-gradient-to-br from-purple-600 to-blue-500 overflow-y-auto flex">
      <HeaderNav />
      <button
        className="fixed top-5 left-5 z-[99999] px-4 py-2 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded hover:from-yellow-600 hover:to-orange-600 transition-colors cursor-pointer"
        onClick={() => router.back()}
      >
        Quay lại
      </button>
      <div className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Card: List of Questions */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-sm">
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
            Danh sách câu hỏi (Exercise)
          </h2>
          <ul className="space-y-2 grid grid-cols-5 gap-2">
            {exerciseQuestions.map((q, idx) => (
              <li key={q.id}>
                <button
                  className={`w-full px-4 py-2 rounded flex justify-center cursor-pointer
  ${
    idx === currentIdx
      ? "bg-blue-500 text-white font-bold"
      : selectedAnswers[q.id]
      ? selectedAnswers[q.id] === q.answer
        ? "bg-green-500 text-white font-bold"
        : "bg-red-500 text-white font-bold"
      : "bg-blue-100 text-black hover:bg-blue-200"
  }`}
                  onClick={() => handleQuestionClick(idx)}
                >
                  {q.no || idx + 1}
                </button>
              </li>
            ))}
          </ul>
          <div className="w-full justify-between mt-6 grid grid-cols-4 gap-2">
            <button
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 font-bold disabled:hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={handlePrev}
              disabled={currentIdx === 0}
            >
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
                  d="M14 5l-7 7 7 7M21 12H7"
                />
              </svg>
            </button>
            <button
              className="w-full px-4 py-2 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded hover:from-orange-600 hover:to-yellow-600 transition-colors font-bold"
              onClick={handleQuit}
            >
              Thoát
            </button>
            <button
              className="w-full px-4 py-2 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded hover:from-green-600 hover:to-teal-600 transition-colors font-bold"
              onClick={handleReset}
            >
              Làm lại
            </button>
            <button
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 font-bold disabled:hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={handleNext}
              disabled={currentIdx === exerciseQuestions.length - 1}
            >
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
                  d="M10 5l7 7-7 7M3 12h14"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Right Card: Current Question */}
        <div className="bg-blue-100 rounded-xl shadow-lg p-6 flex flex-col items-center h-min md:col-span-2 w-3xl">
          <h3 className="text-xl font-bold mb-2 text-blue-900 text-center">
            Câu {currentQuestion.no || currentIdx + 1}
          </h3>
          <div className="font-semibold mb-4 text-center text-black">
            {currentQuestion.question}
          </div>
          {/* Options in 2 columns, 2 rows */}
          <div className="w-full grid grid-cols-2 gap-4 mb-4">
            {currentQuestion.options.map((option, idx) => (
              <label
                key={`${option}-${idx}`}
                className={`block bg-white rounded-lg p-3 shadow cursor-pointer hover:bg-blue-200 transition-colors text-black
    ${
      selectedAnswers[currentQuestion.id]
        ? selectedAnswers[currentQuestion.id] === option
          ? selectedAnswers[currentQuestion.id] === currentQuestion.answer
            ? "border-2 border-green-500" // chọn đúng
            : "border-2 border-red-500" // chọn sai
          : option === currentQuestion.answer
          ? "border-2 border-green-500" // hiển thị viền xanh cho đáp án đúng
          : ""
        : ""
    }
  `}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={selectedAnswers[currentQuestion.id] === option}
                  onChange={() => handleSelect(currentQuestion.id, option)}
                  className="mr-2 "
                  disabled={!!selectedAnswers[currentQuestion.id]}
                />
                {option}
              </label>
            ))}
          </div>
          {showResult[currentQuestion.id] && (
            <div className="mt-3 font-semibold">
              {selectedAnswers[currentQuestion.id] ===
              currentQuestion.answer ? (
                <span className="text-green-600">
                  ✔ Đúng! Đáp án: {currentQuestion.answer}
                </span>
              ) : (
                <span className="text-red-600">
                  ✘ Sai! Đáp án đúng: {currentQuestion.answer}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
