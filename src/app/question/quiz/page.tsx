"use client";
import HeaderNav from "@/components/navigation/header-nav";
import React, { useState, useEffect } from "react";
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

const quizQuestions: Question[] = questionsData.filter(
  (q: Question) => q.type === "quiz"
);

const QUIZ_DURATION = 1 * 60; // 10 phút (tính bằng giây)

const QuizPage: React.FC = () => {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [showUnanswered, setShowUnanswered] = useState<{
    [key: number]: boolean;
  }>({});
  const [secondsLeft, setSecondsLeft] = useState(QUIZ_DURATION);

  // Đếm ngược thời gian
  useEffect(() => {
    if (submitted) return;
    if (secondsLeft <= 0) {
      autoSubmit();
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, submitted]);

  // Hàm tự động submit khi hết giờ
  const autoSubmit = () => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correct += 1;
      }
    });
    setScore(correct * 0.4);
    setSubmitted(true);
    setShowUnanswered({});
  };

  const handleSelect = (questionId: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmitAll = () => {
    let correct = 0;
    let unanswered: { [key: number]: boolean } = {};
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correct += 1;
      }
      if (!selectedAnswers[q.id]) {
        unanswered[q.id] = true;
      }
    });
    setShowUnanswered(unanswered);
    if (Object.keys(unanswered).length === 0) {
      setScore(correct * 0.4);
      setSubmitted(true);
    }
  };

  const handleQuestionClick = (idx: number) => {
    setCurrentIdx(idx);
  };

  const handlePrev = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) setCurrentIdx(currentIdx + 1);
  };

  const handleQuit = () => {
    router.push("/question"); // Reload the page
  };

  const currentQuestion = quizQuestions[currentIdx];

  // Hiển thị thời gian mm:ss
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-500 to-green-500 overflow-y-auto flex">
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
            Danh sách câu hỏi
          </h2>
          {/* Thời gian làm bài */}
          <div className="mb-4 text-center">
            <span className="text-lg font-bold text-blue-600">
              Thời gian còn lại: {formatTime(secondsLeft)}
            </span>
          </div>
          <ul className="space-y-2 grid grid-cols-5 gap-2">
            {quizQuestions.map((q, idx) => (
              <li key={q.id}>
                <button
                  className={`w-full px-4 py-2 rounded flex justify-center
  ${
    idx === currentIdx
      ? "bg-blue-500 text-white font-bold"
      : submitted
      ? selectedAnswers[q.id]
        ? selectedAnswers[q.id] === q.answer
          ? "bg-green-500 text-white font-bold"
          : "bg-red-500 text-white font-bold"
        : "bg-gray-400 text-white font-bold"
      : selectedAnswers[q.id]
      ? "bg-yellow-200 text-black font-bold"
      : "bg-blue-100 text-black hover:bg-blue-200"
  }`}
                  onClick={() => handleQuestionClick(idx)}
                >
                  {q.no || idx + 1}
                </button>
              </li>
            ))}
          </ul>
          {/* Show message only after submit attempt and if there are unanswered questions */}
          {!submitted && Object.keys(showUnanswered).length > 0 && (
            <div className="mt-2 text-red-600 font-bold">
              *Bạn phải chọn đáp án cho tất cả câu hỏi trước khi nộp bài
            </div>
          )}
          <div className="w-full justify-between mt-6 grid grid-cols-3 gap-4">
            <button
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 font-bold disabled:hover:bg-blue-500 disabled:opacity-50"
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
            {!submitted ? (
              <button
                className="w-full px-4 py-2 bg-gradient-to-br from-green-500 to-blue-500 text-white rounded hover:from-green-600 hover:to-blue-600 transition-colors font-bold"
                onClick={handleSubmitAll}
              >
                Nộp bài
              </button>
            ) : (
              <button
                className="w-full px-4 py-2 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded hover:from-orange-600 hover:to-yellow-600 transition-colors font-bold"
                onClick={handleQuit}
              >
                Thoát
              </button>
            )}
            <button
              className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 font-bold disabled:hover:bg-blue-500 disabled:opacity-50 cusrsor-pointer"
              onClick={handleNext}
              disabled={currentIdx === quizQuestions.length - 1}
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
          {submitted && (
            <div className="mt-8 text-center text-2xl font-bold text-blue-900">
              Tổng điểm: {score}
            </div>
          )}
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
                className="block bg-white rounded-lg p-3 shadow cursor-pointer hover:bg-blue-200 transition-colors text-black"
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={selectedAnswers[currentQuestion.id] === option}
                  onChange={() => handleSelect(currentQuestion.id, option)}
                  className="mr-2 "
                  disabled={submitted}
                />
                {option}
              </label>
            ))}
          </div>
          {showUnanswered[currentQuestion.id] && !submitted && (
            <div className="mt-2 text-red-600 font-bold">
              *Bạn chưa chọn đáp án cho câu hỏi này
            </div>
          )}
          {submitted && (
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

export default QuizPage;
