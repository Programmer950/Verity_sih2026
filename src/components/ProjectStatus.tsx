import React from 'react';
import styles from './ProjectStatus.module.css';
import { Award, Hash, Users, Milestone } from 'lucide-react';

export const ProjectStatus: React.FC = () => {
  const roadmapStages = [
    {
      stage: 'Phase 01',
      title: 'Scope and rule modelling',
      focus: 'Formalize regulatory rule syntax, legal definitions, and parameter thresholds from AICTE/UGC accreditation gazettes into machine-readable declarative specifications.'
    },
    {
      stage: 'Phase 02',
      title: 'Document ingestion and source-linked extraction',
      focus: 'Build multi-format PDF ingestion pipeline, spatial bounding-box indexing, and tabular data extraction with cryptographic SHA-256 provenance hashes.'
    },
    {
      stage: 'Phase 03',
      title: 'Evidence reconciliation and deterministic checks',
      focus: 'Implement cross-document entity alignment matrices to compare application declarations against external gazettes, title registers, and statutory rosters.'
    },
    {
      stage: 'Phase 04',
      title: 'Dependency-aware evaluation and audit history',
      focus: 'Construct the regulatory dependency graph (DAG) to propagate evidence revisions, trigger selective re-runs, and maintain immutable historic evaluation states.'
    },
    {
      stage: 'Phase 05',
      title: 'Verification checks and controlled evaluation',
      focus: 'Integrate specimen signature verification, photo similarity models, and reviewer decision sign-off workflows with controlled validation benchmarks.'
    }
  ];

  return (
    <section id="status" className="section">
      <div className="container">
        
        <div className="section-eyebrow">
          <span className="dot" aria-hidden="true" />
          <span>Project Governance</span>
        </div>

        <div className={styles.headerRow}>
          <div>
            <h2 className="section-title">
              Building Verity, one verified workflow at a time.
            </h2>
            <p className="section-desc">
              We are developing Verity as a testable, evidence-linked regulatory scrutiny workflow. The initial focus is document provenance, reviewed rule validation, traceable findings and dependency-aware re-evaluation.
            </p>
          </div>

          <div className={styles.statusBadgeBox}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusLabel}>PROTOTYPE IN DEVELOPMENT</span>
            </div>
            <span className={styles.statusSub}>Smart India Hackathon 2026 Submission</span>
          </div>
        </div>

        {/* Hackathon Identification Box */}
        <div className={styles.identityCard}>
          <div className={styles.identityItem}>
            <div className={styles.identityIconWrap}>
              <Award size={16} />
            </div>
            <div className={styles.identityText}>
              <span className={styles.identityLabel}>HACKATHON INITIATIVE</span>
              <strong className={styles.identityVal}>Smart India Hackathon 2026</strong>
            </div>
          </div>

          <div className={styles.identityDivider} />

          <div className={styles.identityItem}>
            <div className={styles.identityIconWrap}>
              <Hash size={16} />
            </div>
            <div className={styles.identityText}>
              <span className={styles.identityLabel}>PROBLEM STATEMENT</span>
              <strong className={styles.identityVal}>SIH26261 (AI Validation & Scrutiny)</strong>
            </div>
          </div>

          <div className={styles.identityDivider} />

          <div className={styles.identityItem}>
            <div className={styles.identityIconWrap}>
              <Users size={16} />
            </div>
            <div className={styles.identityText}>
              <span className={styles.identityLabel}>TEAM & IDENTIFIER</span>
              <strong className={styles.identityVal}>Code Zero · ID: 197410</strong>
            </div>
          </div>
        </div>

        {/* Development Roadmap without fake progress bars or fabricated percentages */}
        <div className={styles.roadmapWrapper}>
          <div className={styles.roadmapHeader}>
            <div className={styles.roadmapTitleGroup}>
              <Milestone size={15} />
              <h3 className={styles.roadmapTitle}>Development Roadmap</h3>
            </div>
            <span className={styles.roadmapHint}>Sequenced engineering milestones</span>
          </div>

          <div className={styles.roadmapList}>
            {roadmapStages.map((item) => (
              <div key={item.stage} className={styles.roadmapRow}>
                <div className={styles.stageTagCol}>
                  <span className={styles.stagePill}>{item.stage}</span>
                </div>
                <div className={styles.stageInfoCol}>
                  <h4 className={styles.stageHeading}>{item.title}</h4>
                  <p className={styles.stageFocus}>{item.focus}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.roadmapDisclaimer}>
            <span>
              <strong>Engineering Integrity:</strong> Verity avoids fabricated readiness percentages. Each phase is validated against reference regulatory application packets before advancing to subsequent stages.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
