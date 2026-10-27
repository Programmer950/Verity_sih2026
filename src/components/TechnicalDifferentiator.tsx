import React, { useState } from 'react';
import styles from './TechnicalDifferentiator.module.css';
import { RefreshCw, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, GitBranch, Clock, Database } from 'lucide-react';

export const TechnicalDifferentiator: React.FC = () => {
  const [isCorrected, setIsCorrected] = useState<boolean>(false);
  const [selectedRun, setSelectedRun] = useState<'run1' | 'run2'>('run1');
  const [isReevaluating, setIsReevaluating] = useState<boolean>(false);

  const handleSimulate = () => {
    setIsReevaluating(true);
    setTimeout(() => {
      setIsCorrected(!isCorrected);
      setSelectedRun(!isCorrected ? 'run2' : 'run1');
      setIsReevaluating(false);
    }, 350);
  };

  return (
    <section id="differentiator" className={`section ${styles.differentiatorSection}`}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-eyebrow">
          <span className="dot" aria-hidden="true" />
          <span>THE CORE TECHNICAL CONTRIBUTION</span>
        </div>

        <h2 className="section-title">
          When evidence changes, scrutiny adapts.
        </h2>

        <p className="section-desc">
          Verity is designed to track the dependencies between document versions, extracted claims, regulatory rules, validation checks and findings. When a claim or rule changes, the system identifies the affected checks, evaluates them in a new run and preserves the previous result for audit.
        </p>

        {/* Interactive Dependency Simulation Box */}
        <div className={styles.simContainer}>
          
          {/* Top Control Bar */}
          <div className={styles.simControlBar}>
            <div className={styles.simStatusBadge}>
              <span className={styles.badgeLabel}>ILLUSTRATIVE SIMULATION</span>
              <span className={styles.badgeDivider}>·</span>
              <span className={styles.badgeTech}>DEPENDENCY GRAPH PROPAGATION</span>
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="button"
                onClick={handleSimulate}
                className={`btn ${isCorrected ? 'btn-secondary' : 'btn-primary'} ${styles.simBtn}`}
                disabled={isReevaluating}
              >
                <RefreshCw size={14} className={isReevaluating ? styles.spin : ''} />
                <span>
                  {isCorrected ? 'Revert to initial discrepancy' : 'Simulate evidence correction'}
                </span>
              </button>
            </div>
          </div>

          <div className={styles.simSubtitleBanner}>
            <span>
              <strong>Scenario:</strong> Faculty headcount reconciliation between an institutional application and state reference register.
            </span>
            <span className={styles.auditIndicator}>
              Active Ledger View: <strong>{selectedRun === 'run2' ? 'Run #2 (Current)' : 'Run #1 (Initial)'}</strong>
            </span>
          </div>

          {/* Core Interactive Layout: Two columns (Dependency Flow vs Unrelated Isolation + Ledger) */}
          <div className={styles.simGrid}>

            {/* Column 1: The Reactive Dependency Chain */}
            <div className={styles.chainCol}>
              <div className={styles.colHeader}>
                <div className={styles.colTitleWrapper}>
                  <GitBranch size={15} />
                  <span className={styles.colTitle}>AFFECTED DEPENDENCY CHAIN</span>
                </div>
                <span className={isCorrected ? styles.tagReevaluated : styles.tagFlagged}>
                  {isCorrected ? 'EVALUATION RE-RUN #2' : 'EVALUATION RUN #1'}
                </span>
              </div>

              {/* Step 1: Documents & Extracted Claims */}
              <div className={styles.stepCard}>
                <div className={styles.stepNumHeader}>
                  <span className={styles.subStepNumber}>01</span>
                  <span className={styles.subStepTitle}>INPUT DOCUMENTS & EXTRACTED CLAIMS</span>
                </div>

                <div className={styles.claimsPair}>
                  {/* Source A */}
                  <div className={styles.claimItem}>
                    <div className={styles.claimDocHeader}>
                      <span className={styles.docName}>Application Form-A (Institutional Declaration)</span>
                      <span className={styles.docPill}>DOC-APP-01</span>
                    </div>
                    <div className={styles.claimValueBox}>
                      <span className={styles.claimLabel}>Declared Faculty Count:</span>
                      <strong className={styles.claimNumber}>42 faculty</strong>
                    </div>
                    <span className={styles.provenanceNote}>Source: Page 6 §Cadre Statement · Static input</span>
                  </div>

                  {/* Source B */}
                  <div className={`${styles.claimItem} ${isCorrected ? styles.claimItemCorrected : styles.claimItemInitial}`}>
                    <div className={styles.claimDocHeader}>
                      <span className={styles.docName}>
                        {isCorrected ? 'State HEI Cadre Gazette (Amended Corrigendum)' : 'State HEI Cadre Gazette (Initial Baseline)'}
                      </span>
                      <span className={styles.docPill}>{isCorrected ? 'DOC-GAZETTE-v2' : 'DOC-GAZETTE-v1'}</span>
                    </div>
                    <div className={styles.claimValueBox}>
                      <span className={styles.claimLabel}>Reference Record Count:</span>
                      <strong className={isCorrected ? styles.claimNumberSuccess : styles.claimNumberDiscrepancy}>
                        {isCorrected ? '42 faculty' : '38 faculty'}
                      </strong>
                    </div>
                    <span className={styles.provenanceNote}>
                      {isCorrected ? 'Corrigendum #CR-8821 verified & applied' : 'Initial public register snapshot'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Flow connector line */}
              <div className={styles.chainConnector}>
                <ArrowRight size={14} className={styles.connectorIcon} />
                <span className={styles.connectorLabel}>
                  {isCorrected ? 'Dependency engine re-evaluates linked rule' : 'Dependency engine maps claim discrepancy'}
                </span>
              </div>

              {/* Step 2: Validation Check Evaluation */}
              <div className={`${styles.stepCard} ${isCorrected ? styles.stepCardPass : styles.stepCardWarn}`}>
                <div className={styles.stepNumHeader}>
                  <span className={styles.subStepNumber}>02</span>
                  <span className={styles.subStepTitle}>CHECK #CHK-CADRE-04 · AICTE CADRE NORM §4.2</span>
                </div>

                <div className={styles.checkResultBox}>
                  <div className={styles.checkResultHeader}>
                    {isCorrected ? (
                      <CheckCircle2 size={18} className={styles.passIcon} />
                    ) : (
                      <AlertTriangle size={18} className={styles.warnIcon} />
                    )}
                    <span className={styles.checkTitle}>
                      {isCorrected ? 'Cadre Headcounts Agree: 42 = 42' : 'Discrepancy Identified: 42 vs 38'}
                    </span>
                  </div>
                  <p className={styles.checkDesc}>
                    {isCorrected
                      ? 'Re-evaluation confirmed headcount parity between Form-A and Corrigendum #CR-8821. Cadre ratio satisfied.'
                      : 'Variance of -4 faculty detected against public state reference record. Rule §4.2 flagged for reviewer inspection.'}
                  </p>
                  <div className={styles.checkMetaRow}>
                    <span className={styles.runStamp}>
                      {isCorrected ? 'Run #2 · Re-evaluation completed' : 'Run #1 · Initial deterministic run'}
                    </span>
                    <span className={styles.evalState}>
                      Status: <strong>{isCorrected ? 'PASSED' : 'FLAGGED FOR REVIEW'}</strong>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Column 2: Unrelated Isolation & Historical Audit Ledger */}
            <div className={styles.auxCol}>
              
              {/* Unrelated Check (Proof of Graph Isolation) */}
              <div className={styles.isolationCard}>
                <div className={styles.isolationHeader}>
                  <div className={styles.colTitleWrapper}>
                    <ShieldCheck size={15} />
                    <span className={styles.colTitle}>UNAFFECTED INDEPENDENT CHECK</span>
                  </div>
                  <span className={styles.tagCached}>CACHED / UNCHANGED</span>
                </div>

                <div className={styles.unrelatedBody}>
                  <div className={styles.unrelatedTitleRow}>
                    <span className={styles.unrelatedCheckName}>CHECK #CHK-LAND-01: Land Title & Encumbrance</span>
                    <span className={styles.unrelatedDoc}>Deed #REG-882-P</span>
                  </div>
                  <p className={styles.unrelatedDesc}>
                    Evaluates land parcel acreage and encumbrance certificates against municipal master planning boundaries.
                  </p>
                  <div className={styles.isolationMeta}>
                    <span className={styles.isolationStat}>Dependency impact: <strong>0 affected nodes</strong></span>
                    <span className={styles.isolationAction}>Status: Preserved from Run #1 (Bypassed re-run)</span>
                  </div>
                </div>
              </div>

              {/* Historical Audit Ledger: Visible Previous State Preservation */}
              <div className={styles.ledgerCard}>
                <div className={styles.ledgerHeader}>
                  <div className={styles.colTitleWrapper}>
                    <Clock size={15} />
                    <span className={styles.colTitle}>IMMUTABLE AUDIT LEDGER</span>
                  </div>
                  <span className={styles.ledgerCount}>
                    {isCorrected ? '2 RECORDED EVALUATIONS' : '1 RECORDED EVALUATION'}
                  </span>
                </div>

                <div className={styles.ledgerList}>
                  
                  {/* Run 1 entry */}
                  <div
                    className={`${styles.ledgerEntry} ${selectedRun === 'run1' ? styles.ledgerSelected : ''}`}
                    onClick={() => setSelectedRun('run1')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={styles.entryTop}>
                      <span className={styles.entryRunTag}>RUN #1 (INITIAL)</span>
                      <span className={styles.entryTime}>14:02:11 IST</span>
                    </div>
                    <div className={styles.entryCheck}>Check #CHK-CADRE-04 · Cadre Reconciliation</div>
                    <div className={styles.entryStatusRow}>
                      <span className={styles.entryResultFlagged}>DISCREPANCY (42 vs 38)</span>
                      <span className={styles.entryStorage}>Hash: sha256:4a81...c3</span>
                    </div>
                  </div>

                  {/* Run 2 entry (only present if corrected) */}
                  {isCorrected && (
                    <div
                      className={`${styles.ledgerEntry} ${selectedRun === 'run2' ? styles.ledgerSelected : ''}`}
                      onClick={() => setSelectedRun('run2')}
                      role="button"
                      tabIndex={0}
                    >
                      <div className={styles.entryTop}>
                        <span className={styles.entryRunTagActive}>RUN #2 (CURRENT)</span>
                        <span className={styles.entryTime}>14:05:48 IST</span>
                      </div>
                      <div className={styles.entryCheck}>Check #CHK-CADRE-04 · Cadre Reconciliation</div>
                      <div className={styles.entryStatusRow}>
                        <span className={styles.entryResultPassed}>MATCHED (42 = 42)</span>
                        <span className={styles.entryStorage}>Hash: sha256:9f20...b1</span>
                      </div>
                    </div>
                  )}

                  {!isCorrected && (
                    <div className={styles.ledgerPlaceholder}>
                      <span>Run #2 will be appended when evidence is corrected above. Previous states are never overwritten.</span>
                    </div>
                  )}

                </div>

                <div className={styles.ledgerFooter}>
                  <Database size={13} />
                  <span>Prior evaluation runs remain permanently auditable for institutional appeals.</span>
                </div>
              </div>

            </div>

          </div>

          {/* Legal / Illustrative Disclaimer Note */}
          <div className={styles.simDisclaimer}>
            <span>
              <strong>Note:</strong> Illustrative data. Agreement on one field does not establish overall compliance. In full operation, all dependent nodes and rules evaluate according to verified regulatory matrices.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
