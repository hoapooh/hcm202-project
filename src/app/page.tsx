"use client";

import FirstSection from "@/components/sections/first-section";
import HeroSection from "@/components/sections/hero-section";
import { SecondSection } from "@/components/sections/second-section";

export default function Home() {
	return (
		<div className="w-screen h-screen snap-y snap-mandatory scroll-smooth delay-200 overflow-y-scroll container-scroll">
			<HeroSection />
			<FirstSection />
			<SecondSection />
		</div>
	);
}
