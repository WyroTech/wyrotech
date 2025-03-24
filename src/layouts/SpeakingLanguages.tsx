import {Icon} from "@iconify/react";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

function LanguageIcon({
	icon,
	name,
	subText,
}: { icon: string; name: string; subText: string }) {
	const size = 72;
	return (
		<motion.div className="transition-all cube hover:!scale-120 cube flex flex-col items-center gap-0.5 max-w-24">
			<div className="w-24 h-24 flex justify-center items-center">
				<Icon icon={`flag:${icon}`} width={size} height={size} />
			</div>
			<span className="w-full text-center text-sm!">{name}</span>
			<span className="w-full text-center text-slate-400! text-xs!">
				{subText}
			</span>
		</motion.div>
	);
}

export function SpeakingLanguages() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });

	return (
		<motion.div
			className="min-h-[100lvh] flex flex-col items-center justify-center px-8 gap-16"
			initial={{ opacity: 0, y: -40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5 }}
		>
			<div className="relative pt-8 z-10">
				<h1 className="relative title z-20">Languages I speak</h1>
			</div>
			<div
				ref={ref}
				className="group grid grid-cols-2 sm:flex sm:flex-wrap w-full justify-center justify-items-center gap-x-12 gap-y-16 pb-16 z-20"
			>
				<LanguageIcon name="Deutsch" subText="Native" icon="de-4x3" />
				<LanguageIcon name="Polski" subText="2nd Native" icon="pl-4x3" />
				<LanguageIcon name="English" subText="C1 Level" icon="gb-4x3" />
				<LanguageIcon name="日本語" subText="N5 Level" icon="jp-4x3" />
			</div>
		</motion.div>
	);
}
