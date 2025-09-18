"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FirstSection from "@/components/sections/first-section";
import { FifthSection } from "@/components/sections/fifth-section";
import  FourthSection  from "@/components/sections/fourth-sections";
import HeroSection from "@/components/sections/hero-section";
import { TenSection } from "@/components/sections/ten-section";
import { SecondSection } from "@/components/sections/second-section";
import { ElevenSection } from "@/components/sections/eleven-section";
import { TwelveSection } from "@/components/sections/twelve-section";
import { ThirteenSection } from "@/components/sections/thirteen-section";
import { FourteenSection } from "@/components/sections/fourteen-section";
import { FifteenSection } from "@/components/sections/fifteen-section";
import { SixteenSection } from "@/components/sections/sixteen-section";
import ThirdSection from "@/components/sections/third-section";
import HeaderNav from "@/components/navigation/header-nav";
import { useRouter } from "next/navigation";

export default function Home() {
	const [showScrollTop, setShowScrollTop] = useState(false);
		const router = useRouter();
	// Theo dõi vị trí cuộn để hiển thị scroll-top button
	useEffect(() => {
		const scrollContainer = document.querySelector('.container-scroll');
		
		const handleScroll = () => {
			if (scrollContainer) {
				const scrollTop = scrollContainer.scrollTop;
				const windowHeight = window.innerHeight;
				// Hiển thị button khi cuộn xuống hơn 1.5 lần chiều cao màn hình
				setShowScrollTop(scrollTop > windowHeight * 1.5);
			}
		};

		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handleScroll);
			return () => scrollContainer.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const scrollToTop = () => {
		const scrollContainer = document.querySelector('.container-scroll');
		if (scrollContainer) {
			scrollContainer.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} else {
			// Fallback to window scroll
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
	};

	const openChatbot = () => {
		router.push('/chatbot');
	};

	return (
		<>
			{/* Header Navigation - Fixed Position */}
			<div className="fixed top-0 left-0 w-full z-[9999]">
				<HeaderNav /> 
			</div>

			{/* Main Content Container */}
			<div className="w-screen h-screen snap-y snap-mandatory scroll-smooth delay-200 overflow-y-scroll container-scroll">
				<HeroSection />
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<FifthSection />
				<TenSection />
				<ElevenSection />
				<TwelveSection />
				<ThirteenSection />
				<FourteenSection />
				<FifteenSection />
				<SixteenSection />
			</div>

			{/* Floating Action Buttons - Fixed Position */}
			<div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
				{/* Scroll to Top Button - Chỉ hiển thị khi cuộn xa */}
				<AnimatePresence>
					{showScrollTop && (
						<motion.button
							initial={{ opacity: 0, scale: 0.5, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.5, y: 20 }}
							whileHover={{ scale: 1.15 }}
							whileTap={{ scale: 0.95 }}
							onClick={scrollToTop}
							className="bg-gradient-to-br from-yellow-500 to-orange-500 backdrop-blur-md border border-white/30 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white/30 flex items-center justify-center"
							style={{ width: '72px', height: '72px' }}
						>
							<motion.svg
								animate={{ y: [0, -4, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
								width="24" 
								height="24" 
								viewBox="0 0 24 24" 
								fill="none" 
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
							>
								<path 
									d="M12 19V5M5 12L12 5L19 12" 
									stroke="currentColor" 
									strokeWidth="2.5" 
									strokeLinecap="round" 
									strokeLinejoin="round"
								/>
							</motion.svg>
							
							{/* Tooltip */}
							<div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="bg-black/80 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap">
									Về đầu trang
									<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
								</div>
							</div>
						</motion.button>
					)}
				</AnimatePresence>

				{/* Chatbot Button - Luôn hiển thị */}
				<motion.button
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.95 }}
					onClick={openChatbot}
					className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex items-center justify-center"
					style={{ width: '72px', height: '72px' }}
				>
					{/* Animated background effect */}
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						style={{ borderRadius: 'inherit' }}
					/>
					
					{/* Chat icon */}
					<motion.div
						animate={{ 
							rotate: [0, 10, -10, 0],
							scale: [1, 1.1, 1]
						}}
						transition={{ 
							duration: 2, 
							repeat: Infinity,
							repeatDelay: 3
						}}
						className="relative z-10"
					>
						<svg
							width="24" 
							height="24" 
							viewBox="0 0 24 24" 
							fill="none" 
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
						>
							<path 
								d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.89 20 9.84 19.81 8.87 19.46L3 21L4.54 15.13C4.19 14.16 4 13.11 4 12C4 7.582 8.03 4 12 4C16.97 4 21 7.582 21 12Z" 
								stroke="currentColor" 
								strokeWidth="2" 
								strokeLinecap="round" 
								strokeLinejoin="round"
							/>
						</svg>
					</motion.div>

					{/* Pulse effect */}
					<motion.div
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.7, 0, 0.7]
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut"
						}}
						className="absolute inset-0 bg-green-400 rounded-full"
					/>

					{/* Tooltip */}
					<div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="bg-black/80 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap">
							Trò chuyện với AI
							<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
						</div>
					</div>
				</motion.button>
			</div>
		</>
	);
}
