import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {DynamicIcon} from "lucide-react/dynamic";
import React from "react";

interface ButtonContainerProps {
	severity: string;
	text: string;
	icon: string;
}

const ButtonContainer = ({ severity, text, icon }: ButtonContainerProps) => {
	// Motion value to control the rotation dynamically
	const rotate = useMotionValue(150); // Initial gradient angle
	const shadowSize = useMotionValue(0);
	const bgColor = useMotionValue("rgb(15, 14, 56)");

	// Transform `rotate` into a dynamic background gradient
	const background = useTransform(
		rotate,
		(r) =>
			`linear-gradient(${r}deg, rgb(96, 93, 255) 0%, rgb(19, 19, 83) 32%, rgb(19, 19, 83) 69.401%, rgb(224, 103, 255) 100%)`,
	);

	const boxShadow = useTransform(
		shadowSize,
		(s) => `rgba(99, 35, 204, 0.6) 0px 0px ${s}px 0px`,
	);

	const buttonBackground = useTransform(
		bgColor,
		(color) =>
			`radial-gradient(100% 100% at 45.2174% 5.76611e-07%, ${color} 8.01213%, rgb(20, 20, 39) 100%)`,
	);

	return (
		<motion.a
			// biome-ignore lint/a11y/useValidAnchor: <explanation>
			href="#"
			className={`${severity} button-container`}
			style={{ boxShadow }}
			onHoverStart={() => {
				animate(rotate, 25, { duration: 0.35, ease: "easeInOut" });
				animate(shadowSize, 20, { duration: 0.35, ease: "easeInOut" });
				animate(bgColor, "rgb(36, 34, 149)", {
					duration: 0.35,
					ease: "easeInOut",
				});
			}}
			onHoverEnd={() => {
				animate(rotate, 150, { duration: 0.35, ease: "easeInOut" });
				animate(shadowSize, 0, { duration: 0.35, ease: "easeInOut" });
				animate(bgColor, "rgb(15, 14, 56)", {
					duration: 0.35,
					ease: "easeInOut",
				});
			}}
		>
			<div className="border-button">
				{/* Apply the animated gradient background to the border */}
				<motion.div
					className="border"
					style={{ background }} // Now updates reactively with smooth transition!
				/>
				<motion.button type="button" style={{ background: buttonBackground }}>
					<span>{text}</span>
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					<DynamicIcon name={icon as any} size={16} />
				</motion.button>
			</div>
		</motion.a>
	);
};

export default ButtonContainer;
