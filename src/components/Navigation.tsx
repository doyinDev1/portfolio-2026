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
                        <small>Frontend Systems + Motion Craft</small>
                    </span>
                </Link>
                <div className={styles.links}>
                    <Link href="#work">Work</Link>
                    <Link href="#about">About</Link>
                    <Link href="#contact">Contact</Link>
                </div>
                <a href="mailto:adedoyin27@gmail.com" className={styles.cta}>
                    Start a project
                </a>
            </div>
        </nav>
    );
}
