import {Projects} from "@/layouts/Projects.tsx";
import {SpeakingLanguages} from "@/layouts/SpeakingLanguages.tsx";
import {WorkTimeline} from "@/layouts/WorkTimeline.tsx";
import type {LandingPageObject} from "@/lib/models.ts";
import {Stats} from "./Stats";

export function IndexPage(props: { obj: LandingPageObject }) {
	return (
		<>
			<SpeakingLanguages />
			<Stats />
			<Projects projects={props.obj.projects} />
			<WorkTimeline images={props.obj.timelineImages} />
		</>
	);
}
