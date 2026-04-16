"use client";

import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { projectsData } from "@/data/projectsData";

const ProjectsPage = () => {
   const [filter, setFilter] = useState<string>("all");

   const filteredProjects =
      filter === "all"
         ? projectsData
         : projectsData.filter(
              (project) => project.type.toLowerCase() === filter.toLowerCase(),
           );

   const filterButtons = [
      { label: "All", value: "all" },
      { label: "Frontend", value: "frontend" },
      { label: "Backend", value: "backend" },
      { label: "Fullstack", value: "fullstack" },
   ];

   return (
      <LanguageProvider>
         <div className="min-h-screen bg-neutral-900">
            <header>
               <NavBar />
            </header>
            <main className="pt-24 pb-16 px-4 sm:px-6 md:px-8">
               <div className="max-w-7xl mx-auto">
                  {/* Header Section */}
                  <div className="mb-8 sm:mb-12">
                     <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors mb-6"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-5 w-5"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span>Back to Home</span>
                     </Link>
                     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 mb-4">
                        All Projects
                     </h1>
                     <p className="text-base sm:text-lg text-neutral-300 max-w-2xl">
                        Explore my portfolio of projects showcasing frontend,
                        backend, and fullstack development skills.
                     </p>
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
                     {filterButtons.map((btn) => (
                        <button
                           key={btn.value}
                           onClick={() => setFilter(btn.value)}
                           className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                              filter === btn.value
                                 ? "bg-sky-500 text-white"
                                 : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 border border-neutral-700"
                           }`}
                        >
                           {btn.label}
                        </button>
                     ))}
                  </div>

                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                     {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                     ))}
                  </div>

                  {/* No Results Message */}
                  {filteredProjects.length === 0 && (
                     <div className="text-center py-16">
                        <p className="text-xl text-neutral-400">
                           No projects found for this filter.
                        </p>
                     </div>
                  )}
               </div>
            </main>
            <footer className="px-4 sm:px-6 md:px-8">
               <Footer />
            </footer>
         </div>
      </LanguageProvider>
   );
};

export default ProjectsPage;
