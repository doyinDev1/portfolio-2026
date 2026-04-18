"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
    {
        title: "React and Next.js for production products",
        description:
            "I build product frontends with React, Next.js, and TypeScript for teams that need reliable delivery, maintainable code, and a polished user experience.",
    },
    {
        title: "Performance, accessibility, and UX polish",
        description:
            "I care about the details users notice immediately: load speed, interaction quality, responsiveness, accessibility, and interface clarity.",
    },
    {
        title: "Frontend decisions that support growth",
        description:
            "I bring product thinking to implementation so the frontend does more than look good. It helps teams ship faster and helps users move with less friction.",
    },
];

export default function About() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        gsap.fromTo(
            textRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="about" className={styles.about}>
            <div className={`${styles.container} container`} ref={textRef}>
                <div className={styles.intro}>
                    <p className={styles.label}>About</p>
                    <h2 className={styles.heading}>
                        Frontend engineering with product judgment.
                    </h2>
                    <p className={styles.description}>
                        I am a frontend developer based in Lagos, Nigeria, working with teams
                        across time zones. My focus is React, Next.js, performance, accessibility,
                        and UX quality. I do my best work on products that need more than pure
                        implementation. They need clear thinking, sharp details, and frontend
                        decisions that support adoption, conversion, and long-term maintainability.
                    </p>
                </div>

                <div className={styles.grid}>
                    {PILLARS.map((pillar, index) => (
                        <article key={pillar.title} className={styles.card}>
                            <span className={styles.cardIndex}>0{index + 1}</span>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
