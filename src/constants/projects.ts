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
    title: "Atlas Commerce",
    description:
      "A luxury storefront rebuilt around speed, sharper storytelling, and a checkout flow that feels frictionless.",
    category: "E-commerce Experience",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    link: "https://example.com",
    year: "2026",
  },
  {
    id: 2,
    title: "Signal OS",
    description:
      "A data-dense SaaS dashboard with motion-guided hierarchy, systemized components, and crisp interaction design.",
    category: "Product Dashboard",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
    link: "https://example.com",
    year: "2025",
  },
  {
    id: 3,
    title: "Astra Studio",
    description:
      "An editorial portfolio for a design brand that needed motion, hierarchy, and performance to feel equally premium.",
    category: "Brand Experience",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    link: "https://example.com",
    year: "2024",
  },
  {
    id: 4,
    title: "Northstar Mobile",
    description:
      "A mobile-first product interface designed to feel elegant, calm, and instantly legible under real-world usage.",
    category: "Mobile Product Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
    link: "https://example.com",
    year: "2025",
  },
];
