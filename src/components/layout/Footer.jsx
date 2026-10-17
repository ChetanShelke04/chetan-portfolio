import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { resumeData } from '../../data/resume';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Summary Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <div className="brand-monogram">
                <span>CS</span>
              </div>
              <div>
                <h3 className="footer-brand-name">{resumeData.personalInfo.name}</h3>
                <p className="footer-brand-title">
                  <Terminal size={12} className="inline-icon" />
                  {resumeData.personalInfo.title}
                </p>
              </div>
            </div>

            <p className="footer-tagline">
              Building secure, scalable, and high-throughput backend microservices and event-driven architectures.
            </p>

            <div className="footer-location">
              <MapPin size={15} />
              <span>{resumeData.personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="/#about">About Me</a></li>
              <li><a href="/#skills">Skills & Stack</a></li>
              <li><a href="/#experience">Work Experience</a></li>
              <li><a href="/#projects">Featured Projects</a></li>
              <li><Link to="/resume">Resume Viewer</Link></li>
              <li><Link to="/resume-builder">Resume Builder</Link></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-social-list">
              <li>
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <GithubIcon size={18} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="footer-social-link"
                >
                  <Mail size={18} />
                  <span>{resumeData.personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="footer-social-link"
                >
                  <Phone size={18} />
                  <span>{resumeData.personalInfo.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {resumeData.personalInfo.name}. Built with React 19 & Vite.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
