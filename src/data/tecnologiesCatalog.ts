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
   mysql: { name: "MySQL", src: "/svgs/mysql.svg", alt: "MySQL Icon" },
   nginx: { name: "Nginx", src: "/svgs/nginx.svg", alt: "Nginx Icon" },
   javascript: {
      name: "JavaScript",
      src: "/svgs/javascript.svg",
      alt: "JavaScript Icon",
   },
   docker: { name: "Docker", src: "/svgs/docker.svg", alt: "Docker Icon" },
   hibernate: {
      name: "Hibernate",
      src: "/svgs/hibernate.svg",
      alt: "Hibernate Icon",
   },
   postgresql: {  name: "PostgreSQL", src: "/svgs/pgsql.svg", alt: "PostgreSQL Icon" },
   jwt: { name: "JWT", src: "/svgs/jwt.svg", alt: "JWT Icon" },
};

export default technologiesCatalog;