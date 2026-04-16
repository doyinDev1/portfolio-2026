"use client";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={`${styles.shell} container`}>
                <div className={styles.top}>
                    <p className={styles.tagline}>Have a product that deserves better frontend?</p>
                    <h2 className={styles.email}>
                        Let&apos;s build the thing people remember after the demo ends.
                    </h2>
                    <div className={styles.actions}>
                        <a href="mailto:hello@adedoyin.dev" className={styles.primaryLink}>
                            hello@adedoyin.dev
                        </a>
                        <a href="#work" className={styles.secondaryLink}>
                            Revisit the work
                        </a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; 2026 Adedoyin. Built with taste, systems thinking, and motion.</p>
                    <div className={styles.socials}>
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                        <a href="#">X / Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
