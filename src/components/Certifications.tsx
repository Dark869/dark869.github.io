"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import CertificationCard from "./CertificationCard";
import { certifications } from "@/data/certifications";

const Certifications = () => {
   const { t } = useLanguage();

   const cardTranslations = {
      issued: t("certifications.issued") ?? "Expedido",
      expires: t("certifications.expires") ?? "Vence",
      noExpiry: t("certifications.noExpiry") ?? "Sin vencimiento",
      id: t("certifications.credentialId") ?? "ID:",
      verify: t("certifications.verify") ?? "Verificar credencial",
   };

   return (
      <div className="h-full w-full lg:w-6xl flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
         <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold w-full max-w-4xl pt-10 mb-6 sm:mb-7 lg:mb-8 text-center lg:text-left">
            {t("certifications.title") ?? "Certifications"}
         </h1>

         <div className="w-11/12 sm:w-10/12 lg:w-3/4 mx-auto pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
               {certifications.map((cert) => (
                  <CertificationCard
                     key={cert.id}
                     cert={cert}
                     translations={cardTranslations}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Certifications;
