import React from 'react';
import { Download, FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resume';

export default function ResumePage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <Link to="/" className="btn btn-secondary" style={{ marginBottom: '16px' }}>
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
          <span className="badge">Curriculum Vitae</span>
          <h1 className="section-title">Resume & Profile</h1>
          <p className="section-subtitle">
            Preview or download the verified resume of {resumeData.personalInfo.name}.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <a
              href="/resume.pdf"
              download="Chetan_Shelke_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <ExternalLink size={16} />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded Viewer Container */}
        <div className="glass-panel" style={{ padding: '32px', textAlign: 'center' }}>
          <div style={{
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            border: '2px dashed var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '40px'
          }}>
            <FileText size={48} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.25rem' }}>Resume Viewer Ready</h3>
            <p style={{ maxWidth: '500px', color: 'var(--text-secondary)' }}>
              Dedicated PDF preview embedding is prepared. In Phase D, you can place your compiled <code>resume.pdf</code> into the <code>public/</code> folder for high-resolution interactive viewing and instant download.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span className="badge badge-emerald">Phase D Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
