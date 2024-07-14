"use client";


// courses data
import {ScrollArea} from "@radix-ui/react-scroll-area";
import Image from "next/image";
import {TabsContent} from "@radix-ui/react-tabs";

const courses = {
	icon: "/assets/resume/cap.svg",
	title: "Favourite Courses",
	description:
		"Here is a comprehensive list of courses that have significantly contributed to my learning over the years:",
	items: [
		{
			icon: "/assets/resume/courses/nextjs.png",
			name: "Fluent React",
			year: "2024",
			link: "https://www.oreilly.com/library/view/nextjs-from-scratch/9781836207979/"
		},
		{
			icon: "/assets/resume/courses/fluent.png",
			name: "Fluent React",
			year: "2024",
			link: "https://www.oreilly.com/library/view/fluent-react/9781098138707/"
		},
		{
			icon: "/assets/resume/courses/18react.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/security.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/jakarta.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/reactmaxi.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/architecture.png",
			name: "Fluent React",
			year: "2024",
			link: "https://learning.oreilly.com/library/view/software-architecture-patterns/9781491971437/"
		},
		{
			icon: "/assets/resume/courses/devops.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/networking.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/uml.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/angular.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/nodejs.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/modernjavascript.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/mysql.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/javascript.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
		{
			icon: "/assets/resume/courses/htmlcss.png",
			name: "Fluent React",
			year: "2024",
			link: ""
		},
	],
};

const Favourites = () => {
	return (
		<TabsContent value="courses" className="w-full">
			<div className="flex flex-col gap-[30px] text-center xl:text-left">
				<h3 className="text-4xl font-bold text-text-light dark:text-text-dark">{courses.title}</h3>
				<p className="max-w-[600px] text-text-light dark:text-text-dark mx-auto xl:mx-0">
					{courses.description}
				</p>
				<ScrollArea className="h-[400px]">
					<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
						{courses.items.map((item, index) => {
							return (
								<li
									key={index}
									className="dark:bg-[#232329] bg-[#CCCCCC] h-[300px] py-6 px-10 rounded-xl flex flex-col lg:items-start gap-1"
								>
									<div className="flex flex-col xl:flex-row items-center gap-8">
										<Image src={item.icon} alt="" width="196" height="257"
											   className="items-center"/>
									</div>
								</li>
							);
						})}
					</ul>
				</ScrollArea>
			</div>
		</TabsContent>
	);

}

export default Favourites;
