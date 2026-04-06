import Image from "next/image";
import Link from "next/link";
import { SocialMediaItem } from "@/types/SocialMedia";

const SocialMediaButton = (socialMedia: SocialMediaItem) => {
   return (
      <>
         <Link
            href={socialMedia.url}
            target="_blank"
            rel="noopener noreferrer"
            id={socialMedia.name}
            className="hover:opacity-80 transition-opacity"
         >
            <Image
               src={socialMedia.icon}
               alt={socialMedia.alt}
               width={40}
               height={40}
               className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
         </Link>
      </>
   );
};

export default SocialMediaButton;
