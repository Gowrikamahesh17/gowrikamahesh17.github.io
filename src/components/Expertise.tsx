import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Gemini",
    "Llama",
    "LLM Orchestration",
    "RAG Pipelines",
    "LangChain",
    "LangGraph",
    "Prompt Engineering",
    "Streamlit",
    "Hugging Face",
    "scikit-learn",
    "TensorFlow",
    "Neural Networks",
    "Predictive Modeling",
    "Clustering",
];

const labelsSecond = [
    "Autonomous Agents",
    "ReAct Frameworks",
    "Multi-Agent Orchestration",
    "State Machines",
    "Tool-Use LLMs",
    "ChromaDB",
    "FAISS",
    "Embeddings",
    "Semantic Chunking",
    "ETL Pipelines",
    "ETL/ELT Pipelines",
    "BigQuery",
    "Databricks",
    "Advanced Tableau",
    "Data Storytelling",
];

const labelsThird = [
    "GCP",
    "Cloud Run",
    "Pub/Sub",
    "Cloud Scheduler",
    "Google Cloud Storage (GCS)",
    "Docker",
    "Docker Swarm",
    "SQL",
    "Git",
    "Git/GitHub",
    "Active Directory",
    "Windows Server",
    "Identity Management",
    "Identity Management (IDM) & Active Directory (AD)",
    "Fairlearn",
    "Differential Privacy",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Generative AI & Machine Learning</h3>
                    <p>Master's student in Applied Data Science building end-to-end GenAI systems. Hands-on experience designing LLM pipelines, RAG architectures, prompt engineering, and responsible AI solutions (fairness testing, privacy scrubbing) from ideation to operationalization.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Agentic AI & Data Retrieval</h3>
                    <p>Experienced in orchestrating multi-agent systems using ReAct frameworks, LangGraph, and finite-state machines. Skilled in building semantic retrieval pipelines with vector databases, embeddings, and serverless ETL/ELT workflows alongside interactive data storytelling solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud, Infrastructure & Systems</h3>
                    <p>Professional background in enterprise systems engineering at Merck (Sigma-Aldrich) — Windows server administration, identity management, Active Directory, and global security migration projects, with extended capabilities scaling data products across GCP, AWS, and Azure environments.</p>
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