export function Logo(props: { imageUrl: string }) {
	return (
		<div className="flex items-center gap-px">
			<img src={props.imageUrl} alt="logo" width="28" className="mr-1" />
			<span className="font-extrabold! text-2xl! text-white!">Wyro</span>
			<span className="font-thin! text-2xl! text-white!">Tech</span>
		</div>
	);
}
