"use client";

import { useSearchParams } from "next/navigation";

export default function Watch() {
	const videoPrefix = "https://storage.googleapis.com/pab-processed-videos/";
	const videoSrc = useSearchParams().get("v");

	return (
		<div>
			<h2>Watch Page</h2>
			{<video controls src={videoPrefix + videoSrc} />}
		</div>
	);
}
