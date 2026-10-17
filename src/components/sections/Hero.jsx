import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Terminal, 
  Server, 
  Cpu, 
  Database, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import './Hero.css';

export default function Hero() {
  const { personalInfo } = resumeData;

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge-wrapper">
          <div className="badge badge-emerald">
            <span className="status-dot"></span>
            <span>Available for Senior / Mid Backend Roles</span>
          </div>
        </div>

        {/* Two-Column Grid: Text + Interactive Terminal */}
        <div className="hero-grid">
          {/* Left Column: Headlines & Pitch */}
          <div className="hero-text-col">
            <h1 className="hero-main-title">
              Crafting <span className="gradient-text">Resilient & Scalable</span> Distributed Backends
            </h1>

            <p className="hero-lead">
              Hi, I'm <strong>{personalInfo.name}</strong>, a <strong>{personalInfo.title}</strong> with 4 years of experience building secure microservices, event-driven streaming architectures with <strong>Apache Kafka</strong>, in-memory caching with <strong>Redis</strong>, and AI integrations with <strong>Spring AI</strong>.
            </p>

            <div className="hero-cta-row">
              <a href="#projects" className="btn btn-primary">
                <span>View System Architecture</span>
                <ArrowRight size={16} />
              </a>
              <Link to="/resume" className="btn btn-secondary">
                <Download size={16} />
                <span>View Resume</span>
              </Link>
              <Link to="/resume-builder" className="btn btn-secondary">
                <Sparkles size={16} className="sparkle-icon" />
                <span>Resume Builder</span>
              </Link>
            </div>

            {/* Quick Highlights list */}
            <div className="hero-checklist">
              <div className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Microservices & REST APIs</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Apache Kafka Event-Driven</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Spring Boot & Spring AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="hero-visual-col">
            <div className="terminal-card glass-panel">
              {/* Terminal Window Header */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">
                  <Terminal size={13} />
                  <span>backend-service.yml</span>
                </div>
                <span className="terminal-lang">yaml</span>
              </div>

              {/* Terminal Code Body */}
              <div className="terminal-body">
                <pre>
                  <code>
                    <span className="code-comment"># Engineer Specification</span>{'\n'}
                    <span className="code-key">developer:</span>{'\n'}
                    {'  '}<span className="code-key">name:</span> <span className="code-str">"{personalInfo.name}"</span>{'\n'}
                    {'  '}<span className="code-key">role:</span> <span className="code-str">"{personalInfo.title}"</span>{'\n'}
                    {'  '}<span className="code-key">experience:</span> <span className="code-num">4</span> <span className="code-comment"># years</span>{'\n'}
                    {'  '}<span className="code-key">location:</span> <span className="code-str">"{personalInfo.location}"</span>{'\n'}
                    {'\n'}
                    <span className="code-comment"># Core Distributed Stack</span>{'\n'}
                    <span className="code-key">stack:</span>{'\n'}
                    {'  '}<span className="code-key">runtime:</span> <span className="code-val">Java (Core Java, Java 8)</span>{'\n'}
                    {'  '}<span className="code-key">frameworks:</span> <span className="code-val">[Spring Boot, Spring AI, JPA]</span>{'\n'}
                    {'  '}<span className="code-key">messaging:</span> <span className="code-val">Apache Kafka</span>{'\n'}
                    {'  '}<span className="code-key">caching:</span> <span className="code-val">Redis (JWT blacklist & cache)</span>{'\n'}
                    {'  '}<span className="code-key">storage:</span> <span className="code-val">[PostgreSQL, MySQL, AWS S3]</span>{'\n'}
                    {'\n'}
                    <span className="code-comment"># System Status</span>{'\n'}
                    <span className="code-key">health:</span> <span className="code-success">UP (200 OK)</span>
                  </code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="terminal-footer">
                <div className="terminal-status-indicator">
                  <span className="status-ping"></span>
                  <span>Spring Boot 3.x • Active Profile: Production</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="hero-metrics-strip">
          <div className="metric-pill glass-panel">
            <div className="metric-icon">
              <Server size={20} />
            </div>
            <div>
              <div className="metric-num">4+ Years</div>
              <div className="metric-label">Backend Engineering</div>
            </div>
          </div>

          <div className="metric-pill glass-panel">
            <div className="metric-icon">
              <Cpu size={20} />
            </div>
            <div>
              <div className="metric-num">Spring AI & Kafka</div>
              <div className="metric-label">Asynchronous Pipeline</div>
            </div>
          </div>

          <div className="metric-pill glass-panel">
            <div className="metric-icon">
              <Database size={20} />
            </div>
            <div>
              <div className="metric-num">SQL, Redis & S3</div>
              <div className="metric-label">High-Performance Data</div>
            </div>
          </div>

          <div className="metric-pill glass-panel">
            <div className="metric-icon">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="metric-num">Healthcare & BFSI</div>
              <div className="metric-label">Mission-Critical Domains</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
