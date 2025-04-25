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
			className="w-9 h-9 flex justify-center items-center text-white transition-all transform opacity-75 hover:opacity-100 hover:scale-120 duration-300 hover:bg-gray-700 rounded-sm"
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
