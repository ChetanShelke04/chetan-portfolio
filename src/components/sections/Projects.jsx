import { 
  Workflow, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Server, 
  CheckCircle2 
} from 'lucide-react';
import { resumeData } from '../../data/resume';
import './Projects.css';

export default function Projects() {
  const { projects } = resumeData;

  // Architectural badges for each project strictly according to resume specifications
  const getProjectArchitectureHighlights = (idx) => {
    if (idx === 0) {
      return [
        { label: 'Event-Driven Kafka Pipeline', icon: Workflow },
        { label: 'Database-Per-Service Pattern', icon: Database },
        { label: 'Redis JWT Blacklisting', icon: ShieldCheck },
        { label: 'Spring AI & AWS S3 Storage', icon: Cpu }
      ];
    }
    return [
      { label: 'Independent Microservices', icon: Server },
      { label: 'Database Isolation (User & Loan)', icon: Database },
      { label: 'Experian Credit Bureau Integration', icon: ShieldCheck },
      { label: 'Automated JUnit Test Coverage', icon: CheckCircle2 }
    ];
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge">System Architecture</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Enterprise distributed systems built with high availability, clean architecture, and strict security standards.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-architecture-grid">
          {projects.map((proj, idx) => {
            const archHighlights = getProjectArchitectureHighlights(idx);

            return (
              <div key={idx} className="glass-panel project-showcase-card">
                {/* Top Bar: Category & Status */}
                <div className="project-top-row">
                  <div className="project-category-badge">
                    <span className="badge badge-emerald">{proj.category}</span>
                  </div>
                  <span className="project-type-tag">Production Backend Architecture</span>
                </div>

                {/* Project Title */}
                <h3 className="project-heading-title">{proj.title}</h3>

                {/* Architectural Highlights Pills */}
                <div className="arch-highlights-strip">
                  {archHighlights.map((arch, aIdx) => {
                    const Icon = arch.icon;
                    return (
                      <div key={aIdx} className="arch-pill">
                        <Icon size={14} className="arch-icon" />
                        <span>{arch.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Bullet Highlights */}
                <div className="project-description-block">
                  <h4 className="highlights-header">Key Architectural Achievements:</h4>
                  <ul className="project-bullets">
                    {proj.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="project-bullet-item">
                        <span className="bullet-indicator">▹</span>
                        <span className="bullet-content">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack Wrap */}
                <div className="project-tech-section">
                  <span className="tech-section-label">Engineered With:</span>
                  <div className="project-tech-badges">
                    {proj.technologies.map((tech) => (
                      <span key={tech} className="tech-tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
