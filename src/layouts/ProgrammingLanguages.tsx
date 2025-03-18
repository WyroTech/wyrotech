import {Icon} from "@iconify/react";

function ProgrammingIcon({ icon, name }: { icon: string; name: string }) {
	const size = 72;
	return (
		<div className="transition-opacity cube group-hover:opacity-40 hover:!opacity-100 cube flex flex-col items-center gap-0.5">
			<div className="w-24 h-24 flex justify-center items-center">
				<Icon icon={`logos:${icon}`} width={size} height={size} />
			</div>
			<span className="w-full text-center text-sm!">{name}</span>
		</div>
	);
}

export function ProgrammingLanguages() {
	const size = 96;
	return (
		<div className="min-h-[100lvh] flex flex-col items-center justify-center px-8 gap-16">
			<h1 className="text-center text-7xl! lg:text-[6vw]! pt-16">
				Skills & Languages
			</h1>
			<div className="group flex flex-wrap w-full justify-center gap-x-12 gap-y-16 pb-16">
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
		</div>
	);
}
