"use client";

import Image from "next/image";
import { Project } from "@/constants/projects";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <span className={styles.year}>{project.year}</span>
                </div>
            </div>
            <div className={styles.info}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.category}>{project.category}</p>
            </div>
        </div>
    );
}
