"use client";

import Image from "next/image";
import SocialMediaButton from "@/components/SocialMediaButtom";
import { SocialMediaItem } from "@/types/SocialMedia";
import { useLanguage } from "@/contexts/LanguageContext";

const PresentationStyles = {
   DivPresentation: "pt-40 w-full font-sans",
   containerPresentation:
      "flex lg:w-3/6 flex-col lg:flex-row md:items-center max-w-6xl mx-auto px-8",
   presentationText: "flex flex-col space-y-4 md:flex-1",
   h1: "text-6xl font-bold text-left",
   h2: "text-balance text-left",
   presentationImage:
      "flex justify-center md:justify-end md:flex-1 lg:order-last order-first",
   imageOwner: "rounded-4xl w-90 h-90",
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
                  <h2 className={`${PresentationStyles.h2} text-xl  italic`}>
                     {t("presentation.position")}
                  </h2>
                  <h2
                     className={`${PresentationStyles.h2} text-md text-neutral-300`}
                  >
                     Perfecciono mis capacidades para convertir lo que imaginas
                     en la mejor solución posible.
                  </h2>
                  <div className="w-30 h-20 flex flext-row space-x-4 mt-4">
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
                     className={PresentationStyles.imageOwner}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Presentation;
