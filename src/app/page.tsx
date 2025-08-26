import NavBar from "@/components/NavBar";
import Presentation from "@/components/Presentation";
import AboutMe from "@/components/AboutMe";

export default function Home() {
   return (
      <>
         <header>
            <NavBar />
         </header>
         <main>
            <Presentation />
            <div className="bg-neutral-900/75 h-full">
               <AboutMe />
            </div>
         </main>
         <footer></footer>
      </>
   );
}
