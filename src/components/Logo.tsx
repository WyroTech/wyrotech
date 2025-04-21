export function Logo(props: { logoUrl: string }) {
	return (
		<div className="flex items-center gap-px">
			<img
				src={props.logoUrl}
				alt="logo"
				width="28"
				height="28"
				className="mr-1"
				loading="lazy"
			/>
			<span className="font-extrabold! text-2xl! text-white!">Wyro</span>
			<span className="font-thin! text-2xl! text-white!">Tech</span>
		</div>
	);
}
