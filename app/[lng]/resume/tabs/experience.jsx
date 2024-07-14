"use client";

// experience.jsx data
import {TabsContent} from "@radix-ui/react-tabs";
import {ScrollArea} from "@radix-ui/react-scroll-area";

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My experience",
	description:
		"Here is a list of all the relevant work experiences I've had so far:",
	items: [
		{
			company: "Freelancer: Custom web pages",
			position: "Full-stack Developer",
			duration: "2024 - Present",
		},
		{
			company: "IRP/BIMKeeper: Web-based building management system",
			position: "Full-stack Developer",
			duration: "2023 - Present",
		},
	],
};

const Experience = () => {
	return (
		<>
			<TabsContent value="experience" className="w-full">
				<div className="flex flex-col gap-[30px] text-center xl:text-left">
					<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{experience.title}</h3>
					<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
						{experience.description}
					</p>
					<ScrollArea className="h-[400px]">
						<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
							{experience.items.map((item, index) => {
								return (
									<li
										key={index}
										className="dark:bg-[#232329] bg-[#CCCCCC] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
									>
										<span className="text-accent">{item.duration}</span>
										<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-text-light/80 dark:text-text-dark">
											{item.position}
										</h3>
										<div className="flex items-center gap-3">
											{/* dot */}
											<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
											<p className="text-text-light/80 dark:text-text-dark/60">{item.company}</p>
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

export default Experience;
