import {Timeline} from "@/components/ui/timeline";
import {ExternalLink} from "lucide-react";
import React from "react";

function BlueLink({ link, name }: { link: string; name: string }) {
	return (
		<div>
			<a href={link} className=" text-blue-500">
				{name}
				<div className="inline-flex px-1">
					<ExternalLink size={14} />
				</div>
			</a>
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
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<div>✅ Technical Supervisor for Junior-Mid Developer</div>
						<div>✅ Creation of Design System for dab Nexus</div>
						<div>✅ Planing Product Features in Figma for dab Nexus</div>
						<div>
							✅ Creating UX Journey of dab's newest AI Project and creating
							first Mockups and Prototypes in Figma
						</div>
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
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<div>✅ Build Dynamic User Interfaces (UI) for Websites</div>
						<div>✅ Foundations of User Experience (UX) Design</div>
						<div>
							✅ Start the UX Design Process: Empathize, Define, and Ideate
						</div>
						<div>✅ Create High-Fidelity Designs and Prototypes in Figma</div>
						<div>✅ Build Wireframes and Low-Fidelity Prototypes</div>
						<div>✅ Conduct UX Research and Test Early Concepts</div>
						<div>
							✅ Design a User Experience for Social Good & Prepare for Jobs
						</div>
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
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<div>
							✅ Worked on numerous features for dab Nexus, delivering over 10
							major feature releases.
						</div>
						<div>
							✅ Revamped the SAP Extraction Library (C#), achieving up to a 70%
							performance boost.
						</div>
						<div>
							✅ Planned and strategized dab Nexus Loom as a SaaS solution on
							Azure.
						</div>
						<div>
							✅ Designed intuitive UX and UI for dab Nexus Loom using Figma.
						</div>
						<div>
							✅ Built the user interface for dab Nexus Loom with Angular.
						</div>
						<div>
							✅ Crafted the UX and UI for the in-house licensing tool "Mars."
						</div>
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
					/>

					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<div>
							✅ Creation of dab Link as a Electron App to fastly access SAP
							data in the SAP GUI with a "One-Link"-Click Solution.
						</div>
						<div>
							✅ Start of dab Nexus. Creation of the base Product with Angular
							and .NET Core.
						</div>
						<div>✅ Integration of CI/CD Pipelines with Azure DevOps.</div>
						<div>
							✅ Creation of the "Apollo"-Customer Portal Design System in
							Figma.
						</div>
						<div>
							✅ Development of the Apollo Customer Portal with Angular.
						</div>
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
					/>
					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<div>✅ Developing of Odoo - Drag & Drop Addon</div>
						<div>✅ Developing of Odoo - Azure SSO Integration Addon</div>
						<div>✅ Developing of Migration tool for "Odin"-Plattform</div>
						<div>✅ Developing custom Addons for Customers for Odoo</div>
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
					/>
					<div className="mb-2 flex flex-col gap-1 text-sm!">
						<div>✅ Project Work & Team Coordination</div>
						<div>✅ Fundamentals of Software Development</div>
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
