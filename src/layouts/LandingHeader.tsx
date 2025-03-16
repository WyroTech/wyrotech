import Button from "@/components/Button.tsx";

export function LandingHeader() {
	return (
		<section className="w-screen">
			<div className="flex flex-col justify-center lg:justify-start items-center gap-12 px-8 py-16 max-w-2xl h-screen lg:pt-[25%] mx-auto">
				<div className="flex flex-col gap-6 items-center">
					<h1 className="text-center">Lorem ipsum dolor</h1>
					<h5 className="text-center">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
					</h5>
				</div>
				<div className="flex gap-4">
					<Button severity="secondary" text="My Work" icon="chevron-right" />
					<Button severity="primary" text="Contact Us" icon="chevron-right" />
				</div>
			</div>
		</section>
	);
}
