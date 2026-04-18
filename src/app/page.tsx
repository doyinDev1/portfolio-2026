import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import OpenToWorkSection from "@/components/OpenToWorkSection";
import styles from "./page.module.css";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Adedoyin",
        jobTitle: "Frontend Developer",
        description:
          "Frontend engineer based in Lagos, building high-performance React and Next.js products for startups and remote teams worldwide.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        homeLocation: {
          "@type": "Place",
          name: "Lagos, Nigeria",
        },
        knowsAbout: [
          "Frontend Development",
          "React",
          "Next.js",
          "JavaScript",
          "TypeScript",
          "UI Engineering",
          "Web Performance",
          "Design Systems",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Adedoyin Frontend Development",
        areaServed: ["Nigeria", "Worldwide"],
        description:
          "Frontend engineering services for startups, product teams, and global companies that need React, Next.js, UX refinement, and performance-focused execution.",
        serviceType: [
          "Frontend engineering",
          "React development",
          "Next.js development",
          "Performance optimization",
          "Design system engineering",
        ],
      },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <Hero />
      <ProjectsSection />
      <About />
      <OpenToWorkSection />
      <Footer />
    </main>
  );
}
