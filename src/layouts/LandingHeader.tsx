import Button from "@/components/Button.tsx";
import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";

const lang = getLangFromWindow();
const t = useTranslations(lang);

export function LandingHeader({
	profileUrl,
	profileSmallUrl,
}: { profileUrl: string; profileSmallUrl: string }) {
	return (
		<section id="home" className="w-[100dvw] h-[100lvh] relative bg-black">
			<div className="relative flex justify-start gap-12 px-8 h-screen pt-[20lvh] lg:pt-[35lvh] mx-auto z-10 overflow-hidden">
				<div className="absolute inset-0 hidden lg:block">
					<div
						className="absolute m-auto bottom-0 right-[-60%] left-0 top-[10%] pointer-events-none"
						style={{
							backgroundImage: `url(${profileUrl})`,
							backgroundPosition: "bottom center",
							backgroundSize: "auto 90%",
							backgroundRepeat: "no-repeat",
						}}
					/>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-[30lvh] bg-gradient-to-b from-transparent to-[#0c0a09] to-90% z-10" />
				<div className="top-[5vh] left-[-60vh] blurry-circle" />
				<div className="bottom-[5vh] right-[-60vh] blurry-circle" />

				<div className="flex flex-col gap-12 items-center lg:items-end w-full lg:w-1/2 overflow-hidden">
					<div className="flex flex-col items-center lg:items-end">
						<h1 className="text-center lg:text-right text-7xl! lg:text-[9vw]! relative z-10 leading-[.9]">
							Andreas
							<br />
							<div className="text-gradiant">Wyrobek</div>
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
					<div
						className="block lg:hidden w-full z-0 brightness-90 profile grayscale-10 pointer-events-none"
						style={{
							backgroundImage: `url(${profileSmallUrl})`,
							backgroundPosition: "bottom center",
							backgroundSize: "auto 100%",
							backgroundRepeat: "no-repeat",
							height: "100%",
						}}
					/>
				</div>
			</div>
		</section>
	);
}
