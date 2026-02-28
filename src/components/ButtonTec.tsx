import Image from "next/image";
import { TecItem } from "@/types/Tecs";

interface ButtonTecProps {
   tec: TecItem;
}

const ButtonTec = ({ tec }: ButtonTecProps) => {
   return (
      <div className="flex items-center gap-2 border-2 border-neutral-600 px-3 py-1 rounded-md">
         <Image
            src={tec.src}
            alt={tec.alt}
            width={20}
            height={20}
            className=""
         />
         <p className="text-sm">{tec.name}</p>
      </div>
   );
};

export default ButtonTec;
