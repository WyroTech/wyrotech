import {Navigation} from "@/components/Navigation.tsx";
import {Footer} from "@/layouts/Footer.tsx";
import {Projects} from "@/layouts/Projects.tsx";
import {WorkTimeline} from "@/layouts/WorkTimeline.tsx";
import type {LandingPageObject} from "@/lib/models.ts";
import {useEffect, useState} from "react";
import {Stats} from "./Stats";

export function IndexPage(props: { obj: LandingPageObject }) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const handleLoad = () => {
			(window as any).removeLoadingScreen();
			setTimeout(() => setIsLoading(false), 500); // let fade start but don’t block too long
		};

		if (document.readyState === "complete") {
			// In case the load event has already fired
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
		}

		return () => {
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	return (
		<>
			{!isLoading && (
				<>
					<Navigation logo={props.obj.logoSmall} />
					<Stats />
					<Projects projects={props.obj.projects} />
					<WorkTimeline images={props.obj.timelineImages} />
					<Footer logoUrl={props.obj.logoSmall} />
				</>
			)}
		</>
	);
}
