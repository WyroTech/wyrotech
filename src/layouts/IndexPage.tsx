import {Navigation} from "@/components/Navigation.tsx";
import {Footer} from "@/layouts/Footer.tsx";
import type {LandingPageObject} from "@/lib/models.ts";
import {LandingHeader} from "./LandingHeader";

export function IndexPage(props: { obj: LandingPageObject }) {
	return (
		<>
			<Navigation logo={props.obj.logoSmall} />
			<LandingHeader profileUrl={props.obj.profileUrl} />
			<Footer logoUrl={props.obj.logoSmall} />
		</>
	);
}
