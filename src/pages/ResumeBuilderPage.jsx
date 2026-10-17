import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Download, 
  Printer, 
  RotateCcw, 
  Trash2, 
  Plus, 
  ArrowLeft, 
  User, 
  Wrench, 
  Briefcase, 
  Layers, 
  GraduationCap, 
  Loader2, 
  Eye, 
  Edit3 
} from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { resumeData } from '../data/resume';
import ResumePdfDocument from '../components/resume/ResumePdfDocument';
import './ResumeBuilderPage.css';

const STORAGE_KEY = 'chetan_portfolio_resume_builder_data';

export default function ResumeBuilderPage() {
  // Initialize state from localStorage or fallback to default resumeData
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load saved resume builder data', e);
    }
    return JSON.parse(JSON.stringify(resumeData));
  });

  const [activeTab, setActiveTab] = useState('personal'); // 'personal' | 'skills' | 'experience' | 'projects' | 'education'
  const [mobileView, setMobileView] = useState('editor'); // 'editor' | 'preview'
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState('');

  // Persist edits to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [data]);

  // Handlers for Personal Info
  const handlePersonalInfoChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  // Handlers for Skills
  const handleSkillCategoryChange = (categoryName, valueStr) => {
    const items = valueStr.split(',').map((s) => s.trim()).filter(Boolean);
    setData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [categoryName]: items
      }
    }));
  };

  const handleAddSkillCategory = () => {
    const categoryName = prompt('Enter new skill category name (e.g. Cloud & Infrastructure):');
    if (categoryName && categoryName.trim()) {
      setData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [categoryName.trim()]: []
        }
      }));
    }
  };

  const handleDeleteSkillCategory = (categoryName) => {
    setData((prev) => {
      const nextSkills = { ...prev.skills };
      delete nextSkills[categoryName];
      return { ...prev, skills: nextSkills };
    });
  };

  // Handlers for Experience
  const handleAddExperience = () => {
    const newExp = {
      role: 'Software Engineer',
      company: 'Company Name',
      location: 'City, Country',
      period: '2025 – Present',
      highlights: ['Led backend architecture and delivered scalable services.']
    };
    setData((prev) => ({
      ...prev,
      experience: [newExp, ...prev.experience]
    }));
  };

  const handleUpdateExperience = (idx, field, value) => {
    setData((prev) => {
      const updated = [...prev.experience];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, experience: updated };
    });
  };

  const handleUpdateExpHighlight = (expIdx, highlightIdx, value) => {
    setData((prev) => {
      const updated = [...prev.experience];
      const newHighlights = [...updated[expIdx].highlights];
      newHighlights[highlightIdx] = value;
      updated[expIdx] = { ...updated[expIdx], highlights: newHighlights };
      return { ...prev, experience: updated };
    });
  };

  const handleAddExpHighlight = (expIdx) => {
    setData((prev) => {
      const updated = [...prev.experience];
      updated[expIdx] = {
        ...updated[expIdx],
        highlights: [...updated[expIdx].highlights, 'New achievement or key contribution point.']
      };
      return { ...prev, experience: updated };
    });
  };

  const handleDeleteExpHighlight = (expIdx, highlightIdx) => {
    setData((prev) => {
      const updated = [...prev.experience];
      const newHighlights = updated[expIdx].highlights.filter((_, i) => i !== highlightIdx);
      updated[expIdx] = { ...updated[expIdx], highlights: newHighlights };
      return { ...prev, experience: updated };
    });
  };

  const handleDeleteExperience = (idx) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== idx)
    }));
  };

  // Handlers for Projects
  const handleAddProject = () => {
    const newProj = {
      title: 'New Distributed Project',
      technologies: ['Java', 'Spring Boot', 'Kafka'],
      category: 'Backend / Cloud',
      highlights: ['Designed high-throughput REST APIs and messaging queues.']
    };
    setData((prev) => ({
      ...prev,
      projects: [newProj, ...prev.projects]
    }));
  };

  const handleUpdateProject = (idx, field, value) => {
    setData((prev) => {
      const updated = [...prev.projects];
      if (field === 'technologies') {
        const arr = value.split(',').map((s) => s.trim()).filter(Boolean);
        updated[idx] = { ...updated[idx], technologies: arr };
      } else {
        updated[idx] = { ...updated[idx], [field]: value };
      }
      return { ...prev, projects: updated };
    });
  };

  const handleUpdateProjHighlight = (projIdx, highlightIdx, value) => {
    setData((prev) => {
      const updated = [...prev.projects];
      const newHighlights = [...updated[projIdx].highlights];
      newHighlights[highlightIdx] = value;
      updated[projIdx] = { ...updated[projIdx], highlights: newHighlights };
      return { ...prev, projects: updated };
    });
  };

  const handleAddProjHighlight = (projIdx) => {
    setData((prev) => {
      const updated = [...prev.projects];
      updated[projIdx] = {
        ...updated[projIdx],
        highlights: [...updated[projIdx].highlights, 'Architectural achievement or performance impact.']
      };
      return { ...prev, projects: updated };
    });
  };

  const handleDeleteProjHighlight = (projIdx, highlightIdx) => {
    setData((prev) => {
      const updated = [...prev.projects];
      const newHighlights = updated[projIdx].highlights.filter((_, i) => i !== highlightIdx);
      updated[projIdx] = { ...updated[projIdx], highlights: newHighlights };
      return { ...prev, projects: updated };
    });
  };

  const handleDeleteProject = (idx) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== idx)
    }));
  };

  // Handlers for Education
  const handleAddEducation = () => {
    const newEdu = {
      degree: 'Master of Science in Computer Science',
      institution: 'University Name',
      period: '2024 – 2026'
    };
    setData((prev) => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const handleUpdateEducation = (idx, field, value) => {
    setData((prev) => {
      const updated = [...prev.education];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, education: updated };
    });
  };

  const handleDeleteEducation = (idx) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== idx)
    }));
  };

  // Reset to default
  const handleResetToDefault = () => {
    if (window.confirm('Reset all builder fields to Chetan Shelke default verified data?')) {
      const def = JSON.parse(JSON.stringify(resumeData));
      setData(def);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(def));
      setCopiedNotification('Reset to Default Resume!');
      setTimeout(() => setCopiedNotification(''), 2500);
    }
  };

  // Client-Side PDF Download
  const handleDownloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      const blob = await pdf(<ResumePdfDocument data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const filename = `${(data.personalInfo.name || 'Resume').replace(/\s+/g, '_')}_Resume.pdf`;
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating client-side PDF:', err);
      alert('Unable to generate PDF directly. You can use the Print button to Save as PDF!');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="builder-page-wrapper">
      <div className="container builder-container">
        {/* Top Control Toolbar */}
        <div className="builder-toolbar glass-panel">
          <div className="toolbar-left">
            <Link to="/" className="btn btn-secondary btn-sm">
              <ArrowLeft size={15} />
              <span>Back</span>
            </Link>
            <div className="builder-brand-title">
              <Sparkles size={16} className="sparkle-accent" />
              <span>Client-Side Resume Builder</span>
            </div>
            {copiedNotification && (
              <span className="badge badge-emerald notification-pill">{copiedNotification}</span>
            )}
          </div>

          {/* Mobile View Toggle */}
          <div className="mobile-toggle-group">
            <button
              type="button"
              className={`btn btn-sm ${mobileView === 'editor' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setMobileView('editor')}
            >
              <Edit3 size={14} />
              <span>Editor</span>
            </button>
            <button
              type="button"
              className={`btn btn-sm ${mobileView === 'preview' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setMobileView('preview')}
            >
              <Eye size={14} />
              <span>Live Preview</span>
            </button>
          </div>

          <div className="toolbar-actions">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleResetToDefault}
              title="Reset to default resume data"
            >
              <RotateCcw size={14} />
              <span>Reset Data</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => window.print()}
              title="Print document"
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 size={14} className="spinner" />
                  <span>Compiling PDF...</span>
                </>
              ) : (
                <>
                  <Download size={14} />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2-Column Split Workspace */}
        <div className="builder-workspace-grid">
          {/* =====================================================================
              COLUMN 1: EDITOR FORM
              ===================================================================== */}
          <div className={`builder-editor-col ${mobileView === 'preview' ? 'mobile-hidden' : ''}`}>
            {/* Editor Tabs Navigation */}
            <div className="editor-nav-tabs glass-panel">
              <button
                type="button"
                className={`tab-btn ${activeTab === 'personal' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('personal')}
              >
                <User size={15} />
                <span>Profile</span>
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'skills' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                <Wrench size={15} />
                <span>Skills</span>
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'experience' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={15} />
                <span>Experience ({data.experience.length})</span>
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'projects' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                <Layers size={15} />
                <span>Projects ({data.projects.length})</span>
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'education' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={15} />
                <span>Education ({data.education.length})</span>
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="editor-panel glass-panel">
              {/* TAB 1: PERSONAL INFO */}
              {activeTab === 'personal' && (
                <div className="form-tab-section">
                  <h3 className="tab-heading">Personal & Contact Information</h3>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-input"
                        value={data.personalInfo.name}
                        onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Professional Title</label>
                      <input
                        type="text"
                        className="form-input"
                        value={data.personalInfo.title}
                        onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-input"
                        value={data.personalInfo.location}
                        onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-input"
                        value={data.personalInfo.phone}
                        onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        value={data.personalInfo.email}
                        onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">LinkedIn URL</label>
                      <input
                        type="text"
                        className="form-input"
                        value={data.personalInfo.linkedin}
                        onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">GitHub URL</label>
                    <input
                      type="text"
                      className="form-input"
                      value={data.personalInfo.github}
                      onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Professional Bio / Executive Summary</label>
                    <textarea
                      className="form-textarea"
                      rows={4}
                      value={data.personalInfo.bio}
                      onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: SKILLS */}
              {activeTab === 'skills' && (
                <div className="form-tab-section">
                  <div className="section-title-with-btn">
                    <h3 className="tab-heading">Technical Skills Categories</h3>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={handleAddSkillCategory}
                    >
                      <Plus size={14} />
                      <span>Add Category</span>
                    </button>
                  </div>

                  <div className="skills-edit-list">
                    {Object.entries(data.skills).map(([category, items]) => (
                      <div key={category} className="skill-edit-item">
                        <div className="skill-edit-header">
                          <span className="skill-category-label">{category}</span>
                          <button
                            type="button"
                            className="btn-icon-danger"
                            onClick={() => handleDeleteSkillCategory(category)}
                            title="Delete this category"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-input"
                          value={Array.isArray(items) ? items.join(', ') : items}
                          onChange={(e) => handleSkillCategoryChange(category, e.target.value)}
                          placeholder="Comma separated: Spring Boot, Kafka, Docker..."
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: EXPERIENCE */}
              {activeTab === 'experience' && (
                <div className="form-tab-section">
                  <div className="section-title-with-btn">
                    <h3 className="tab-heading">Work Experience</h3>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={handleAddExperience}
                    >
                      <Plus size={14} />
                      <span>Add Experience</span>
                    </button>
                  </div>

                  <div className="item-cards-stack">
                    {data.experience.map((exp, idx) => (
                      <div key={idx} className="builder-card-box">
                        <div className="card-box-header">
                          <span className="card-index-pill">#{idx + 1} Role</span>
                          <button
                            type="button"
                            className="btn-icon-danger"
                            onClick={() => handleDeleteExperience(idx)}
                            title="Remove role"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="form-row-2col">
                          <div className="form-group">
                            <label className="form-label">Job Title / Role</label>
                            <input
                              type="text"
                              className="form-input"
                              value={exp.role}
                              onChange={(e) => handleUpdateExperience(idx, 'role', e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <input
                              type="text"
                              className="form-input"
                              value={exp.company}
                              onChange={(e) => handleUpdateExperience(idx, 'company', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-row-2col">
                          <div className="form-group">
                            <label className="form-label">Location</label>
                            <input
                              type="text"
                              className="form-input"
                              value={exp.location}
                              onChange={(e) => handleUpdateExperience(idx, 'location', e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Dates / Period</label>
                            <input
                              type="text"
                              className="form-input"
                              value={exp.period}
                              onChange={(e) => handleUpdateExperience(idx, 'period', e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="highlights-editor">
                          <div className="highlights-top">
                            <span className="highlights-label">Key Responsibilities & Highlights:</span>
                            <button
                              type="button"
                              className="btn btn-secondary btn-xs"
                              onClick={() => handleAddExpHighlight(idx)}
                            >
                              <Plus size={12} />
                              <span>Add Bullet</span>
                            </button>
                          </div>
                          {exp.highlights.map((bullet, bIdx) => (
                            <div key={bIdx} className="bullet-edit-row">
                              <span className="bullet-dot">•</span>
                              <input
                                type="text"
                                className="form-input bullet-input"
                                value={bullet}
                                onChange={(e) => handleUpdateExpHighlight(idx, bIdx, e.target.value)}
                              />
                              <button
                                type="button"
                                className="btn-icon-danger btn-xs"
                                onClick={() => handleDeleteExpHighlight(idx, bIdx)}
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: PROJECTS */}
              {activeTab === 'projects' && (
                <div className="form-tab-section">
                  <div className="section-title-with-btn">
                    <h3 className="tab-heading">Key Projects</h3>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={handleAddProject}
                    >
                      <Plus size={14} />
                      <span>Add Project</span>
                    </button>
                  </div>

                  <div className="item-cards-stack">
                    {data.projects.map((proj, idx) => (
                      <div key={idx} className="builder-card-box">
                        <div className="card-box-header">
                          <span className="card-index-pill">#{idx + 1} Project</span>
                          <button
                            type="button"
                            className="btn-icon-danger"
                            onClick={() => handleDeleteProject(idx)}
                            title="Remove project"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="form-row-2col">
                          <div className="form-group">
                            <label className="form-label">Project Title</label>
                            <input
                              type="text"
                              className="form-input"
                              value={proj.title}
                              onChange={(e) => handleUpdateProject(idx, 'title', e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Category / Domain</label>
                            <input
                              type="text"
                              className="form-input"
                              value={proj.category}
                              onChange={(e) => handleUpdateProject(idx, 'category', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Technologies (comma separated)</label>
                          <input
                            type="text"
                            className="form-input"
                            value={Array.isArray(proj.technologies) ? proj.technologies.join(', ') : proj.technologies}
                            onChange={(e) => handleUpdateProject(idx, 'technologies', e.target.value)}
                          />
                        </div>

                        {/* Bullet Highlights */}
                        <div className="highlights-editor">
                          <div className="highlights-top">
                            <span className="highlights-label">Architectural Points:</span>
                            <button
                              type="button"
                              className="btn btn-secondary btn-xs"
                              onClick={() => handleAddProjHighlight(idx)}
                            >
                              <Plus size={12} />
                              <span>Add Point</span>
                            </button>
                          </div>
                          {proj.highlights.map((bullet, bIdx) => (
                            <div key={bIdx} className="bullet-edit-row">
                              <span className="bullet-dot">▹</span>
                              <input
                                type="text"
                                className="form-input bullet-input"
                                value={bullet}
                                onChange={(e) => handleUpdateProjHighlight(idx, bIdx, e.target.value)}
                              />
                              <button
                                type="button"
                                className="btn-icon-danger btn-xs"
                                onClick={() => handleDeleteProjHighlight(idx, bIdx)}
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: EDUCATION */}
              {activeTab === 'education' && (
                <div className="form-tab-section">
                  <div className="section-title-with-btn">
                    <h3 className="tab-heading">Education History</h3>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={handleAddEducation}
                    >
                      <Plus size={14} />
                      <span>Add Degree</span>
                    </button>
                  </div>

                  <div className="item-cards-stack">
                    {data.education.map((edu, idx) => (
                      <div key={idx} className="builder-card-box">
                        <div className="card-box-header">
                          <span className="card-index-pill">#{idx + 1} Degree</span>
                          <button
                            type="button"
                            className="btn-icon-danger"
                            onClick={() => handleDeleteEducation(idx)}
                            title="Remove education"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Degree / Qualification</label>
                          <input
                            type="text"
                            className="form-input"
                            value={edu.degree}
                            onChange={(e) => handleUpdateEducation(idx, 'degree', e.target.value)}
                          />
                        </div>

                        <div className="form-row-2col">
                          <div className="form-group">
                            <label className="form-label">Institution / University</label>
                            <input
                              type="text"
                              className="form-input"
                              value={edu.institution}
                              onChange={(e) => handleUpdateEducation(idx, 'institution', e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Period / Years</label>
                            <input
                              type="text"
                              className="form-input"
                              value={edu.period}
                              onChange={(e) => handleUpdateEducation(idx, 'period', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* =====================================================================
              COLUMN 2: LIVE PREVIEW SHEET
              ===================================================================== */}
          <div className={`builder-preview-col ${mobileView === 'editor' ? 'mobile-hidden' : ''}`}>
            <div className="preview-sticky-wrap">
              <div className="preview-header-bar">
                <span className="preview-indicator">
                  <span className="pulse-dot"></span>
                  Live Template Preview
                </span>
                <span className="preview-meta-tag">A4 ATS Standard</span>
              </div>

              {/* Render the ATS Printable Sheet */}
              <article className="resume-sheet preview-paper-sheet" id="printable-resume">
                <header className="sheet-header">
                  <h1 className="sheet-name">{data.personalInfo.name}</h1>
                  <h2 className="sheet-role">{data.personalInfo.title}</h2>
                  <div className="sheet-contact-line">
                    {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
                    {data.personalInfo.location && data.personalInfo.phone && <span>•</span>}
                    {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
                    {data.personalInfo.phone && data.personalInfo.email && <span>•</span>}
                    {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
                    {data.personalInfo.linkedin && (
                      <>
                        <span>•</span>
                        <span>{data.personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
                      </>
                    )}
                    {data.personalInfo.github && (
                      <>
                        <span>•</span>
                        <span>{data.personalInfo.github.replace(/^https?:\/\/(www\.)?/, '')}</span>
                      </>
                    )}
                  </div>
                </header>

                {/* Summary */}
                {data.personalInfo.bio && (
                  <section className="sheet-section">
                    <h3 className="sheet-section-heading">Professional Summary</h3>
                    <p className="sheet-summary-body">{data.personalInfo.bio}</p>
                  </section>
                )}

                {/* Skills */}
                {data.skills && Object.keys(data.skills).length > 0 && (
                  <section className="sheet-section">
                    <h3 className="sheet-section-heading">Technical Skills</h3>
                    <div className="sheet-skills-list">
                      {Object.entries(data.skills).map(([category, items]) => (
                        <div key={category} className="sheet-skill-row">
                          <span className="sheet-skill-category">{category}:</span>
                          <span className="sheet-skill-items">
                            {Array.isArray(items) ? items.join(', ') : items}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                  <section className="sheet-section">
                    <h3 className="sheet-section-heading">Work Experience</h3>
                    {data.experience.map((exp, idx) => (
                      <div key={idx} className="sheet-exp-entry">
                        <div className="sheet-entry-top">
                          <span className="sheet-entry-title">{exp.role}</span>
                          <span className="sheet-entry-date">{exp.period}</span>
                        </div>
                        <div className="sheet-entry-company">{exp.company} | {exp.location}</div>
                        {exp.highlights && exp.highlights.length > 0 && (
                          <ul className="sheet-bullet-points">
                            {exp.highlights.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </section>
                )}

                {/* Projects */}
                {data.projects && data.projects.length > 0 && (
                  <section className="sheet-section">
                    <h3 className="sheet-section-heading">Key Projects</h3>
                    {data.projects.map((proj, idx) => (
                      <div key={idx} className="sheet-project-entry">
                        <div className="sheet-entry-top">
                          <span className="sheet-entry-title">{proj.title}</span>
                          {proj.category && <span className="sheet-project-domain">[{proj.category}]</span>}
                        </div>
                        {proj.technologies && (
                          <div className="sheet-project-tech">
                            Tech Stack: {Array.isArray(proj.technologies) ? proj.technologies.join(', ') : proj.technologies}
                          </div>
                        )}
                        {proj.highlights && proj.highlights.length > 0 && (
                          <ul className="sheet-bullet-points">
                            {proj.highlights.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </section>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                  <section className="sheet-section">
                    <h3 className="sheet-section-heading">Education</h3>
                    {data.education.map((edu, idx) => (
                      <div key={idx} className="sheet-edu-entry">
                        <div className="sheet-entry-top">
                          <span className="sheet-entry-title">{edu.degree}</span>
                          <span className="sheet-entry-date">{edu.period}</span>
                        </div>
                        <div className="sheet-edu-inst">{edu.institution}</div>
                      </div>
                    ))}
                  </section>
                )}
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
