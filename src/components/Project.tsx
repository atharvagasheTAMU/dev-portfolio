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
                "Parallelized matrix multiplication with a focus on performance and scalability for larger inputs using CUDA and OpenMP.",
        },
        {
            title: "Sparse-View 3DGS",
            href: "https://github.com/Advanced-Vision-and-Learning-Lab/sparse-view-3dgs-pack",
            description:
                "Proposed a novel modethod for Sparse-View Scene Reconstruction using Local and Global Discrete Wavelet-Regularized 3D Gaussian Splatting.",
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
                "Protein mutation effect prediction using structure information and protein language models, with preprocessing, training, and benchmarking utilities.",
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