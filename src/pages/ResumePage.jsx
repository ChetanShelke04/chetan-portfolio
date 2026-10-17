import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ExternalLink, 
  Printer, 
  ArrowLeft, 
  FileText, 
  Eye, 
  Share2, 
  Mail, 
  Phone 
} from 'lucide-react';
import { LinkedinIcon } from '../components/common/Icons';
import { resumeData } from '../data/resume';
import './ResumePage.css';

export default function ResumePage() {
  const { personalInfo, skills, experience, projects, education } = resumeData;
  const [viewMode, setViewMode] = useState('embed'); // 'embed' or 'sheet'
  const [copiedLink, setCopiedLink] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="resume-page-wrapper">
      <div className="container">
        {/* Navigation & Action Bar */}
        <div className="resume-toolbar glass-panel">
          <div className="toolbar-left">
            <Link to="/" className="btn btn-secondary toolbar-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <div className="resume-mode-switch">
              <button
                type="button"
                className={`mode-btn ${viewMode === 'embed' ? 'mode-btn-active' : ''}`}
                onClick={() => setViewMode('embed')}
              >
                <Eye size={15} />
                <span>PDF Document</span>
              </button>
              <button
                type="button"
                className={`mode-btn ${viewMode === 'sheet' ? 'mode-btn-active' : ''}`}
                onClick={() => setViewMode('sheet')}
              >
                <FileText size={15} />
                <span>Web Sheet</span>
              </button>
            </div>
          </div>

          <div className="toolbar-actions">
            <button
              type="button"
              className="btn btn-secondary action-icon-btn"
              onClick={handleShare}
              title="Copy link to resume"
            >
              <Share2 size={16} />
              <span>{copiedLink ? 'Copied Link!' : 'Share'}</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary action-icon-btn"
              onClick={handlePrint}
              title="Print Resume"
            >
              <Printer size={16} />
              <span>Print</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={16} />
              <span>Open PDF</span>
            </a>

            <a
              href="/resume.pdf"
              download="Chetan_Shelke_Resume.pdf"
              className="btn btn-primary download-primary-btn"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Header Summary */}
        <div className="resume-header-summary">
          <div>
            <span className="badge badge-emerald">Verified Profile</span>
            <h1 className="resume-headline">{personalInfo.name}</h1>
            <p className="resume-subheadline">
              {personalInfo.title} • {personalInfo.location}
            </p>
          </div>

          <div className="resume-quick-contacts">
            <a href={`mailto:${personalInfo.email}`} className="quick-contact-pill">
              <Mail size={14} />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="quick-contact-pill">
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="quick-contact-pill">
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* View Mode 1: Embedded PDF Viewer */}
        {viewMode === 'embed' && (
          <div className="pdf-embed-wrapper glass-panel">
            <div className="pdf-embed-header">
              <div className="pdf-file-info">
                <FileText size={16} className="pdf-icon" />
                <span className="pdf-file-name">resume.pdf</span>
                <span className="pdf-status-tag">A4 Document</span>
              </div>
              <div className="pdf-header-controls">
                <a
                  href="/resume.pdf"
                  download="Chetan_Shelke_Resume.pdf"
                  className="btn btn-primary btn-sm"
                >
                  <Download size={14} />
                  <span>Download File</span>
                </a>
              </div>
            </div>

            <div className="pdf-viewer-frame-container">
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                className="pdf-iframe"
                title="Chetan Shelke Resume PDF Viewer"
              />

              <div className="pdf-fallback-note">
                <p>
                  Having trouble previewing inside your browser?{' '}
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="fallback-link">
                    Open in full browser window
                  </a>{' '}
                  or{' '}
                  <a href="/resume.pdf" download="Chetan_Shelke_Resume.pdf" className="fallback-link">
                    download the file directly
                  </a>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Clean ATS Web Sheet (Optimized for Screen & Printing) */}
        {viewMode === 'sheet' && (
          <div className="resume-sheet-container">
            <article className="resume-sheet" id="printable-resume">
              {/* Sheet Header */}
              <header className="sheet-header">
                <h1 className="sheet-name">{personalInfo.name}</h1>
                <h2 className="sheet-role">{personalInfo.title}</h2>
                <div className="sheet-contact-line">
                  <span>{personalInfo.location}</span>
                  <span>•</span>
                  <span>{personalInfo.phone}</span>
                  <span>•</span>
                  <span>{personalInfo.email}</span>
                  <span>•</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </header>

              {/* Professional Summary */}
              <section className="sheet-section">
                <h3 className="sheet-section-heading">Professional Summary</h3>
                <p className="sheet-summary-body">{personalInfo.bio}</p>
              </section>

              {/* Technical Skills */}
              <section className="sheet-section">
                <h3 className="sheet-section-heading">Technical Skills</h3>
                <div className="sheet-skills-list">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="sheet-skill-row">
                      <span className="sheet-skill-category">{category}:</span>
                      <span className="sheet-skill-items">{items.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Work Experience */}
              <section className="sheet-section">
                <h3 className="sheet-section-heading">Work Experience</h3>
                {experience.map((exp, idx) => (
                  <div key={idx} className="sheet-exp-entry">
                    <div className="sheet-entry-top">
                      <span className="sheet-entry-title">{exp.role}</span>
                      <span className="sheet-entry-date">{exp.period}</span>
                    </div>
                    <div className="sheet-entry-company">{exp.company} | {exp.location}</div>
                    <ul className="sheet-bullet-points">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Key Projects */}
              <section className="sheet-section">
                <h3 className="sheet-section-heading">Key Projects</h3>
                {projects.map((proj, idx) => (
                  <div key={idx} className="sheet-project-entry">
                    <div className="sheet-entry-top">
                      <span className="sheet-entry-title">{proj.title}</span>
                      <span className="sheet-project-domain">[{proj.category}]</span>
                    </div>
                    <div className="sheet-project-tech">Tech Stack: {proj.technologies.join(', ')}</div>
                    <ul className="sheet-bullet-points">
                      {proj.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Education */}
              <section className="sheet-section">
                <h3 className="sheet-section-heading">Education</h3>
                {education.map((edu, idx) => (
                  <div key={idx} className="sheet-edu-entry">
                    <div className="sheet-entry-top">
                      <span className="sheet-entry-title">{edu.degree}</span>
                      <span className="sheet-entry-date">{edu.period}</span>
                    </div>
                    <div className="sheet-edu-inst">{edu.institution}</div>
                  </div>
                ))}
              </section>
            </article>
          </div>
        )}
      </div>
    </div>
  );
}
