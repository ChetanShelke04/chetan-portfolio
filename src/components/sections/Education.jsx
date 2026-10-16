import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { resumeData } from '../../data/resume';
import './Education.css';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Academic Foundation</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal computer science degree qualifications.
          </p>
        </div>

        {/* Education Grid */}
        <div className="education-cards-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-panel education-item-card">
              <div className="edu-avatar-box">
                <GraduationCap size={28} />
              </div>

              <div className="edu-details-body">
                <div className="edu-title-row">
                  <h3 className="degree-name">{edu.degree}</h3>
                  <span className="badge edu-time-badge">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </span>
                </div>

                <p className="institution-name">{edu.institution}</p>

                <div className="edu-status-note">
                  <Award size={15} className="award-icon" />
                  <span>Computer Applications & Software Engineering Curriculum</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
