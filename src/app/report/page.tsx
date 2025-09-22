"use client";

import HeaderNav from "@/components/navigation/header-nav";
import {
	BookOpenIcon,
	CheckIcon,
	CircleQuestionMarkIcon,
	EarthIcon,
	LightbulbIcon,
	PaletteIcon,
	PenIcon,
	SearchCheckIcon,
	SparklesIcon,
	UserIcon,
	UsersIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ReportPage = () => {
	const [activeSection, setActiveSection] = useState("overview");

	const scrollToSection = (sectionId: string) => {
		setActiveSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navigationItems = [
		{ id: "overview", label: "Tổng quan", icon: "📋" },
		{ id: "tools", label: "Công cụ AI", icon: "🤖" },
		{ id: "output", label: "Kết quả", icon: "📊" },
		{ id: "modifications", label: "Chỉnh sửa", icon: "✏️" },
		{ id: "verification", label: "Kiểm chứng", icon: "✅" },
		{ id: "application", label: "Ứng dụng", icon: "💡" },
		{ id: "commitment", label: "Cam kết", icon: "🤝" },
	];

	return (
		<div className="h-screen w-screen overflow-auto bg-gradient-to-br from-red-50 via-white to-orange-50 container-scroll font-bevietnampro">
			<HeaderNav />
			{/* Floating Navigation */}
			<nav className="fixed top-6 left-1/2 transform max-w-5xl w-full -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-red-200 px-3 py-2">
				<div className="flex items-center gap-x-2">
					{navigationItems.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`flex items-center justify-center gap-x-1 px-3 py-2 flex-1 rounded-full text-sm font-medium transition-all duration-300 ${
								activeSection === item.id
									? "bg-red-600 text-white shadow-md"
									: "text-red-600 hover:bg-red-50"
							}`}
						>
							<span>{item.icon}</span>
							<span className="hidden md:inline shrink-0">{item.label}</span>
						</button>
					))}
				</div>
			</nav>

			{/* Hero Header */}
			<div
				id="overview"
				className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-20 pt-24 overflow-hidden"
			>
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
					<div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-full"></div>
					<div className="absolute bottom-20 left-1/3 w-40 h-40 border border-white rounded-full"></div>
				</div>

				<div className="container mx-auto px-6 relative z-10">
					<div className="text-center">
						<div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
							<span className="text-white/90 font-medium">Nhóm 5 - HCM202</span>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-red-100 bg-clip-text">
							BÁO CÁO DỰ ÁN
						</h1>
						<h2 className="text-2xl md:text-4xl font-semibold mb-8 text-red-100">
							ỨNG DỤNG AI HỖ TRỢ HỌC TẬP
						</h2>
						<div className="flex justify-center items-center space-x-4 mb-8">
							<div className="w-12 h-1 bg-white rounded-full"></div>
							<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
								<div className="w-2 h-2 bg-red-600 rounded-full"></div>
							</div>
							<div className="w-12 h-1 bg-white rounded-full"></div>
						</div>
						<p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
							Nghiên cứu và ứng dụng công nghệ AI trong việc hỗ trợ học tập môn Tư tưởng Hồ Chí Minh
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-6 py-16">
				{/* AI Tools Section */}
				<section id="tools" className="mb-20">
					<div className="bg-white rounded-3xl shadow-xl border border-red-100 p-10 relative overflow-hidden">
						{/* Background decoration */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-transparent rounded-bl-full"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-8">
								<div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-4">
									<span className="text-white text-xl">🤖</span>
								</div>
								<h3 className="text-3xl font-bold text-red-800">Công cụ đã sử dụng</h3>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
								{[
									{
										name: "NotebookLM",
										desc: "Tóm tắt tài liệu",
										color: "from-white to-white",
										logo: "/notebooklm.png",
									},
									{
										name: "ChatGPT",
										desc: "Xử lý ngôn ngữ",
										color: "from-white to-white",
										logo: "/chatgpt.png",
									},
									{
										name: "Gemini",
										desc: "Phân tích dữ liệu",
										color: "from-white to-white",
										logo: "/gemini.png",
									},
									{
										name: "Github Copilot",
										desc: "Hỗ trợ code",
										color: "from-white to-white",
										logo: "/copilot.png",
									},
								].map((tool) => (
									<div
										key={tool.name}
										className="group bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
									>
										<div
											className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}
										>
											<Image src={tool.logo} alt={tool.name} width={24} height={24} />
										</div>
										<h4 className="font-bold text-red-700 text-lg mb-2">{tool.name}</h4>
										<p className="text-gray-600 text-sm">{tool.desc}</p>
									</div>
								))}
							</div>

							<div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-8 border-red-600 relative">
								<div className="absolute top-4 right-4 w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center">
									<span className="text-2xl">🎯</span>
								</div>
								<h4 className="font-bold text-red-800 mb-4 text-xl">Mục đích sử dụng:</h4>
								<p className="text-gray-700 leading-relaxed text-lg">
									Hỗ trợ tổng hợp nội dung từ PDF, cung cấp thông tin cho chatbot, hỗ trợ cấu trúc
									code giao diện, bố cục, chuyển động của web.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* AI Output Section */}
				<section id="output" className="mb-20">
					<div className="bg-white rounded-3xl shadow-xl border border-red-100 p-10 relative overflow-hidden">
						<div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-transparent rounded-br-full"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-8">
								<div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
									<span className="text-white text-xl">📊</span>
								</div>
								<h3 className="text-3xl font-bold text-red-800">Kết quả từ AI</h3>
							</div>

							<div className="grid md:grid-cols-2 gap-8">
								<div className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
										<BookOpenIcon className="text-white size-8 stroke-2" />
									</div>
									<h4 className="font-bold text-red-800 mb-4 text-xl text-center">
										Bản tóm tắt lý thuyết
									</h4>
									<p className="text-gray-700 text-center leading-relaxed">
										Chắt lọc và tổng hợp nội dung cốt lõi từ tài liệu PDF gốc
									</p>
								</div>
								<div className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
										<CircleQuestionMarkIcon className="text-white size-8 stroke-2" />
									</div>
									<h4 className="font-bold text-red-800 mb-4 text-xl text-center">
										Bộ câu hỏi trắc nghiệm
									</h4>
									<p className="text-gray-700 text-center leading-relaxed">
										Tạo ra bộ quiz ban đầu dựa trên nội dung đã tóm tắt
									</p>
								</div>
								<div className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
										<EarthIcon className="text-white size-8 stroke-2" />
									</div>
									<h4 className="font-bold text-red-800 mb-4 text-xl text-center">
										Cấu trúc giao diện hoàn chỉnh
									</h4>
									<p className="text-gray-700 text-center leading-relaxed">
										Tạo cấu trúc cho 3 phần chính của website với bố cục rõ ràng và logic
									</p>
								</div>
								<div className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
										<PaletteIcon className="text-white size-8 stroke-2" />
									</div>
									<h4 className="font-bold text-red-800 mb-4 text-xl text-center">
										Giao diện tương tác thân thiện
									</h4>
									<p className="text-gray-700 text-center leading-relaxed">
										Tạo ra giao diện giúp tương tác thân thiện và dễ sử dụng cho người dùng
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Team Modifications Section */}
				<section id="modifications" className="mb-20">
					<div className="bg-white rounded-3xl shadow-xl border border-red-100 p-10 relative overflow-hidden">
						<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-100 to-transparent rounded-tl-full"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-8">
								<div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-4">
									<PenIcon className="text-white size-6 stroke-3" />
								</div>
								<h3 className="text-3xl font-bold text-red-800">Phần nhóm chỉnh sửa</h3>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								{[
									{
										title: "Đối chiếu nguồn chính thống",
										content:
											"Cổng thông tin Chính phủ, Hồ Chí Minh Toàn tập, Văn kiện Đại hội XIII",
										icon: <SearchCheckIcon className="text-white size-6 stroke-2" />,
										color: "from-blue-500 to-blue-600",
									},
									{
										title: "Bổ sung ví dụ thực tiễn",
										content: "Tăng tính phù hợp với bối cảnh Việt Nam",
										icon: <SparklesIcon className="text-white size-6 stroke-2" />,
										color: "from-green-500 to-green-600",
									},
									{
										title: "Biên soạn và điều chỉnh câu hỏi quiz",
										content: "Rõ ràng, dễ tiếp cận với sinh viên",
										icon: <CircleQuestionMarkIcon className="text-white size-6 stroke-2" />,
										color: "from-purple-500 to-purple-600",
									},
									{
										title: "Điều chỉnh màu sắc giao diện",
										content: "Phù hợp với chủ đề sản phẩm",
										icon: <PaletteIcon className="text-white size-6 stroke-2" />,
										color: "from-orange-500 to-orange-600",
									},
								].map((item, index) => (
									<div
										key={index}
										className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
									>
										<div
											className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}
										>
											<span className="text-white text-xl">{item.icon}</span>
										</div>
										<h4 className="font-bold text-red-800 mb-3 text-lg">{item.title}</h4>
										<p className="text-gray-700 leading-relaxed">{item.content}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Verification Table Section */}
				<section id="verification" className="mb-20">
					<div className="bg-white rounded-3xl shadow-xl border border-red-100 p-10 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-100 to-transparent rounded-bl-full"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-8">
								<div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4">
									<CheckIcon className="text-white size-8 stroke-3" />
								</div>
								<h3 className="text-3xl font-bold text-red-800">Kiểm chứng và đối chiếu nguồn</h3>
							</div>

							<div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border-l-8 border-green-600">
								<p className="text-gray-700 leading-relaxed text-lg">
									<span className="font-semibold text-green-800">
										Quy trình kiểm chứng nghiêm ngặt:
									</span>{" "}
									Tất cả thông tin đều được đối chiếu với các nguồn tài liệu chính thống và được xác
									minh độ chính xác trước khi sử dụng.
								</p>
							</div>

							<div className="overflow-x-auto rounded-2xl shadow-lg">
								<table className="w-full border-collapse bg-white rounded-2xl overflow-hidden">
									<thead>
										<tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
											<th className="px-6 py-4 text-left font-bold text-lg">Nội dung</th>
											<th className="px-6 py-4 text-left font-bold text-lg">Nguồn gốc</th>
											<th className="px-6 py-4 text-left font-bold text-lg">
												Phương thức kiểm chứng
											</th>
											<th className="px-6 py-4 text-left font-bold text-lg w-50">Trạng thái</th>
										</tr>
									</thead>
									<tbody>
										{[
											{
												content: "Tính tất yếu ra đời của Đảng Cộng sản Việt Nam",
												source:
													"File PDF HCM202, trang 69-70; Cương lĩnh chính trị 1930; tác phẩm Đường cách mệnh (1927)",
												method: "Đối chiếu trực tiếp với văn bản gốc",
												status: "Đã kiểm chứng",
											},
											{
												content: 'Quan điểm Hồ Chí Minh: "Đảng có vững, cách mệnh mới thành công"',
												source: "File PDF HCM202, trang 69-70; Hồ Chí Minh Toàn tập, tập 2",
												method: "So sánh với trích dẫn trong giáo trình",
												status: "Đã kiểm chứng",
											},
											{
												content: 'Vai trò của Đảng: "Đảng ta là đạo đức, là văn minh"',
												source: "File PDF HCM202, trang 70-79; Hồ Chí Minh Toàn tập, tập 15",
												method: "Đối chiếu với văn bản gốc",
												status: "Đã kiểm chứng",
											},
											{
												content: "Mục tiêu độc lập dân tộc gắn liền với CNXH",
												source: "File PDF HCM202, trang 70-79; Nghị quyết Đại hội XIII của Đảng",
												method:
													"Đối chiếu với văn bản gốc và đối chiếu với tài liệu chính thức (Văn kiện Đại hội XIII)",
												status: "Đã kiểm chứng",
											},
											{
												content: "Quan điểm về xây dựng Đảng trong sạch, vững mạnh",
												source: "File PDF HCM202, trang 70-79; Hồ Chí Minh Toàn tập, tập 12 & 15",
												method: "Đối chiếu với văn bản gốc",
												status: "Đã kiểm chứng",
											},
										].map((row, index) => (
											<tr
												key={index}
												className={`transition-colors duration-200 ${
													index % 2 === 0
														? "bg-red-25 hover:bg-red-50"
														: "bg-white hover:bg-gray-50"
												}`}
											>
												<td className="px-6 py-4 text-gray-800 font-medium border-b border-gray-200">
													{row.content}
												</td>
												<td className="px-6 py-4 text-gray-600 text-sm border-b border-gray-200 leading-relaxed">
													{row.source}
												</td>
												<td className="px-6 py-4 text-gray-600 text-sm border-b border-gray-200 leading-relaxed">
													{row.method}
												</td>
												<td className="px-6 py-4 border-b border-gray-200">
													<span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
														✓ {row.status}
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>

				{/* Creative AI Application Section */}
				<section id="application" className="mb-20">
					<div className="bg-white rounded-3xl shadow-xl border border-red-100 p-10 relative overflow-hidden">
						<div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-100 to-transparent rounded-tr-full"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-8">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
									<LightbulbIcon className="text-white size-8 stroke-3" />
								</div>
								<h3 className="text-3xl font-bold text-red-800">Ứng dụng AI sáng tạo</h3>
							</div>

							<div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border-l-8 border-purple-600 mb-8 relative">
								<div className="absolute top-4 right-4 w-20 h-20 bg-purple-600/10 rounded-full flex items-center justify-center">
									<span className="text-3xl">🤖</span>
								</div>
								<h4 className="font-bold text-purple-800 mb-4 text-xl">Vai trò hỗ trợ của AI:</h4>
								<p className="text-gray-700 leading-relaxed text-lg">
									<strong className="text-purple-800">
										AI đóng vai trò hỗ trợ, không hoàn toàn phụ thuộc vào công việc nghiên cứu
									</strong>{" "}
									- Tất cả nội dung đều được nhóm nghiên cứu, phân tích và kiểm chứng kỹ lưỡng.
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-8 mb-8">
								<div className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
										<SearchCheckIcon className="text-white size-8 stroke-2" />
									</div>
									<h4 className="font-bold text-purple-800 mb-4 text-xl text-center">
										Tóm tắt kiến thức
									</h4>
									<p className="text-gray-700 text-center leading-relaxed">
										Chắt lọc nội dung cốt lõi từ tài liệu gốc, hình thành khung lý thuyết và hỗ trợ
										xây dựng câu hỏi quiz.
									</p>
								</div>
								<div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
										<LightbulbIcon className="text-white size-8 stroke-3" />
									</div>
									<h4 className="font-bold text-blue-800 mb-4 text-xl text-center">
										Gợi ý thực tiễn
									</h4>
									<p className="text-gray-700 text-center leading-relaxed">
										Cung cấp các ví dụ, dẫn chứng gắn với bối cảnh Việt Nam đương đại để minh họa
										cho nội dung lý thuyết.
									</p>
								</div>
							</div>

							<div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
								<div className="flex items-center mb-6">
									<div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-3">
										<UsersIcon className="text-white size-6 fill-white" />
									</div>
									<h4 className="font-bold text-red-800 text-xl">Công việc nhóm thực hiện:</h4>
								</div>
								<div className="grid md:grid-cols-2 gap-6">
									{[
										{
											title: "Nghiên cứu nguồn chính thống",
											content:
												"Cổng thông tin Chính phủ, Hồ Chí Minh Toàn tập, Văn kiện Đại hội XIII",
											icon: "📚",
										},
										{
											title: "Chọn lọc ví dụ thực tiễn",
											content: "Phù hợp với mục tiêu và sản phẩm của nhóm",
											icon: "🎯",
										},
										{
											title: "Biên soạn câu hỏi quiz",
											content: "Rõ ràng, gần gũi với sinh viên",
											icon: "❓",
										},
										{
											title: "Xác minh thông tin",
											content: "Đối chiếu độ chính xác trước khi sử dụng",
											icon: "✅",
										},
									].map((item, index) => (
										<div
											key={index}
											className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-red-100"
										>
											<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-lg">{item.icon}</span>
											</div>
											<div>
												<h5 className="font-semibold text-red-800 mb-2">{item.title}</h5>
												<p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
											</div>
										</div>
									))}
								</div>

								{/* Individual Work Assignment Section */}
								<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mt-8">
									<div className="flex items-center mb-6">
										<div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
											<UserIcon className="text-white size-6 fill-white" />
										</div>
										<h4 className="font-bold text-blue-800 text-xl">
											Phân công công việc của mỗi cá nhân:
										</h4>
									</div>
									<div className="space-y-4">
										<div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-blue-100">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-blue-600 font-bold">👑</span>
											</div>
											<div>
												<h5 className="font-semibold text-blue-800 mb-2">An Phúc Hòa (Leader):</h5>
												<p className="text-gray-700 text-sm leading-relaxed">
													Phân chia công việc, thiết kế giao diện (Tính tất yếu ra đời của Đảng Cộng
													sản Việt Nam; Báo cáo nhóm)
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-blue-100">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-blue-600 font-bold">👨</span>
											</div>
											<div>
												<h5 className="font-semibold text-blue-800 mb-2">Hồ Đăng Khoa:</h5>
												<p className="text-gray-700 text-sm leading-relaxed">
													Thiết kế giao diện (Đảng phải trong sạch, vững mạnh)
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-blue-100">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-blue-600 font-bold">👨</span>
											</div>
											<div>
												<h5 className="font-semibold text-blue-800 mb-2">Võ Nguyên Khoa:</h5>
												<p className="text-gray-700 text-sm leading-relaxed">
													Thiết kế giao diện (Vai trò lãnh đạo của Đảng Cộng sản Việt Nam; Quiz)
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-blue-100">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-blue-600 font-bold">👨</span>
											</div>
											<div>
												<h5 className="font-semibold text-blue-800 mb-2">Đỗ Anh Tú:</h5>
												<p className="text-gray-700 text-sm leading-relaxed">
													Lọc dữ liệu, tích hợp và huấn luyện Chatbot (BotPress) dựa trên nội dung
													đã tổng hợp
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-blue-100">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-blue-600 font-bold">👩</span>
											</div>
											<div>
												<h5 className="font-semibold text-blue-800 mb-2">Lê Thị Tiểu My:</h5>
												<p className="text-gray-700 text-sm leading-relaxed">
													Lên kịch bản, Tổng hợp nội dung (Tính tất yếu và vai trò lãnh đạo của Đảng
													Cộng sản Việt Nam)
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-blue-100">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-blue-600 font-bold">👩</span>
											</div>
											<div>
												<h5 className="font-semibold text-blue-800 mb-2">Nguyễn Thùy Dương:</h5>
												<p className="text-gray-700 text-sm leading-relaxed">
													Tổng hợp nội dung (Đảng phải trong sạch, vững mạnh - 3 đề mục nhỏ đầu)
												</p>
											</div>
										</div>
										<div className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-blue-100">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
												<span className="text-blue-600 font-bold">👨</span>
											</div>
											<div>
												<h5 className="font-semibold text-blue-800 mb-2">Đỗ Đình An:</h5>
												<p className="text-gray-700 text-sm leading-relaxed">
													Tổng hợp nội dung (Đảng phải trong sạch, vững mạnh - đề mục nhỏ cuối; Xây
													dựng đội ngũ cán bộ, đảng viên theo tư tưởng Hồ Chí Minh)
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Academic Commitment Section */}
				<section id="commitment" className="mb-20">
					<div className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 rounded-3xl shadow-2xl text-white p-12 relative overflow-hidden">
						{/* Background decoration */}
						<div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-24 -translate-y-24"></div>
						<div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 translate-y-32"></div>

						<div className="relative z-10">
							<div className="flex items-center mb-10">
								<div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm">
									<span className="text-white text-2xl">🤝</span>
								</div>
								<h3 className="text-4xl font-bold">CAM KẾT HỌC THUẬT</h3>
							</div>

							<div className="bg-white/15 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
								<div className="flex items-center mb-8">
									<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
										<span className="text-2xl">5️⃣</span>
									</div>
									<p className="text-2xl font-bold">Nhóm 5, chúng tôi cam kết rằng:</p>
								</div>

								<div className="space-y-6">
									{[
										{
											title: "Trách nhiệm học thuật",
											content:
												"Toàn bộ sản phẩm được xây dựng trên cơ sở nghiên cứu nghiêm túc, đối chiếu từ tài liệu chính thống và văn kiện của Đảng, không sao chép từ các nguồn khác.",
											icon: "📖",
										},
										{
											title: "Sử dụng công cụ hỗ trợ minh bạch",
											content:
												"Các công cụ hiện đại (bao gồm cả AI) chỉ được dùng nhằm hỗ trợ kỹ thuật và gợi ý bố cục, tuyệt đối không thay thế tư duy, phân tích và lập luận của người học.",
											icon: "🛠️",
										},
										{
											title: "Tôn trọng nguồn trích dẫn",
											content:
												"Mọi thông tin, số liệu, dẫn chứng đều có nguồn gốc rõ ràng; các trích dẫn được kiểm tra và trình bày trung thực.",
											icon: "📝",
										},
										{
											title: "Tinh thần học tập trung thực",
											content:
												"Kết quả cuối cùng là sự tổng hợp từ nghiên cứu của nhóm, không mượn hoặc sao chép từ bất kỳ sản phẩm đã công bố nào.",
											icon: "🎓",
										},
										{
											title: "Cam kết cống hiến tri thức",
											content:
												"Sản phẩm học tập này nhằm mục đích nâng cao kiến thức và rèn luyện kỹ năng nghiên cứu, không sử dụng cho mục đích thương mại hay ngoài phạm vi môn học.",
											icon: "💝",
										},
									].map((commitment, index) => (
										<div
											key={index}
											className="flex items-start space-x-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10"
										>
											<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
												<span className="text-xl">{commitment.icon}</span>
											</div>
											<div>
												<h4 className="font-bold text-xl mb-3 text-white">{commitment.title}:</h4>
												<p className="text-white/90 leading-relaxed text-lg">
													{commitment.content}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Enhanced Footer */}
				<div className="text-center py-12 relative">
					<div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl"></div>
					<div className="relative z-10 p-8">
						<div className="flex justify-center items-center space-x-4 mb-6">
							<div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
							<div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center">
								<div className="w-3 h-3 bg-white rounded-full"></div>
							</div>
							<div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-full"></div>
						</div>
						<h4 className="text-2xl font-bold text-red-800 mb-2">Báo cáo dự án - Nhóm 5</h4>
						<p className="text-red-600 font-medium text-lg">
							Môn học: HCM202 - Tư tưởng Hồ Chí Minh
						</p>
						<div className="mt-6 text-gray-600">
							<p className="text-sm">© {new Date().getFullYear()} - Ứng dụng AI hỗ trợ học tập</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportPage;
