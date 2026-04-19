"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./OpenToWorkSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHTS = [
    {
        title: "Best-fit roles",
        description:
            "Remote frontend engineering roles and product-focused contract work where React, Next.js, UX, and performance directly affect the product experience.",
    },
    {
        title: "What teams get",
        description:
            "Clean frontend architecture, thoughtful UI decisions, strong collaboration, and the kind of polish that helps products feel more credible and easier to use.",
    },
    {
        title: "How I work",
        description:
            "Async-friendly, detail-oriented, and comfortable partnering with design, product, and backend teams across time zones.",
    },
];

const FAQS = [
    {
        question: "What opportunities are you open to?",
        answer:
            "I am open to remote full-time frontend roles, contract engagements, and collaborations where product quality and user experience genuinely matter.",
    },
    {
        question: "Where do you add the most value?",
        answer:
            "I do my best work on SaaS products, dashboards, marketing sites, and web apps that need better frontend structure, stronger UX, and sharper performance.",
    },
    {
        question: "What can you own end to end?",
        answer:
            "I can lead frontend implementation across landing pages, product interfaces, design system work, performance improvement, and UI refinement for existing products.",
    },
];

export default function OpenToWorkSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                `.${styles.intro}`,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.fromTo(
                `.${styles.card}`,
                { y: 36, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: `.${styles.highlights}`,
                        start: "top 78%",
                    },
                }
            );

            gsap.fromTo(
                [`.${styles.faqTitle}`, `.${styles.faqItem}`],
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: `.${styles.faq}`,
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="open-to-work"
            ref={sectionRef}
            className={styles.section}
            aria-labelledby="open-to-work-heading"
        >
            <div className={`${styles.container} container`}>
                <div className={styles.intro}>
                    <p className={styles.label}>Open to Work</p>
                    <h2 id="open-to-work-heading" className={styles.heading}>
                        Available for remote frontend roles, product teams, and high-impact contract work.
                    </h2>
                    <p className={styles.description}>
                        I am open to opportunities with global teams that care about product quality,
                        user experience, and shipping responsibly. If you need a frontend engineer who
                        can combine React and Next.js execution with UX judgment, performance thinking,
                        and clear communication, I would be glad to talk.
                    </p>
                    <div className={styles.actions}>
                        <a href="mailto:adedoyin27@gmail.com" className={styles.primaryAction}>
                            Email me about a role
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adedoyin-oyebanji-949a13165/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.secondaryAction}
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>

                <div className={styles.highlights}>
                    {HIGHLIGHTS.map((item, index) => (
                        <article key={item.title} className={styles.card}>
                            <span className={styles.index}>0{index + 1}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>

                <div className={styles.faq}>
                    <h3 className={styles.faqTitle}>What global teams usually want to know</h3>
                    <div className={styles.faqList}>
                        {FAQS.map((faq) => (
                            <article key={faq.question} className={styles.faqItem}>
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
