
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={`${styles.shell} container`}>
                <div className={styles.top}>
                    <p className={styles.tagline}>Based in Lagos, Nigeria. Working worldwide.</p>
                    <h2 className={styles.email}>
                        Let&apos;s build a fast, credible product experience your users actually remember.
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
                        <a
                            href="https://www.linkedin.com/in/adedoyin-oyebanji-949a13165/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/doyindev1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://x.com/doyin_xyz"
                            target="_blank"
                            rel="noreferrer"
                        >
                            X / Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
