import {Icon} from "@iconify/react";

export const IconLink = (props: {
	iconName: string;
	href: string;
	description: string;
}) => {
	return (
		<a
			href={props.href}
			aria-label={props.description}
			title={props.description}
			className="w-min text-white transition-all transform opacity-75 hover:opacity-100 hover:scale-110 duration-300"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Icon
				name={props.iconName}
				width={20}
				height={20}
				icon={props.iconName}
			/>
		</a>
	);
};
