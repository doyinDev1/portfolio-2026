"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import styles from "./ProjectsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;

        if (!section || !container) return;

        const totalWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth;

        const ctx = gsap.context(() => {
            gsap.to(container, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${scrollDistance}`,
                    invalidateOnRefresh: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={sectionRef} className={styles.section}>
            <div className={styles.sticky}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Selected Works</h2>
                    <span className={styles.counter}>/ 04</span>
                </div>
                <div ref={containerRef} className={styles.container}>
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
