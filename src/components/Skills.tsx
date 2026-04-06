"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import IconSkills from "@/components/IconSkills";
import SKILLS from "@/data/skills";

const Skills = () => {
   const { t } = useLanguage();

   return (
      <>
         <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold w-full max-w-4xl pt-10 mb-6 sm:mb-7 lg:mb-8 px-4 sm:px-4 lg:px-0 text-center lg:text-left">
            {t("skills.title")}
         </h1>
         <div className="w-full px-6 sm:px-6 lg:px-0 pb-8">
            <ul className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-4">
               {SKILLS.map((skill, index) => (
                  <li key={index}>
                     <IconSkills
                        imageSrc={skill.icon}
                        altText={skill.name}
                        bg={skill.bg}
                        border={skill.border}
                        textColor={skill.textColor}
                     />
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default Skills;
