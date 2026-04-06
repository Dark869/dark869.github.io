"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const currentYear = new Date().getFullYear();

const Footer = () => {
   const { t } = useLanguage();

   return (
      <footer className="w-full bg-neutral-900 border-t border-zinc-800 font-sans">
         <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />

         <div className="px-[8%] py-10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
               <div className="flex flex-col gap-2">
                  <span className="text-neutral-200 text-lg font-semibold tracking-wide">
                     Victor López
                  </span>
                  <span className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                     {t("footer.tagline") ??
                        "Estudiante de Redes y Servicios de Cómputo · Universidad Veracruzana"}
                  </span>
               </div>

               <nav aria-label="Footer navigation">
                  <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
                     {[
                        { label: t("nav.home") ?? "Inicio", href: "/" },
                        {
                           label: t("nav.aboutMe") ?? "Sobre mí",
                           href: "/about",
                        },
                        {
                           label: t("nav.projects") ?? "Proyectos",
                           href: "/projects",
                        },
                        {
                           label: t("nav.skills") ?? "Habilidades",
                           href: "/skills",
                        },
                        {
                           label: t("nav.certifications") ?? "Certificaciones",
                           href: "/certifications",
                        },
                     ].map(({ label, href }) => (
                        <li key={href}>
                           <Link
                              href={href}
                              className="hover:text-neutral-200 duration-200 transition-colors"
                           >
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>

            <div className="h-px bg-zinc-800" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-neutral-500">
               <p>
                  {t("footer.builtBy") ?? "Diseñado y desarrollado por"}{" "}
                  <span className="text-neutral-400 font-medium">
                     Victor López
                  </span>
                  . {t("footer.builtWith") ?? "Construido con"}{" "}
                  <span className="text-neutral-400">Next.js, </span>
                  <span className="text-neutral-400">React </span> &amp;{" "}
                  <span className="text-neutral-400">Tailwind CSS</span>.
               </p>

               <p className="md:text-right leading-relaxed">
                  © {currentYear} Victor López. {t("footer.rights")}
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
