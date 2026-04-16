"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import styles from "./ProjectsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        const header = headerRef.current;

        if (!section || !container || !header) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                const getScrollDistance = () =>
                    Math.max(0, container.scrollWidth - section.clientWidth);

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        scrub: 1,
                        start: "top top",
                        end: () => `+=${getScrollDistance()}`,
                        invalidateOnRefresh: true,
                    },
                });

                timeline.to(
                    container,
                    {
                        x: () => -getScrollDistance(),
                        ease: "none",
                    },
                    0
                );

                timeline.to(
                    header,
                    {
                        yPercent: -140,
                        opacity: 0,
                        ease: "power1.out",
                    },
                    0
                );

                ScrollTrigger.refresh();
            });

            mm.add("(max-width: 768px)", () => {
                gsap.set(container, { clearProps: "all" });
                gsap.set(header, { clearProps: "all" });
            });

            return () => mm.revert();
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={sectionRef} className={styles.section}>
            <div className={styles.sticky}>
                <div ref={headerRef} className={styles.header}>
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
