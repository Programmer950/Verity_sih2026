import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#overview" className={styles.brand} onClick={closeMenu}>
          {/* Custom geometric mark: interconnected evidence & verified nodes */}
          <div className={styles.brandMark} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
              <rect x="8" y="5" width="14" height="16" rx="2" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              <line x1="12" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              <circle cx="6" cy="12" r="2" fill="var(--accent-navy)" />
              <path d="M11 12h-3" stroke="var(--accent-navy)" strokeWidth="1.5" />
            </svg>
          </div>
          <span className={styles.brandName}>Verity</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.navLinks} aria-label="Main Navigation">
          <a href="#overview" className={styles.navLink}>Overview</a>
          <a href="#problem" className={styles.navLink}>The Problem</a>
          <a href="#how-it-works" className={styles.navLink}>Process</a>
          <a href="#differentiator" className={styles.navLink}>Dependency Engine</a>
          <a href="#architecture" className={styles.navLink}>Architecture</a>
          <a href="#principles" className={styles.navLink}>Principles</a>
          <a href="#status" className={styles.navLink}>Roadmap</a>
        </nav>

        {/* Right side status indicator */}
        <div className={styles.navRight}>
          <div className={styles.statusIndicator} title="Status: Interactive prototype under active development for SIH 2026">
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusText}>PROTOTYPE IN DEVELOPMENT</span>
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            <a href="#overview" className={styles.mobileNavLink} onClick={closeMenu}>Overview</a>
            <a href="#problem" className={styles.mobileNavLink} onClick={closeMenu}>The Problem</a>
            <a href="#how-it-works" className={styles.mobileNavLink} onClick={closeMenu}>Process</a>
            <a href="#differentiator" className={styles.mobileNavLink} onClick={closeMenu}>Dependency Engine</a>
            <a href="#architecture" className={styles.mobileNavLink} onClick={closeMenu}>Architecture</a>
            <a href="#principles" className={styles.mobileNavLink} onClick={closeMenu}>Principles</a>
            <a href="#status" className={styles.mobileNavLink} onClick={closeMenu}>Roadmap & Status</a>
          </nav>
          <div className={styles.mobileStatusWrapper}>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusText}>PROTOTYPE IN DEVELOPMENT</span>
            </div>
            <div className={styles.mobileTeamInfo}>
              SIH 2026 · Problem SIH26261 · Team Code Zero (ID: 197410)
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
