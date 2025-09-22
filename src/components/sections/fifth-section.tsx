"use client";

import { Brain, Earth, Flag, Sparkles, Trophy } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import React, { useState } from "react";

export function FifthSection() {
	const [selectedItem, setSelectedItem] = useState<GridItemProps | null>(null);

	const items: GridItemProps[] = [
		{
			area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
			icon: <Trophy className="size-8 text-white/95" />,
			title: "Đảng là nhân tố quyết định thắng lợi của cách mạng",
			description: (
				<p>
					- “Đảng có vững, cách mệnh mới thành công…” <br />
					<br />- Lực lượng duy nhất đủ bản lĩnh, trí tuệ lãnh đạo dân tộc <br />
					<br />- Lịch sử và Đại hội XIII chứng minh vai trò quyết định
				</p>
			),
			image:
				"https://baovinhlong.com.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/dataimages/201504/original/images1104049_z026_Clip.jpg",
		},
		{
			area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
			icon: <Flag className="size-8 text-white/95" />,
			title: "Đảng đại diện cho trí tuệ, đạo đức và sức mạnh đoàn kết dân tộc",
			description: (
				<p>
					- “Đảng ta là đạo đức, là văn minh”
					<br /> (Hồ Chí Minh)
					<br />
					<br />- Trung tâm đoàn kết, dẫn dắt dân tộc
					<br />
					<br />- Ngày nay: xây dựng Đảng trong sạch, vững mạnh
					<br />
					<br />- Phong trào: Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh
				</p>
			),
			image: "https://tinhdoanbinhphuoc.vn/uploads/news/2016_09/193thongtincodong.png",
		},
		{
			area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
			icon: <Brain className="size-8 text-white/95" />,
			title: "Đảng gắn liền với mục tiêu, lý tưởng cách mạng",
			description: (
				<p>
					- Trung thành tuyệt đối: Độc lập dân tộc gắn liền với CNXH
					<br />
					<br />- Lợi ích nhân dân là tối thượng
					<br />
					<br />- Mục tiêu 2045: Việt Nam trở thành nước phát triển
					<br />
					<br />- Kiên định chủ nghĩa Mác – Lênin & tư tưởng Hồ Chí Minh
				</p>
			),
			image: "https://baocamau.vn/image/news/2023/20230322/fckimage/ht-1.jpg",
		},
		{
			area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
			icon: <Sparkles className="size-8 text-white/95" />,
			title: "Đảng vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân",
			description: (
				<p>
					- “Đảng cầm quyền nhưng là người đầy tớ của nhân dân”
					<br />
					<br />- Đảng viên: cần, kiệm, liêm, chính, chí công vô tư
					<br />
					<br />- Lãnh đạo = phục vụ nhân dân, chống tham nhũng, quan liêu
					<br />
					<br />- Uy tín & niềm tin của nhân dân tạo sức mạnh lâu dài
				</p>
			),
			image: "https://a.tcnn.vn/Uploads/resources/truonghq/HT1/ktt_baovebacho1_kienthuc.jpg",
		},
		{
			area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
			icon: <Earth className="size-8 text-white/95" />,
			title: "Đảng là hạt nhân đoàn kết dân tộc và quốc tế",
			description: (
				<p>
					- Hồ Chí Minh khẳng định: “Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại
					thành công”.
					<br />
					<br />- Đảng đại diện cho lợi ích dân tộc, gắn bó với nhân dân, đồng thời phát huy sức
					mạnh đại đoàn kết, kết hợp sức mạnh dân tộc với thời đại, tranh thủ sự ủng hộ quốc tế.
					<br />
					<br />- Trong bối cảnh hội nhập, Đảng kiên định đường lối đối ngoại độc lập, tự chủ, hòa
					bình, hợp tác và phát triển, giữ vững chủ quyền quốc gia và xây dựng đất nước.
				</p>
			),
			image:
				"https://file.qdnd.vn/data/images/0/2020/05/11/thuha/110520h59.jpg?dpi=150&quality=100&w=575",
		},
	];

	return (
		<>
			<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2 h-full w-full snap-start p-4">
				{items.map((item, i) => (
					<GridItem key={i} {...item} onClick={() => setSelectedItem(item)} />
				))}
			</ul>

			{/* Modal hiển thị Card 3D */}
			{selectedItem && (
				<div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4">
					<div className="absolute top-5 right-5 z-[99999]">
						<button
							onClick={() => setSelectedItem(null)}
							className="px-4 py-2 bg-red-500 rounded-lg shadow text-sm"
						>
							Đóng
						</button>
					</div>

					<CardContainer>
						<CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[50vw] h-auto rounded-xl p-6 border ">
							<CardItem
								translateZ="50"
								className="text-3xl font-bold text-neutral-600 dark:text-white"
							>
								{selectedItem.title}
							</CardItem>
							<div className="flex flex-row gap-4 mt-4 justify-center items-center w-full">
								<CardItem
									translateZ="60"
									className="text-white text-xl w-[50%] mt-2 shadow-lg shadow-amber-300 bg-none rounded-lg p-4 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-400/20 border border-amber-200/30"
								>
									{selectedItem.description || "Nội dung đang cập nhật..."}
								</CardItem>
								<CardItem
									translateZ="100"
									className="w-[50%] rounded-xl mt-4 shadow-lg shadow-red-600"
								>
									<img
										src={selectedItem.image}
										className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
										alt={selectedItem.title}
									/>
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</div>
			)}
		</>
	);
}

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
	image: string;
	onClick?: () => void;
}

const GridItem = ({ area, icon, title, image, onClick }: GridItemProps) => {
	return (
		<li onClick={onClick} className={`min-h-[14rem] list-none ${area} cursor-pointer`}>
			<div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
				<GlowingEffect
					spread={40}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>
				<div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6">
					<div className="absolute inset-0 rounded-xl z-10">
						<img
							src={image}
							alt="Highlight image"
							className="w-full h-full object-cover rounded-xl blur-xs brightness-75"
						/>
					</div>
					<div className="w-fit rounded-lg border border-white/30 p-2 z-20 mt-2 ml-2">{icon}</div>
					<div className="space-y-3 z-20">
						<h3 className="font-sans text-xl md:text-3xl font-semibold text-black dark:text-white">
							{title}
						</h3>
					</div>
				</div>
			</div>
		</li>
	);
};
