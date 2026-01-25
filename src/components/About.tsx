"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

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
            <div className={styles.container} ref={textRef}>
                <p className={styles.label}>[ About Me ]</p>
                <h2 className={styles.heading}>
                    I build products that bridge the gap between design and technology.
                </h2>
                <p className={styles.description}>
                    With over 5 years of experience in frontend engineering, I specialize in
                    creating high-performance, accessible, and visually stunning web applications.
                    My approach is rooted in clean code, user-centric design, and a deep
                    understanding of the latest web standards.
                </p>
            </div>
        </section>
    );
}
