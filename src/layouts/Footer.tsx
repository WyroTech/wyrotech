import {AnimatedLink} from "@/components/AnimatedLink";
import {IconLink} from "@/components/IconLink.tsx";
import {Logo} from "@/components/Logo";
import {getLangFromWindow, useTranslations} from "@/i18n/utils.ts";

const lang = getLangFromWindow();
const t = useTranslations(lang);

export const Footer = (props: { logoUrl: string }) => {
	return (
		<footer className=" w-full flex flex-col justify-between items-center py-16 px-8 gap-16 md:justify-start">
			<div className="w-full flex flex-col gap-16 justify-center items-center md:flex-row md:justify-start md:items-end">
				<div className="w-full flex flex-col gap-8 items-center md:grid md:grid-cols-2 md:w-2xs md:gap-y-8 md:gap-x-16 md:items-end">
					<div className="col-span-2">
						<a href="/">
							<Logo logoUrl={props.logoUrl} />
						</a>
					</div>
					<AnimatedLink text={t("home")} href="#home" />
					<AnimatedLink text={t("skills")} href="#skills" />
					<AnimatedLink text={t("journey")} href="#journey" />
					<AnimatedLink text={t("imprint")} href="#" />
				</div>
				<div className="flex gap-8 md:w-full md:justify-end">
					<IconLink
						description="Mail"
						iconName="lucide:mail"
						href="mailto:a@wyro.tech"
					/>
					<IconLink
						description="WaniKani"
						iconName="hugeicons:alphabet-japanese"
						href="https://www.wanikani.com/users/WyroTech"
					/>
					<IconLink
						description="Leetcode"
						iconName="simple-icons:leetcode"
						href="https://leetcode.com/u/WyroTech/"
					/>
					<IconLink
						description="LinkedIn"
						iconName="lucide:linkedin"
						href="https://www.linkedin.com/in/andreas-wyrobek/"
					/>
					<IconLink
						description="Github"
						iconName="lucide:github"
						href="https://github.com/wyrotech"
					/>
				</div>
			</div>
		</footer>
	);
};
