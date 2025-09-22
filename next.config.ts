import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"api.microlink.io", // Microlink Image Preview
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
