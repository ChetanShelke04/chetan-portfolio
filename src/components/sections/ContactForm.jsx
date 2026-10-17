import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw, Mail } from 'lucide-react';
import { resumeData } from '../../data/resume';
import './ContactForm.css';

export default function ContactForm() {
  const { personalInfo } = resumeData;
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ID 
    ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}` 
    : `https://formspree.io/f/mqaegeyo`; // Default or fallback endpoint

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Message',
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err) => err.message).join(', '));
        } else {
          setErrorMessage('Unable to deliver message through Formspree right now.');
        }
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please try again or use direct email.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="contact-form-card glass-panel">
      <div className="form-card-header">
        <h3 className="form-card-title">Send a Direct Message</h3>
        <p className="form-card-subtitle">
          Have an inquiry or opportunity? Fill out the form below to deliver directly to my inbox.
        </p>
      </div>

      {status === 'success' ? (
        <div className="form-status-alert alert-success">
          <div className="status-icon-box success-icon">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="status-title">Message Received!</h4>
          <p className="status-desc">
            Thank you for reaching out! Your message has been routed to <strong>{personalInfo.email}</strong>. I will get back to you shortly.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm mt-3"
            onClick={handleReset}
          >
            <RefreshCw size={14} />
            <span>Send Another Message</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {status === 'error' && (
            <div className="form-status-alert alert-error">
              <AlertCircle size={20} className="error-icon" />
              <div className="error-text-wrap">
                <p className="error-text">{errorMessage || 'Submission failed. Please try again.'}</p>
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                  className="fallback-email-link"
                >
                  <Mail size={13} />
                  <span>Send directly via default email client instead</span>
                </a>
              </div>
            </div>
          )}

          <div className="form-row-2col">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="form-input"
                required
                disabled={status === 'submitting'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Your Email <span className="required-star">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@company.com"
                className="form-input"
                required
                disabled={status === 'submitting'}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Java Backend Developer Opportunity"
              className="form-input"
              disabled={status === 'submitting'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Your Message <span className="required-star">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Chetan, I reviewed your backend projects and would like to connect regarding..."
              className="form-textarea"
              rows={4}
              required
              disabled={status === 'submitting'}
            />
          </div>

          <div className="form-footer">
            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={16} className="spinner" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
            <span className="privacy-note">Zero backend server required • 100% Client-Side</span>
          </div>
        </form>
      )}
    </div>
  );
}
