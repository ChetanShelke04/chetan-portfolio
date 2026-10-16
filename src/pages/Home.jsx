import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Server, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  MapPin, 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/Icons';
import { resumeData } from '../data/resume';
import './Home.css';

export default function Home() {
  const { personalInfo, skills, experience, projects, education } = resumeData;

  return (
    <div className="home-page">
      {/* =========================================================================
          HERO SECTION (Preview / Scaffolding for Phase B)
          ========================================================================= */}
      <section id="hero" className="hero-section">
        <div className="container hero-container">
          {/* Status Badge */}
          <div className="hero-badge-wrapper">
            <span className="badge badge-emerald">
              <span className="status-dot"></span>
              Available for Backend & Distributed Systems Roles
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            <br />
            <span className="hero-subtitle">{personalInfo.title}</span>
          </h1>

          {/* Bio summary */}
          <p className="hero-description">
            {personalInfo.bio}
          </p>

          {/* Quick CTA buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <Link to="/resume" className="btn btn-secondary">
              <Download size={16} />
              <span>Resume & Profile</span>
            </Link>
            <Link to="/resume-builder" className="btn btn-secondary">
              <Sparkles size={16} className="sparkle-icon" />
              <span>Resume Builder</span>
            </Link>
          </div>

          {/* Metric Highlights Pill Cards */}
          <div className="hero-metrics-grid">
            <div className="glass-panel metric-card">
              <div className="metric-icon-box">
                <Server size={22} />
              </div>
              <div>
                <h3 className="metric-value">4+ Years</h3>
                <p className="metric-label">Backend Experience</p>
              </div>
            </div>

            <div className="glass-panel metric-card">
              <div className="metric-icon-box">
                <Cpu size={22} />
              </div>
              <div>
                <h3 className="metric-value">Spring AI & Kafka</h3>
                <p className="metric-label">Event-Driven Architecture</p>
              </div>
            </div>

            <div className="glass-panel metric-card">
              <div className="metric-icon-box">
                <Database size={22} />
              </div>
              <div>
                <h3 className="metric-value">Postgres, MySQL, Redis</h3>
                <p className="metric-label">Relational & In-Memory Caching</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT SECTION
          ========================================================================= */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge">About Me</span>
            <h2 className="section-title">Architecting Secure & Scalable Backends</h2>
            <p className="section-subtitle">A quick introduction to my engineering philosophy and domain experience.</p>
          </div>

          <div className="about-card glass-panel">
            <div className="about-bio-text">
              <p>{personalInfo.bio}</p>
            </div>
            <div className="about-meta-grid">
              <div className="meta-item">
                <MapPin size={18} className="meta-icon" />
                <div>
                  <span className="meta-title">Location</span>
                  <p className="meta-desc">{personalInfo.location}</p>
                </div>
              </div>
              <div className="meta-item">
                <Mail size={18} className="meta-icon" />
                <div>
                  <span className="meta-title">Email</span>
                  <p className="meta-desc">{personalInfo.email}</p>
                </div>
              </div>
              <div className="meta-item">
                <Phone size={18} className="meta-icon" />
                <div>
                  <span className="meta-title">Phone</span>
                  <p className="meta-desc">{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SKILLS SECTION
          ========================================================================= */}
      <section id="skills" className="section-padding section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge">Technical Stack</span>
            <h2 className="section-title">Core Skills & Technologies</h2>
            <p className="section-subtitle">Categorized breakdown strictly based on verified enterprise background.</p>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass-panel skill-category-card">
                <h3 className="category-title">{category}</h3>
                <div className="skill-tags">
                  {items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPERIENCE SECTION
          ========================================================================= */}
      <section id="experience" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge">Career Journey</span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">Enterprise engineering and backend development roles.</p>
          </div>

          <div className="experience-timeline">
            {experience.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  <Briefcase size={16} />
                </div>
                <div className="glass-panel timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-company">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="badge exp-period">{exp.period}</span>
                  </div>

                  <ul className="exp-highlights">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROJECTS SECTION
          ========================================================================= */}
      <section id="projects" className="section-padding section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge">Featured Work</span>
            <h2 className="section-title">System Architecture & Projects</h2>
            <p className="section-subtitle">Distributed systems, microservices, and AI-enabled backend solutions.</p>
          </div>

          <div className="projects-grid">
            {projects.map((proj, pIdx) => (
              <div key={pIdx} className="glass-panel project-card">
                <div className="project-card-header">
                  <span className="badge badge-emerald">{proj.category}</span>
                  <h3 className="project-title">{proj.title}</h3>
                </div>

                <ul className="project-highlights">
                  {proj.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>

                <div className="project-tech-stack">
                  {proj.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDUCATION SECTION
          ========================================================================= */}
      <section id="education" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="badge">Education</span>
            <h2 className="section-title">Academic Background</h2>
          </div>

          <div className="education-grid">
            {education.map((edu, eIdx) => (
              <div key={eIdx} className="glass-panel education-card">
                <div className="edu-icon-box">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-inst">{edu.institution}</p>
                  <span className="badge edu-period">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT SECTION
          ========================================================================= */}
      <section id="contact" className="section-padding section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge">Get in Touch</span>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Interested in collaborating or discussing high-scale backend engineering?</p>
          </div>

          <div className="contact-box glass-panel">
            <div className="contact-info-col">
              <h3>Direct Contact Information</h3>
              <p>Feel free to reach out via email, phone, or LinkedIn.</p>

              <div className="contact-links-list">
                <a href={`mailto:${personalInfo.email}`} className="contact-link-item">
                  <Mail size={18} />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-link-item">
                  <Phone size={18} />
                  <span>{personalInfo.phone}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <LinkedinIcon size={18} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <GithubIcon size={18} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="contact-cta-col">
              <p className="contact-note">
                Looking for a full-time Senior / Mid Java Backend Developer with expertise in Spring Boot, Kafka, and Microservices?
              </p>
              <a href={`mailto:${personalInfo.email}?subject=Job%20Inquiry%20for%20Chetan%20Shelke`} className="btn btn-primary">
                <Mail size={16} />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
