export interface Project {
  title: string;
  tagline: string;
  role: string;
  category: "Client Platform" | "Mobile App" | "Web System";
  description: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Kusturi Website",
    tagline: "Production restaurant platform engineered for fast browsing and self-serve menu updates.",
    role: "Full-Stack Developer & Content Designer",
    category: "Client Platform",
    description: "Built a high-performance web presence integrated with a headless CMS, allowing staff to update seasonal menus dynamically while maintaining sub-second load times and fluid mobile navigation.",
    stack: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    highlights: ["Headless CMS integration", "Zero-maintenance content workflows", "Mobile-first dining UX"],
    liveUrl: "https://kusturi.com",
    image: "/projects/kusturi.webp"
  },
  {
    title: "Akter Clinic",
    tagline: "Clean, accessible healthcare web application focused on patient trust and speed.",
    role: "Product Developer & Frontend Engineer",
    category: "Client Platform",
    description: "Architected a lightweight healthcare platform featuring structured service pathways, strict accessibility adherence, and global edge delivery.",
    stack: ["Astro", "Tailwind CSS", "Cloudflare Pages"],
    highlights: ["High accessibility standards", "Intuitive service hierarchy", "Global edge caching"],
    liveUrl: "https://akterclinic.co.uk",
    image: "/projects/akter-clinic.webp"
  },
  {
    title: "LexiMate",
    tagline: "AI-assisted legal intelligence mobile application demystifying complex legal documents.",
    role: "Product Architect & Lead Mobile Developer",
    category: "Mobile App",
    description: "Engineered an end-to-end mobile solution utilizing OCR and language processing to extract dense legal text, translate jargon into clear plain-language summaries, and empower user comprehension.",
    stack: ["Flutter", "Dart", "Supabase", "OCR APIs"],
    highlights: ["Complex state management", "AI/OCR pipeline integration", "Human-centered workflow design"],
    githubUrl: "https://github.com/sadatmahmoodofficial/LexiMate-Project",
    image: "/projects/leximate.webp"
  }
];