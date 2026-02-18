"use client";

import { FocusCards } from "@/components/ui/focus-cards";

const cards = [
  {
    title: "Amazon Web Services",
    src: "/Certifications/1.png",
    description: "Cloud computing platform by AWS for scalable applications.",
    link: "/certifications/aws",
  },
  {
    title: "Azure",
    src: "/Certifications/2.png",
    description: "Microsoft cloud services for building and deploying apps.",
    link: "/certifications/azure",
  },
  {
    title: "Google Cloud",
    src: "/Certifications/3.png",
    description: "Google's cloud platform for data, AI, and infrastructure.",
    link: "/certifications/gcp",
  },
  {
    title: "Github",
    src: "/Certifications/4.png",
    description: "Platform for version control and collaborative development.",
    link: "/certifications/github",
  },
  {
    title: "Oracle",
    src: "/Certifications/5.png",
    description: "Enterprise database and cloud infrastructure solutions.",
    link: "/certifications/oracle",
  },
  {
    title: "Kubernetes",
    src: "/Certifications/6.png",
    description: "Container orchestration system for modern applications.",
    link: "/certifications/kubernetes",
  },
  {
    title: "Terraform",
    src: "/Certifications/7.png",
    description: "Infrastructure as Code tool for cloud automation.",
    link: "/certifications/terraform",
  },
  {
    title: "Databricks",
    src: "/Certifications/8.png",
    description: "Data engineering and AI analytics platform.",
    link: "/certifications/databricks",
  },
];

function page() {
  return (
    <div className="bg-black">
       <FocusCards cards={cards} />
    </div>
  )
}

export default page