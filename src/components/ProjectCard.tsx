"use client";

import Image from "next/image";
import { Project } from "@/constants/projects";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
    const media = project.image ? (
        <>
            <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className={styles.image}
            />
            <div className={styles.overlay}>
                <span className={styles.overlayLabel}>View App</span>
                <span className={styles.year}>{project.year}</span>
            </div>
        </>
    ) : (
        <div className={styles.placeholder}>
            <span className={styles.placeholderLabel}>Project Preview</span>
            <strong>{project.title}</strong>
            <p>Visual asset can be dropped in here.</p>
        </div>
    );

    return (
        <article className={styles.card}>
            {project.link ? (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.imageWrapper}
                >
                    {media}
                </a>
            ) : (
                <div className={styles.imageWrapper}>{media}</div>
            )}
            <div className={styles.info}>
                <div className={styles.meta}>
                    <p className={styles.category}>{project.category}</p>
                    <span className={styles.yearInline}>{project.year}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                    >
                        Open App
                    </a>
                ) : (
                    <span className={styles.linkMuted}>Case study available on request</span>
                )}
            </div>
        </article>
    );
}
