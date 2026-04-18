"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.shell} container`}>
                <Link href="/" className={styles.brand}>
                    <span className={styles.brandMark}>AD</span>
                    <span className={styles.brandText}>
                        <strong>ADEDOYIN</strong>
                        <small>React, Next.js, Performance, UX</small>
                    </span>
                </Link>
                <div className={styles.links}>
                    <Link href="#work">Work</Link>
                    <Link href="#about">About</Link>
                    <Link href="#open-to-work">Open to Work</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <a href="mailto:hello@adedoyin.dev" className={styles.cta}>
                    Open to work
                </a>
            </div>
        </nav>
    );
}
