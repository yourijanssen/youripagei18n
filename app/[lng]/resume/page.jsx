"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import {ScrollArea} from "@radix-ui/react-scroll-area";
import {DegreeDownload} from "@/app/[lng]/components/Downloads";
import BarExample from "@/app/[lng]/resume/bar";
import {Tooltip} from "chart.js";
import {TooltipContent, TooltipProvider, TooltipTrigger} from "@radix-ui/react-tooltip";
import TypingAnimation from "@/app/[lng]/components/TypingAnimation";
import Experience from "@/app/[lng]/resume/tabs/experience";
import Education from "@/app/[lng]/resume/tabs/education";
import Favourites from "@/app/[lng]/resume/tabs/favourites";
import Skills from "@/app/[lng]/resume/tabs/skills";
import About from "@/app/[lng]/resume/tabs/about";

const Resume = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="courses">Favourite courses</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience.jsx */}
						<Experience/>
						{/* education */}
						<Education/>
						{/* Favourite Courses */}
						<Favourites/>
						{/* skills */}
						<Skills/>
						{/* about */}
						<About/>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
