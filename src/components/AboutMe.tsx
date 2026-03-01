"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const AboutMe = () => {
   const { t } = useLanguage();
   return (
      <div className="h-full w-6xl flex items-center justify-center flex-col px-8">
         <h1 className="text-2xl font-bold w-full max-w-4xl pt-10 mb-8">
            {t("aboutMe.title")}
         </h1>
         <div className="text-neutral-300 w-3/4 leading-7 flex flex-col gap-4 justify-center mx-auto pb-10">
            <p className="text-justify text-md">{t("aboutMe.descripption1")}</p>
            <p className="text-justify text-md">{t("aboutMe.descripption2")}</p>
            <p className="text-justify text-md">{t("aboutMe.descripption3")}</p>
         </div>
      </div>
   );
};

export default AboutMe;
