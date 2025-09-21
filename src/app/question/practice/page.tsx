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
}

const PracticePage: React.FC = () => {
  const router = useRouter();
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [submitted, setSubmitted] = useState<{ [key: number]: boolean }>({});

  const handleSelect = (questionId: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = (questionId: number) => {
    setSubmitted((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  return (
    <div className="h-screen bg-gradient-to-br from-pink-700 to-purple-600 overflow-y-auto">
      <HeaderNav />

      <button
        className="fixed top-5 left-5 z-[99999] px-4 py-2 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded hover:from-yellow-600 hover:to-orange-600 transition-colors cursor-pointer"
        onClick={() => router.back()}
      >
        Quay lại
      </button>

      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Ôn Tập
        </h1>
        {questionsData.map((q: Question) => (
          <div
            key={q.id}
            className="mb-8 p-4 border rounded-lg bg-blue-100 shadow text-black"
          >
            <h3 className="font-semibold mb-2">{q.question}</h3>
            <div className="space-y-2">
              {q.options.map((option, idx) => (
                <label key={`${option}-${idx}`} className="block">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={selectedAnswers[q.id] === option}
                    onChange={() => handleSelect(q.id, option)}
                    className="mr-2"
                    disabled={submitted[q.id]}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-gradient-to-br from-pink-700 to-purple-600 text-white rounded cursor-pointer disabled:opacity-50 hover:from-pink-800 hover:to-purple-700 transition-colors"
              onClick={() => handleSubmit(q.id)}
              disabled={submitted[q.id] || !selectedAnswers[q.id]}
            >
              Nộp câu trả lời
            </button>
            {submitted[q.id] && (
              <div className="mt-3 font-semibold">
                {selectedAnswers[q.id] === q.answer ? (
                  <span className="text-green-600">
                    ✔ Đúng! Đáp án: {q.answer}
                  </span>
                ) : (
                  <span className="text-red-600">
                    ✘ Sai! Đáp án đúng: {q.answer}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
