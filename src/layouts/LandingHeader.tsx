import Button from "@/components/Button.tsx";

export function LandingHeader() {
	return (
		<section className="flex flex-col items-center gap-8 px-8 py-16 max-w-2xl h-screen pt-[33%]">
			<div className="flex flex-col gap-4 items-center">
				<h1>Lorem ipsum</h1>
				<h4>Lorem ipsum</h4>
			</div>
			<div className="flex gap-4">
				<Button severity="secondary" text="My Work" icon="chevron-right" />
				<Button severity="primary" text="Contact Us" icon="chevron-right" />
			</div>
		</section>
	);
}
