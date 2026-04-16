"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useLanguage } from "@/contexts/LanguageContext";

const sections = {
   home: "home",
   projects: "projects",
   about: "about",
   skills: "skills",
   certifications: "certifications",
};

const NavBar = () => {
   const { language, toggleLanguage, t } = useLanguage();
   const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname();
   const router = useRouter();

   const navLinks = [
      { label: t("nav.home"), sectionId: sections.home },
      { label: t("nav.projects"), sectionId: sections.projects },
      { label: t("nav.aboutMe"), sectionId: sections.about },
      { label: t("nav.skills"), sectionId: sections.skills },
      { label: t("nav.certifications"), sectionId: sections.certifications },
   ];

   const scrollToSection = (sectionId: string) => {
      if (pathname === "/") {
         const element = document.getElementById(sectionId);
         if (element) {
            const navbarHeight = 80;
            const elementPosition =
               element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
               top: elementPosition - navbarHeight,
               behavior: "smooth",
            });
         }
      } else {
         router.push(`/#${sectionId}`);
      }
      setIsOpen(false);
   };

   return (
      <nav className="w-full z-10 fixed bg-neutral-900 font-sans">
         <div className="flex items-center justify-between px-[8%] py-5">
            <span className="text-neutral-200 font-semibold tracking-wide select-none"></span>
            <ul className="hidden md:flex flex-row gap-x-4 text-neutral-400 items-center">
               {navLinks.map(({ label, sectionId }) => (
                  <li key={sectionId}>
                     <button
                        onClick={() => scrollToSection(sectionId)}
                        className="duration-300 hover:bg-zinc-700 hover:text-neutral-200 px-3 py-1 rounded-xl block cursor-pointer"
                     >
                        {label}
                     </button>
                  </li>
               ))}
               <li>
                  <select
                     className="bg-zinc-800 text-neutral-400 px-3 py-1 rounded-xl border border-zinc-700 hover:bg-zinc-700 hover:text-neutral-200 duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-600"
                     value={language}
                     onChange={(e) => toggleLanguage(e.target.value)}
                  >
                     <option value="es_MX">Español</option>
                     <option value="en_US">English</option>
                  </select>
               </li>
            </ul>
            <button
               className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-y-1.5 rounded-lg hover:bg-zinc-700 duration-300 p-2"
               onClick={() => setIsOpen((prev) => !prev)}
               aria-label="Toggle menu"
               aria-expanded={isOpen}
            >
               <span
                  className={`block h-0.5 w-5 bg-neutral-400 transition-all duration-300 origin-center ${
                     isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
               />
               <span
                  className={`block h-0.5 w-5 bg-neutral-400 transition-all duration-300 ${
                     isOpen ? "opacity-0 scale-x-0" : ""
                  }`}
               />
               <span
                  className={`block h-0.5 w-5 bg-neutral-400 transition-all duration-300 origin-center ${
                     isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
               />
            </button>
         </div>
         <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
               isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
         >
            <ul className="flex flex-col px-[8%] pb-5 gap-y-1 text-neutral-400">
               {navLinks.map(({ label, sectionId }) => (
                  <li key={sectionId}>
                     <button
                        onClick={() => scrollToSection(sectionId)}
                        className="block w-full text-left duration-300 hover:bg-zinc-700 hover:text-neutral-200 px-3 py-2 rounded-xl cursor-pointer"
                     >
                        {label}
                     </button>
                  </li>
               ))}
               <li className="pt-1">
                  <select
                     className="bg-zinc-800 text-neutral-400 px-3 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-700 hover:text-neutral-200 duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-600 w-full"
                     value={language}
                     onChange={(e) => {
                        toggleLanguage(e.target.value);
                        setIsOpen(false);
                     }}
                  >
                     <option value="es_MX">Español</option>
                     <option value="en_US">English</option>
                  </select>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default NavBar;
