import React from 'react';
import styles from './Footer.module.css';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Top Footer Row */}
        <div className={styles.topRow}>
          
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <div className={styles.brandMark} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                  <rect x="8" y="5" width="14" height="16" rx="2" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="12" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  <line x1="12" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  <circle cx="6" cy="12" r="2" fill="var(--accent-navy)" />
                  <path d="M11 12h-3" stroke="var(--accent-navy)" strokeWidth="1.5" />
                </svg>
              </div>
              <span className={styles.brandName}>Verity</span>
            </div>
            <p className={styles.tagline}>
              Evidence-backed verification. Traceable decisions.
            </p>
            <div className={styles.prototypeDisclaimer}>
              Temporary project landing page for SIH 2026. Interactive platform prototype currently under engineering development.
            </div>
          </div>

          <div className={styles.linksCol}>
            <span className={styles.navHeader}>Navigation</span>
            <ul className={styles.navList}>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#problem">The Problem</a></li>
              <li><a href="#how-it-works">Scrutiny Process</a></li>
              <li><a href="#differentiator">Dependency Engine</a></li>
              <li><a href="#architecture">Modular Architecture</a></li>
              <li><a href="#principles">Responsible Verification</a></li>
              <li><a href="#status">Roadmap & Status</a></li>
            </ul>
          </div>

          <div className={styles.metaCol}>
            <span className={styles.navHeader}>Submission Details</span>
            <div className={styles.metaList}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Initiative</span>
                <span className={styles.metaVal}>Smart India Hackathon 2026</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Problem Statement</span>
                <span className={styles.metaVal}>SIH26261</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team Name</span>
                <span className={styles.metaVal}>Code Zero</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team Identifier</span>
                <span className={styles.metaVal}>197410</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomRow}>
          <div className={styles.legalText}>
            <span>Verity · Smart India Hackathon 2026 · Problem Statement 26261 · Team Code Zero · ID 197410</span>
          </div>

          <div className={styles.bottomActions}>
            <a href="#architecture" className={styles.archLink}>
              View Architecture Specifications
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className={styles.scrollTopBtn}
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
