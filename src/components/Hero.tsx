"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            titleRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
        ).fromTo(
            subtitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=1"
        );
    }, []);

    return (
        <section ref={containerRef} className={styles.hero}>
            <div className={styles.content}>
                <h1 ref={titleRef} className={styles.title}>
                    Crafting Digital<br />
                    <span>Experiences</span>
                </h1>
                <p ref={subtitleRef} className={styles.subtitle}>
                    Frontend Engineer & Creative Developer
                </p>
            </div>
        </section>
    );
}
