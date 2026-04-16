"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const leadRef = useRef<HTMLParagraphElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const metricsRef = useRef<HTMLUListElement>(null);
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
                [actionsRef.current, metricsRef.current, panelRef.current, marqueeRef.current],
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
                        Lagos / Remote Worldwide / Frontend Engineer
                    </p>
                    <h1 ref={titleRef} className={styles.title}>
                        I build interfaces that <span>steal the room</span> and still ship at
                        <span> product speed.</span>
                    </h1>
                    <p ref={leadRef} className={styles.lead}>
                        The work lives where design taste, motion discipline, accessibility, and
                        frontend systems all meet. Premium feel, zero fluff, measurable outcomes.
                    </p>
                    <div ref={actionsRef} className={styles.actions}>
                        <a href="#work" className={styles.primaryAction}>
                            View selected work
                        </a>
                        <a href="mailto:hello@adedoyin.dev" className={styles.secondaryAction}>
                            Book a build sprint
                        </a>
                    </div>
                    <ul ref={metricsRef} className={styles.metrics}>
                        <li>
                            <strong>60fps</strong>
                            <span>Motion that earns attention without slowing product down.</span>
                        </li>
                        <li>
                            <strong>Design-minded</strong>
                            <span>Sharp typography, pacing, hierarchy, and UI restraint.</span>
                        </li>
                        <li>
                            <strong>System-first</strong>
                            <span>Reusable components and architecture teams can actually scale.</span>
                        </li>
                    </ul>
                </div>

                <div ref={panelRef} className={styles.panel}>
                    <div className={styles.panelHeader}>
                        <span className={styles.panelKicker}>Current Edge</span>
                        <span className={styles.panelPill}>Available for select work</span>
                    </div>
                    <div className={styles.panelBody}>
                        <p className={styles.panelLead}>
                            Beautiful products are not enough. They need clarity, speed, and a
                            front-end that feels inevitable.
                        </p>
                        <div className={styles.signalGrid}>
                            <article>
                                <span>01</span>
                                <h2>Motion With Restraint</h2>
                                <p>Animation should guide focus, not audition for attention.</p>
                            </article>
                            <article>
                                <span>02</span>
                                <h2>Premium Product Feel</h2>
                                <p>Interfaces that feel expensive before a user reads a word.</p>
                            </article>
                            <article>
                                <span>03</span>
                                <h2>Engineerable Design</h2>
                                <p>Design systems and code structure that scale with the team.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={marqueeRef} className={styles.marquee}>
                <div className={styles.marqueeTrack}>
                    <span>Frontend Systems</span>
                    <span>Creative Direction</span>
                    <span>Motion Design</span>
                    <span>Performance</span>
                    <span>Design Systems</span>
                    <span>Accessibility</span>
                    <span>Frontend Systems</span>
                    <span>Creative Direction</span>
                    <span>Motion Design</span>
                    <span>Performance</span>
                    <span>Design Systems</span>
                    <span>Accessibility</span>
                </div>
            </div>
        </section>
    );
}
