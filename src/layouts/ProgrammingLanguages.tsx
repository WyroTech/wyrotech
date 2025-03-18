import {Icon} from "@iconify/react";

function ProgrammingIcon({ icon, name }: { icon: string; name: string }) {
	const size = 96;
	return (
		<div className="opacity-50 hover:opacity-100 transition-opacity cube flex flex-col items-center gap-1">
			<Icon icon={`bxl:${icon}`} height={size} />
			<span className="w-full text-center text-sm!">{name}</span>
		</div>
	);
}

export function ProgrammingLanguages() {
	const size = 96;
	return (
		<div className="flex flex-wrap w-full justify-center gap-x-4 gap-y-8 py-16 px-8">
			<ProgrammingIcon name="Docker" icon="docker" />
			<ProgrammingIcon name="Tailwind" icon="tailwind-css" />
			<ProgrammingIcon name="Python" icon="python" />
			<ProgrammingIcon name="HTML5" icon="html5" />
			<ProgrammingIcon name="CSS3" icon="css3" />
			<ProgrammingIcon name="Javascript" icon="javascript" />
			<ProgrammingIcon name="Typescript" icon="typescript" />
			<ProgrammingIcon name="Angular" icon="angular" />
			<ProgrammingIcon name="React" icon="react" />
			<ProgrammingIcon name="Linux" icon="tux" />
			<ProgrammingIcon name="Git" icon="git" />
			<ProgrammingIcon name="Figma" icon="figma" />
		</div>
	);
}
