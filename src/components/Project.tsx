import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png'; // Make sure to add these or reuse assets
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="CitePrism thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>CitePrism: LLM-Driven Citation Auditing System</h2></a>
                <p>Architected an end-to-end LLM pipeline (Gemini, Llama-3.1, embeddings) for manuscript citation auditing. Features a hybrid relevance scoring engine, four-tier API metadata extraction with hallucination guards, SQLite audit trails, and a Streamlit analytics interface with real-time threshold tuning and network bias visualizations.</p>
            </div>

            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="Responsible AI Healthcare Agent thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>Responsible AI Healthcare Agent</h2></a>
                <p>Designed a ReAct autonomous agent for hospital readmission prediction, orchestrating an end-to-end ML pipeline with privacy scrubbing (PII removal), XAI (SHAP, LIME), and fairness auditing via Fairlearn. Integrated a RAG system grounded in HIPAA/GDPR/EU AI Act text for policy-aware recommendations.</p>
            </div>

            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="Multi-Agent RAG Pipeline thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>Multi-Agent RAG Pipeline for Policy Documents</h2></a>
                <p>Orchestrated a 15-agent RAG system using finite-state machine design, coordinating specialized retrieval, debate, verification, and synthesis agents. Integrated TF-IDF with transformer models for high-accuracy multilingual cross-document reasoning across international regulatory frameworks (OECD, IMF, UN).</p>
            </div>

            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="NASA Global Natural Events thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>NASA Global Natural Events (EONET) Pipeline</h2></a>
                <p>Engineered an event-driven serverless ETL pipeline on GCP using Cloud Run, Pub/Sub, and Cloud Scheduler to automate NASA Open Data API ingestion. Implemented clean storage strategies via Google Cloud Storage and BigQuery, deploying a Boosted Tree Classifier for disaster tracking and a Streamlit dashboard.</p>
            </div>

            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="Indian Food Menu Decider thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>Indian Food Menu Decider | Tableau Storytelling</h2></a>
                <p>Developed an advanced interactive visual storytelling dashboard analyzing 365 culinary ingredients. Engineered complex time-efficiency buckets and geolocation mapping alongside cross-regional matrix heatmaps to translate unstructured culinary sets into actionable shopping datasets.</p>
            </div>

            <div className="project">
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="Candidate Recruitment Automation thumbnail" width="100%"/></a>
                <a href="https://github.com/Gowrikamahesh17" target="_blank" rel="noreferrer"><h2>AI-Powered Candidate Recruitment Automation</h2></a>
                <p>Built a full-stack automated screening framework that reduced candidate evaluation latency by 30%. Designed an end-to-end data harvesting and ETL architecture via GitHub REST/GraphQL APIs, combined with custom feature preprocessing pipelines and a supervised machine learning classification pipeline.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;