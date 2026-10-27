import React, { useState } from 'react';
import styles from './Hero.module.css';
import { ArrowRight, FileText, CheckCircle2, AlertTriangle, Scale, GitCommit, Layers } from 'lucide-react';

interface NodeDetail {
  id: string;
  type: string;
  title: string;
  meta: string;
  status: string;
  code: string;
}

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('finding');

  const nodeDetails: Record<string, NodeDetail> = {
    doc: {
      id: 'doc',
      type: 'SOURCE ARTIFACT',
      title: 'AICTE-EOA-2025-26.pdf',
      meta: 'Page 4 · Table 2.1 · Hash SHA-256: 7f3b89...e109',
      status: 'VERIFIED REPOSITORY',
      code: 'SRC_DOC_0091'
    },
    claim: {
      id: 'claim',
      type: 'EXTRACTED CLAIM',
      title: 'Cadre Ratio: 1:15 (Professors: 2, Assoc: 6, Asst: 34)',
      meta: 'Total Approved Intake: 630 UG · Faculty Declared: 42',
      status: 'PARSED WITH PROVENANCE',
      code: 'CLM_CADRE_42'
    },
    rule: {
      id: 'rule',
      type: 'REGULATORY RULE',
      title: 'AICTE Regulations §4.2 (2024 Revision)',
      meta: 'Cadre proportion mandate: 1 Prof : 2 Assoc : 6 Asst per unit',
      status: 'DETERMINISTIC · IMMUTABLE',
      code: 'RULE_SEC_4_2_REV24'
    },
    finding: {
      id: 'finding',
      type: 'CENTRAL FINDING',
      title: 'Cadre Proportion Variance (-2 Senior Faculty)',
      meta: 'Professor requirement not satisfied for approved UG intake',
      status: 'RECONCILIATION FLAGGED',
      code: 'FND_2026_094'
    },
    result: {
      id: 'result',
      type: 'VALIDATION RESULT',
      title: 'Conditional Discrepancy Generated',
      meta: 'Traceable to §4.2 against institutional staff payroll ledger',
      status: 'REQUIRES REVIEWER DISPOSITION',
      code: 'RES_DISCREPANCY_CD4'
    }
  };

  const current = nodeDetails[activeNode] || nodeDetails.finding;

  return (
    <section id="overview" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Left Column: Editorial & Problem context */}
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>SMART INDIA HACKATHON 2026 · SIH26261</span>
          </div>

          <h1 className={styles.headline}>
            Evidence-backed verification. <br />
            <span className={styles.headlineAccent}>Traceable decisions.</span>
          </h1>

          <p className={styles.supportingCopy}>
            Verity is an AI-assisted regulatory scrutiny platform designed to connect institutional claims, supporting documents and reviewed compliance rules into an evidence trail that reviewers can inspect and understand.
          </p>

          <div className={styles.actionGroup}>
            <a href="#architecture" className="btn btn-primary">
              Explore the architecture
              <ArrowRight size={15} />
            </a>
            <a href="#status" className="btn btn-secondary">
              View project status
            </a>
          </div>

          <div className={styles.statusLabelContainer}>
            <span className={styles.statusPill}>
              <span className={styles.innerDot} />
              INTERACTIVE PROTOTYPE · IN DEVELOPMENT
            </span>
            <span className={styles.problemTag}>
              Domain: Regulatory Scrutiny & Document Authentication
            </span>
          </div>
        </div>

        {/* Right Column: Regulatory Evidence Graph Interactive Visualization */}
        <div className={styles.rightCol}>
          <div className={styles.graphContainer}>
            <div className={styles.graphHeader}>
              <div className={styles.graphHeaderLeft}>
                <span className={styles.liveIndicator} />
                <span className={styles.graphTitle}>REGULATORY EVIDENCE GRAPH</span>
              </div>
              <span className={styles.graphMeta}>GRAPH RUN: #2026-081 · DETERMINISTIC</span>
            </div>

            {/* SVG Visual Canvas */}
            <div className={styles.canvasWrapper}>
              <svg className={styles.svgCanvas} viewBox="0 0 520 380" fill="none" preserveAspectRatio="xMidYMid meet">
                <defs>
                  {/* Subtle connector gradients and glow-free markers */}
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#475569" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Connecting lines between nodes */}
                {/* Source Doc (90, 80) -> Claim (260, 80) */}
                <path d="M 155 80 L 195 80" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="175" cy="80" r="2.5" fill="#64748b" className={styles.pulsePoint} />

                {/* Claim (260, 80) -> Finding (260, 190) */}
                <path d="M 260 115 L 260 160" stroke="#94a3b8" strokeWidth="1.75" />
                
                {/* Rule (430, 80) -> Finding (260, 190) */}
                <path d="M 370 105 L 290 165" stroke="#94a3b8" strokeWidth="1.75" />
                <circle cx="330" cy="135" r="2.5" fill="#64748b" />

                {/* Finding (260, 190) -> Validation Result (260, 310) */}
                <path d="M 260 220 L 260 270" stroke="#1e3a8a" strokeWidth="2" strokeDasharray="4 2" />
                
                {/* Cross-reference secondary link: Source Doc (90, 80) -> Rule (430, 80) subtle arch */}
                <path d="M 120 60 C 180 20, 340 20, 400 60" stroke="#e2e8f0" strokeWidth="1.25" strokeDasharray="2 4" />
              </svg>

              {/* Node 1: Source Document */}
              <button
                type="button"
                className={`${styles.node} ${styles.nodeDoc} ${activeNode === 'doc' ? styles.nodeActive : ''}`}
                style={{ top: '55px', left: '20px' }}
                onClick={() => setActiveNode('doc')}
                onMouseEnter={() => setActiveNode('doc')}
                aria-label="Inspect Source Document Node"
              >
                <div className={styles.nodeHeader}>
                  <FileText size={13} className={styles.nodeIcon} />
                  <span className={styles.nodeType}>SOURCE DOCUMENT</span>
                </div>
                <div className={styles.nodeName}>AICTE-EOA-25.pdf</div>
                <div className={styles.nodeBadge}>Page 4 §Table 2.1</div>
              </button>

              {/* Node 2: Extracted Claim */}
              <button
                type="button"
                className={`${styles.node} ${styles.nodeClaim} ${activeNode === 'claim' ? styles.nodeActive : ''}`}
                style={{ top: '55px', left: '200px' }}
                onClick={() => setActiveNode('claim')}
                onMouseEnter={() => setActiveNode('claim')}
                aria-label="Inspect Extracted Claim Node"
              >
                <div className={styles.nodeHeader}>
                  <GitCommit size={13} className={styles.nodeIcon} />
                  <span className={styles.nodeType}>EXTRACTED CLAIM</span>
                </div>
                <div className={styles.nodeName}>Cadre Count: 42</div>
                <div className={styles.nodeBadge}>Bounding Box Validated</div>
              </button>

              {/* Node 3: Regulatory Rule */}
              <button
                type="button"
                className={`${styles.node} ${styles.nodeRule} ${activeNode === 'rule' ? styles.nodeActive : ''}`}
                style={{ top: '55px', right: '20px' }}
                onClick={() => setActiveNode('rule')}
                onMouseEnter={() => setActiveNode('rule')}
                aria-label="Inspect Regulatory Rule Node"
              >
                <div className={styles.nodeHeader}>
                  <Scale size={13} className={styles.nodeIcon} />
                  <span className={styles.nodeType}>REGULATORY RULE</span>
                </div>
                <div className={styles.nodeName}>Reg-Norm §4.2</div>
                <div className={styles.nodeBadge}>Rev 2024 · Immutable</div>
              </button>

              {/* Central Node: Central Finding */}
              <button
                type="button"
                className={`${styles.node} ${styles.nodeFinding} ${activeNode === 'finding' ? styles.nodeActive : ''}`}
                style={{ top: '165px', left: '160px', width: '200px' }}
                onClick={() => setActiveNode('finding')}
                onMouseEnter={() => setActiveNode('finding')}
                aria-label="Inspect Central Finding Node"
              >
                <div className={styles.centralFindingBanner}>
                  <AlertTriangle size={13} className={styles.findingAlertIcon} />
                  <span>CENTRAL FINDING NODE</span>
                </div>
                <div className={styles.findingMainTitle}>Cadre Proportion Variance</div>
                <div className={styles.findingSubMeta}>Discrepancy: -2 Senior Cadre</div>
                <div className={styles.findingPill}>DEPENDENCY CONNECTED</div>
              </button>

              {/* Node 4: Validation Result */}
              <button
                type="button"
                className={`${styles.node} ${styles.nodeResult} ${activeNode === 'result' ? styles.nodeActive : ''}`}
                style={{ bottom: '15px', left: '150px', width: '220px' }}
                onClick={() => setActiveNode('result')}
                onMouseEnter={() => setActiveNode('result')}
                aria-label="Inspect Validation Result Node"
              >
                <div className={styles.nodeHeader}>
                  <CheckCircle2 size={13} className={styles.nodeIconCheck} />
                  <span className={styles.nodeType}>VALIDATION RESULT</span>
                </div>
                <div className={styles.nodeName}>Conditional Flag Generated</div>
                <div className={styles.nodeBadge}>Evidence Ledger Recorded</div>
              </button>
            </div>

            {/* Interactive Inspector Panel for active node */}
            <div className={styles.inspectorPanel}>
              <div className={styles.inspectorHeader}>
                <div className={styles.inspectorTypeWrapper}>
                  <Layers size={13} />
                  <span className={styles.inspectorType}>{current.type}</span>
                </div>
                <span className={styles.inspectorCode}>{current.code}</span>
              </div>
              <div className={styles.inspectorTitle}>{current.title}</div>
              <div className={styles.inspectorMeta}>{current.meta}</div>
              <div className={styles.inspectorFooter}>
                <span className={styles.inspectorStatusBadge}>{current.status}</span>
                <span className={styles.inspectorHint}>Click or hover any node above to inspect provenance</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
