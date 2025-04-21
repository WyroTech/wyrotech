import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";
import type {Project} from "@/lib/models.ts";
import {Icon} from "@iconify/react";

const lang = getLangFromWindow();
const t = useTranslations(lang);

export function Projects(props: { projects: Project[] }) {
	return (
		<>
			<div className="py-48 flex flex-col items-center justify-center gap-8">
				<h1 className="title">{t("project")}</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-24 py-16 px-8 w-full">
					{props.projects.map((project) => (
						<div
							key={project.title}
							className="items-center flex flex-col gap-6"
						>
							<a
								className="w-full h-64 bg-[#222] rounded-lg hover:scale-105 transition-all duration-500"
								href={project.link}
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={project.image}
									className="w-full h-full object-cover rounded-lg"
									alt={project.title}
									loading="lazy"
								/>
							</a>
							<h2>{project.title}</h2>
							<div className="flex gap-4">
								{project.tech.map((tech) => (
									<div key={tech} title={tech}>
										<Icon
											icon={`simple-icons:${tech}`}
											name={`simple-icons:${tech}`}
											width={36}
											height={36}
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
