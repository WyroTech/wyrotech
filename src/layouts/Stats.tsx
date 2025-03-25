import {GlowingEffect} from "@/components/ui/glowing-effect";
import {CodeXml, FileHeart, Hammer, LayoutDashboard, UsersRound,} from "lucide-react";
import type React from "react";

export function GlowingEffectDemoSecond() {
	return (
		<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
			<GridItem
				area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
				icon={<CodeXml className="h-4 w-4 text-black dark:text-neutral-400" />}
				title="Full-Stack Developer Expert"
				description="Angular and TypeScript specialist since 2019."
			/>

			<GridItem
				area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
				icon={
					<FileHeart className="h-4 w-4 text-black dark:text-neutral-400" />
				}
				title="Google UX Design Certified"
				description="Building intuitive interfaces that users love."
			/>

			<GridItem
				area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
				icon={
					<UsersRound className="h-4 w-4 text-black dark:text-neutral-400" />
				}
				title="Technical Supervisor Experience"
				description="Mentoring junior devs to reach their potential."
			/>

			<GridItem
				area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
				icon={
					<LayoutDashboard className="h-4 w-4 text-black dark:text-neutral-400" />
				}
				title="Scrumban Implementation Pro "
				description="Leading agile development through Azure DevOps."
			/>

			<GridItem
				area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
				icon={<Hammer className="h-4 w-4 text-black dark:text-neutral-400" />}
				title="Product Feature Designer"
				description="From Figma mockups to functional code implementation."
			/>
		</ul>
	);
}

export function Stats() {
	return (
		<div className="flex flex-col min-h-[100lvh] items-center justify-center gap-16 px-8 py-32">
			<h1 className="text-center title">Overview</h1>
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
				<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="w-fit rounded-lg border border-gray-600 p-2 ">
							{icon}
						</div>
						<div className="space-y-3">
							<span className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
								{title}
							</span>
							<h2
								className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem]
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
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
