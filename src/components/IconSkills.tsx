interface IconSkillsProps {
   imageSrc: string;
   altText: string;
   bg: string;
   border: string;
   textColor: string;
}
const IconSkills = ({
   imageSrc,
   altText,
   bg,
   border,
   textColor,
}: IconSkillsProps) => {
   return (
      <div
         className={`group relative inline-flex items-center justify-center place-items-center ${bg} rounded-3xl p-5 border border-transparent ${border} transition-colors duration-300`}
      >
         <img src={imageSrc} alt={altText} className="w-8 h-8" />
         <span
            className={`pointer-events-none absolute bottom-full mb-2 whitespace-nowrap rounded-xl px-2 py-1 text-sm border-2 border-current ${textColor} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
         >
            {altText}
         </span>
      </div>
   );
};

export default IconSkills;
