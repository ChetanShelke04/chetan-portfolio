import React from 'react';
import { Sparkles, ArrowLeft, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResumeBuilderPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="section-header">
          <Link to="/" className="btn btn-secondary" style={{ marginBottom: '16px' }}>
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
          <span className="badge">Interactive Tool</span>
          <h1 className="section-title">Client-Side Resume Builder</h1>
          <p className="section-subtitle">
            Craft, preview, and generate customized ATS-friendly tech resumes directly in your browser.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
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
            <Sparkles size={48} style={{ color: '#c084fc' }} />
            <h3 style={{ fontSize: '1.25rem' }}>Resume Builder Architecture Ready</h3>
            <p style={{ maxWidth: '560px', color: 'var(--text-secondary)' }}>
              In <strong>Phase F</strong>, this page will host a multi-tab form (Personal details, Skills, Work Experience, Projects, Education), real-time live preview matching your portfolio theme, and instantaneous client-side PDF export powered by <code>@react-pdf/renderer</code>.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="badge">100% Client-Side Privacy</span>
              <span className="badge">Zero Backend Server</span>
              <span className="badge badge-emerald">Phase F Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
