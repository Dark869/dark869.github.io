"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import IconSkills from "@/components/IconSkills";

const Skills = () => {
   const SKILLS = [
      {
         name: "React",
         icon: "/svgs/react.svg",
         bg: "bg-sky-300/20",
         border: "hover:border-sky-300",
      },
      {
         name: "TypeScript",
         icon: "/svgs/typescript.svg",
         bg: "bg-sky-600/20",
         border: "hover:border-sky-600",
      },
      {
         name: "Node.js",
         icon: "/svgs/nodejs.svg",
         bg: "bg-green-500/20",
         border: "hover:border-green-500",
      },
      {
         name: "Java",
         icon: "/svgs/java.svg",
         bg: "bg-red-500/20",
         border: "hover:border-red-500",
      },
   ];
   const { t } = useLanguage();

   return (
      <>
         <h1 className="text-2xl font-bold w-full max-w-4xl pt-10 mb-8">
            {t("skills.title")}
         </h1>
         <ul className="w-full max-w-4xl flex flex-wrap gap-4">
            {SKILLS.map((skill, index) => (
               <li key={index}>
                  <IconSkills
                     imageSrc={skill.icon}
                     altText={skill.name}
                     bg={skill.bg}
                     border={skill.border}
                  />
               </li>
            ))}
         </ul>
      </>
   );
};

export default Skills;
