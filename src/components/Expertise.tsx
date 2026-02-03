import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Java",
    "C/C++",
    "Golang",
    "SQL",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS",
    "React",
    "Angular",
    "Spring Boot",
    "Node.js",
    "FASTAPI",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Elasticsearch",
    "Apache Kafka",
    "Apache Spark",
];

const labelsSecond = [
    "Linux",
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Jira",
    "Jenkins",
    "GCP",
    "Datadog",
];

const labelsThird = [
    "Pytorch",
    "TensorFlow",
    "Pytorch Lightning",
    "Torchaudio",
    "Torchvision",
    "openCV",
    "OpenAI",
    "LangChain",
    "LangGraph",
    "Hugging Face",
    "LlamaIndex",
    "Chroma DB",
    "Qdrant",
    "Pinecone"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build production-ready web applications end to end, from responsive and accessible UIs in React/TypeScript to robust APIs and services. I’m comfortable owning the full SDLC: system design, implementation, testing, performance, and shipping features that users can trust.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I focus on repeatable delivery: containerized builds, CI/CD pipelines, and reliable deployments with monitoring and fast rollback paths. From local dev to cloud, I help teams automate what’s painful and keep systems observable, scalable, and secure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Computer Vision & Generative AI</h3>
                    <p>I work at the intersection of research and engineering, building CV/ML pipelines and modern GenAI applications (RAG, agents, evaluation) that integrate cleanly into real products. My approach is pragmatic: strong baselines, measurable improvements, and deployable solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;