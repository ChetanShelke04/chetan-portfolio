import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Workflow, 
  ShieldCheck, 
  Terminal, 
  Wrench, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import './Skills.css';

export default function Skills() {
  const { skills } = resumeData;
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Mapping categories to category icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return Code2;
      case 'Backend Frameworks':
        return Server;
      case 'APIs & Architecture':
        return Workflow;
      case 'ORM & Persistence':
        return Layers;
      case 'Databases, Messaging & Cloud':
        return Database;
      case 'Testing':
        return ShieldCheck;
      case 'Build, Version Control & DevOps':
        return Terminal;
      case 'Tools & IDEs':
        return Wrench;
      default:
        return CheckCircle2;
    }
  };

  const filterTabs = [
    { id: 'ALL', label: 'All Technologies' },
    { id: 'BACKEND', label: 'Backend & Frameworks' },
    { id: 'DATA_CLOUD', label: 'Databases, Messaging & Cloud' },
    { id: 'DEVOPS_TOOLS', label: 'DevOps & Tools' },
  ];

  const filteredCategories = Object.entries(skills).filter(([category]) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'BACKEND') {
      return ['Languages', 'Backend Frameworks', 'APIs & Architecture', 'ORM & Persistence'].includes(category);
    }
    if (activeFilter === 'DATA_CLOUD') {
      return ['Databases, Messaging & Cloud', 'Testing'].includes(category);
    }
    if (activeFilter === 'DEVOPS_TOOLS') {
      return ['Build, Version Control & DevOps', 'Tools & IDEs', 'Core Concepts'].includes(category);
    }
    return true;
  });

  const totalSkillsCount = Object.values(skills).reduce((acc, curr) => acc + curr.length, 0);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">Technical Arsenal</span>
          <h2 className="section-title">Skills & Tech Stack</h2>
          <p className="section-subtitle">
            Comprehensive breakdown of {totalSkillsCount} verified skills across languages, frameworks, messaging, and cloud.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-row">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`skills-tab-btn ${activeFilter === tab.id ? 'skills-tab-active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-category-grid">
          {filteredCategories.map(([category, items]) => {
            const Icon = getCategoryIcon(category);
            return (
              <div key={category} className="glass-panel skill-card">
                <div className="skill-card-top">
                  <div className="category-icon-box">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="category-title-text">{category}</h3>
                    <span className="skill-item-count">{items.length} technologies</span>
                  </div>
                </div>

                <div className="skill-pills-wrap">
                  {items.map((skill) => (
                    <span key={skill} className="skill-pill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
