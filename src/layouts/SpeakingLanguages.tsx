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
		<motion.div className="transition-all cube hover:!scale-120 cube flex flex-col items-center gap-0.5 max-w-32">
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
			className="min-h-[80lvh] flex flex-col items-center justify-center px-8 gap-16"
			initial={{ opacity: 0, y: -40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5 }}
		>
			<h1 className="title pt-8">Languages I speak</h1>
			<div
				ref={ref}
				className="group flex flex-wrap w-full justify-center gap-x-12 gap-y-16 pb-16"
			>
				<LanguageIcon name="Deutsch" subText="Native" icon="de-4x3" />
				<LanguageIcon name="Polski" subText="2nd Native" icon="pl-4x3" />
				<LanguageIcon name="English" subText="C1 Level" icon="us-4x3" />
				<LanguageIcon name="日本語" subText="N5 Level" icon="jp-4x3" />
			</div>
		</motion.div>
	);
}
