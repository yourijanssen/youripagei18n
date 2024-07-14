import Link from "next/link";
import {Button} from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import DarkModeToggle from "@/app/[lng]/components/DarkModeToggle";
import {fallbackLng, languages} from "@/app/i18n/settings";
import {useTranslation} from "@/app/i18n";
import LanguageSwitcher from "@/app/[lng]/components/LanguageSwitcher";

const Header = ({ lng, path }) => {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	const { t } = useTranslation(lng, 'home');

	return (
		<header className="py-8 xl:py-12 text-white">
			<div className="container mx-auto flex justify-between items-center">
				{/* logo */}
				<Link href="/">
					<h1 className="text-4xl font-semibold text-text-light dark:text-text-dark">
						Youri<span className="text-accent">.</span>
					</h1>
				</Link>
				<DarkModeToggle />
				<LanguageSwitcher lng={lng} path={path} />
				{/* desktop nav & hire me button */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<Link href="/contact">
						<Button>{('hireMe')}</Button>
					</Link>
				</div>
				{/* mobile nav */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;