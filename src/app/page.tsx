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
   return (
      <LanguageProvider>
         <div className="">
            <header>
               <NavBar />
            </header>
            <main>
               <div>
                  <Presentation />
               </div>
               <div
                  className={`${HomeStyles.projects.div} bg-neutral-900 flex flex-col justify-center items-center`}
                  id="projects"
               >
                  <Projects />
                  <Divider />
                  <AboutMe />
                  <Divider />
                  <Skills />
                  <Divider />
                  <Certifications />
               </div>
            </main>
            <footer className={HomeStyles.projects.div}>
               <Footer />
            </footer>
         </div>
      </LanguageProvider>
   );
}
