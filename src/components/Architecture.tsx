import React, { useState } from 'react';
import styles from './Architecture.module.css';
import { Layers, Server, Cpu, Database, Shield, Lock, FileSearch, CheckCircle2 } from 'lucide-react';

interface ArchComponent {
  id: string;
  name: string;
  category: 'Presentation' | 'API & Orchestration' | 'Processing & Rules' | 'Storage & Integrity';
  responsibility: string;
  tech: string;
  plannedStage: string;
  icon: React.ReactNode;
}

export const Architecture: React.FC = () => {
  const [activeComponentId, setActiveComponentId] = useState<string>('dep-engine');

  const components: ArchComponent[] = [
    {
      id: 'ui',
      name: 'React / TypeScript Reviewer Interface',
      category: 'Presentation',
      responsibility: 'High-density scrutiny surface with side-by-side PDF preview, bounding-box overlays, findings inspector, and disposition signing.',
      tech: 'React 19, TypeScript, PDF.js canvas, Vite',
      plannedStage: 'Stage 1 (Active Prototype)',
      icon: <Layers size={16} />
    },
    {
      id: 'backend',
      name: 'FastAPI Application Backend',
      category: 'API & Orchestration',
      responsibility: 'Async scrutiny coordinator, authentication, REST/gRPC endpoints, rate limiting, and execution run dispatch.',
      tech: 'Python 3.12, FastAPI, Pydantic v2, AsyncIO',
      plannedStage: 'Stage 2',
      icon: <Server size={16} />
    },
    {
      id: 'ocr',
      name: 'Document Extraction and OCR Workers',
      category: 'Processing & Rules',
      responsibility: 'Distributed document ingestion, PDF parsing, OCR rasterization, tabular extraction, and spatial bounding-box mapping.',
      tech: 'Celery/Redis worker queues, Tesseract/LayoutLM, PyMuPDF',
      plannedStage: 'Stage 2',
      icon: <FileSearch size={16} />
    },
    {
      id: 'dep-engine',
      name: 'Evidence Dependency Engine',
      category: 'Processing & Rules',
      responsibility: 'Tracks directed acyclic graph (DAG) of document versions, claims, checks, and findings. Identifies invalidated nodes when evidence mutates.',
      tech: 'NetworkX / Custom DAG Evaluator, topological sort',
      plannedStage: 'Stage 3 (Core Innovation)',
      icon: <Cpu size={16} />
    },
    {
      id: 'rules',
      name: 'Deterministic, Versioned Regulatory Rules',
      category: 'Processing & Rules',
      responsibility: 'Pure, side-effect-free regulatory calculation modules tagged with strict regulatory year and gazette citation versions.',
      tech: 'Declarative rule AST, SemVer rule registry',
      plannedStage: 'Stage 2',
      icon: <CheckCircle2 size={16} />
    },
    {
      id: 'sig-photo',
      name: 'Signature Verification and Photo-Similarity Checks',
      category: 'Processing & Rules',
      responsibility: 'Independent computer vision pipeline verifying signature strokes against specimen records and biometric cross-matching.',
      tech: 'OpenCV, Siamese neural similarity networks',
      plannedStage: 'Stage 4',
      icon: <Shield size={16} />
    },
    {
      id: 'db',
      name: 'PostgreSQL Persistence and Evidence Relationships',
      category: 'Storage & Integrity',
      responsibility: 'Relational data model capturing institutions, submission manifests, claim entities, audit logs, and graph edge connections.',
      tech: 'PostgreSQL 16, pgvector, SQLAlchemy async',
      plannedStage: 'Stage 2',
      icon: <Database size={16} />
    },
    {
      id: 'storage',
      name: 'Private Document Storage',
      category: 'Storage & Integrity',
      responsibility: 'Encrypted object storage preserving raw original packets, page-level images, and cryptographic SHA-256 validation hashes.',
      tech: 'S3-compatible bucket, AES-256 encryption at rest',
      plannedStage: 'Stage 2',
      icon: <Lock size={16} />
    }
  ];

  const active = components.find(c => c.id === activeComponentId) || components[3];

  return (
    <section id="architecture" className="section">
      <div className="container">
        
        <div className="section-eyebrow">
          <span className="dot" aria-hidden="true" />
          <span>System Topology</span>
        </div>

        <h2 className="section-title">
          A modular architecture. Explicit boundaries.
        </h2>

        <p className="section-desc">
          Verity isolates presentation, asynchronous processing, rule evaluation, and immutable storage into distinct subsystems. Every data contract is explicit and versioned.
        </p>

        {/* Modular Architecture Layout */}
        <div className={styles.archGrid}>

          {/* Left Diagram Block */}
          <div className={styles.diagramCard}>
            <div className={styles.diagramHeader}>
              <span className={styles.diagramTitle}>SYSTEM ARCHITECTURE SCHEMATIC</span>
              <span className={styles.diagramStatus}>TARGET TOPOLOGY</span>
            </div>

            <div className={styles.layersContainer}>

              {/* Layer 1: Client Tier */}
              <div className={styles.layerRow}>
                <div className={styles.layerLabel}>PRESENTATION TIER</div>
                <div className={styles.nodesCluster}>
                  <button
                    type="button"
                    onClick={() => setActiveComponentId('ui')}
                    className={`${styles.archNode} ${activeComponentId === 'ui' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><Layers size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>React / TypeScript Reviewer Interface</span>
                      <span className={styles.nodeSub}>Dual-pane scrutiny, bounding box highlights</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Connector */}
              <div className={styles.tierConnector}>
                <span className={styles.connectorLine} />
                <span className={styles.connectorBadge}>HTTPS / WebSockets (Audit Events)</span>
                <span className={styles.connectorLine} />
              </div>

              {/* Layer 2: API & Gateway */}
              <div className={styles.layerRow}>
                <div className={styles.layerLabel}>COORDINATION TIER</div>
                <div className={styles.nodesCluster}>
                  <button
                    type="button"
                    onClick={() => setActiveComponentId('backend')}
                    className={`${styles.archNode} ${activeComponentId === 'backend' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><Server size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>FastAPI Application Backend</span>
                      <span className={styles.nodeSub}>Async dispatch, auth, scrutiny orchestrator</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Connector */}
              <div className={styles.tierConnector}>
                <span className={styles.connectorLine} />
                <span className={styles.connectorBadge}>Async Task Dispatch & Graph Queries</span>
                <span className={styles.connectorLine} />
              </div>

              {/* Layer 3: Core Processing Tier */}
              <div className={styles.layerRow}>
                <div className={styles.layerLabel}>COMPLIANCE & PROCESSING TIER</div>
                <div className={styles.gridTier}>
                  <button
                    type="button"
                    onClick={() => setActiveComponentId('ocr')}
                    className={`${styles.archNode} ${activeComponentId === 'ocr' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><FileSearch size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>Document Extraction & OCR</span>
                      <span className={styles.nodeSub}>Spatial text & claims</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveComponentId('dep-engine')}
                    className={`${styles.archNode} ${styles.highlightNode} ${activeComponentId === 'dep-engine' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><Cpu size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>Evidence Dependency Engine</span>
                      <span className={styles.nodeSub}>DAG re-evaluation tracker</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveComponentId('rules')}
                    className={`${styles.archNode} ${activeComponentId === 'rules' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><CheckCircle2 size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>Deterministic Regulatory Rules</span>
                      <span className={styles.nodeSub}>Versioned compliance rules</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveComponentId('sig-photo')}
                    className={`${styles.archNode} ${activeComponentId === 'sig-photo' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><Shield size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>Signature & Photo Checks</span>
                      <span className={styles.nodeSub}>Biometric authenticity</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Connector */}
              <div className={styles.tierConnector}>
                <span className={styles.connectorLine} />
                <span className={styles.connectorBadge}>Encrypted BLOB & ACID Ledger</span>
                <span className={styles.connectorLine} />
              </div>

              {/* Layer 4: Storage Tier */}
              <div className={styles.layerRow}>
                <div className={styles.layerLabel}>PERSISTENCE & PROVENANCE TIER</div>
                <div className={styles.gridTierStorage}>
                  <button
                    type="button"
                    onClick={() => setActiveComponentId('db')}
                    className={`${styles.archNode} ${activeComponentId === 'db' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><Database size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>PostgreSQL Persistence</span>
                      <span className={styles.nodeSub}>Relational entities & evidence graph edges</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveComponentId('storage')}
                    className={`${styles.archNode} ${activeComponentId === 'storage' ? styles.archNodeActive : ''}`}
                  >
                    <div className={styles.nodeIconWrap}><Lock size={14} /></div>
                    <div className={styles.nodeDetails}>
                      <span className={styles.nodeTitle}>Private Document Storage</span>
                      <span className={styles.nodeSub}>Encrypted artifacts with SHA-256 verify</span>
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Inspector Card */}
          <div className={styles.detailCard}>
            <div className={styles.detailHeader}>
              <span className={styles.detailCategory}>{active.category}</span>
              <span className={styles.detailStageBadge}>{active.plannedStage}</span>
            </div>

            <h3 className={styles.detailTitle}>{active.name}</h3>

            <div className={styles.detailSection}>
              <span className={styles.detailSectionLabel}>Core Responsibility:</span>
              <p className={styles.detailDesc}>{active.responsibility}</p>
            </div>

            <div className={styles.detailSection}>
              <span className={styles.detailSectionLabel}>Proposed Implementation Stack:</span>
              <code className={styles.techStack}>{active.tech}</code>
            </div>

            <div className={styles.interactiveHint}>
              <span className={styles.hintDot} />
              <span>Select any module on the schematic to inspect design specifications.</span>
            </div>

            <div className={styles.separationNote}>
              <strong>Boundary Principle:</strong> The deterministic rule engine and computer vision pipelines run strictly decoupled from document storage, preventing vendor lock-in and guaranteeing reproducible audit evaluations.
            </div>
          </div>

        </div>

        {/* Mandatory Note */}
        <div className={styles.proposedNoteBox}>
          <p className={styles.proposedNote}>
            <strong>Note:</strong> Proposed architecture. Components will be implemented and validated in stages.
          </p>
        </div>

      </div>
    </section>
  );
};
