import {WorkTimeline} from "@/layouts/WorkTimeline.tsx";
import type {LandingPageObject} from "@/lib/models.ts";
import {Stats} from "./Stats";

export function IndexPage(props: { obj: LandingPageObject }) {
	return (
		<>
			<Stats />
			<WorkTimeline images={props.obj.timelineImages} />
		</>
	);
}
