interface IconSkillsProps {
   imageSrc: string;
   altText: string;
   bg: string;
   border: string;
}

const IconSkills = ({ imageSrc, altText, bg, border }: IconSkillsProps) => {
   return (
      <div
         className={`group relative inline-flex items-center justify-center ${bg} rounded-lg p-2 border border-transparent ${border} transition-colors duration-300`}
      >
         <img src={imageSrc} alt={altText} className="w-8 h-8" />
         <span className="pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {altText}
         </span>
      </div>
   );
};

export default IconSkills;
