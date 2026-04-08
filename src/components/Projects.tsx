"use client";

import Carrusel from "@/components/Carrusel";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
   const { t } = useLanguage();
   return (
      <div className="h-full w-full flex items-center justify-center flex-col px-4 sm:px-6 md:px-8">
         <h1
            className="text-xl sm:text-2xl lg:text-2xl font-bold w-full max-w-4xl pt-10 mb-6 sm:mb-8 lg:mb-8 text-center lg:text-left"
            id="Projects"
         >
            {t("projects.title")}
         </h1>
         <Carrusel />
      </div>
   );
};

export default Projects;
