export interface Project {
	title: string;
	description: string;
	tag: string;
	image: string;
	link: string;
	tech: string[];
}

export interface TimelineImages {
	firstcontact: string;
	dab: string;
	gartner: string;
	coursera: string;
	connecta: string;
	edvschule: string;
	acp: string;

	face: {
		gartner: string;
		firstContact: string;
		connecta: string;
	};
}

export interface LandingPageObject {
	logo: string;
	logoSmall: string;
	profileUrl: string;
	projects: Project[];
	timelineImages: TimelineImages;
}
