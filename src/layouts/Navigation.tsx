import {AnimatedLink} from "@/components/AnimatedLink.tsx";
import ButtonContainer from "@/components/Button.tsx";
import {Logo} from "@/components/Logo";
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover";
import {Icon} from "@iconify/react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronDownIcon, LucideMenu, LucideX} from "lucide-react";
import {useState} from "react";
import {getLangFromWindow, useTranslations} from "../i18n/utils";

const lang = getLangFromWindow();
const t = useTranslations(lang);

export function LanguageSwitcher() {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger>
				<div className="flex gap-2 items-center rounded-full cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2">
					<Icon icon={lang === "de" ? "flag:de-4x3" : "flag:gb-4x3"} />
					<span className="text-sm!">{lang.toUpperCase()}</span>
					<ChevronDownIcon size={12} />
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<div className="p-2 flex flex-col gap-2 ">
					<a
						href="/de"
						className="flex gap-2 items-center rounded-md cursor-pointer py-2 px-4 hover:bg-gray-900 transition-colors"
					>
						<Icon icon="flag:de-4x3" className="border border-gray-700" />
						<p className="text-sm!">Deutsch</p>
					</a>
					<a
						href="/en"
						className="flex gap-2 items-center rounded-md cursor-pointer py-2 px-4 hover:bg-gray-900 transition-colors"
					>
						<Icon icon="flag:gb-4x3" className="border border-gray-700" />
						<p className="text-sm!">English</p>
					</a>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export function Navigation(props: { imageUrl: string }) {
	const [isOpen, setIsOpen] = useState(false);

	// Menu animation variants
	const menuVariants = {
		closed: {
			opacity: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
				when: "afterChildren",
			},
		},
		open: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.1,
				when: "beforeChildren",
			},
		},
	};

	// Menu item animation variants
	const menuItemVariants = {
		closed: {
			opacity: 0,
			x: 20,
			transition: {
				duration: 0.1,
			},
		},
		open: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.1,
			},
		},
	};

	(document as any).finishedLoadingComponent();

	return (
		<nav className="fixed top-0 left-0 right-0 bg-linear-to-b from-black to-transparent z-40">
			<div className="flex justify-between items-center py-8 px-8">
				<a href="/" className="z-20">
					<Logo imageUrl={props.imageUrl} />
				</a>
				{/* biome-ignore lint/a11y/useFocusableInteractive: <explanation> */}
				{/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					role="button"
					aria-label="Navigation Button"
					className="block lg:hidden cursor-pointer w-8 h-8 z-20"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="overflow-hidden w-6 h-6">
						<LucideX
							size="24"
							className={`cube duration-100 ${!isOpen ? "-translate-y-full" : "translate-0"}`}
						/>
						<LucideMenu
							size="24"
							className={`cube duration-100 ${isOpen ? "translate-0" : "-translate-y-full"}`}
						/>
					</div>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="flex flex-col items-end gap-16 lg:hidden fixed left-0 right-0 bottom-0 top-0 bg-gradient-to-b from-black/75 to-black h-full z-10"
							variants={menuVariants}
							initial="closed"
							animate="open"
							exit="closed"
						>
							<div className="flex flex-col gap-8 items-end px-8 pt-24">
								<motion.div variants={menuItemVariants}>
									<LanguageSwitcher />
								</motion.div>
								<motion.a
									href="#home"
									className="text-3xl font-sans"
									variants={menuItemVariants}
								>
									{t("home")}
								</motion.a>
								<motion.a
									href="#skills"
									className="text-3xl font-sans"
									variants={menuItemVariants}
								>
									{t("skills")}
								</motion.a>
								<motion.a
									href="#journey"
									className="text-3xl font-sans"
									variants={menuItemVariants}
								>
									{t("journey")}
								</motion.a>
								<motion.a
									href="/impressum"
									className="text-3xl font-sans"
									variants={menuItemVariants}
								>
									{t("imprint")}
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/andreas-wyrobek/"
									target="_blank"
									rel="noreferrer"
									className="lg:hidden flex gap-4"
									variants={menuItemVariants}
								>
									<ButtonContainer text={t("contact")} severity="secondary" />
								</motion.a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<div className="w-min rounded-full hidden lg:flex">
					<div className="relative p-px rounded-full overflow-hidden h-full">
						<div className="absolute -inset-0.5 bg-white z-0 nav-gradiant" />
						<div className="relative flex items-center gap-12 pl-8 pr-6 py-4 rounded-full bg-black z-10 w-full h-full">
							<AnimatedLink text={t("home")} href="#home" />
							<AnimatedLink text={t("skills")} href="#skills" />
							<AnimatedLink text={t("journey")} href="#journey" />
							<AnimatedLink text={t("imprint")} href="/impressum" />
							<LanguageSwitcher />
						</div>
					</div>
				</div>
				<a
					href="https://www.linkedin.com/in/andreas-wyrobek/"
					target="_blank"
					rel="noreferrer"
					className="hidden lg:flex gap-4"
				>
					<ButtonContainer text={t("contact")} severity="secondary" />
				</a>
			</div>
		</nav>
	);
}
