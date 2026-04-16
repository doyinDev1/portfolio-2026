"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
    {
        title: "Design taste in code",
        description:
            "I care about type, spacing, rhythm, and motion enough to preserve the design idea all the way through implementation.",
    },
    {
        title: "Performance without compromise",
        description:
            "I like products that look cinematic but still load quickly, stay accessible, and remain stable under real interaction.",
    },
    {
        title: "Systems teams can scale",
        description:
            "The goal is never a clever one-off. It is a design system and frontend structure a product team can trust long-term.",
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
                    <p className={styles.label}>Why teams bring me in</p>
                    <h2 className={styles.heading}>
                        I build products that bridge the gap between design and technology.
                    </h2>
                    <p className={styles.description}>
                        I work best on ambitious digital products that need more than a good UI.
                        They need hierarchy, motion, performance, accessibility, and frontend
                        architecture to move as one. That is the lane I love.
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
