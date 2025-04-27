import {GlowingEffect} from "@/components/ui/glowing-effect";
import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";
import {Icon} from "@iconify/react";
import type React from "react";

const lang = getLangFromWindow();
const t = useTranslations(lang);

export function GlowingEffectDemoSecond() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				icon={
					<Icon
						icon="lucide:code"
						height="16"
						width="16"
						className="text-neutral-400"
					/>
				}
				title={t("stats.fullstack.title")}
				description={t("stats.fullstack.description")}
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				icon={
					<Icon
						icon="lucide:file-heart"
						height="16"
						width="16"
						className="text-neutral-400"
					/>
				}
				title={t("stats.uxdesign.title")}
				description={t("stats.uxdesign.description")}
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				icon={
					<Icon
						icon="lucide:user-round"
						height="16"
						width="16"
						className="text-neutral-400"
					/>
				}
				title={t("stats.supervisor.title")}
				description={t("stats.supervisor.description")}
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				icon={
					<Icon
						icon="lucide:layout-dashboard"
						height="16"
						width="16"
						className="text-neutral-400"
					/>
				}
				title={t("stats.scrumban.title")}
				description={t("stats.scrumban.description")}
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				icon={
					<Icon
						icon="lucide:hammer"
						height="16"
						width="16"
						className="text-neutral-400"
					/>
				}
				title={t("stats.designer.title")}
				description={t("stats.designer.description")}
			/>
		</ul>
	);
}

export function Stats() {
	return (
		<div className="flex flex-col min-h-[100lvh] items-center justify-center gap-16 px-8 py-32">
			<GlowingEffectDemoSecond />
		</div>
	);
}

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
	return (
		<li className={`min-h-[14rem] list-none ${area}`}>
			<div className="relative h-full rounded-[24px] border p-2 md:p-3">
				<GlowingEffect
					blur={0}
					borderWidth={3}
					spread={80}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>
				<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="w-fit rounded-lg border border-gray-600 p-2 ">
							{icon}
						</div>
						<div className="space-y-3">
							<span className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
								{title}
							</span>
							<h2
								className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem]
              md:text-base/[1.375rem] text-neutral-400"
							>
								{description}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
