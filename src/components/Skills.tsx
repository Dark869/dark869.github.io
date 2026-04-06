"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import IconSkills from "@/components/IconSkills";

const Skills = () => {
   const SKILLS = [
      {
         name: "HTML",
         icon: "/svgs/html.svg",
         bg: "bg-orange-500/10",
         border: "hover:border-orange-500",
         textColor: "text-orange-500",
      },
      {
         name: "CSS",
         icon: "/svgs/css.svg",
         bg: "bg-blue-500/10",
         border: "hover:border-blue-500",
         textColor: "text-blue-500",
      },
      {
         name: "JavaScript",
         icon: "/svgs/javascript.svg",
         bg: "bg-yellow-400/10",
         border: "hover:border-yellow-400",
         textColor: "text-yellow-400",
      },
      {
         name: "TypeScript",
         icon: "/svgs/typescript.svg",
         bg: "bg-sky-600/10",
         border: "hover:border-sky-600",
         textColor: "text-sky-600",
      },
      {
         name: "Next.js",
         icon: "/svgs/nextjs.svg",
         bg: "bg-gray-400/10",
         border: "hover:border-gray-400",
         textColor: "text-gray-400",
      },
      {
         name: "React",
         icon: "/svgs/react.svg",
         bg: "bg-sky-300/10",
         border: "hover:border-sky-300",
         textColor: "text-sky-300",
      },
      {
         name: "Tailwind CSS",
         icon: "/svgs/tailwind.svg",
         bg: "bg-teal-400/10",
         border: "hover:border-teal-400",
         textColor: "text-teal-400",
      },
      {
         name: "Node.js",
         icon: "/svgs/nodejs.svg",
         bg: "bg-green-500/10",
         border: "hover:border-green-500",
         textColor: "text-green-500",
      },
      {
         name: "Java",
         icon: "/svgs/java.svg",
         bg: "bg-white/10",
         border: "hover:border-white",
         textColor: "text-white",
      },
      {
         name: "Python",
         icon: "/svgs/python.svg",
         bg: "bg-yellow-300/10",
         border: "hover:border-yellow-300",
         textColor: "text-yellow-300",
      },
      {
         name: "C++",
         icon: "/svgs/cpp.svg",
         bg: "bg-blue-600/10",
         border: "hover:border-blue-600",
         textColor: "text-blue-600",
      },
      // {
      //    name: "Go",
      //    icon: "/svgs/go.svg",
      //    bg: "bg-cyan-400/10",
      //    border: "hover:border-cyan-400",
      //    textColor: "text-cyan-400",
      // },
      {
         name: "Bash",
         icon: "/svgs/bash.svg",
         bg: "bg-gray-500/10",
         border: "hover:border-gray-500",
         textColor: "text-gray-500",
      },
      {
         name: "Express",
         icon: "/svgs/express.svg",
         bg: "bg-gray-300/10",
         border: "hover:border-gray-300",
         textColor: "text-gray-300",
      },
      {
         name: "Spring Boot",
         icon: "/svgs/spring_boot.svg",
         bg: "bg-green-500/10",
         border: "hover:border-green-500",
         textColor: "text-green-500",
      },
      {
         name: "Django",
         icon: "/svgs/django.svg",
         bg: "bg-green-400/10",
         border: "hover:border-green-400",
         textColor: "text-green-400",
      },
      {
         name: "MySQL",
         icon: "/svgs/mysql.svg",
         bg: "bg-blue-400/10",
         border: "hover:border-blue-400",
         textColor: "text-blue-400",
      },
      {
         name: "PostgreSQL",
         icon: "/svgs/pgsql.svg",
         bg: "bg-sky-400/10",
         border: "hover:border-sky-400",
         textColor: "text-sky-400",
      },
      // {
      //    name: "Prisma",
      //    icon: "/svgs/prisma.svg",
      //    bg: "bg-blue-500/10",
      //    border: "hover:border-blue-500",
      //    textColor: "text-blue-500",
      // },
      {
         name: "Sequelize",
         icon: "/svgs/sequelize.svg",
         bg: "bg-blue-500/10",
         border: "hover:border-blue-500",
         textColor: "text-blue-500",
      },
      {
         name: "Hibernate",
         icon: "/svgs/hibernate.svg",
         bg: "bg-green-500/10",
         border: "hover:border-green-500",
         textColor: "text-green-500",
      },
      {
         name: "Linux",
         icon: "/svgs/linux.svg",
         bg: "bg-gray-500/10",
         border: "hover:border-gray-500",
         textColor: "text-gray-500",
      },
      {
         name: "Git",
         icon: "/svgs/git.svg",
         bg: "bg-orange-400/10",
         border: "hover:border-orange-400",
         textColor: "text-orange-400",
      },
      {
         name: "GitHub",
         icon: "/svgs/github.svg",
         bg: "bg-gray-300/10",
         border: "hover:border-gray-300",
         textColor: "text-gray-300",
      },
      {
         name: "Docker",
         icon: "/svgs/docker.svg",
         bg: "bg-blue-300/10",
         border: "hover:border-blue-300",
         textColor: "text-blue-300",
      },
      {
         name: "Kubernetes",
         icon: "/svgs/kubernetes.svg",
         bg: "bg-blue-600/10",
         border: "hover:border-blue-600",
         textColor: "text-blue-600",
      },
      {
         name: "Azure",
         icon: "/svgs/azure.svg",
         bg: "bg-blue-700/10",
         border: "hover:border-blue-700",
         textColor: "text-blue-700",
      },
      {
         name: "Google Cloud",
         icon: "/svgs/gcp.svg",
         bg: "bg-gray-400/10",
         border: "hover:border-gray-400",
         textColor: "text-gray-400",
      },
      {
         name: "Ansible",
         icon: "/svgs/ansible.svg",
         bg: "bg-red-500/10",
         border: "hover:border-red-500",
         textColor: "text-red-500",
      },
      // {
      //    name: "Terraform",
      //    icon: "/svgs/terraform.svg",
      //    bg: "bg-green-400/10",
      //    border: "hover:border-green-400",
      //    textColor: "text-green-400",
      // },
      {
         name: "GitHub Actions",
         icon: "/svgs/github_actions.svg",
         bg: "bg-gray-300/10",
         border: "hover:border-gray-300",
         textColor: "text-gray-300",
      },
      // {
      //    name: "Jenkins",
      //    icon: "/svgs/jenkins.svg",
      //    bg: "bg-gray-500/10",
      //    border: "hover:border-gray-500",
      //    textColor: "text-gray-500",
      // },
      {
         name: "Prometheus",
         icon: "/svgs/prometheus.svg",
         bg: "bg-green-500/10",
         border: "hover:border-green-500",
         textColor: "text-green-500",
      },
      {
         name: "Grafana",
         icon: "/svgs/grafana.svg",
         bg: "bg-orange-400/10",
         border: "hover:border-orange-400",
         textColor: "text-orange-400",
      },
      {
         name: "SonarQube",
         icon: "/svgs/sonarqube.svg",
         bg: "bg-white/10",
         border: "hover:border-white",
         textColor: "text-white",
      },
      {
         name: "Postman",
         icon: "/svgs/postman.svg",
         bg: "bg-orange-300/10",
         border: "hover:border-orange-300",
         textColor: "text-orange-300",
      },
      {
         name: "Cisco",
         icon: "/svgs/cisco.svg",
         bg: "bg-blue-500/10",
         border: "hover:border-blue-500",
         textColor: "text-blue-500",
      },
   ];
   const { t } = useLanguage();

   return (
      <>
         <h1 className="text-2xl font-bold w-full max-w-4xl pt-10 mb-8">
            {t("skills.title")}
         </h1>
         <div>
            <ul className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
               {SKILLS.map((skill, index) => (
                  <li key={index}>
                     <IconSkills
                        imageSrc={skill.icon}
                        altText={skill.name}
                        bg={skill.bg}
                        border={skill.border}
                        textColor={skill.textColor}
                     />
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default Skills;
