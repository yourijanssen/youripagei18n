"use client";

// about data
import TypingAnimation from "@/app/[lng]/components/TypingAnimation";
import {TabsContent} from "@radix-ui/react-tabs";

const about = {
	title: "About me",
	description:
		"Hi! My name is Youri Janssen, and I am a full-stack developer currently finishing up" +
		" my education at the Amsterdam University of" +
		" Applied Sciences. Previously, I studied Arts & Economics at HKU, where I completed enrollment but" +
		" ultimately decided my future lay elsewhere, specifically in programming. My interest in software" +
		" development has always been there but I failed to recognise this at an early age. During my final" +
		" graduation project at the HKU, I" +
		" created" +
		" a prototype" +
		" website/webshop for a struggling soccer club alongside a comprehensive business plan. This project" +
		" introduced me to the world of web development and I decided this was a field of work I'd be interested to" +
		" work in for the long-term. This led me" +
		" to enroll at HVA. Today, I" +
		" consider myself a proficient programmer with a solid grasp of key concepts. I am always actively seeking" +
		" opportunities in this field!",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Youri Janssen",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+31) 6 47 22 39 84",
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Dutch",
		},
		{
			fieldName: "Status",
			fieldValue: "Student / Freelancing",
		},
		{
			fieldName: "Email",
			fieldValue: "yourijanssen123@gmail.com",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Dutch, German",
		},
	],
};

const About = () => {
	return (
		<>
			<TabsContent
				value="about"
				className="w-full text-center xl:text-left"
			>
				<div className="flex flex-col gap-[30px]">
					<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{about.title}</h3>
					{/* Typist component for animated description */}
					<TypingAnimation text={about.description}/>
					<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
						{about.info.map((item, index) => {
							return (
								<li
									key={index}
									className="flex items-center justify-center xl:justify-start gap-4"
								>
												<span
													className="text-text-light/60 dark:text-text-dark/60">{item.fieldName}:</span>
									<span
										className="text-xl text-text-light dark:text-text-dark">{item.fieldValue}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</TabsContent>
		</>
	);
}

export default About;
