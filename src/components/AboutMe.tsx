const AboutMe = () => {
   return (
      <div className="h-full px-8 w-6xl">
         <h1 className="text-2xl font-bold self-start w-full max-w-4xl pt-10 mb-8">
            Sobre Mi
         </h1>
         <div className="text-neutral-300 w-3/4 leading-7 flex justify-center items-center mx-auto pb-10">
            <p className="text-justify text-md">
               Hola! Soy Victor López, un administrador de sistemas y
               desarrollador fullstack con React, Next.js, Node.js y MySQL.{" "}
               <br />
               Soy estudiante de 10° semestre de la carrera de Redes y Servicios
               de Computo de la Universidad Veracruzana.
               <br />
               Actualmente tengo 23 años y me apasiona el desarrollo de software
               y la administración de sistemas. Me encanta aprender nuevas
               tecnologías y mejorar mis habilidades constantemente.0
            </p>
         </div>
      </div>
   );
};

export default AboutMe;
