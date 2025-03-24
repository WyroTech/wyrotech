import {LinkPreview} from "@/components/ui/link-preview.tsx";
import {Timeline} from "@/components/ui/timeline";
import {ExternalLink} from "lucide-react";
import type React from "react";

function BlueLink({
	link,
	name,
	imageUrl,
}: { link: string; name: string; imageUrl: string }) {
	return (
		<div className="z-50">
			<LinkPreview url={link} imageSrc={imageUrl}>
				<div className="inline-flex text-blue-500!">
					{name}
					<div className="inline-flex px-1">
						<ExternalLink size={14} />
					</div>
				</div>
			</LinkPreview>
		</div>
	);
}

function BulletPoint({ children: child }: { children: React.ReactNode }) {
	return (
		<div className="flex gap-2">
			<div>✅</div>
			{child}
		</div>
	);
}

export function WorkTimeline() {
	const data = [
		{
			title: "03.2025",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">
						Representative on the FirstContact 2025 in Deggendorf
					</h1>
					<BlueLink
						link={"https://www.firstcontact-deggendorf.de/startseite.html"}
						name={"FirstContact Deggendorf"}
						imageUrl="/public/screenshots/firstcontact-deggendorf.png"
					/>
				</div>
			),
		},
		{
			title: "11.2024 - now",
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">
						Principal Software Engineer & UX/UI Lead
					</h1>

					<BlueLink
						link={"https://www.dab-europe.com/"}
						name={"dab: Daten - Analysen & Beratung GmbH"}
						imageUrl="/public/screenshots/dab.png"
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>
							Technical Supervisor for Junior-Mid Developer
						</BulletPoint>
						<BulletPoint>Creation of Design System for dab Nexus</BulletPoint>
						<BulletPoint>
							Planing Product Features in Figma for dab Nexus
						</BulletPoint>
						<BulletPoint>
							Creating UX Journey of dab's newest AI Project and creating first
							Mockups and Prototypes in Figma
						</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "11.2024",
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">Certfication: Google UX Design</h1>
					<BlueLink
						link={
							"https://www.coursera.org/account/accomplishments/professional-cert/FA3AWC8GLJJ2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
						}
						name={"Coursera"}
						imageUrl="/public/screenshots/coursera.png"
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>
							Build Dynamic User Interfaces (UI) for Websites
						</BulletPoint>
						<BulletPoint>
							Foundations of User Experience (UX) Design
						</BulletPoint>
						<BulletPoint>
							Start the UX Design Process: Empathize, Define, and Ideate
						</BulletPoint>
						<BulletPoint>
							Create High-Fidelity Designs and Prototypes in Figma
						</BulletPoint>
						<BulletPoint>
							Build Wireframes and Low-Fidelity Prototypes
						</BulletPoint>
						<BulletPoint>
							Conduct UX Research and Test Early Concepts
						</BulletPoint>
						<BulletPoint>
							Design a User Experience for Social Good & Prepare for Jobs
						</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "11.2024",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">Representative on the Connecta 2024</h1>
					<BlueLink
						link={"https://connecta-regensburg.de/"}
						name={"Connecta in Regensburg"}
						imageUrl="/public/screenshots/connacta-regensburg.png"
					/>
				</div>
			),
		},
		{
			title: "08.2022 - 11.2024",
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">Senior Software Developer</h1>
					<BlueLink
						link={"https://www.dab-europe.com/"}
						name={"dab: Daten - Analysen & Beratung GmbH"}
						imageUrl="/public/screenshots/dab.png"
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>
							Worked on numerous features for dab Nexus, delivering over 10
							major feature releases.
						</BulletPoint>
						<BulletPoint>
							Revamped the SAP Extraction Library (C#), achieving up to a 70%
							performance boost.
						</BulletPoint>
						<BulletPoint>
							Planned and strategized dab Nexus Loom as a SaaS solution on
							Azure.
						</BulletPoint>
						<BulletPoint>
							Designed intuitive UX and UI for dab Nexus Loom using Figma.
						</BulletPoint>
						<BulletPoint>
							Built the user interface for dab Nexus Loom with Angular.
						</BulletPoint>
						<BulletPoint>
							Crafted the UX and UI for the in-house licensing tool "Mars."
						</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "03.2023",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">
						Representative on the Presentation-Days at EDV School
					</h1>
					<BlueLink
						link={"https://www.edvschule-plattling.de/"}
						name={"EDV-Schulen des Landkreises Deggendorf"}
						imageUrl="/public/screenshots/edvschule.png"
					/>
				</div>
			),
		},
		{
			title: "09.2019 - 08.2022",
			content: (
				<div className="flex flex-col gap-3">
					<h1 className="text-gradiant">Software Developer</h1>
					<BlueLink
						link={"https://www.dab-europe.com/"}
						name={"dab: Daten - Analysen & Beratung GmbH"}
						imageUrl="/public/screenshots/dab.png"
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>
							Creation of dab Link as a Electron App to fastly access SAP data
							in the SAP GUI with a "One-Link"-Click Solution.
						</BulletPoint>
						<BulletPoint>
							Start of dab Nexus. Creation of the base Product with Angular and
							.NET Core.
						</BulletPoint>
						<BulletPoint>
							Integration of CI/CD Pipelines with Azure DevOps.
						</BulletPoint>
						<BulletPoint>
							Creation of the "Apollo"-Customer Portal Design System in Figma.
						</BulletPoint>
						<BulletPoint>
							Development of the Apollo Customer Portal with Angular.
						</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "08.2016 - 09.2019",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">Software-Developer - Python & Odoo</h1>
					<BlueLink
						link={"https://www.acp-gruppe.com/de-de"}
						name={"ACP IT Solutions AG"}
						imageUrl="/public/screenshots/acp.png"
					/>
					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>Developing of Odoo - Drag & Drop Addon</BulletPoint>
						<BulletPoint>
							Developing of Odoo - Azure SSO Integration Addon
						</BulletPoint>
						<BulletPoint>
							Developing of Migration tool for "Odin"-Plattform
						</BulletPoint>
						<BulletPoint>
							Developing custom Addons for Customers for Odoo
						</BulletPoint>
					</div>
				</div>
			),
		},
		{
			title: "09.2013 - 07.2016",
			content: (
				<div className="flex flex-col gap-2">
					<h1 className="text-gradiant">
						Training - Junior Software Developer
					</h1>
					<BlueLink
						link={"https://www.edvschule-plattling.de/"}
						name={"EDV-Schulen des Landkreises Deggendorf"}
						imageUrl="/public/screenshots/edvschule.png"
					/>
					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<BulletPoint>Project Work & Team Coordination</BulletPoint>
						<BulletPoint>Fundamentals of Software Development</BulletPoint>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="w-full py-24">
			<Timeline data={data} />
		</div>
	);
}
