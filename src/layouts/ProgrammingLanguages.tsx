import {Icon} from "@iconify/react";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

function ProgrammingIcon({ icon, name }: { icon: string; name: string }) {
	const size = 72;
	return (
		<motion.div className="transition-all cube hover:!scale-120 cube flex flex-col items-center gap-0.5">
			<div className="w-24 h-24 flex justify-center items-center">
				<Icon icon={`logos:${icon}`} width={size} height={size} />
			</div>
			<span className="w-full text-center text-sm!">{name}</span>
		</motion.div>
	);
}

export function ProgrammingLanguages() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });

	(document as any).finishedLoadingComponent();

	return (
		<motion.div
			id="skills"
			className="min-h-[100lvh] flex flex-col items-center justify-center px-8 gap-16"
			initial={{ opacity: 0, y: -40 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5 }}
		>
			<h1 className="title pt-16">Skills & Languages</h1>
			<div
				ref={ref}
				className="group flex flex-wrap w-full justify-center gap-x-12 gap-y-16 pb-16"
			>
				<ProgrammingIcon name="Docker" icon="docker-icon" />
				<ProgrammingIcon name="Tailwind" icon="tailwindcss-icon" />
				<ProgrammingIcon name="Python" icon="python" />
				<ProgrammingIcon name="HTML5" icon="html-5" />
				<ProgrammingIcon name="CSS3" icon="css-3" />
				<ProgrammingIcon name="Javascript" icon="javascript" />
				<ProgrammingIcon name="Typescript" icon="typescript-icon" />
				<ProgrammingIcon name="Angular" icon="angular-icon" />
				<ProgrammingIcon name="RxJs" icon="reactivex" />
				<ProgrammingIcon name="React" icon="react" />
				<ProgrammingIcon name="Linux" icon="tux" />
				<ProgrammingIcon name="Git" icon="git-icon" />
				<ProgrammingIcon name="Figma" icon="figma" />
				<ProgrammingIcon name="Azure" icon="azure-icon" />
				<ProgrammingIcon name="dotnet" icon="dotnet" />
				<ProgrammingIcon name="C#" icon="c-sharp" />
				<ProgrammingIcon name="Sass" icon="sass" />
				<ProgrammingIcon name="PostgreSQL" icon="postgresql" />
				<ProgrammingIcon name="Posthog" icon="posthog-icon" />
				<ProgrammingIcon name="Storybook" icon="storybook-icon" />
			</div>
		</motion.div>
	);
}
