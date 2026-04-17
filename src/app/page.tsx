import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import LocalSeoSection from "@/components/LocalSeoSection";
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
          "Frontend developer in Nigeria, based in Lagos, building high-performance websites, SaaS frontends, and premium digital product experiences.",
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
        areaServed: ["Lagos", "Nigeria"],
        description:
          "Frontend development services for startups, product teams, and brands in Nigeria and remote teams worldwide.",
        serviceType: [
          "Frontend development",
          "React development",
          "Next.js development",
          "Landing page development",
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
      <LocalSeoSection />
      <Footer />
    </main>
  );
}
