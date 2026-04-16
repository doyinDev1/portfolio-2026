export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ethereal Echoes",
    description: "A generative art experiment exploring the intersection of light and sound.",
    category: "Creative Coding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "https://example.com",
    year: "2024",
  },
  {
    id: 2,
    title: "Quantum Nexus",
    description: "Next-gen dashboard for real-time quantum computing visualization.",
    category: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
    link: "https://example.com",
    year: "2023",
  },
  {
    id: 3,
    title: "Lumina Studio",
    description: "Boutique digital agency portfolio with high-performance animations.",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    link: "https://example.com",
    year: "2024",
  },
  {
    id: 4,
    title: "Solaris Mobile",
    description: "A sustainable energy tracking app for individual households.",
    category: "Mobile UI/UX",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
    link: "https://example.com",
    year: "2023",
  },
];
