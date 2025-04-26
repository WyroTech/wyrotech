interface AnimatedLinkProps {
	text: string;
	href: string;
}

export function AnimatedLink({ text, href }: AnimatedLinkProps) {
	return (
		<a
			href={href}
			className="flex flex-col overflow-y-hidden h-6 w-min relative"
		>
			<span className="h-6 transition-all cube text-gradient whitespace-nowrap text-gradiant">
				{text}
			</span>
			<span className="h-6 transition-all cube whitespace-nowrap">{text}</span>
		</a>
	);
}
