"use client";
import {cn} from "@/lib/utils";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import {AnimatePresence, motion, useMotionValue, useSpring,} from "motion/react";
import React from "react";

type LinkPreviewProps = {
	children: React.ReactNode;
	url: string;
	className?: string;
	width?: number;
	height?: number;
	quality?: number;
	layout?: string;
} & (
	| { isStatic: true; imageSrc: string }
	| { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
	children,
	url,
	className,
	width = 200,
	height = 125,
	isStatic = false,
	imageSrc = "",
}: LinkPreviewProps) => {
	const src = imageSrc;

	const [isOpen, setOpen] = React.useState(false);

	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const springConfig = { stiffness: 100, damping: 15 };
	const x = useMotionValue(0);

	const translateX = useSpring(x, springConfig);

	const handleMouseMove = (event: any) => {
		const targetRect = event.target.getBoundingClientRect();
		const eventOffsetX = event.clientX - targetRect.left;
		const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
		x.set(offsetFromCenter);
	};

	return (
		<>
			{isMounted ? (
				<div className="hidden">
					{/* biome-ignore lint/a11y/noRedundantAlt: <explanation> */}
					<img
						src={src}
						width={width}
						height={height}
						alt="hidden image"
						loading="lazy"
					/>
				</div>
			) : null}

			<HoverCardPrimitive.Root
				openDelay={50}
				closeDelay={100}
				onOpenChange={(open) => {
					setOpen(open);
				}}
			>
				<HoverCardPrimitive.Trigger
					onMouseMove={handleMouseMove}
					className={cn("text-white", className)}
					href={url}
					target="_blank"
				>
					{children}
				</HoverCardPrimitive.Trigger>

				<HoverCardPrimitive.Content
					className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
					side="top"
					align="center"
					sideOffset={10}
				>
					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0, y: 20, scale: 0.6 }}
								animate={{
									opacity: 1,
									y: 0,
									scale: 1,
									transition: {
										type: "spring",
										stiffness: 260,
										damping: 20,
									},
								}}
								exit={{ opacity: 0, y: 20, scale: 0.6 }}
								className="shadow-xl rounded-md"
								style={{
									x: translateX,
								}}
							>
								<a
									href={url}
									target="_blank"
									className="block p-1 bg-gray-800 border-2 border-transparent shadow rounded hover:border-neutral-800"
									style={{ fontSize: 0 }}
									rel="noreferrer"
								>
									<img
										src={isStatic ? imageSrc : src}
										width={width}
										height={height}
										className="rounded"
										// biome-ignore lint/a11y/noRedundantAlt: <explanation>
										alt="preview image"
										loading="lazy"
									/>
								</a>
							</motion.div>
						)}
					</AnimatePresence>
				</HoverCardPrimitive.Content>
			</HoverCardPrimitive.Root>
		</>
	);
};
