import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip.tsx";
import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";
import type {Project} from "@/lib/models.ts";
import {Icon} from "@iconify/react";

const lang = getLangFromWindow();
const t = useTranslations(lang);

function Tag({ text }: { text: string }) {
	return (
		<div className="tag">
			<div className="bg" />
			<div className="text">{text}</div>
		</div>
	);
}

export function Projects(props: { projects: Project[] }) {
	return (
		<>
			<div className="py-48 flex flex-col items-center justify-center gap-4">
				<h1 className="title">{t("project")}</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-12 py-16 px-8 w-full">
					{props.projects.map((project) => (
						<a
							key={project.title}
							className="project-card p-px overflow-y-hidden group"
							href={project.link}
							target="_blank"
							rel="noreferrer"
						>
							<div className="items-start flex flex-col w-full h-full px-6 pt-6">
								<div className="flex flex-col gap-3">
									<div className="flex items-center w-full justify-between gap-2">
										<Tag text={project.tag} />
										<div className="inline-flex justify-center gap-1 items-start opacity-50 transition-all duration-500 group-hover:opacity-100">
											<span className="text-xs!">Open</span>
											<Icon
												icon="lucide:arrow-up-right"
												width={14}
												height={14}
											/>
										</div>
									</div>
									<h2>{project.title}</h2>
									<div className="flex gap-3">
										{project.tech.map((tech) => (
											<TooltipProvider key={tech}>
												<Tooltip>
													<TooltipTrigger>
														<div className="opacity-50 group-hover:opacity-100 transition-all duration-500 h-9 w-9 flex justify-center items-center">
															<Icon
																icon={`simple-icons:${tech}`}
																name={`simple-icons:${tech}`}
																width={26}
																height={26}
															/>
														</div>
													</TooltipTrigger>
													<TooltipContent>{tech}</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										))}
									</div>
									<p>{project.description}</p>
								</div>
								<div className="w-full h-64 bg-[#222] rounded-t-xl opacity-50 translate-y-1/6 group-hover:opacity-85 group-hover:translate-y-1/8 transition-all duration-500">
									<img
										src={project.image}
										className="w-full h-full object-cover rounded-t-xl shadow-2xl"
										alt={project.title}
										loading="lazy"
									/>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
}
