import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  MessageSquare, 
  Sparkles 
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
          <span className="badge">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open for technical discussions, backend engineering opportunities, or system architecture inquiries.
          </p>
        </div>

        {/* Contact Hub Layout */}
        <div className="contact-hub-grid">
          {/* Left Column: Direct Interactive Channels */}
          <div className="contact-cards-col">
            {/* Email Card */}
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
          </div>

          {/* Right Column: Profiles & Direct Message Action */}
          <div className="contact-action-col">
            <div className="glass-panel contact-action-card">
              <div className="action-header">
                <div className="action-badge-row">
                  <span className="badge badge-emerald">Direct Inquiries</span>
                </div>
                <h3 className="action-title">Start a Conversation</h3>
                <p className="action-desc">
                  Whether you're hiring for a Spring Boot / Microservices role, or want to discuss event-driven architectures, I'd love to connect.
                </p>
              </div>

              {/* Social Link Buttons */}
              <div className="social-action-buttons">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-action-btn"
                >
                  <LinkedinIcon size={18} />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-action-btn"
                >
                  <GithubIcon size={18} />
                  <span>Explore GitHub Code</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* Direct Mail Action Box */}
              <div className="direct-mail-action">
                <a
                  href={`mailto:${personalInfo.email}?subject=Opportunity%20Discussion%20with%20Chetan%20Shelke&body=Hi%20Chetan,%0D%0A%0D%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20backend%20developer%20role.`}
                  className="btn btn-primary send-mail-btn"
                >
                  <Send size={16} />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
