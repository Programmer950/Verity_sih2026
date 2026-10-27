import React from 'react';
import styles from './ResponsibleVerification.module.css';
import { Link2, HelpCircle, Split, UserCheck2 } from 'lucide-react';

export const ResponsibleVerification: React.FC = () => {
  const principles = [
    {
      id: 'p1',
      title: 'Evidence first',
      statement: 'Every critical finding should link to its supporting source.',
      elaboration: 'Verity does not output detached conclusions or unanchored scores. Every flagged non-compliance or confirmed norm is paired with exact page coordinates, bounding boxes, and source cryptographic digests so that reviewers can verify the physical artifact in seconds.',
      icon: <Link2 size={18} />
    },
    {
      id: 'p2',
      title: 'Explicit uncertainty',
      statement: 'Unreadable evidence and unavailable verification sources must not be treated as successful verification.',
      elaboration: 'Degraded scans, occluded seals, or unreachable state databases are surfaced explicitly as unverified states with confidence thresholds, rather than silently passed or failed. Indeterminacy is treated as a first-class regulatory outcome.',
      icon: <HelpCircle size={18} />
    },
    {
      id: 'p3',
      title: 'Independent checks',
      statement: 'Signature validity, factual consistency and regulatory compliance remain distinct.',
      elaboration: 'A document may contain genuine signatures but assert invalid faculty ratios; another may satisfy cadre norms while having an expired fire NOC. Checks operate as isolated verification dimensions to avoid conflating authenticity with compliance.',
      icon: <Split size={18} />
    },
    {
      id: 'p4',
      title: 'Human authority',
      statement: 'Authorized reviewers retain control over corrections and regulatory decisions.',
      elaboration: 'Verity acts as an investigative assistant, not an automated tribunal. Authorized human reviewers possess sole authority to accept findings, file administrative overrides, or confirm final institutional standing with signed attribution.',
      icon: <UserCheck2 size={18} />
    }
  ];

  return (
    <section id="principles" className="section">
      <div className="container">
        
        <div className="section-eyebrow">
          <span className="dot" aria-hidden="true" />
          <span>Operational Principles</span>
        </div>

        <h2 className="section-title">
          Automation without opaque decisions.
        </h2>

        <p className="section-desc">
          Institutional accreditation and public compliance demand legal certainty. Verity enforces four core principles to eliminate black-box inferences and preserve reviewer sovereignty.
        </p>

        <div className={styles.principlesGrid}>
          {principles.map((p, idx) => (
            <div key={p.id} className={styles.principleCard}>
              <div className={styles.principleHeader}>
                <div className={styles.principleIndex}>0{idx + 1}</div>
                <div className={styles.principleIcon}>{p.icon}</div>
              </div>

              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleStatement}>{p.statement}</p>
              <p className={styles.principleElaboration}>{p.elaboration}</p>

              <div className={styles.cardCornerMarker} aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
