"use client";

import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageContext";

const navStyles = {
   nav: "py-5 w-full z-10 fixed bg-neutral-900 p-[8%] font-sans",
   ul: "flex flex-row px-5 justify-end gap-x-10 text-neutral-400",
   li: "duration-300 hover:bg-zinc-700 hover:text-neutral-200 px-3 py-1 hover:border-zinc-700 rounded-xl",
   select:
      "bg-zinc-800 text-neutral-400 px-3 py-1 rounded-xl border border-zinc-700 hover:bg-zinc-700 hover:text-neutral-200 duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-600",
};

const routes = {
   Home: "/",
   About: "about/",
   Projects: "projects/",
   Skills: "skills/",
   Certifications: "certifications/",
};

const NavBar = () => {
   const { language, toggleLanguage } = useLanguage();
   const { t } = useLanguage();

   return (
      <>
         <nav className={navStyles.nav}>
            <ul className={navStyles.ul}>
               <Link href={routes.Home}>
                  <li className={navStyles.li}>{t("nav.home")}</li>
               </Link>
               <Link href={routes.About}>
                  <li className={navStyles.li}>{t("nav.aboutMe")}</li>
               </Link>
               <Link href={routes.Projects}>
                  <li className={navStyles.li}>{t("nav.projects")}</li>
               </Link>
               <Link href={routes.Skills}>
                  <li className={navStyles.li}>{t("nav.skills")}</li>
               </Link>
               <Link href={routes.Certifications}>
                  <li className={navStyles.li}>{t("nav.certifications")}</li>
               </Link>
               <li>
                  <select
                     className={navStyles.select}
                     value={language}
                     onChange={(e) => toggleLanguage(e.target.value)}
                  >
                     <option value="es_MX">Español</option>
                     <option value="en_US">English</option>
                  </select>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default NavBar;
