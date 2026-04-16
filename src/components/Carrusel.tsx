"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import ButtonTec from "@/components/ButtonTec";
import { Project } from "@/types/proyect";
import { useLanguage } from "@/contexts/LanguageContext";
import technologiesCatalog from "@/data/tecnologiesCatalog";

/* ── Animaciones ── */
const CAROUSEL_CSS = `
  @keyframes carouselFromRight {
    from { transform: translateX(60px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }
  @keyframes carouselFromLeft {
    from { transform: translateX(-60px); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }
  @keyframes carouselFadeUp {
    from { transform: translateY(12px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  @keyframes carouselProgress {
    from { width: 0%; }
    to   { width: 100%; }
  }

  .c-enter-right { animation: carouselFromRight 0.6s cubic-bezier(0.22,1,0.36,1) both; }
  .c-enter-left  { animation: carouselFromLeft  0.6s cubic-bezier(0.22,1,0.36,1) both; }

  .c-text { animation: carouselFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both; opacity: 0; }
  .c-text-1 { animation-delay: 0.30s; }
  .c-text-2 { animation-delay: 0.40s; }
  .c-text-3 { animation-delay: 0.50s; }
  .c-text-4 { animation-delay: 0.60s; }
  .c-text-5 { animation-delay: 0.70s; }

  @keyframes carouselFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .c-image { animation: carouselFadeIn 0.5s ease-out 0.4s both; opacity: 0; }

  .c-progress { animation: carouselProgress 5s linear forwards; }
`;

/* ── Catálogo de tecnologías ── */

type Direction = "left" | "right";

const Carrusel = () => {
   const { t } = useLanguage();

   const test: Project[] = [
      {
         title: t("projects.portafolioProject.title"),
         type: "Fullstack",
         description: t("projects.portafolioProject.description"),
         image: "/images/projectFEI.png",
         technologies: [
            "react",
            "next",
            "javascript",
            "tailwind",
            "node",
            "express",
            "mysql",
            "nginx",
            "docker",
         ],
      },
      {
         title: "Backend API con Spring Boot",
         type: "Backend",
         description:
            "API RESTful para gestión de usuarios con autenticación JWT",
         image: "/images/projectAPI.png",
         technologies: ["java", "spring", "hibernate", "postgresql", "jwt"],
         url: "https://github.com/Dark869/Auth-REST-API",
      },
      {
         title: "E-commerce App",
         type: "Fullstack",
         description:
            "Aplicación de comercio electrónico completa con gestión de inventario",
         image: "/images/image.png",
         technologies: ["react", "node", "express", "typescript"],
         url: "https://github.com/Dark869/Service-management-system",
      },
   ];

   const [currentlyIndex, setCurrentlyIndex] = useState(0);
   const [slideKey, setSlideKey] = useState(0);
   const [direction, setDirection] = useState<Direction>("left");
   const [progressKey, setProgressKey] = useState(0);

   const goTo = useCallback(
      (next: number, dir: Direction) => {
         if (next === currentlyIndex) return;
         setDirection(dir);
         setCurrentlyIndex(next);
         setSlideKey((k) => k + 1);
         setProgressKey((k) => k + 1);
      },
      [currentlyIndex],
   );

   const nextCard = useCallback(() => {
      goTo(currentlyIndex === test.length - 1 ? 0 : currentlyIndex + 1, "left");
   }, [currentlyIndex, goTo]);

   const prevCard = useCallback(() => {
      goTo(
         currentlyIndex === 0 ? test.length - 1 : currentlyIndex - 1,
         "right",
      );
   }, [currentlyIndex, goTo]);

   // Auto-play cada 5s
   useEffect(() => {
      const id = setInterval(nextCard, 1000 * 10);
      return () => clearInterval(id);
   }, [nextCard]);

   const currentItem = test[currentlyIndex];
   const hasPublicUrl =
      !!currentItem.url &&
      currentItem.url.trim().length > 0 &&
      currentItem.url !== "#";
   const enterClass = direction === "left" ? "c-enter-right" : "c-enter-left";

   return (
      <>
         <style dangerouslySetInnerHTML={{ __html: CAROUSEL_CSS }} />

         <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 w-full px-2 sm:px-0">
            {/* ── Botón anterior ── */}
            <button
               type="button"
               onClick={prevCard}
               aria-label="Previous Slide"
               className="px-1 py-2 sm:px-2 md:px-4 rounded-full duration-200 hover:bg-neutral-800 flex-shrink-0"
            >
               <Image
                  src="/svgs/chevron-left.svg"
                  alt="Previous Slide"
                  width={20}
                  height={20}
                  className="brightness-0 invert w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
               />
            </button>

            {/* ── Área del slide ── */}
            <div className="relative p-2 sm:p-4 md:p-6 w-full max-w-4xl overflow-hidden min-h-[520px] sm:min-h-[550px] lg:min-h-[400px]">
               {/* key distinto → re-mount → animación se reinicia */}
               <div
                  key={slideKey}
                  className={`flex flex-col lg:flex-row gap-3 sm:gap-4 h-full ${enterClass}`}
               >
                  {/* Columna izquierda — texto */}
                  <div className="items-start flex flex-col justify-start gap-1.5 sm:gap-2 flex-1">
                     <h2 className="c-text c-text-1 text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                        {currentItem.title}
                     </h2>
                     <h3 className="c-text c-text-2 text-base sm:text-lg font-medium text-sky-400">
                        {currentItem.type}
                     </h3>
                     <p className="c-text c-text-3 text-neutral-300 text-sm sm:text-base">
                        {currentItem.description}
                     </p>

                     {/* Tecnologías */}
                     <div className="c-text c-text-4 flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-2 mb-2 sm:mb-3">
                        {currentItem.technologies.map((techKey) => {
                           const tech = technologiesCatalog[techKey];
                           if (!tech) return null;
                           return <ButtonTec key={techKey} tec={tech} />;
                        })}
                     </div>

                     {/* Enlace al repositorio - solo en lg+ */}
                     {hasPublicUrl && (
                        <Link
                           href={currentItem.url!}
                           target="_blank"
                           className="c-text c-text-5 hidden lg:flex items-center gap-2 border-2 border-neutral-600 px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors text-base"
                        >
                           <Image
                              src="/svgs/github.svg"
                              alt="GitHub Icon"
                              width={20}
                              height={20}
                              className="brightness-0 invert w-5 h-5"
                           />
                           <p>Ver código</p>
                        </Link>
                     )}
                  </div>

                  {/* Columna derecha — imagen */}
                  <div className="c-image flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-[450px] overflow-hidden">
                     <Image
                        height={350}
                        width={450}
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="object-cover border-3 border-neutral-600 rounded-lg w-full h-auto"
                     />
                  </div>

                  {/* Enlace al repositorio - solo en móvil/tablet */}
                  {hasPublicUrl && (
                     <Link
                        href={currentItem.url!}
                        target="_blank"
                        className="c-text c-text-5 lg:hidden flex items-center justify-center gap-2 border-2 border-neutral-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-neutral-800 transition-colors text-sm sm:text-base"
                     >
                        <Image
                           src="/svgs/github.svg"
                           alt="GitHub Icon"
                           width={20}
                           height={20}
                           className="brightness-0 invert w-4 h-4 sm:w-5 sm:h-5"
                        />
                        <p>Ver código</p>
                     </Link>
                  )}
               </div>
            </div>

            {/* ── Botón siguiente ── */}
            <button
               type="button"
               onClick={nextCard}
               aria-label="Next Slide"
               className="px-1 py-2 sm:px-2 md:px-4 rounded-full duration-200 hover:bg-neutral-800 flex-shrink-0"
            >
               <Image
                  src="/svgs/chevron-right.svg"
                  alt="Next Slide"
                  width={20}
                  height={20}
                  className="brightness-0 invert w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
               />
            </button>
         </div>

         {/* ── Dots ── */}
         <div id="dotsIndicator" className="mt-3 sm:mt-4">
            {test.map((_, index) => (
               <span
                  key={index}
                  className={`mx-1.5 sm:mx-2 text-2xl sm:text-3xl cursor-pointer select-none transition duration-500 ${
                     index === currentlyIndex
                        ? "text-neutral-300"
                        : "text-neutral-600"
                  }`}
                  onClick={() =>
                     goTo(index, index > currentlyIndex ? "left" : "right")
                  }
               >
                  &bull;
               </span>
            ))}
         </div>
      </>
   );
};

export default Carrusel;
