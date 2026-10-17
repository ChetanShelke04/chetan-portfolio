import React from 'react';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { resumeData } from '../../data/resume';
import './Experience.css';

export default function Experience() {
  const { experience } = resumeData;

  // Key technologies associated with each role based strictly on resume data
  const getRoleTechStack = (idx) => {
    if (idx === 0) {
      return ['Java', 'Spring Boot', 'Spring AI', 'Apache Kafka', 'Redis', 'AWS S3', 'Healthcare APIs'];
    }
    return ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Spring Data JPA', 'MySQL', 'Experian API', 'BFSI'];
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Professional Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Enterprise backend engineering across healthcare and financial services (BFSI).
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience-timeline-container">
          <div className="timeline-spine"></div>

          {experience.map((item, idx) => {
            const techStack = getRoleTechStack(idx);
            const isCurrent = idx === 0;

            return (
              <div key={idx} className={`timeline-block ${isCurrent ? 'timeline-block-current' : ''}`}>
                {/* Node on Spine */}
                <div className="timeline-node">
                  <div className="node-inner">
                    <Briefcase size={16} />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="glass-panel experience-item-card">
                  <div className="exp-card-header">
                    <div className="exp-title-group">
                      <div className="role-and-badge">
                        <h3 className="exp-role-heading">{item.role}</h3>
                        {isCurrent && <span className="badge badge-emerald">Current Role</span>}
                      </div>
                      <div className="exp-company-sub">
                        <Building2 size={15} className="exp-icon" />
                        <span className="company-name">{item.company}</span>
                        <span className="bullet-sep">•</span>
                        <MapPin size={14} className="exp-icon" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="exp-period-badge">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="exp-bullets-list">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="exp-bullet-item">
                        <span className="bullet-arrow">▹</span>
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack for Role */}
                  <div className="exp-tech-footer">
                    <span className="tech-footer-label">Technologies used:</span>
                    <div className="exp-tech-tags">
                      {techStack.map((tech) => (
                        <span key={tech} className="exp-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
