import './globals.css'

import {dir} from 'i18next'
import {languages, fallbackLng} from '../i18n/settings'
import {useTranslation} from '../i18n'

import {JetBrains_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import Header from "@/app/[lng]/components/Header";
import StairTransition from "@/app/[lng]/components/StairTransition";
import PageTransition from "@/app/[lng]/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

const metadata = {
	title: "Youri Janssen",
	description: "Youri Janssen Portfolio Full Stack Developer React Youri YWM Janssen Amsterdam Utrecht Custom Website Building .online .nl",
	icon: "favicon.ico",
};

// Function to generate static params for static site generation
export async function generateStaticParams() {
	return languages.map((lng) => ({lng}));
}

// Function to generate dynamic metadata based on language
export async function generateMetadata({params: {lng}}) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng;
	const {t} = await useTranslation(lng);
	return {
		title: t('title'),
		description: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
	};
}

export default function RootLayout({
									   children,
									   params: { lng }
								   }) {
	const metadata = generateMetadata({ params: { lng } }); // Call the function to get dynamic metadata

	return (
		<html lang={lng} dir={dir(lng)}>
		<head>
			<meta charSet="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta name="description" content={metadata.description}/>
			<title>{metadata.title}</title>

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={metadata.title}/>
			<meta property="og:description" content={metadata.description}/>
			<meta property="og:type" content="website"/>
			<meta property="og:url" content="https://yourijanssen.online"/>
			<meta property="og:image" content="assets/profilePic.png"/>

			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content="assets/profilePic.png"/>
			<meta name="twitter:title" content={metadata.title}/>
			<meta name="twitter:description" content={metadata.description}/>
			<meta name="twitter:image" content=""/>

			<link rel="canonical" href="https://yourijanssen.online"/>
			<link rel="icon" href="/app/favicon.ico?v=2"/>
		</head>
		<body className={jetbrainsMono.variable}>
		<Analytics/>
		<SpeedInsights/>
		<Header/>
		<StairTransition/>
		<PageTransition>{children}</PageTransition>
		</body>
		</html>
	);
}