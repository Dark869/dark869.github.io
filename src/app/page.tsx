"use client";

import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Divider from "@/components/Divider";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

import { LanguageProvider } from "@/contexts/LanguageContext";
import Skills from "@/components/Skills";

const HomeStyles = {
   projects: {
      div: "h-full w-full flex aling-center justify-center my-16",
   },
};

export default function Home() {
   useEffect(() => {
      // Detectar si hay hash en la URL al cargar
      const hash = window.location.hash.substring(1); // Quitar el '#'
      if (hash) {
         setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
               const navbarHeight = 80;
               const elementPosition =
                  element.getBoundingClientRect().top + window.scrollY;
               window.scrollTo({
                  top: elementPosition - navbarHeight,
                  behavior: "smooth",
               });
            }
         }, 100); // Pequeño delay para asegurar que el DOM esté listo
      }
   }, []);

   return (
      <LanguageProvider>
         <div className="">
            <header>
               <NavBar />
            </header>
            <main>
               <section id="home">
                  <Presentation />
               </section>
               <div
                  className={`${HomeStyles.projects.div} bg-neutral-900 flex flex-col justify-center items-center`}
               >
                  <section id="projects">
                     <Projects />
                  </section>
                  <Divider />
                  <section id="about">
                     <AboutMe />
                  </section>
                  <Divider />
                  <section id="skills">
                     <Skills />
                  </section>
                  <Divider />
                  <section id="certifications">
                     <Certifications />
                  </section>
               </div>
            </main>
            <footer className={HomeStyles.projects.div}>
               <Footer />
            </footer>
         </div>
      </LanguageProvider>
   );
}
