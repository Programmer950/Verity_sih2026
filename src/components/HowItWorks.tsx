import React, { useState } from 'react';
import styles from './HowItWorks.module.css';
import { UploadCloud, FileCode2, GitMerge, CheckSquare, UserCheck, History } from 'lucide-react';

interface Stage {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  artifact: string;
  icon: React.ReactNode;
}

export const HowItWorks: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: Stage[] = [
    {
      num: '01',
      title: 'Ingest',
      subtitle: 'Preserve uploaded documents and their versions.',
      description: 'Document packages (PDFs, scans, digital certificates) are validated for integrity, assigned an immutable SHA-256 fingerprint, and stored with strict multi-version audit history.',
      artifact: 'SHA-256 Digest · Storage URI · Version Manifest',
      icon: <UploadCloud size={16} />
    },
    {
      num: '02',
      title: 'Extract',
      subtitle: 'Convert contents into structured claims with source locations.',
      description: 'Layout-aware extraction isolates tabular data, declarations, and metadata, mapping every extracted entity to its exact page number and bounding-box coordinates for zero-guesswork verification.',
      artifact: 'Normalized JSON Claim · Bounding Box Geo · Page Pointer',
      icon: <FileCode2 size={16} />
    },
    {
      num: '03',
      title: 'Reconcile',
      subtitle: 'Compare relevant claims across supporting evidence.',
      description: 'Cross-document entity resolution matches declared counts against external registers (e.g., faculty lists against university gazettes or land parcel records against title deeds) to surface factual discrepancies.',
      artifact: 'Cross-Doc Entity Matrix · Similarity Score · Variance Delta',
      icon: <GitMerge size={16} />
    },
    {
      num: '04',
      title: 'Validate',
      subtitle: 'Evaluate applicable, reviewed rules and independent verification checks.',
      description: 'Deterministic compliance algorithms apply reviewed, versioned regulatory guidelines. Signature authenticity and biometric photo checks execute independently to avoid single-point failure.',
      artifact: 'Deterministic Rule Engine Run · Rule v2024.2 Result',
      icon: <CheckSquare size={16} />
    },
    {
      num: '05',
      title: 'Review',
      subtitle: 'Let an authorized reviewer inspect, correct and resolve findings.',
      description: 'Reviewers inspect side-by-side evidence with deep links to source documents. They can accept findings, add explanatory notes, or submit authorized corrections with cryptographic sign-off.',
      artifact: 'Reviewer Disposition Record · Justification Note · Timestamp',
      icon: <UserCheck size={16} />
    },
    {
      num: '06',
      title: 'Track',
      subtitle: 'Preserve evaluation history and identify checks affected by changes.',
      description: 'When supplementary documents or corrections arrive, the dependency graph detects strictly affected checks, runs targeted re-evaluations, and preserves previous states in an immutable ledger.',
      artifact: 'Evaluation Run Delta · Dependency Graph State · Audit Ledger',
      icon: <History size={16} />
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-eyebrow">
          <span className="dot" aria-hidden="true" />
          <span>Scrutiny Lifecycle</span>
        </div>

        <h2 className="section-title">
          From application packet to traceable finding.
        </h2>

        <p className="section-desc">
          Verity organizes the review workflow into six disciplined phases, ensuring every finding remains mathematically traceable to its source document and regulatory mandate.
        </p>

        {/* Process Steps — Desktop Timeline / Mobile Sequence */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineTrack} aria-hidden="true" />

          <div className={styles.stagesGrid}>
            {stages.map((stage, idx) => (
              <div
                key={stage.num}
                className={`${styles.stageCard} ${activeStage === idx ? styles.stageActive : ''}`}
                onClick={() => setActiveStage(idx)}
                tabIndex={0}
                role="button"
                aria-label={`Step ${stage.num}: ${stage.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStage(idx);
                  }
                }}
              >
                <div className={styles.stageHeader}>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepNum}>{stage.num}</span>
                    <span className={styles.stepIcon}>{stage.icon}</span>
                  </div>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                </div>

                <p className={styles.stageSubtitle}>{stage.subtitle}</p>
                <p className={styles.stageDesc}>{stage.description}</p>

                <div className={styles.stageArtifact}>
                  <span className={styles.artifactLabel}>Artifact Produced:</span>
                  <code className={styles.artifactValue}>{stage.artifact}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational reassurance banner */}
        <div className={styles.stageCallout}>
          <div className={styles.calloutLeft}>
            <span className={styles.calloutBadge}>PROVENANCE GUARANTEE</span>
            <span className={styles.calloutText}>
              Every stage logs cryptographic identifiers and source offsets. No finding exists without a verified path to raw evidence.
            </span>
          </div>
          <span className={styles.calloutNote}>Phase 1-4 automated · Phase 5 reviewer authorized</span>
        </div>

      </div>
    </section>
  );
};
