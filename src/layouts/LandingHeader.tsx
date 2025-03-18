import Button from "@/components/Button.tsx";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export function LandingHeader() {
	const video = useRef<HTMLVideoElement>(null);
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["end end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const translateYReverse = useTransform(scrollYProgress, [0, 1], [0, -25]);

	return (
		<section
			ref={container}
			className="w-[100dvw] h-[100lvh] relative bg-black"
		>
			<motion.div className="absolute inset-0 z-0 flex justify-center items-center">
				<motion.video
					ref={video}
					className="w-[100dvw] h-[100lvh] opacity-55 object-cover"
					src="/objects.mp4"
					style={{ translateY: translateYReverse }}
					autoPlay
					loop
					onPlay={() => {
						if (video.current) {
							video.current.playbackRate = 1;
						}
					}}
					muted
				/>
				<div className="absolute bottom-0 left-0 right-0 h-[25dvh] bg-gradient-to-b from-transparent to-[#0c0c11]" />
			</motion.div>
			<motion.div
				className="relative flex flex-col justify-start items-center gap-12 px-8 h-screen pt-[27lvh] lg:pt-[35lvh] mx-auto z-10"
				style={{ translateY }}
			>
				<div className="flex flex-col gap-6 items-center">
					<h1 className="text-center text-7xl! lg:text-[9vw]!">
						Andreas Wyrobek
					</h1>
					<h5 className="text-center max-w-2xl">
						Where Code Meets Color | Full-Stack Developer | Angular & UX
						Specialist
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
