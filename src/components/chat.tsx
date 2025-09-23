"use client";
import { useState } from "react";

import { Webchat, Fab } from "@botpress/webchat";

const clientId = "aaa7926b-ddf1-4884-b160-d47160376277";

export default function Chat() {
	const [isWebchatOpen, setIsWebchatOpen] = useState(false);
	const toggleWebchat = () => {
		setIsWebchatOpen((prevState) => !prevState);
	};

	return (
		<>
			<Webchat
				clientId={clientId}
				style={{
					width: "400px",
					height: "600px",
					display: isWebchatOpen ? "flex" : "none",
					position: "fixed",
					bottom: "90px",
					right: "20px",
				}}
			/>
			<Fab
				onClick={() => toggleWebchat()}
				style={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
					width: "64px",
					height: "64px",
				}}
			/>
		</>
	);
}
