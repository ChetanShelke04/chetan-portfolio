import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, FileText, Terminal, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { resumeData } from '../../data/resume';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll position to add frosted glass shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'About', href: '/#about', type: 'hash' },
    { label: 'Skills', href: '/#skills', type: 'hash' },
    { label: 'Experience', href: '/#experience', type: 'hash' },
    { label: 'Projects', href: '/#projects', type: 'hash' },
    { label: 'Education', href: '/#education', type: 'hash' },
    { label: 'Resume', href: '/resume', type: 'route', icon: FileText },
    { label: 'Contact', href: '/#contact', type: 'hash' },
  ];

  const handleNavClick = (e, item) => {
    if (item.type === 'hash') {
      e.preventDefault();
      const targetId = item.href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="navbar-brand"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.location.hash) {
              window.history.replaceState(null, '', '/');
            }
          }}
        >
          <div className="brand-monogram">
            <span>CS</span>
          </div>
          <div className="brand-info">
            <span className="brand-name">{resumeData.personalInfo.name}</span>
            <span className="brand-title">
              <Terminal size={11} className="title-icon" />
              Backend Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          {navLinks.map((item) => {
            const Icon = item.icon;
            if (item.type === 'route') {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {Icon && <Icon size={14} className="nav-icon" />}
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="nav-link"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div className="navbar-actions">
          {/* Theme Switcher Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="theme-icon sun-icon" />
            ) : (
              <Moon size={18} className="theme-icon moon-icon" />
            )}
          </button>

          {/* Hire / Connect CTA */}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, { label: 'Contact', href: '/#contact', type: 'hash' })}
            className="btn btn-primary navbar-cta"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <nav className="mobile-nav-list">
            {navLinks.map((item) => {
              const Icon = item.icon;
              if (item.type === 'route') {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`mobile-nav-item ${isActive ? 'mobile-nav-active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="mobile-item-left">
                      {Icon && <Icon size={16} />}
                      <span>{item.label}</span>
                    </div>
                    {item.badge && <span className="nav-badge">{item.badge}</span>}
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="mobile-nav-item"
                >
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="mobile-drawer-cta">
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, { label: 'Contact', href: '/#contact', type: 'hash' })}
                className="btn btn-primary w-full"
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
