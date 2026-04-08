import { TecItem } from "@/types/tecItem";

const technologiesCatalog: Record<string, TecItem> = {
   react: { name: "React", src: "/svgs/react.svg", alt: "React Icon" },
   next: { name: "Next.js", src: "/svgs/nextjs.svg", alt: "Next.js Icon" },
   node: { name: "Node.js", src: "/svgs/nodejs.svg", alt: "Node.js Icon" },
   express: {
      name: "Express",
      src: "/svgs/express.svg",
      alt: "Express Icon",
   },
   typescript: {
      name: "TypeScript",
      src: "/svgs/typescript.svg",
      alt: "TypeScript Icon",
   },
   tailwind: {
      name: "Tailwind CSS",
      src: "/svgs/tailwind.svg",
      alt: "Tailwind CSS Icon",
   },
   spring: {
      name: "Spring Boot",
      src: "/svgs/spring_boot.svg",
      alt: "Spring Boot Icon",
   },
   java: { name: "Java", src: "/svgs/java.svg", alt: "Java Icon" },
};

export default technologiesCatalog;