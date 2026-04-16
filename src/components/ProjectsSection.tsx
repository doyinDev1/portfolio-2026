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
                const getScrollEnd = () =>
                    getScrollDistance() + window.innerHeight * 0.35;

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        scrub: 1,
                        pinSpacing: true,
                        anticipatePin: 1,
                        start: "top top",
                        end: () => `+=${getScrollEnd()}`,
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
                    <div className={styles.headingBlock}>
                        <p className={styles.eyebrow}>Selected Work</p>
                        <h2 className={styles.title}>
                            Selected projects with strong visuals, clean systems, and proper frontend craft.
                        </h2>
                    </div>
                    <div className={styles.headerMeta}>
                        <span className={styles.counter}>0{PROJECTS.length}</span>
                        <p className={styles.intro}>
                            A cleaner horizontal reel so each project lands properly in view.
                        </p>
                    </div>
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
