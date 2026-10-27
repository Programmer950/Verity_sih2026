import React from 'react';
import styles from './Problem.module.css';
import { FileSpreadsheet, GitBranch, SearchCheck } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      num: '01',
      icon: <FileSpreadsheet size={18} className={styles.icon} />,
      title: 'Fragmented evidence',
      summary: 'Relevant claims are spread across applications, certificates, approval records and supplementary documents.',
      detail: 'Institutional submissions rarely arrive as unified data. Reviewers manually cross-reference claims in declaration affidavits against state gazettes, chartered engineer certificates, and third-party bank guarantees without cross-document reconciliation.',
      evidenceArtifact: 'FORM-A vs GAZETTE-AFFIDAVIT'
    },
    {
      num: '02',
      icon: <GitBranch size={18} className={styles.icon} />,
      title: 'Context-dependent rules',
      summary: 'The correct validation depends on the application context and the applicable, reviewed rule version.',
      detail: 'Norms vary by establishment year, geographic tier, and approval cycle. A rule applicable to a 2022 expansion does not apply retroactively to a 2018 establishment, requiring strict versioning of regulatory guidelines rather than generic thresholds.',
      evidenceArtifact: 'REG-NORM v2024.2 · JURISDICTION-TIER-1'
    },
    {
      num: '03',
      icon: <SearchCheck size={18} className={styles.icon} />,
      title: 'Findings without sufficient traceability',
      summary: 'Reviewers need to know which evidence supports a finding, why a check ran and how a correction changes the result.',
      detail: 'Generic OCR extraction flags discrepancies without proving provenance. When a reviewer inspects a deficit, they require the exact source coordinates, the evaluation lineage, and an audit trail showing what re-evaluates when an erratum is filed.',
      evidenceArtifact: 'AUDIT LEDGER · PROVENANCE PROOF'
    }
  ];

  return (
    <section id="problem" className="section">
      <div className="container">
        <div className="section-eyebrow">
          <span className="dot" aria-hidden="true" />
          <span>The Regulatory Reality</span>
        </div>
        
        <h2 className="section-title">
          Regulatory scrutiny needs more than document extraction.
        </h2>

        <p className="section-desc">
          Automated text extraction produces tokens, but institutional scrutiny demands legal and factual certainty. Reviewers must reconcile multi-source evidence, apply versioned jurisdictional rules, and defend every determination with immutable provenance.
        </p>

        <div className={styles.columnsGrid}>
          {problems.map((item) => (
            <div key={item.num} className={styles.problemCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{item.num}</span>
                <div className={styles.iconWrapper}>{item.icon}</div>
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardSummary}>{item.summary}</p>
              <p className={styles.cardDetail}>{item.detail}</p>

              <div className={styles.cardFooter}>
                <span className={styles.artifactBadge}>{item.evidenceArtifact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
