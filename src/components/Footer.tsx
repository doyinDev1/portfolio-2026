"use client";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.tagline}>Got a project in mind?</p>
                <h2 className={styles.email}>
                    <a href="mailto:hello@adedoyin.dev">Let&apos;s talk.</a>
                </h2>
            </div>
            <div className={styles.bottom}>
                <p>&copy; 2024 Adedoyin. All rights reserved.</p>
                <div className={styles.socials}>
                    <a href="#">LinkedIn</a>
                    <a href="#">GitHub</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
