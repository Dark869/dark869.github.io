"use client";

import Carrusel from "@/components/Carrusel";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
   const { t } = useLanguage();
   return (
      <div className="h-full w-6xl flex items-center justify-center flex-col px-8">
         <h1
            className="text-2xl font-bold w-full max-w-4xl pt-10 mb-8"
            id="Projects"
         >
            {t("projects.title")}
         </h1>
         <Carrusel />
      </div>
   );
};

export default Projects;
