"use client"
import HeaderNav from '@/components/navigation/header-nav'
import React from 'react'
import { useRouter } from 'next/navigation'


const QuestionPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-orange-500">
      <HeaderNav />
      
      <main className="pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              ❓ Câu Hỏi & Bài Tập HCM202
            </h1>
            <p className="text-lg text-gray-600">
              Luyện tập và kiểm tra kiến thức về tư tưởng Hồ Chí Minh
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Kiểm Tra</h3>
                <p className="text-gray-600 mb-4">
                  Đánh giá mức độ hiểu bài qua bài kiểm tra
                </p>
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => router.push('/question/quiz')}>
                  Làm bài
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Ôn Tập</h3>
                <p className="text-gray-600 mb-4">
                  Ôn lại kiến thức đã học một cách hiệu quả
                </p>
                <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors"
                onClick={() => router.push('/question/practice')}>
                  Ôn tập
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🚧</div>
              <h2 className="text-2xl font-semibold mb-2">Đang cập nhật</h2>
              <p>Hệ thống câu hỏi và bài tập sẽ sớm được hoàn thiện!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default QuestionPage
