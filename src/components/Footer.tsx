
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={`${styles.shell} container`}>
                <div className={styles.top}>
                    <p className={styles.tagline}>Open to remote roles and select freelance work</p>
                    <h2 className={styles.email}>
                        Need a frontend engineer who can sharpen UX and ship performant React and
                        Next.js work?
                    </h2>
                    <div className={styles.actions}>
                        <a href="mailto:adedoyin27@gmail.com" className={styles.primaryLink}>
                            adedoyin27@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adedoyin-oyebanji-949a13165/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.secondaryLink}
                        >
                            View LinkedIn
                        </a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; 2026 Adedoyin. Building thoughtful frontend experiences from Lagos for teams worldwide.</p>
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
