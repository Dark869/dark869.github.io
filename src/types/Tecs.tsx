interface TecItem {
   name: string;
   src: string;
   alt: string;
}

interface Project {
   title: string;
   type: string;
   description: string;
   image: string;
   url: string;
   technologies: string[];
}

export type { TecItem, Project };
