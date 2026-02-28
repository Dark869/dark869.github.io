import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ButtonTec from "@/components/ButtonTec";
import { TecItem, Project } from "@/types/Tecs";

// Catálogo de tecnologías disponibles con sus iconos
const technologiesCatalog: Record<string, TecItem> = {
   react: {
      name: "React",
      src: "/svgs/react.svg",
      alt: "React Icon",
   },
   next: {
      name: "Next.js",
      src: "/svgs/nextjs.svg",
      alt: "Next.js Icon",
   },
   node: {
      name: "Node.js",
      src: "/svgs/nodejs.svg",
      alt: "Node.js Icon",
   },
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
   java: {
      name: "Java",
      src: "/svgs/java.svg",
      alt: "Java Icon",
   },
};

const test: Project[] = [
   {
      title: "Portfolio Web",
      type: "Frontend",
      description: "Portafolio personal desarrollado con Next.js y TypeScript",
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

const Carrusel = () => {
   const [currentlyIndex, setCurrentlyIndex] = useState(0);

   const nextCard = () => {
      setCurrentlyIndex((prevIndex) =>
         prevIndex === test.length - 1 ? 0 : prevIndex + 1,
      );
   };

   const prevCard = () => {
      setCurrentlyIndex((prevIndex) =>
         prevIndex === 0 ? test.length - 1 : prevIndex - 1,
      );
   };

   const currentItem = test[currentlyIndex];

   return (
      <>
         <div className="flex items-center justify-center gap-4 w-full">
            <button
               type="button"
               onClick={prevCard}
               aria-label="Previous Slide"
               className="px-4 py-2 hover:opacity-70 transition-opacity hover:bg-neutral-800 rounded-full duration-800"
            >
               <Image
                  src="/svgs/chevron-left.svg"
                  alt="Previous Slide"
                  width={24}
                  height={24}
                  className="brightness-0 invert"
               />
            </button>
            <div className="p-6 w-full max-w-4xl flex flex-col-2 gap-4 min-h-[400px]">
               <div className="items-start flex flex-col justify-start gap-2 flex-1">
                  <h2 className="text-xl font-semibold mb-2 min-h-[32px]">
                     {currentItem.title}
                  </h2>
                  <h3 className="text-lg font-medium text-sky-400 min-h-[28px]">
                     {currentItem.type}
                  </h3>
                  <p className="text-neutral-300 min-h-[48px]">
                     {currentItem.description}
                  </p>

                  {/* Tecnologías utilizadas */}
                  <div className="flex flex-wrap gap-2 mt-2 min-h-[40px]">
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
                     className="flex items-center gap-2 border-2 border-neutral-600 px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors mt-2"
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

               {/* Imagen */}
               <div className="flex-shrink-0 ml-auto w-[450px] overflow-hidden content-center">
                  <Image
                     height={350}
                     width={450}
                     src={currentItem.image}
                     alt={currentItem.title}
                     className="object-cover border-3 border-neutral-600 rounded-lg"
                  />
               </div>
            </div>
            <button
               type="button"
               onClick={nextCard}
               aria-label="Next Slide"
               className="px-4 py-2 hover:opacity-70 transition-opacity"
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
         <div id="dotsIndicator">
            {test.map((_, index) => (
               <span
                  key={index}
                  className={`mx-2 text-3xl cursor-pointer select-none transition duration-500 ${
                     index === currentlyIndex
                        ? "text-neutral-300"
                        : "text-neutral-600"
                  }`}
                  onClick={() => setCurrentlyIndex(index)}
               >
                  &bull;
               </span>
            ))}
         </div>
      </>
   );
};

export default Carrusel;
