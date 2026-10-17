import React from 'react';
import { 
  Server, 
  Workflow, 
  ShieldCheck, 
  MapPin, 
  Briefcase, 
  Cpu 
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import './About.css';

export default function About() {
  const { personalInfo } = resumeData;

  const competencies = [
    {
      icon: Server,
      title: 'Microservices & REST APIs',
      desc: 'Extensive background designing decoupled microservices, database-per-service architectures, resilient REST endpoints, and rigorous request validation.'
    },
    {
      icon: Workflow,
      title: 'Event-Driven Streaming',
      desc: 'Implementing asynchronous event pipelines with Apache Kafka, consumer groups, retry mechanisms, and Redis caching for ultra-low latency response times.'
    },
    {
      icon: Cpu,
      title: 'Spring AI & Modern Cloud',
      desc: 'Integrating Spring AI for automated document insights and intelligent extraction, AWS S3 for secure document storage, and containerized Docker environments.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Engineering Overview</span>
          <h2 className="section-title">About My Background</h2>
          <p className="section-subtitle">
            Reliable, secure, and production-tested backend services across Healthcare and BFSI domains.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="about-narrative glass-panel">
            <h3 className="narrative-heading">
              Backend Engineer with a Focus on Performance & Security
            </h3>

            <p className="narrative-text">
              {personalInfo.bio}
            </p>

            <div className="about-meta-pills">
              <div className="meta-pill">
                <MapPin size={16} className="pill-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="meta-pill">
                <Briefcase size={16} className="pill-icon" />
                <span>4 Years Commercial Experience</span>
              </div>
              <div className="meta-pill">
                <ShieldCheck size={16} className="pill-icon" />
                <span>Healthcare & BFSI Compliance</span>
              </div>
            </div>
          </div>

          {/* Competency Highlights */}
          <div className="about-competencies-col">
            {competencies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="competency-card glass-panel">
                  <div className="comp-icon-box">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="comp-title">{item.title}</h4>
                    <p className="comp-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
