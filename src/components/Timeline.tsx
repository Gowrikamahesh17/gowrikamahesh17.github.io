import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="04/2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master in Applied Data Science and Analytics</h3>
            <h4 className="vertical-timeline-element-subtitle">SRH University Heidelberg, Germany</h4>
            <p>
              Agentic AI, GenAI Systems, LLM Orchestration, RAG Pipelines, Responsible AI, Explainable ML
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01/2023 – 04/2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">System Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sigma-Aldrich (Merck Group), Bangalore, India</h4>
            <p>
              Windows Server Administration, Identity Management (IDM), Active Directory, Global Security Projects, Passkey Authentication Deployment, OneAD & D1D Migration
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="04/2018 – 07/2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor in Computer Science and Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">ATME College of Engineering, India</h4>
            <p>
              Computer Science fundamentals, Software Engineering, Data Structures, Algorithms
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;