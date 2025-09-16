import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Boxes } from "../ui/background-boxes";

const ThirdSection = () => {
	return (
		<div className="h-full w-full relative snap-start overflow-hidden">
			{/* Background with boxes effect */}
			<div className="absolute inset-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center overflow-hidden rounded-lg pointer-events-auto">
				<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
				{/* https://bna.1cdn.vn/2024/08/15/e.baonghean.vn-wp-content-uploads-2021-09-_tranh-ve-cao-trao-xo-viet-nghe-tinh-cua-tac-gia-nguyen-duc-nung-1.jpg */}
				<img
					src="https://bna.1cdn.vn/2024/08/15/e.baonghean.vn-wp-content-uploads-2021-09-_tranh-ve-cao-trao-xo-viet-nghe-tinh-cua-tac-gia-nguyen-duc-nung-1.jpg"
					alt="Background image"
					className="w-full h-full object-cover rounded-lg"
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-yellow-500/20 to-red-800/40 pointer-events-none" />
			</div>

			{/* Main content container */}
			<div className="relative z-30 h-full w-full flex flex-col items-center justify-center px-8 py-20 pointer-events-none">
				{/* Section title */}
				<div className="text-center mb-12">
					<h2 className="text-5xl md:text-6xl font-bold text-white/95 font-bangers mb-4">
						Kết Luận
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full" />
				</div>

				{/* Quote card */}
				<div className="max-w-4xl w-full mb-8">
					<div className="relative bg-black/70 backdrop-blur-md border border-red-500/30 rounded-2xl p-8 shadow-2xl">
						<div className="relative">
							{/* Quote mark */}
							<div className="absolute -top-4 -left-4 text-6xl text-red-500 font-serif drop-shadow-lg">
								&ldquo;
							</div>

							<blockquote className="text-xl md:text-2xl font-bold text-white leading-relaxed text-center italic mb-6 drop-shadow-lg">
								Đảng ta là đạo đức, là văn minh
							</blockquote>

							<p className="text-lg text-white/95 leading-relaxed text-center font-medium drop-shadow-md">
								Người khẳng định, chỉ có{" "}
								<span className="font-bold text-red-300 bg-red-900/30 px-2 py-1 rounded">
									Đảng Cộng sản Việt Nam
								</span>{" "}
								– đội tiên phong của giai cấp công nhân và dân tộc – mới đủ bản lĩnh và trí tuệ để
								lãnh đạo cách mạng đi đến thắng lợi cuối cùng.
							</p>

							{/* Quote mark */}
							<div className="absolute -bottom-4 -right-4 text-6xl text-red-500 font-serif drop-shadow-lg">
								&rdquo;
							</div>
						</div>
					</div>
				</div>

				{/* Conclusion statement */}
				<div className="max-w-5xl w-full">
					<HoverBorderGradient
						containerClassName="rounded-2xl"
						as="div"
						className="text-white flex items-center justify-center p-8 shadow-2xl"
					>
						<div className="text-center">
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3 drop-shadow-lg">
								<span className="text-red-400">★</span>
								Tuyên Bố Lịch Sử
								<span className="text-yellow-400">★</span>
							</h3>

							<p className="text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-md">
								<span className="font-bold text-red-300 bg-red-900/40 px-2 py-1 rounded">
									Sự lãnh đạo của Đảng Cộng sản Việt Nam là một tất yếu
								</span>
								, vai trò lãnh đạo của Đảng cũng là một tất yếu - điều đó xuất phát từ
								<span className="font-bold text-yellow-300 bg-yellow-900/40 px-2 py-1 rounded ml-1">
									yêu cầu phát triển của dân tộc Việt Nam
								</span>
								.
							</p>
						</div>
					</HoverBorderGradient>
				</div>

				{/* Decorative elements */}
				<div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
				<div className="absolute top-32 right-16 w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-500" />
				<div className="absolute bottom-20 left-20 w-5 h-5 bg-red-400 rounded-full animate-pulse delay-1000" />
				<div className="absolute bottom-32 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-700" />

				{/* Floating stars */}
				<div className="absolute top-1/4 left-1/4 text-yellow-400 text-2xl animate-bounce">★</div>
				<div className="absolute top-1/3 right-1/3 text-red-400 text-xl animate-bounce delay-300">
					★
				</div>
				<div className="absolute bottom-1/4 right-1/4 text-yellow-500 text-lg animate-bounce delay-600">
					★
				</div>
			</div>
		</div>
	);
};

export default ThirdSection;
