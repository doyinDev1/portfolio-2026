"use client";

import Image from "next/image";
import { Project } from "@/constants/projects";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
    console.log(project, "project")
    return (
        <article className={styles.card}>
            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.imageWrapper}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <span className={styles.overlayLabel}>View project</span>
                    <span className={styles.year}>{project.year}</span>
                </div>
            </a>
            <div className={styles.info}>
                <div className={styles.meta}>
                    <p className={styles.category}>{project.category}</p>
                    <span className={styles.yearInline}>{project.year}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    Open case study
                </a>
            </div>
        </article>
    );
}
