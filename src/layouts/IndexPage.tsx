import {Navigation} from "@/components/Navigation.tsx";
import {Footer} from "@/layouts/Footer.tsx";
import {ProgrammingLanguages} from "@/layouts/ProgrammingLanguages.tsx";
import {Projects} from "@/layouts/Projects.tsx";
import {SpeakingLanguages} from "@/layouts/SpeakingLanguages.tsx";
import {WorkTimeline} from "@/layouts/WorkTimeline.tsx";
import type {LandingPageObject} from "@/lib/models.ts";
import {useState} from "react";
import {LandingHeader} from "./LandingHeader";
import {Stats} from "./Stats";

export function IndexPage(props: { obj: LandingPageObject }) {
	const [isLoading, setIsLoading] = useState(true);
	setTimeout(() => {
		setTimeout(() => setIsLoading(false), 500);
		(window as any).removeLoadingScreen();
	}, 0);

	return (
		<>
			{!isLoading && (
				<>
					<Navigation logo={props.obj.logoSmall} />
					<LandingHeader profileUrl={props.obj.profileUrl} />
					<ProgrammingLanguages />
					<SpeakingLanguages />
					<Stats />
					<Projects projects={props.obj.projects} />
					<WorkTimeline images={props.obj.timelineImages} />
					<Footer logoUrl={props.obj.logoSmall} />
				</>
			)}
		</>
	);
}
