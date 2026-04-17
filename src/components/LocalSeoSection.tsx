import styles from "./LocalSeoSection.module.css";

const SERVICES = [
    {
        title: "React and Next.js development",
        description:
            "Frontend development focused on React and Next.js for product interfaces, web applications, and high-performance user experiences.",
    },
    {
        title: "SaaS and product frontends",
        description:
            "Frontend systems for dashboards, product experiences, and customer-facing interfaces built with clean architecture and strong UX thinking.",
    },
    {
        title: "UI polish, motion, and optimization",
        description:
            "Refinement work for teams that already have a product but need better hierarchy, smoother interactions, and improved performance.",
    },
];

const FAQS = [
    {
        question: "Do you work with startups in Lagos?",
        answer:
            "Yes. I am based in Lagos, Nigeria, and I work with startups, founders, and product teams that need frontend support for launch work, redesigns, or ongoing product improvement.",
    },
    {
        question: "What kind of frontend projects do you take on?",
        answer:
            "I mainly work on React and Next.js projects, including web applications, product dashboards, frontend architecture, design system work, and performance optimization.",
    },
    {
        question: "Do you only work with companies in Nigeria?",
        answer:
            "No. I am based in Lagos, Nigeria, but I also work remotely with international teams that want premium frontend execution and strong communication.",
    },
    {
        question: "Can you improve an existing product instead of starting from scratch?",
        answer:
            "Absolutely. A lot of the value is in improving what already exists, whether that means UI cleanup, performance fixes, better component structure, or a more refined frontend experience.",
    },
];

export default function LocalSeoSection() {
    return (
        <section className={styles.section} aria-labelledby="lagos-frontend-heading">
            <div className={`${styles.container} container`}>
                <div className={styles.intro}>
                    <p className={styles.label}>Frontend Developer in Nigeria</p>
                    <h2 id="lagos-frontend-heading" className={styles.heading}>
                        Need a frontend developer in Nigeria who can work with your team remotely?
                    </h2>
                    <p className={styles.description}>
                        This portfolio is built to show the kind of frontend work I do best:
                        premium websites, product interfaces, and performance-conscious user
                        experiences. I am based in Lagos, Nigeria, and work with startups, brands,
                        and product teams locally and remotely. If your team needs a frontend
                        developer who understands both design quality and engineering discipline,
                        you are in the right place.
                    </p>
                </div>

                <div className={styles.services}>
                    {SERVICES.map((service, index) => (
                        <article key={service.title} className={styles.card}>
                            <span className={styles.index}>0{index + 1}</span>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>

                <div className={styles.faq}>
                    <h3 className={styles.faqTitle}>Common questions</h3>
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
