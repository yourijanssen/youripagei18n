"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+31) 6 47 22 39 84",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "yourijanssen123@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Amsterdam",
  },
];

import { motion } from "framer-motion";

const Contact = () => {

  return (
      <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            {/*<div className="xl:w-[54%] order-2 xl:order-none">*/}
            {/*  <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">*/}
            {/*    <h3 className="text-4xl text-accent">Let's work together</h3>*/}
            {/*    <p className="text-white/60">*/}
            {/*      If you have any questions or want to work with me, fill free to contact me and I'll get back to you as soon as possible.*/}
            {/*    </p>*/}
            {/*    /!* input *!/*/}
            {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
            {/*      <Input type="firstname" placeholder="Firstname" />*/}
            {/*      <Input type="lastname" placeholder="Lastname" />*/}
            {/*      <Input type="email" placeholder="Email address" />*/}
            {/*      <Input type="phone" placeholder="Phone number" />*/}
            {/*    </div>*/}
            {/*    /!* select *!/*/}
            {/*    <Select>*/}
            {/*      <SelectTrigger className="w-full">*/}
            {/*        <SelectValue placeholder="Select a service" />*/}
            {/*      </SelectTrigger>*/}
            {/*      <SelectContent>*/}
            {/*        <SelectGroup>*/}
            {/*          <SelectLabel>Select a service</SelectLabel>*/}
            {/*          <SelectItem value="est">Custom website development</SelectItem>*/}
            {/*          <SelectItem value="cst">Custom website + User Interface Design</SelectItem>*/}
            {/*          <SelectItem value="mst">Long-term project</SelectItem>*/}
            {/*        </SelectGroup>*/}
            {/*      </SelectContent>*/}
            {/*    </Select>*/}
            {/*    /!* textarea *!/*/}
            {/*    <Textarea*/}
            {/*        className="h-[200px]"*/}
            {/*        placeholder="Type your message here."*/}
            {/*    />*/}
            {/*    /!* btn *!/*/}
            {/*    <Button size="md" className="max-w-40">*/}
            {/*      Send message*/}
            {/*    </Button>*/}
            {/*  </form>*/}
            {/*</div>*/}
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                      <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] dark:bg-[#232329] bg-[#CCCCCC] text-accent rounded-md flex items-center justify-center">
                          <div className="text-[28px] dark:-[#232329] ">{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-text-light dark:text-text-dark">{item.title}</p>
                          <h3 className="text-xl text-text-light dark:text-text-dark">{item.description}</h3>
                        </div>
                      </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
  );
};

export default Contact;
