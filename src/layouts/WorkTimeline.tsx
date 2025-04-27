import {LinkPreview} from "@/components/ui/link-preview.tsx";
import {Timeline} from "@/components/ui/timeline";
import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";
import {Icon} from "@iconify/react";
import type React from "react";

const lang = getLangFromWindow();
const t = useTranslations(lang);

interface WorkTimelineProps {
	images: {
		firstcontact: string;
		dab: string;
		coursera: string;
		connecta: string;
		edvschule: string;
		acp: string;
	};
}

function BlueLink({
	link,
	name,
	imageUrl,
}: { link: string; name: string; imageUrl: string }) {
	return (
		<div className="z-30">
			<LinkPreview
				url={link}
				imageSrc={imageUrl}
				isStatic={true}
				width={200}
				height={113}
			>
				<div className="inline-flex text-blue-500!">
					{name}
					<div className="inline-flex px-1 pt-1">
						<Icon icon="lucide:external-link" width={14} height={14} />
					</div>
				</div>
			</LinkPreview>
		</div>
	);
}

function BulletPoint({ children: child }: { children: React.ReactNode }) {
	return (
		<div className="flex gap-2">
			<div>🔵</div>
			{child}
		</div>
	);
}

export function WorkTimeline({ images }: WorkTimelineProps) {
	const data = [
		{
			title: "03.2025",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">
						{t("timeline.firstcontact2025.title")}
					</h1>
					<BlueLink
						link={"https://www.firstcontact-deggendorf.de/startseite.html"}
						name={t("timeline.firstcontact2025.name")}
						imageUrl={images.firstcontact}
					/>
				</div>
			),
		},
		{
			title: t("timeline.principalEngineer.date"),
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">
						{t("timeline.principalEngineer.title")}
					</h1>

					<BlueLink
						link={"https://www.dab-europe.com/"}
						name={t("timeline.principalEngineer.company")}
						imageUrl={images.dab}
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>{t("timeline.principalEngineer.bullet1")}</BulletPoint>
						<BulletPoint>{t("timeline.principalEngineer.bullet2")}</BulletPoint>
						<BulletPoint>{t("timeline.principalEngineer.bullet3")}</BulletPoint>
						<BulletPoint>{t("timeline.principalEngineer.bullet4")}</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "11.2024",
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">
						{t("timeline.uxCertification.title")}
					</h1>
					<BlueLink
						link={
							"https://www.coursera.org/account/accomplishments/professional-cert/FA3AWC8GLJJ2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
						}
						name={t("timeline.uxCertification.name")}
						imageUrl={images.coursera}
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>{t("timeline.uxCertification.bullet1")}</BulletPoint>
						<BulletPoint>{t("timeline.uxCertification.bullet2")}</BulletPoint>
						<BulletPoint>{t("timeline.uxCertification.bullet3")}</BulletPoint>
						<BulletPoint>{t("timeline.uxCertification.bullet4")}</BulletPoint>
						<BulletPoint>{t("timeline.uxCertification.bullet5")}</BulletPoint>
						<BulletPoint>{t("timeline.uxCertification.bullet6")}</BulletPoint>
						<BulletPoint>{t("timeline.uxCertification.bullet7")}</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "11.2024",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">{t("timeline.connecta2024.title")}</h1>
					<BlueLink
						link={"https://connecta-regensburg.de/"}
						name={t("timeline.connecta2024.name")}
						imageUrl={images.connecta}
					/>
				</div>
			),
		},
		{
			title: t("timeline.seniorDeveloper.date"),
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">
						{t("timeline.seniorDeveloper.title")}
					</h1>
					<BlueLink
						link={"https://www.dab-europe.com/"}
						name={t("timeline.seniorDeveloper.company")}
						imageUrl={images.dab}
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>{t("timeline.seniorDeveloper.bullet1")}</BulletPoint>
						<BulletPoint>{t("timeline.seniorDeveloper.bullet2")}</BulletPoint>
						<BulletPoint>{t("timeline.seniorDeveloper.bullet3")}</BulletPoint>
						<BulletPoint>{t("timeline.seniorDeveloper.bullet4")}</BulletPoint>
						<BulletPoint>{t("timeline.seniorDeveloper.bullet5")}</BulletPoint>
						<BulletPoint>{t("timeline.seniorDeveloper.bullet6")}</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "03.2023",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">
						{t("timeline.presentationDays.title")}
					</h1>
					<BlueLink
						link={"https://www.edvschule-plattling.de/"}
						name={t("timeline.presentationDays.name")}
						imageUrl={images.edvschule}
					/>
				</div>
			),
		},
		{
			title: t("timeline.softwareDeveloper.date"),
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">
						{t("timeline.softwareDeveloper.title")}
					</h1>
					<BlueLink
						link={"https://www.dab-europe.com/"}
						name={t("timeline.softwareDeveloper.company")}
						imageUrl={images.dab}
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>{t("timeline.softwareDeveloper.bullet1")}</BulletPoint>
						<BulletPoint>{t("timeline.softwareDeveloper.bullet2")}</BulletPoint>
						<BulletPoint>{t("timeline.softwareDeveloper.bullet3")}</BulletPoint>
						<BulletPoint>{t("timeline.softwareDeveloper.bullet4")}</BulletPoint>
						<BulletPoint>{t("timeline.softwareDeveloper.bullet5")}</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: t("timeline.pythonDeveloper.date"),
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">
						{t("timeline.pythonDeveloper.title")}
					</h1>
					<BlueLink
						link={"https://www.acp-gruppe.com/de-de"}
						name={t("timeline.pythonDeveloper.company")}
						imageUrl={images.acp}
					/>
					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>{t("timeline.pythonDeveloper.bullet1")}</BulletPoint>
						<BulletPoint>{t("timeline.pythonDeveloper.bullet2")}</BulletPoint>
						<BulletPoint>{t("timeline.pythonDeveloper.bullet3")}</BulletPoint>
						<BulletPoint>{t("timeline.pythonDeveloper.bullet4")}</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: t("timeline.training.date"),
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">{t("timeline.training.title")}</h1>
					<BlueLink
						link={"https://www.edvschule-plattling.de/"}
						name={t("timeline.training.company")}
						imageUrl={images.edvschule}
					/>
					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>{t("timeline.training.bullet1")}</BulletPoint>
						<BulletPoint>{t("timeline.training.bullet2")}</BulletPoint>
					</div>
				</div>
			),
		},
	];

	return (
		<div className="w-full py-24" id="journey">
			<Timeline data={data} />
		</div>
	);
}
