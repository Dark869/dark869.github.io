"use client";

import Image from "next/image";
import SocialMediaButton from "@/components/SocialMediaButtom";
import { SocialMediaItem } from "@/types/SocialMedia";
import { useLanguage } from "@/contexts/LanguageContext";

const PresentationStyles = {
   DivPresentation: "pt-32 md:pt-32 lg:pt-40 w-full font-sans",
   containerPresentation:
      "flex lg:w-3/6 flex-col lg:flex-row items-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8 gap-6 md:gap-8 lg:gap-0",
   presentationText: "flex flex-col space-y-3 md:space-y-4 md:flex-1 w-full",
   h1: "text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left",
   h2: "text-balance text-center lg:text-left",
   presentationImage:
      "flex justify-center lg:justify-end md:flex-1 lg:order-last order-first w-full lg:w-auto",
   imageOwner: "rounded-4xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[300px] lg:h-[300px]",
};

const SocialMedia: SocialMediaItem[] = [
   {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/victorlopez95asd",
      icon: "/svgs/linkedin.svg",
      alt: "LinkedIn Icon",
   },
   {
      name: "GitHub",
      url: "https://github.com/Dark869/",
      icon: "/svgs/github_dark.svg",
      alt: "GitHub Icon",
   },
   {
      name: "Email",
      url: "mailto:ing.victor97@gmail.com",
      icon: "/svgs/mail.svg",
      alt: "Email Icon",
   },
];

const Presentation = () => {
   const { t } = useLanguage();

   return (
      <>
         <div className={PresentationStyles.DivPresentation}>
            <div className={PresentationStyles.containerPresentation}>
               <div className={PresentationStyles.presentationText}>
                  <h1 className={PresentationStyles.h1}>Victor López</h1>
                  <h2 className={`${PresentationStyles.h2} text-lg sm:text-xl lg:text-xl italic`}>
                     {t("presentation.position")}
                  </h2>
                  <h2
                     className={`${PresentationStyles.h2} text-sm sm:text-base md:text-md lg:text-md text-neutral-300`}
                  >
                     {t("presentation.description")}
                  </h2>
                  <div className="w-full flex flex-row justify-center lg:justify-start space-x-3 sm:space-x-4 mt-4">
                     {SocialMedia.map((socialMedia) => (
                        <SocialMediaButton
                           key={socialMedia.name}
                           name={socialMedia.name}
                           url={socialMedia.url}
                           icon={socialMedia.icon}
                           alt={socialMedia.alt}
                        />
                     ))}
                  </div>
               </div>
               <div className={PresentationStyles.presentationImage}>
                  <Image
                     src="/images/photo.jpg"
                     alt="Foto de Victor López"
                     width={300}
                     height={300}
                     loading="eager"
                     className={PresentationStyles.imageOwner}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Presentation;
