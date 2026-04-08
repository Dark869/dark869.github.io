import Image from "next/image";
import { useState } from "react";
import { Certification } from "@/types/certification";

interface Props {
   cert: Certification;
   translations: {
      issued: string;
      expires: string;
      noExpiry: string;
      id: string;
      verify: string;
   };
}

const CertificationCard = ({ cert, translations: tr }: Props) => {
   const [showTooltip, setShowTooltip] = useState(false);

   return (
      <article className="group relative flex flex-col gap-4 bg-zinc-800/50 border border-zinc-700/60 rounded-2xl p-5 hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-300">
         {/* Glow sutil en hover */}
         <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ boxShadow: "inset 0 0 30px rgba(255,255,255,0.03)" }}
         />

         {/* Header: icono + nombre + emisor */}
         <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 rounded-xl bg-zinc-700/60 border border-zinc-600/40 overflow-hidden p-1.5">
               <Image
                  src={cert.icon}
                  alt={cert.issuer}
                  fill
                  className="object-contain p-1"
               />
            </div>

            <div className="flex flex-col gap-0.5 min-w-0">
               {/* Nombre con tooltip */}
               <div className="relative">
                  <h3
                     className="text-neutral-200 text-sm font-semibold leading-snug line-clamp-2 cursor-default"
                     onMouseEnter={() => setShowTooltip(true)}
                     onMouseLeave={() => setShowTooltip(false)}
                  >
                     {cert.name}
                  </h3>

                  {/* Tooltip */}
                  {showTooltip && (
                     <div className="absolute left-0 top-full mt-2 z-50 w-64 bg-zinc-900 border border-zinc-600 rounded-xl px-3 py-2 shadow-xl pointer-events-none">
                        {/* Flecha */}
                        <div className="absolute -top-1.5 left-4 w-3 h-3 bg-zinc-900 border-l border-t border-zinc-600 rotate-45" />
                        <p className="text-neutral-200 text-xs leading-relaxed">
                           {cert.name}
                        </p>
                     </div>
                  )}
               </div>

               <span className="text-neutral-500 text-xs">{cert.issuer}</span>
            </div>
         </div>

         {/* Divisor */}
         <div className="h-px bg-zinc-700/50" />

         {/* Metadatos */}
         <div className="flex flex-col gap-2 text-xs">
            <div className="flex justify-between gap-2 flex-wrap">
               <span className="text-neutral-500">
                  {tr.issued}{" "}
                  <span className="text-neutral-300 font-medium">
                     {cert.issuedDate}
                  </span>
               </span>
               <span className="text-neutral-500">
                  {cert.expiryDate ? (
                     <>
                        {tr.expires}{" "}
                        <span className="text-neutral-300 font-medium">
                           {cert.expiryDate}
                        </span>
                     </>
                  ) : (
                     <span className="text-emerald-500/80">{tr.noExpiry}</span>
                  )}
               </span>
            </div>

            {cert.credentialId && (
               <p className="text-neutral-600 truncate">
                  {tr.id}{" "}
                  <span className="text-neutral-400 font-mono">
                     {cert.credentialId}
                  </span>
               </p>
            )}
         </div>

         {/* Botón verificar */}
         {cert.credentialUrl && (
            <a
               href={cert.credentialUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="mt-auto text-xs text-center text-neutral-400 border border-zinc-700 rounded-xl py-1.5 px-3 hover:border-zinc-500 hover:text-neutral-200 hover:bg-zinc-700/50 transition-all duration-200"
            >
               {tr.verify} ↗
            </a>
         )}
      </article>
   );
};

export default CertificationCard;
