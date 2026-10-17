import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { resumeData } from '../../data/resume';
import ContactForm from './ContactForm';
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
          <span className="badge">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open for technical discussions, backend engineering opportunities, or system architecture inquiries.
          </p>
        </div>

        {/* Contact Hub Layout */}
        <div className="contact-hub-grid">
          {/* Left Column: Direct Interactive Channels & Socials */}
          <div className="contact-cards-col">
            {/* Direct Channel Cards */}
            <div className="glass-panel contact-channel-card">
              <div className="channel-icon-box">
                <Mail size={22} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Email Address</span>
                <a href={`mailto:${personalInfo.email}`} className="channel-value-link">
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                className="channel-copy-btn"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel contact-channel-card">
              <div className="channel-icon-box">
                <Phone size={22} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Phone / WhatsApp</span>
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="channel-value-link">
                  {personalInfo.phone}
                </a>
              </div>
              <button
                type="button"
                className="channel-copy-btn"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Copy Phone Number to Clipboard"
              >
                {copiedPhone ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel contact-channel-card">
              <div className="channel-icon-box">
                <MapPin size={22} />
              </div>
              <div className="channel-info">
                <span className="channel-label">Current Location</span>
                <span className="channel-static-value">{personalInfo.location}</span>
              </div>
              <span className="badge">Open to Relocation / Hybrid</span>
            </div>

            {/* Social Link Cards */}
            <div className="contact-social-strip">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel social-channel-card"
              >
                <div className="social-card-left">
                  <LinkedinIcon size={20} className="social-icon" />
                  <div>
                    <span className="social-card-name">LinkedIn</span>
                    <span className="social-card-sub">Professional Network</span>
                  </div>
                </div>
                <ArrowUpRight size={16} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel social-channel-card"
              >
                <div className="social-card-left">
                  <GithubIcon size={20} className="social-icon" />
                  <div>
                    <span className="social-card-name">GitHub</span>
                    <span className="social-card-sub">Repositories & Code</span>
                  </div>
                </div>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Client-Side Interactive Form */}
          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
