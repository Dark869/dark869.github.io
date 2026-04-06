"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const AboutMe = () => {
   const { t } = useLanguage();
   return (
      <div className="h-full w-full lg:w-6xl flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
         <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold w-full max-w-4xl pt-10 mb-6 sm:mb-7 lg:mb-8 text-center lg:text-left">
            {t("aboutMe.title")}
         </h1>
         <div className="text-neutral-300 w-11/12 sm:w-10/12 lg:w-3/4 leading-6 sm:leading-6.5 lg:leading-7 flex flex-col gap-3 sm:gap-3.5 lg:gap-4 justify-center mx-auto pb-10">
            <p className="text-justify text-sm sm:text-base lg:text-md">{t("aboutMe.descripption1")}</p>
            <p className="text-justify text-sm sm:text-base lg:text-md">{t("aboutMe.descripption2")}</p>
            <p className="text-justify text-sm sm:text-base lg:text-md">{t("aboutMe.descripption3")}</p>
         </div>
      </div>
   );
};

export default AboutMe;
