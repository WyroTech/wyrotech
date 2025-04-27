import {animate, motion, useMotionValue, useTransform} from "framer-motion";
import {DynamicIcon} from "lucide-react/dynamic";

interface ButtonContainerProps {
	severity: string;
	text: string;
	icon?: string;
}

const ButtonContainer = ({ severity, text, icon }: ButtonContainerProps) => {
	// Motion value to control the rotation dynamically
	const rotate = useMotionValue(150); // Initial gradient angle
	const shadowSize = useMotionValue(0);
	const bgColor = useMotionValue("rgb(15, 14, 56)");

	// Transform `rotate` into a dynamic background gradient
	const background = useTransform(rotate, (r) => {
		if (severity === "primary") {
			return `linear-gradient(${r}deg, rgb(96, 93, 255) 0%, rgb(19, 19, 83) 32%, rgb(19, 19, 83) 69.401%, rgb(224, 103, 255) 100%)`;
		}
		return "rgb(208, 211, 218)";
	});

	const boxShadow = useTransform(shadowSize, (s) => {
		if (severity === "primary") {
			return `rgba(99, 35, 204, 0.6) 0px 0px ${s}px 0px`;
		}
		return `rgba(255, 255, 255, 0.4) 0px 0px ${s}px 0px`;
	});

	const buttonBackground = useTransform(bgColor, (color) => {
		if (severity === "primary") {
			return `radial-gradient(100% 100% at 45.2174% 5.76611e-07%, ${color} 8.01213%, rgb(20, 20, 39) 100%)`;
		}
		return "rgb(208, 211, 218)";
	});

	return (
		<motion.div
			className={`${severity} button-container`}
			style={{ boxShadow }}
			initial={{ opacity: 0, translateY: -5 }}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			animate={{ opacity: 1, translateY: 0 }}
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
				<motion.button
					type="button"
					className="group"
					style={{ background: buttonBackground }}
				>
					<div className="flex flex-col overflow-hidden h-6">
						<span
							className={`${severity === "primary" ? "text-white!" : "text-slate-700!"} h-6 transition-all cube -translate-y-full group-hover:translate-y-0`}
						>
							{text}
						</span>
						<span
							className={`${severity === "primary" ? "text-white!" : "text-slate-700!"} h-6 transition-all cube -translate-y-full group-hover:translate-y-0`}
						>
							{text}
						</span>
					</div>
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{icon ? <DynamicIcon name={icon as any} size={16} /> : null}
				</motion.button>
			</div>
		</motion.div>
	);
};

export default ButtonContainer;
