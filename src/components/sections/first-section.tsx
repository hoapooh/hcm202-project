import React from "react";
import { LinkPreview } from "../ui/link-preview";

const FirstSection = () => {
	return (
		<div className="h-full w-full relative snap-start">
			<div className="flex justify-center items-center h-full w-full flex-col">
				<div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
					<LinkPreview url="https://tailwindcss.com" className="font-bold">
						Tailwind CSS
					</LinkPreview>{" "}
					and{" "}
					<LinkPreview url="https://framer.com/motion" className="font-bold">
						Framer Motion
					</LinkPreview>{" "}
					are a great way to build modern websites.
				</div>
				<div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
					Visit{" "}
					<LinkPreview
						url="https://ui.aceternity.com"
						className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
					>
						Aceternity UI
					</LinkPreview>{" "}
					for amazing Tailwind and Framer Motion components.
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
