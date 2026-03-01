"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import ButtonTec from "@/components/ButtonTec";
import { TecItem, Project } from "@/types/Tecs";
import { useLanguage } from "@/contexts/LanguageContext";

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
const technologiesCatalog: Record<string, TecItem> = {
   react: { name: "React", src: "/svgs/react.svg", alt: "React Icon" },
   next: { name: "Next.js", src: "/svgs/nextjs.svg", alt: "Next.js Icon" },
   node: { name: "Node.js", src: "/svgs/nodejs.svg", alt: "Node.js Icon" },
   express: {
      name: "Express",
      src: "/svgs/expressjs.svg",
      alt: "Express Icon",
   },
   typescript: {
      name: "TypeScript",
      src: "/svgs/typescript.svg",
      alt: "TypeScript Icon",
   },
   tailwind: {
      name: "Tailwind CSS",
      src: "/svgs/tailwind.svg",
      alt: "Tailwind CSS Icon",
   },
   spring: {
      name: "Spring Boot",
      src: "/svgs/spring_boot.svg",
      alt: "Spring Boot Icon",
   },
   java: { name: "Java", src: "/svgs/java.svg", alt: "Java Icon" },
};

type Direction = "left" | "right";

const Carrusel = () => {
   const { t } = useLanguage();

   const test: Project[] = [
      {
         title: t("projects.portafolioProject.title"),
         type: "Frontend",
         description: t("projects.portafolioProject.description"),
         image: "/images/portafolio.png",
         url: "https://github.com/Dark869/portafolio-personal-web",
         technologies: ["react", "next", "typescript", "tailwind"],
      },
      {
         title: "Spring Backend",
         type: "Backend",
         description: "API Rest con Spring Boot y Java",
         image: "/images/image.png",
         url: "#",
         technologies: ["java", "spring"],
      },
      {
         title: "E-commerce App",
         type: "Fullstack",
         description:
            "Aplicación de comercio electrónico completa con gestión de inventario",
         image: "/images/image.png",
         url: "#",
         technologies: ["react", "node", "express", "typescript"],
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
   const enterClass = direction === "left" ? "c-enter-right" : "c-enter-left";

   return (
      <>
         <style dangerouslySetInnerHTML={{ __html: CAROUSEL_CSS }} />

         <div className="flex items-center justify-center gap-4 w-full">
            {/* ── Botón anterior ── */}
            <button
               type="button"
               onClick={prevCard}
               aria-label="Previous Slide"
               className="px-4 py-2 rounded-full duration-200 hover:bg-neutral-800"
            >
               <Image
                  src="/svgs/chevron-left.svg"
                  alt="Previous Slide"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
               />
            </button>

            {/* ── Área del slide ── */}
            <div className="relative p-6 w-full max-w-4xl min-h-[400px] overflow-hidden">
               {/* key distinto → re-mount → animación se reinicia */}
               <div
                  key={slideKey}
                  className={`flex flex-col-2 gap-4 min-h-[400px] ${enterClass}`}
               >
                  {/* Columna izquierda — texto */}
                  <div className="items-start flex flex-col justify-start gap-2 flex-1">
                     <h2 className="c-text c-text-1 text-xl font-semibold mb-2 min-h-[32px]">
                        {currentItem.title}
                     </h2>
                     <h3 className="c-text c-text-2 text-lg font-medium text-sky-400 min-h-[28px]">
                        {currentItem.type}
                     </h3>
                     <p className="c-text c-text-3 text-neutral-300 min-h-[48px]">
                        {currentItem.description}
                     </p>

                     {/* Tecnologías */}
                     <div className="c-text c-text-4 flex flex-wrap gap-2 mt-2 min-h-[40px]">
                        {currentItem.technologies.map((techKey) => {
                           const tech = technologiesCatalog[techKey];
                           if (!tech) return null;
                           return <ButtonTec key={techKey} tec={tech} />;
                        })}
                     </div>

                     {/* Enlace al repositorio */}
                     <Link
                        href={currentItem.url}
                        target="_blank"
                        className="c-text c-text-5 flex items-center gap-2 border-2 border-neutral-600 px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors mt-2"
                     >
                        <Image
                           src="/svgs/github.svg"
                           alt="GitHub Icon"
                           width={20}
                           height={20}
                           className="brightness-0 invert"
                        />
                        <p>Ver código</p>
                     </Link>
                  </div>

                  {/* Columna derecha — imagen */}
                  <div className="c-image flex-shrink-0 ml-auto w-[450px] overflow-hidden content-center">
                     <Image
                        height={350}
                        width={450}
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="object-cover border-3 border-neutral-600 rounded-lg"
                     />
                  </div>
               </div>
            </div>

            {/* ── Botón siguiente ── */}
            <button
               type="button"
               onClick={nextCard}
               aria-label="Next Slide"
               className="px-4 py-2 rounded-full duration-200 hover:bg-neutral-800"
            >
               <Image
                  src="/svgs/chevron-right.svg"
                  alt="Next Slide"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
               />
            </button>
         </div>

         {/* ── Dots ── */}
         <div id="dotsIndicator">
            {test.map((_, index) => (
               <span
                  key={index}
                  className={`mx-2 text-3xl cursor-pointer select-none transition duration-500 ${
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
