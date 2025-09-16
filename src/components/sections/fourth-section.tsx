"use client";

import { Brain, Earth, Flag, Sparkles, Trophy } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function FourthSection() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2 h-full w-full snap-start p-4">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				icon={<Trophy className="size-8 text-white/95" />}
				title="Đảng là nhân tố quyết định thắng lợi của cách mạng"
				description="Running out of copy so I'll write anything."
				image="https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				icon={<Flag className="size-8 text-white/95" />}
				title="Đảng đại diện cho trí tuệ, đạo đức và sức mạnh đoàn kết dân tộc"
				description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
				image="https://images.unsplash.com/photo-1722865185434-c4399a94b0e8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				icon={<Brain className="size-8 text-white/95" />}
				title="Đảng gắn liền với mục tiêu, lý tưởng cách mạng"
				description="It's the best money you'll ever spend"
				image="https://images.unsplash.com/photo-1529094270367-c8f8a8a6ed21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				icon={<Sparkles className="size-8 text-white/95" />}
				title="Đảng vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân"
				description="I'm not even kidding. Ask my mom if you don't believe me."
				image="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				icon={<Earth className="size-8 text-white/95" />}
				title="Đảng là hạt nhân đoàn kết dân tộc và quốc tế"
				description="I'm writing the code as I record this, no shit."
				image="https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=2142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
		</ul>
	);
}

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
	image: string;
	textClassNameTitle?: string;
	textClassNameDescription?: string;
}

const GridItem = ({
	area,
	icon,
	title,
	description,
	image,
	textClassNameTitle,
	textClassNameDescription,
}: GridItemProps) => {
	return (
		<li className={`min-h-[14rem] list-none ${area}`}>
			<div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
				<GlowingEffect
					spread={40}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>
				<div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="absolute top-0 left-0 right-0 w-full h-full bottom-0 rounded-xl z-10">
							<img
								src={image}
								alt="Highlight image"
								className="w-full h-full object-cover rounded-xl"
							/>
						</div>

						<div className="w-fit rounded-lg border border-white/30 p-2 z-20 mt-2 ml-2">{icon}</div>

						<div className="space-y-3 z-20">
							<h3
								className={`-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance  md:text-2xl/[1.875rem]  ${
									textClassNameTitle ? textClassNameTitle : "text-black dark:text-white"
								}`}
							>
								{title}
							</h3>
							<p
								className={`font-sans text-sm/[1.125rem] md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold ${
									textClassNameDescription
										? textClassNameDescription
										: "text-black dark:text-neutral-400"
								}`}
							>
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
