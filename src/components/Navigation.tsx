"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">ADEDOYIN.</Link>
            </div>
            <div className={styles.links}>
                <Link href="#work">Work</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </nav>
    );
}
