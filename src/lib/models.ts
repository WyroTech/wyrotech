export interface Project {
	title: string;
	description: string;
	tag: string;
	image: string;
	link: string;
	tech: string[];
}

interface TimelineImages {
	firstcontact: string;
	dab: string;
	coursera: string;
	connecta: string;
	edvschule: string;
	acp: string;
}

export interface LandingPageObject {
	logo: string;
	logoSmall: string;
	profileUrl: string;
	projects: Project[];
	timelineImages: TimelineImages;
}
