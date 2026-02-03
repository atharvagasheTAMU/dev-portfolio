import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../assets/styles/Project.scss";

function Project() {
    const projects = [
        {
            title: "Python Raft KV",
            href: "https://github.com/atharvagasheTAMU/python-raft-kv",
            description:
                "Distributed key-value store in Python using a Go Raft bridge over HTTP. Throughput around 1,000 ops/sec with benchmarking and tests.",
        },
        {
            title: "PaperChat",
            href: "https://github.com/atharvagasheTAMU/PaperChat",
            description:
                "Research assistant for chatting with papers using retrieval and LLM workflows. Built to speed up literature review and Q&A.",
        },
        {
            title: "Parallel Matrix Multiplication",
            href: "https://github.com/atharvagasheTAMU/parallel-matrix-multiplication",
            description:
                "Parallelized matrix multiplication with a focus on performance and scalability for larger inputs.",
        },
        {
            title: "Sparse-View 3DGS Pack",
            href: "https://github.com/Advanced-Vision-and-Learning-Lab/sparse-view-3dgs-pack",
            description:
                "Sparse-view 3D Gaussian Splatting pipeline with a DWT loss for improved high-frequency detail reconstruction.",
        },
        {
            title: "NEHD_UATR",
            href: "https://github.com/Advanced-Vision-and-Learning-Lab/NEHD_UATR",
            description:
                "Neural Edge Histogram Descriptors for underwater acoustic target recognition.",
        },
        {
            title: "MEP-SiPLM",
            href: "https://github.com/atharvagasheTAMU/MEP-SiPLM",
            description:
                "Modeling and simulation work focused on signal processing and pattern learning methods.",
        },
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => {
                    const isGithub = project.href.includes("github.com");
                    const LinkIcon = isGithub ? GitHubIcon : OpenInNewIcon;

                    return (
                        <div className="project" key={project.href}>
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                className="project-thumb"
                                aria-label={`${project.title} link`}
                            >
                                <span className="project-thumb__inner">
                                    <LinkIcon fontSize="inherit" />
                                </span>
                            </a>
                            <a href={project.href} target="_blank" rel="noreferrer">
                                <h2>{project.title}</h2>
                            </a>
                            <p>{project.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;