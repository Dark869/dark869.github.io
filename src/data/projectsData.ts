import { Project } from "@/types/proyect";

export const projectsData: Project[] = [
   {
      title: "Personal Portfolio",
      type: "Frontend",
      description: "My personal portfolio built with Next.js, Tailwind CSS and TypeScript. Features a responsive design, dark theme, and internationalization support.",
      image: "/images/portafolio.png",
      url: "https://github.com/Dark869/portafolio-personal-web",
      technologies: ["react", "next", "typescript", "tailwind"],
   },
   {
      title: "E-commerce Platform",
      type: "Fullstack",
      description: "Complete e-commerce application with product management, shopping cart, payment integration, and admin dashboard.",
      image: "/images/image.png",
      url: "#",
      technologies: ["react", "node", "express", "typescript"],
   },
   {
      title: "Task Management API",
      type: "Backend",
      description: "RESTful API for task management with user authentication, CRUD operations, and role-based access control.",
      image: "/images/image.png",
      url: "#",
      technologies: ["node", "express", "typescript"],
   },
   {
      title: "Weather Dashboard",
      type: "Frontend",
      description: "Real-time weather dashboard with location search, 7-day forecast, and interactive charts showing temperature trends.",
      image: "/images/image.png",
      url: "#",
      technologies: ["react", "next", "typescript", "tailwind"],
   },
   {
      title: "Blog CMS",
      type: "Fullstack",
      description: "Content Management System for blogs with markdown support, image uploads, categories, and SEO optimization.",
      image: "/images/image.png",
      url: "#",
      technologies: ["react", "next", "node", "typescript"],
   },
   {
      title: "Spring Microservices",
      type: "Backend",
      description: "Microservices architecture using Spring Boot with service discovery, API gateway, and distributed tracing.",
      image: "/images/image.png",
      url: "#",
      technologies: ["java", "spring"],
   },
];
