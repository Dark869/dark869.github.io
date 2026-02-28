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
         >
            <Image
               src={socialMedia.icon}
               alt={socialMedia.alt}
               width={300}
               height={300}
               className=""
            />
         </Link>
      </>
   );
};

export default SocialMediaButton;
