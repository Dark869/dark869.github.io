"use client";

import { createContext, useContext, useState, useEffect } from "react";
import es_MX from "@/i18n/es_MX.json";
import en_US from "@/i18n/en_US.json";
import LanguageContextType from "@/types/LanguageContextType";
import LanguageProviderProps from "@/types/LanguageProviderProps";

const languages: any = {
   es_MX,
   en_US,
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const getLanguageFromCookie = (): string => {
   if (typeof document === "undefined") return "es_MX";

   const cookies = document.cookie.split("; ");
   const languageCookie = cookies.find((cookie) =>
      cookie.startsWith("language=")
   );

   if (languageCookie) {
      return languageCookie.split("=")[1];
   }

   return "es_MX";
};

export const LanguageProvider = ({
   children,
   initialLanguage = "es_MX",
}: LanguageProviderProps) => {
   const [language, setLanguage] = useState(() => {
      return getLanguageFromCookie();
   });
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(false);
   }, []);

   const toggleLanguage = (lang: string) => {
      setLanguage(lang);
      document.cookie = `language=${lang}; path=/; max-age=31536000`;
   };

   const t: any = (key: string) => {
      const keys = key.split(".");
      let translation = languages[language];

      for (const k of keys) {
         translation = translation?.[k];
      }
      return translation || key;
   };

   return (
      <LanguageContext.Provider value={{ t, language, toggleLanguage }}>
         {isLoading ? (
            <div className="flex items-center justify-center min-h-screen bg-neutral-900">
               <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neutral-400"></div>
            </div>
         ) : (
            children
         )}
      </LanguageContext.Provider>
   );
};

export const useLanguage = () => {
   const context = useContext(LanguageContext);
   if (!context) {
      throw new Error("useLanguage must be used within a LanguageProvider");
   }
   return context;
};
