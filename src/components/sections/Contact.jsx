import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Download, 
  FileText, 
  Send 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { resumeData } from '../../data/resume';
import './Contact.css';

export default function Contact() {
  const { personalInfo } = resumeData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Direct Inquiries</span>
          <h2 className="section-title">Let's Connect Directly</h2>
          <p className="section-subtitle">
            Looking for a Java Backend Developer with 4 years of experience? Reach out directly via mobile, email, or LinkedIn.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="direct-contact-grid">
          {/* Email Direct Channel */}
          <div className="glass-panel direct-channel-card">
            <div className="channel-top">
              <div className="channel-icon-box">
                <Mail size={22} />
              </div>
              <button
                type="button"
                className="channel-copy-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="channel-body">
              <span className="channel-label">Email Address</span>
              <a href={`mailto:${personalInfo.email}`} className="channel-main-value">
                {personalInfo.email}
              </a>
              <p className="channel-desc">Click to compose an email directly from your mail client.</p>
            </div>

            <div className="channel-footer">
              <a href={`mailto:${personalInfo.email}?subject=Job%20Opportunity%20for%20Chetan%20Shelke`} className="btn btn-primary channel-action-btn">
                <Send size={15} />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

          {/* Phone Direct Channel */}
          <div className="glass-panel direct-channel-card">
            <div className="channel-top">
              <div className="channel-icon-box">
                <Phone size={22} />
              </div>
              <button
                type="button"
                className="channel-copy-btn"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Copy Phone Number to Clipboard"
              >
                {copiedPhone ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
                <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="channel-body">
              <span className="channel-label">Mobile & WhatsApp</span>
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="channel-main-value">
                {personalInfo.phone}
              </a>
              <p className="channel-desc">Direct call or WhatsApp messaging for interview scheduling.</p>
            </div>

            <div className="channel-footer">
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="btn btn-secondary channel-action-btn">
                <Phone size={15} />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Location & Relocation Card */}
          <div className="glass-panel direct-channel-card">
            <div className="channel-top">
              <div className="channel-icon-box">
                <MapPin size={22} />
              </div>
              <span className="badge badge-emerald">Available</span>
            </div>

            <div className="channel-body">
              <span className="channel-label">Current Location</span>
              <span className="channel-main-value">{personalInfo.location}</span>
              <p className="channel-desc">Open for on-site, hybrid, or remote backend developer positions.</p>
            </div>

            <div className="channel-footer">
              <div className="social-mini-strip">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-mini-btn"
                  title="Connect on LinkedIn"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-mini-btn"
                  title="Explore GitHub Repositories"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Resume Download Banner */}
        <div className="contact-resume-banner glass-panel">
          <div className="resume-banner-left">
            <div className="banner-icon-box">
              <FileText size={26} />
            </div>
            <div>
              <h3 className="banner-title">Need a Copy of My Resume?</h3>
              <p className="banner-desc">
                Download my verified ATS-formatted resume with complete details of my Spring Boot, Kafka, and Microservices experience.
              </p>
            </div>
          </div>

          <div className="resume-banner-actions">
            <Link to="/resume" className="btn btn-secondary">
              <FileText size={16} />
              <span>View Online</span>
            </Link>
            <a
              href="/resume.pdf"
              download="Chetan_Shelke_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
