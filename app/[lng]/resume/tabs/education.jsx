"use client";

// education data
import {ScrollArea} from "@radix-ui/react-scroll-area";
import {DegreeDownload} from "@/app/[lng]/components/Downloads";
import {TabsContent} from "@radix-ui/react-tabs";

const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description:
		"Here is a list of all my official eduction degree's I've obtained so far:",
	items: [
		{
			institution: "Amsterdam University of Applied Sciences",
			degree: "Software Development - Associate Degree",
			duration: "2022 - 2024",
		},
		{
			institution: "Utrecht School of the Arts",
			degree: "Art & Economics - Bachelor of Arts",
			duration: "2016 - 2021",
			file: "/assets/HBO Bachelor Kunst en Economie (Art and Economics).pdf",
		},
		{
			institution: "Utrecht School of the Arts",
			degree: "Art & Economics - Propaedeutic year",
			duration: "2017",
			file: "/assets/HBO Bachelor Kunst en Economie Propedeuse bachelor (Art and Economics).pdf",
		},
		{
			institution: "College voor Toetsen en Examens",
			degree: "Voorbereidend wetenschappelijk onderwijs (VWO)",
			duration: "2015",
			file: "/assets/Voorbereidend wetenschappelijk onderwijs (staatsexamen).pdf",
		},
		{
			institution: "Scholengemeenschap Oost/Zuidoost",
			degree: "Hoger algemeen voortgezet onderwijs (HAVO)",
			duration: "2009 - 2014",
			file: "/assets/Hoger algemeen voortgezet onderwijs.pdf",
		},

	],
}

const Education = () => {
	return (
		<>
			<TabsContent value="education" className="w-full">
				<div className="flex flex-col gap-[30px] text-center xl:text-left">
					<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{education.title}</h3>
					<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
						{education.description}
					</p>
					<ScrollArea className="h-[400px]">
						<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
							{education.items.map((item, index) => {
								return (
									<li
										key={index}
										className="dark:bg-[#232329] bg-[#CCCCCC] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-start items-start lg:items-start gap-1"
									>
										<span className="text-accent">{item.duration}</span>
										<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-text-light/80 dark:text-text-dark">
											{item.degree}
										</h3>
										<div className="flex items-center gap-3">
											{/* dot */}
											<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
											<p className="text-text-light/80 dark:text-text-dark/60">{item.institution}</p>
										</div>
										<div className="flex flex-col xl:flex-row items-center gap-8">
											<DegreeDownload url={item.file}/>
										</div>
									</li>
								);
							})}
						</ul>
					</ScrollArea>
				</div>
			</TabsContent>
		</>
	);
}

export default Education;
