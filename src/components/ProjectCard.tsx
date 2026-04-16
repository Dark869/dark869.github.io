"use client";

import Image from "next/image";
import Link from "next/link";
import ButtonTec from "@/components/ButtonTec";
import technologiesCatalog from "@/data/tecnologiesCatalog";
import { Project } from "@/types/proyect";

interface ProjectCardProps {
   project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
   const hasPublicUrl =
      !!project.url && project.url.trim().length > 0 && project.url !== "#";

   return (
      <div className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/50">
         <div className="relative w-full h-48 sm:h-56 bg-neutral-900">
            <Image
               src={project.image}
               alt={project.title}
               fill
               className="object-cover"
            />
         </div>
         <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
               <h3 className="text-lg sm:text-xl font-semibold text-neutral-100">
                  {project.title}
               </h3>
               <span className="text-xs sm:text-sm font-medium text-sky-400 whitespace-nowrap">
                  {project.type}
               </span>
            </div>
            <p className="text-sm sm:text-base text-neutral-300 mb-4 line-clamp-3">
               {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
               {project.technologies.map((techKey) => {
                  const tech = technologiesCatalog[techKey];
                  if (!tech) return null;
                  return <ButtonTec key={techKey} tec={tech} />;
               })}
            </div>
            {hasPublicUrl && (
               <Link
                  href={project.url!}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full border-2 border-neutral-600 px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors text-sm sm:text-base"
               >
                  <Image
                     src="/svgs/github.svg"
                     alt="GitHub Icon"
                     width={20}
                     height={20}
                     className="brightness-0 invert w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span>Ver código</span>
               </Link>
            )}
         </div>
      </div>
   );
};

export default ProjectCard;
