"use client";

import Carrusel from "@/components/Carrusel";

const Projects = () => {
   return (
      <div className="h-full w-6xl flex items-center justify-center flex-col px-8">
         <h1 className="text-2xl font-bold self-start w-full max-w-4xl pt-10 mb-8">
            Mis proyectos
         </h1>
         <Carrusel />
      </div>
   );
};

export default Projects;
