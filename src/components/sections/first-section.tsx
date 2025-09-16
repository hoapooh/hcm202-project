import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";
import { LinkPreview } from "../ui/link-preview";
import { MaskContainer } from "../ui/svg-mask-effect";

const FirstSection = () => {
	const items = [
		{
			title: "Đường Cách Mệnh",
			image:
				"https://cdn.tienphong.vn/images/a6bf4f60924201126af6849ca45a3980edf238dc5fe842100151164d2dd56f9f50160e39d05e48ebccaf0eb4180f62a7ca47af8e50a868a7c2b4ab8a8530f4d8/dcm1-zass-7570-805.jpg",
			className: "absolute top-10 left-[5%] rotate-[-5deg]",
		},
		/* {
			title: "Iceland",
			image:
				"https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			className: "absolute top-40 left-[25%] rotate-[-7deg]",
		}, */
		{
			title: "Đường Kách Mệnh",
			image:
				"https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/201205/original/images692313_6_Duong_Kach_Menh.jpg",
			className: "absolute top-5 left-[20%] rotate-[8deg]",
		},
		{
			title: "Đảng Cộng Sản Việt Nam",
			image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2024/02/23/sua-doi-dieu-le-dang.jpg",
			className: "absolute top-32 left-[35%] rotate-[10deg]",
		},
	];

	return (
		<div className="h-full w-full relative snap-start">
			<div className="h-full w-full pt-20 px-10">
				<h2 className="text-6xl font-bold text-center text-slate-800 dark:text-white/90 font-bangers">
					Tính tất yếu ra đời của <span className="text-red-500/95">Đảng Cộng sản Việt Nam</span>
				</h2>

				<div className="w-[40rem] h-40 relative mx-auto">
					{/* Gradients */}
					<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-3/4 blur-sm" />
					<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
					<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/4 blur-sm" />
					<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4" />

					{/* Core component */}
					<SparklesCore
						background="transparent"
						minSize={0.4}
						maxSize={1}
						particleDensity={1200}
						className="w-full h-full"
						particleColor="#f0b100"
					/>

					{/* Radial Gradient to prevent sharp edges */}
					<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
				</div>

				<div className="mt-8 grid grid-cols-6 gap-12">
					<div className="col-span-4">
						<p className="text-2xl">
							<span className="font-bold">Chủ nghĩa Mác – Lênin</span> đã chỉ ra quy luật căn bản:
							cách mạng vô sản muốn giành thắng lợi phải có một{" "}
							<span className="font-bold">chính đảng kiểu mới</span> của giai cấp công nhân lãnh
							đạo.
						</p>

						<div className="text-2xl mt-4">
							<LinkPreview
								url="https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh/nghien-cuu-hoc-tap-tu-tuong/can-phai-hoc-tap-chu-nghia-mac-lenin-tu-tuong-ho-chi-minh-3852"
								className="underline underline-offset-4"
							>
								<span className="font-bold">V.I. Lênin</span> khẳng định: “Không có lý luận cách
								mạng thì không có phong trào cách mạng”.
							</LinkPreview>
						</div>

						<MaskContainer
							revealText={
								<p className="w-full text-4xl font-bold text-slate-800 dark:text-white/90 font-bangers leading-16">
									Hồ Chí Minh đã vận dụng sáng tạo học thuyết Mác – Lênin vào thực tiễn Việt Nam,
									sớm nhận thấy muốn giành độc lập dân tộc cần có một đảng tiên phong lãnh đạo.
								</p>
							}
							revealSize={400}
							className="max-h-60 w-full text-white/90 dark:text-black font-bangers text-left mt-20"
						>
							<span className="text-red-500">Đảng Cộng sản Việt Nam</span> vừa là đội tiên phong của
							giai cấp công nhân, vừa là{" "}
							<span className="text-yellow-500">đại biểu trung thành</span> cho lợi ích của toàn dân
							tộc.
						</MaskContainer>
					</div>

					<div className="col-span-2">
						<DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
							{items.map((item) => (
								<DraggableCardBody className={item.className} key={item.title}>
									<img
										src={item.image}
										alt={item.title}
										className="pointer-events-none relative z-10 h-80 w-80 object-cover"
									/>
									<h3 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
										{item.title}
									</h3>
								</DraggableCardBody>
							))}
						</DraggableCardContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
