import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="CitePrism thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>CitePrism: LLM-Driven Citation Auditing System</h2></a>
                <p>Architected an end-to-end LLM pipeline (Gemini, Llama-3.1, embeddings) for manuscript citation auditing. Features a hybrid scoring engine, four-tier API strategy with hallucination guards, SQLite audit trails, and a Streamlit analytics interface with real-time diagnostics.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="Responsible AI Healthcare Agent thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>Responsible AI Healthcare Agent</h2></a>
                <p>Designed a ReAct autonomous agent for hospital readmission prediction, orchestrating an end-to-end ML pipeline with privacy scrubbing, XAI, and fairness auditing. Integrated a RAG system grounded in HIPAA/GDPR/EU AI Act policy text for policy-aware recommendations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="Multi-Agent RAG Pipeline thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>Multi-Agent RAG Pipeline for Policy Documents</h2></a>
                <p>Orchestrated a 15-agent RAG system using finite-state machine design, coordinating specialized retrieval, debate, verification, and synthesis agents. Integrated TF-IDF with transformer models for high-accuracy multilingual cross-document reasoning and regulatory compliance.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;