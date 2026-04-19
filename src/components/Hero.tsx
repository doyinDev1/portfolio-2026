"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";
import { MARQUEE_TEXT } from "@/constants/projects";

export default function Hero() {
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const leadRef = useRef<HTMLParagraphElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            eyebrowRef.current,
            { y: 32, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
        )
            .fromTo(
                titleRef.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 },
                "-=0.2"
            )
            .fromTo(
                leadRef.current,
                { y: 42, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 },
                "-=0.7"
            )
            .fromTo(
                [actionsRef.current, panelRef.current, marqueeRef.current],
                { y: 28, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
                "-=0.45"
            );
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.glowOne} />
            <div className={styles.glowTwo} />
            <div className={`${styles.shell} container`}>
                <div className={styles.copy}>
                    <p ref={eyebrowRef} className={styles.eyebrow}>
                        Frontend Engineer / Lagos to Worldwide / Open to Remote Roles
                    </p>
                    <h1 ref={titleRef} className={styles.title}>
                        Frontends <span>that feel fast, clear, and ready to scale.</span>
                    </h1>
                    <p ref={leadRef} className={styles.lead}>
                        I help startups and product teams ship polished web experiences with strong
                        UX, clean frontend architecture, and performance that holds up in the real
                        world.
                    </p>
                    <div ref={actionsRef} className={styles.actions}>
                        <a href="#work" className={styles.primaryAction}>
                            View work
                        </a>
                        <a href="mailto:adedoyin27@gmail.com" className={styles.secondaryAction}>
                            Email me about a role
                        </a>
                    </div>
                </div>

                <div ref={panelRef} className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <span className={styles.panelKicker}>What I Bring</span>
                        <span className={styles.panelPill}>React, Next.js, UX, performance</span>
                    </div>
                    <div className={styles.panelBody}>
                        <p className={styles.panelLead}>
                            I build frontend systems that improve how products look, feel, and
                            perform for real users.
                        </p>
                        <div className={styles.signalGrid}>
                            <article>
                                <span>01</span>
                                <h2>Product-minded execution</h2>
                                <p>I think beyond screens to flows, friction, and business goals.</p>
                            </article>
                            <article>
                                <span>02</span>
                                <h2>Performance-first UX</h2>
                                <p>Fast interfaces build trust, reduce drop-off, and feel better to use.</p>
                            </article>
                            <article>
                                <span>03</span>
                                <h2>Scalable frontend systems</h2>
                                <p>Reusable components and clear structure help teams ship with confidence.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={marqueeRef} className={styles.marquee}>
                <div className={styles.marqueeTrack}>
                    {MARQUEE_TEXT.map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
