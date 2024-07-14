"use client";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaAngular,
	FaJava,
	FaNpm,
	FaRegFilePowerpoint,
	FaRegFileWord,
	FaGitSquare,
	FaGithub,
	FaGitlab, FaFileExcel, FaBlender,
} from "react-icons/fa";

import {
	SiTailwindcss,
	SiNextdotjs,
	SiSpringboot,
	SiSpringsecurity,
	SiSpring,
	SiTypescript,
	SiApachemaven,
	SiMariadb,
	SiGimp,
	SiAdobepremierepro,
	SiAdobephotoshop,
	SiExpress,
	SiEslint,
	SiMocha,
	SiDbeaver,
	SiMacos,
	SiSequelize,
	SiHibernate,
	SiJest,
	SiChai,
	SiReactivex,
	SiPrettier,
	SiAutodeskrevit,
	SiApachetomcat,
	SiStylus, SiSvg, SiIos
} from "react-icons/si";
import {DiIntellij, DiLinux, DiMongodb, DiScrum} from "react-icons/di";
import {BiTerminal} from "react-icons/bi";
import {BsAndroid, BsWindows} from "react-icons/bs";
import {GiJasmine} from "react-icons/gi";
import {TbBrandThreejs, TbFileTypeXml} from "react-icons/tb";
import {GrMysql} from "react-icons/gr";
import {PiMicrosoftTeamsLogo} from "react-icons/pi";
import {VscVscode} from "react-icons/vsc";
import BarExample from "@/app/[lng]/resume/bar";
import {TooltipContent, TooltipProvider, TooltipTrigger} from "@radix-ui/react-tooltip";
import {Tooltip} from "chart.js";
import {TabsContent} from "@radix-ui/react-tabs";


// skills data
const skills = {
	title: "My skills",
	description1:
		"I've compared the most crucial developer skills I've worked with before alongside my honest opinion of my proficiency in each:",
	description2:
		"Here is a list of all skills I have acquired so far, categorized by each year:",
	year: "2022",
	skillList: [
		{
			icon: <FaHtml5/>,
			name: "html 5",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/HTML5",
		},
		{
			icon: <DiMongodb/>,
			name: "MongoDB",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/MongoDB",
		},
		{
			icon: <SiPrettier/>,
			name: "Prettier",
			year: 2023,
			link: "https://prettier.io/docs/en/",
		},
		{
			icon: <SiJest/>,
			name: "Jest",
			year: 2023,
			link: "https://jestjs.io/",
		},
		{
			icon: <FaCss3/>,
			name: "css 3",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/CSS",
		},
		{
			icon: <FaJs/>,
			name: "javascript",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/JavaScript",
		},
		{
			icon: <SiTypescript/>,
			name: "Typescript",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/TypeScript",
		},
		{
			icon: <SiMariadb/>,
			name: "MariaDB",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/MariaDB",
		},
		{
			icon: <BiTerminal/>,
			name: "Terminal",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Computer_terminal",
		},
		{
			icon: <BsAndroid/>,
			name: "Android OS",
			year: 2021,
			link: "https://en.wikipedia.org/wiki/Android_(operating_system)",
		},

		{
			icon: <DiLinux/>,
			name: "Linux OS",
			year: 2021,
			link: "https://en.wikipedia.org/wiki/Linux",
		},
		{
			icon: <SiIos/>,
			name: " IOS",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/IOS",
		},
		{
			icon: <SiStylus/>,
			name: "Stylus",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Stylus_(style_sheet_language)",
		},
		{
			icon: <SiSvg/>,
			name: "SVG",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/SVG",
		},
		{
			icon: <SiAutodeskrevit/>,
			name: "Revit",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Autodesk_Revit",
		},
		{
			icon: <SiApachetomcat/>,
			name: "Tomcat",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Apache_Tomcat",
		},
		{
			icon: <SiGimp/>,
			name: "Gimp",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/GIMP",
		},
		{
			icon: <SiAdobepremierepro/>,
			name: "Premier Pro",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Adobe_Premiere_Pro",
		},
		{
			icon: <SiAdobephotoshop/>,
			name: "Photoshop",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Adobe_Photoshop",
		},
		{
			icon: <FaBlender/>,
			name: "Blender",
			year: 2020,
			link: "https://en.wikipedia.org/wiki/Blender_(software)",
		},
		{
			icon: <SiDbeaver/>,
			name: "DBeaver",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/DBeaver",
		},
		{
			icon: <GiJasmine/>,
			name: "Jasmine",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Jasmine_(software)",
		},
		{
			icon: <SiEslint/>,
			name: "ESlint",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/ESLint",
		},
		{
			icon: <SiMocha/>,
			name: "Mocha",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)",
		},
		{
			icon: <TbBrandThreejs/>,
			name: "Three.js",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Three.js",
		},
		{
			icon: <SiExpress/>,
			name: "Express.Js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Express.js",
		},
		{
			icon: <GrMysql/>,
			name: "MySql",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/MySQL",
		},
		{
			icon: <FaReact/>,
			name: "react.js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
		},
		{
			icon: <SiNextdotjs/>,
			name: "next.js",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Next.js",
		},
		{
			icon: <SiTailwindcss/>,
			name: "tailwind.css",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
		},
		{
			icon: <FaNodeJs/>,
			name: "node.js",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Node.js",
		},
		{
			icon: <FaFigma/>,
			name: "figma",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Figma",
		},
		{
			icon: <FaAngular/>,
			name: "angular",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/AngularJS",
		},
		{
			icon: <FaJava/>,
			name: "java",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Java_(programming_language)",
		},
		{
			icon: <BsWindows/>,
			name: "Windows OS",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/Microsoft_Windows",
		},
		{
			icon: <DiScrum/>,
			name: "Scrum",
			year: 2017,
			link: "https://en.wikipedia.org/wiki/Scrum_(software_development)",
		},
		{
			icon: <SiSequelize/>,
			name: "Sequelize",
			year: 2023,
			link: "https://sequelize.org/",
		},
		{
			icon: <SiHibernate/>,
			name: "Hibernate",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Hibernate_(framework)",
		},
		{
			icon: <TbFileTypeXml/>,
			name: "XML",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/XML",
		},
		{
			icon: <SiChai/>,
			name: "Chai",
			year: 2023,
			link: "https://www.chaijs.com/",
		},
		{
			icon: <PiMicrosoftTeamsLogo/>,
			name: "Teams",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Microsoft_Teams",
		},
		{
			icon: <SiReactivex/>,
			name: "RxJS",
			year: 2023,
			link: "https://rxjs.dev/",
		},

		{
			icon: <SiMacos/>,
			name: "Mac OS",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/MacOS",
		},
		{
			icon: <SiApachemaven/>,
			name: "Apache Maven",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Apache_Maven",
		},
		{
			icon: <SiSpring/>,
			name: "Spring",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Spring_Framework",
		},
		{
			icon: <SiSpringboot/>,
			name: "Spring Boot",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/Spring_Boot",
		},
		{
			icon: <SiSpringsecurity/>,
			name: "Spring Security",
			year: 2024,
			link: "https://en.wikipedia.org/wiki/Spring_Security",
		},
		{
			icon: <VscVscode/>,
			name: "VSCode",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Visual_Studio_Code",
		},
		{
			icon: <DiIntellij/>,
			name: "Intellij",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/IntelliJ_IDEA",
		},
		{
			icon: <FaNpm/>,
			name: "NPM",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Npm",
		},
		{
			icon: <FaGitSquare/>,
			name: "Git",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/Git",
		},
		{
			icon: <FaGithub/>,
			name: "GitHub",
			year: 2023,
			link: "https://en.wikipedia.org/wiki/GitHub",
		},
		{
			icon: <FaGitlab/>,
			name: "GitLab",
			year: 2022,
			link: "https://en.wikipedia.org/wiki/GitLab",
		},
		{
			icon: <FaRegFilePowerpoint/>,
			name: "Powerpoint",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/Microsoft_PowerPoint",
		},
		{
			icon: <FaRegFileWord/>,
			name: "Word",
			year: 2015,
			link: "https://en.wikipedia.org/wiki/Microsoft_Word",
		},
		{
			icon: <FaFileExcel/>,
			name: "Excel",
			year: 2016,
			link: "https://en.wikipedia.org/wiki/Microsoft_Excel",
		},
	],
};

const groupSkillsByYear = (skillList) => {
	return skillList.reduce((acc, skill) => {
		const {year} = skill;
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year].push(skill);
		return acc;
	}, {});
};

const skillsByYear = groupSkillsByYear(skills.skillList);

const handleSkillClick = (link) => {
	if (link) {
		window.open(link, '_blank');
	}
};

const Skills = () => {
	return (
		<>
			<TabsContent value="skills" className="w-full h-full">
				<div className="flex flex-col gap-[30px]">
					<div className="flex flex-col gap-[30px] text-center xl:text-left">
						<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{skills.title}</h3>
						<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
							{skills.description1}
						</p>
						<BarExample/>
					</div>

					<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
						{skills.description2}
					</p>
					{/*{Object.keys(skillsByYear).sort((a, b) => b - a).map((year) => (*/}
					{/*	<div key={year} className="mb-8">*/}
					{/*		<h3 className="text-2xl mb-4 text-text-light dark:text-text-dark">{year}</h3>*/}
					{/*		<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">*/}
					{/*			{skillsByYear[year].map((skill, index) => (*/}
					{/*				<li key={index} onClick={() => handleSkillClick(skill.link)}>*/}
					{/*					<TooltipProvider delayDuration={100}>*/}
					{/*						<Tooltip>*/}
					{/*							<TooltipTrigger*/}
					{/*								className="w-full h-[150px] rounded-xl flex flex-col justify-center items-center group dark:bg-[#232329] bg-[#CCCCCC] text-text-light dark:text-text-dark"*/}
					{/*							>*/}
					{/*								<div*/}
					{/*									className="text-6xl group-hover:text-accent transition-all duration-300">*/}
					{/*									{skill.icon}*/}
					{/*								</div>*/}
					{/*								<p className="mt-2 text-center capitalize">{skill.name}</p> /!* Added skill name *!/*/}
					{/*							</TooltipTrigger>*/}
					{/*							<TooltipContent>*/}
					{/*								<p className="capitalize">{skill.name}</p>*/}
					{/*							</TooltipContent>*/}
					{/*						</Tooltip>*/}
					{/*					</TooltipProvider>*/}
					{/*				</li>*/}
					{/*			))}*/}
					{/*		</ul>*/}
					{/*	</div>*/}
					{/*))}*/}
				</div>
			</TabsContent>
		</>
	);
}

export default Skills;
