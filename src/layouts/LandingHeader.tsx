import Button from "@/components/Button.tsx";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export function LandingHeader() {
	const video = useRef<HTMLVideoElement>(null);
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll();
	const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

	return (
		<section
			ref={container}
			className="w-[100dvw] h-[100lvh] relative bg-black"
		>
			<div className="absolute inset-0 z-0 flex justify-center items-center">
				<video
					ref={video}
					className="w-[100dvw] h-[100lvh] opacity-25 object-cover"
					src="/objects.mp4"
					autoPlay
					loop
					onPlay={() => {
						if (video.current) {
							video.current.playbackRate = 0.5;
						}
					}}
					muted
				/>
			</div>
			<motion.div
				className="relative flex flex-col justify-start items-center gap-12 px-8 h-screen pt-[27lvh] lg:pt-[35lvh] mx-auto z-10"
				style={{ translateY }}
			>
				<div className="flex flex-col gap-6 items-center">
					<h1 className="text-center text-7xl! lg:text-[9vw]!">
						Andreas Wyrobek
					</h1>
					<h5 className="text-center max-w-2xl">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
					</h5>
				</div>
				<div className="flex gap-4">
					<Button severity="secondary" text="My Work" icon="chevron-right" />
					<Button severity="primary" text="Contact" icon="chevron-right" />
				</div>
			</motion.div>
		</section>
	);
}
