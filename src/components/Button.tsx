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

	// Transform `rotate` into a dynamic background gradient
	const background = useTransform(
		rotate,
		(r) =>
			`linear-gradient(${r}deg, rgb(96, 93, 255) 0%, rgb(19, 19, 83) 32%, rgb(19, 19, 83) 69.401%, rgb(224, 103, 255) 100%)`,
	);

	return (
		<motion.div
			className={`${severity} button-container`}
			onHoverStart={() => {
				animate(rotate, 25, { duration: 0.35, ease: "easeInOut" }); // Animate rotation smoothly
			}}
			onHoverEnd={() => {
				animate(rotate, 150, { duration: 0.35, ease: "easeInOut" }); // Animate back to default
			}}
		>
			<div className="border-button">
				{/* Apply the animated gradient background to the border */}
				<motion.div
					className="border"
					style={{ background }} // Now updates reactively with smooth transition!
				/>
				<button type="button">
					<span>{text}</span>
					<DynamicIcon name={icon as any} size={16} />
				</button>
			</div>
		</motion.div>
	);
};

export default ButtonContainer;
