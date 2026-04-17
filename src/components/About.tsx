"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
    {
        title: "React and Next.js development",
        description:
            "I build React and Next.js frontends for startups and product teams that need speed, clarity, and a polished user experience.",
    },
    {
        title: "Performance and UI engineering",
        description:
            "My frontend work balances motion, responsiveness, accessibility, and performance so the experience feels premium without becoming heavy.",
    },
    {
        title: "Scalable systems for teams",
        description:
            "I create reusable components and frontend structure that help growing teams ship faster with consistency.",
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
                    <p className={styles.label}>Based in Lagos, Nigeria</p>
                    <h2 className={styles.heading}>
                        I help startups and product teams build fast, polished digital products.
                    </h2>
                    <p className={styles.description}>
                        If you are looking for a frontend developer based in Lagos, Nigeria who can
                        handle product thinking, interface quality, motion, and code structure
                        together, that is exactly where I do my best work. I partner with teams in
                        Nigeria and remote companies worldwide that need premium frontend execution
                        without the usual mess.
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
