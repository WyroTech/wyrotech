export function LoadingScreen(props: { logoUrl: string }) {
	setTimeout(
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		() => document.getElementById("loading-screen")!.classList.add("opacity-0"),
		0,
	);
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	setTimeout(() => document.getElementById("loading-screen")!.remove(), 1000);

	return (
		<>
			<div
				id="loading-screen"
				className="loading-screen fixed inset-0 z-[999999] bg-black transition-opacity duration-1000"
			>
				<div className="fixed inset-0 flex justify-center items-center">
					<div className="flex items-center gap-px">
						<img
							src={props.logoUrl}
							alt="logo"
							width="56"
							height="56"
							className="mr-1"
							loading="lazy"
						/>
						<span className="font-extrabold! text-6xl! text-white!">Wyro</span>
						<span className="font-thin! text-6xl! text-white!">Tech</span>
					</div>
				</div>
			</div>
		</>
	);
}
