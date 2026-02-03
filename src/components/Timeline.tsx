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
            contentStyle={{ background: 'rgba(20, 22, 28, 0.92)', color: '#f5f5f5', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(20, 22, 28, 0.92)' }}
            date="May 2024 - December 2025"
            iconStyle={{ background: '#5000ca', color: '#f5f5f5' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Texas A&M University, College Station, TX</h4>
            <p>
               Computer Vision, Acoustics, 3D Scene Reconstruction, Signal Processing, Generative AI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022 - July 2023"
            contentStyle={{ background: 'rgba(20, 22, 28, 0.92)', color: '#f5f5f5', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(20, 22, 28, 0.92)' }}
            iconStyle={{ background: '#5000ca', color: '#f5f5f5' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">ACI Worldwide, Maharashtra, India</h4>
            <p>
            Full-stack Development, Cloud Computing, CICD, API Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 2020 - June 2020"
            contentStyle={{ background: 'rgba(20, 22, 28, 0.92)', color: '#f5f5f5', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(20, 22, 28, 0.92)' }}
            iconStyle={{ background: '#5000ca', color: '#f5f5f5' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cloud Services and Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">LTIMindtree, Pune, Maharashtra, India</h4>
            <p>
              Full-stack Development, Cloud Computing, CICD, API Development
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;