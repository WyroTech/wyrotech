import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";
import {Icon} from "@iconify/react";

const lang = getLangFromWindow();
const t = useTranslations(lang);

function LanguageIcon({
	icon,
	name,
	subText,
}: { icon: string; name: string; subText: string }) {
	const size = 72;
	return (
		<div className="transition-all cube hover:!scale-120 cube flex flex-col items-center gap-0.5 max-w-24">
			<div className="w-24 h-24 flex justify-center items-center">
				<Icon icon={`flag:${icon}`} width={size} height={size} />
			</div>
			<span className="w-full text-center text-sm!">{name}</span>
			<span className="w-full text-center text-slate-400! text-xs!">
				{subText}
			</span>
		</div>
	);
}

export function SpeakingLanguages() {
	return (
		<div className="min-h-[100lvh] flex flex-col items-center justify-center px-8 gap-16">
			<div className="relative pt-8 z-10">
				<h1 className="relative title z-20">{t("title.languagesIspeak")}</h1>
			</div>
			<div className="group grid grid-cols-2 sm:flex sm:flex-wrap w-full justify-center justify-items-center gap-x-12 gap-y-16 pb-16 z-20">
				<LanguageIcon name="Deutsch" subText="Native" icon="de-4x3" />
				<LanguageIcon name="Polski" subText="2nd Native" icon="pl-4x3" />
				<LanguageIcon name="English" subText="C1 Level" icon="gb-4x3" />
				<LanguageIcon name="日本語" subText="N5 Level" icon="jp-4x3" />
			</div>
		</div>
	);
}
