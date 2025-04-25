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
			<motion.div
				className="relative flex justify-start gap-12 px-8 h-screen pt-[20lvh] lg:pt-[35lvh] mx-auto z-10"
				style={{ translateY }}
			>
				<div className="absolute inset-0 hidden lg:block">
					<img
						className="absolute m-auto bottom-0 right-0 left-0 lg:left-auto w-auto h-auto  lg:max-w-1/2 max-h-3/4 z-0 brightness-90 profile grayscale-10 pointer-events-none object-center"
						src={profileUrl}
						alt="ProfilePicture"
					/>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-[30lvh] bg-gradient-to-b from-transparent to-[#0c0a09] to-90%" />
				<div className="top-[5vh] left-[-60vh] blurry-circle" />
				<div className="bottom-[5vh] right-[-60vh] blurry-circle" />

				<div className="flex flex-col gap-12 items-center lg:items-end w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-end">
						<h1 className="text-7xl! lg:text-[9vw]! relative z-10 pt-12 leading-1">
							Andreas
						</h1>
						<h1 className="text-7xl! lg:text-[9vw]! relative z-10 pt-12 text-gradiant">
							Wyrobek
						</h1>
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
					<img
						className="block lg:hidden max-h-[50vh] z-0 brightness-90 profile grayscale-10 pointer-events-none object-bottom"
						src={profileUrl}
						alt="ProfilePicture"
					/>
				</div>
			</motion.div>
		</section>
	);
}
