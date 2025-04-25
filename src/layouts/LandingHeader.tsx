import Button from "@/components/Button.tsx";
import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const lang = getLangFromWindow();
const t = useTranslations(lang);

export function LandingHeader({ profileUrl }: { profileUrl: string }) {
	const video = useRef<HTMLVideoElement>(null);
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["end end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const translateYReverse = useTransform(scrollYProgress, [0, 1], [0, -25]);

	const videoUrl =
		window.outerHeight < window.outerWidth
			? "/video_desktop.mp4"
			: "/video_mobile.mp4";

	return (
		<section
			id="home"
			ref={container}
			className="w-[100dvw] h-[100lvh] relative bg-black"
		>
			<motion.div className="absolute inset-0 z-0 flex justify-center items-center">
				<motion.video
					ref={video}
					className="w-[100dvw] h-[100lvh] opacity-75 object-cover"
					src={videoUrl}
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

				<div className="absolute bottom-0 left-0 right-0 h-[30lvh] bg-gradient-to-b from-transparent to-[#0c0a09] to-90%" />
			</motion.div>
			<motion.div
				className="relative flex flex-col justify-start items-center gap-12 px-8 h-screen pt-[27lvh] lg:pt-[35lvh] mx-auto z-10"
				style={{ translateY }}
			>
				<div className="flex flex-col gap-6 items-center">
					<div className="flex justify-center relative">
						<h1 className="text-center text-7xl! lg:text-[9vw]! relative z-10 pt-12">
							Andreas Wyrobek
						</h1>
						<img
							className="absolute bottom-3 min-h-64 md:min-h-48 h-[16vw] max-h-96 z-0 brightness-90 profile grayscale-10 pointer-events-none"
							src={profileUrl}
							alt="ProfilePicture"
							loading="eager"
							fetchpriority="high"
						/>
					</div>
					<span className="h5 text-center max-w-2xl text-balance">
						{t("landing.subtext")}
					</span>
				</div>
				<div className="flex gap-4">
					<a href="#journey">
						<Button
							severity="secondary"
							text={t("journey")}
							icon="chevron-right"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/andreas-wyrobek/"
						target="_blank"
						rel="noreferrer"
					>
						<Button
							severity="primary"
							text={t("contact")}
							icon="chevron-right"
						/>
					</a>
				</div>
			</motion.div>
		</section>
	);
}
