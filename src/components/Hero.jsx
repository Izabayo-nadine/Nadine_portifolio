import React, { useState, useEffect } from 'react'

const codeSnippets = {
  'InziraX.dart': `// InziraX: Live Road Safety & Hazard Engine
import 'package:flutter/material.dart';
import 'package:mapbox_maps_flutter/mapbox_maps_flutter.dart';

class RoadSafetyService {
  final FastApiClient api = FastApiClient(baseUrl: 'https://api.inzirax.rw');

  Stream<TrafficAlert> streamLiveHazards(GeoCoordinates userLoc) async* {
    yield* api.subscribeIncidentStream(
      radiusKm: 15.0,
      coordinates: userLoc,
      onHazard: (hazard) => triggerDriverWarning(hazard),
    );
  }
}`,
  'UweraKafka.java': `// UweraAI: Event-Driven Kafka Consumer & Assessment Engine
@Service
@RequiredArgsConstructor
public class AssessmentEventConsumer {
    private final KnowledgeGraphService neo4jGraph;
    private final AssessmentCacheService redisCache;

    @KafkaListener(topics = "student-assessment-events", groupId = "uwera-ai-core")
    public void consumeAssessmentUpdate(StudentAssessmentEvent event) {
        log.info("Processing assessment event for student ID: {}", event.studentId());
        neo4jGraph.updateMasteryVector(event.studentId(), event.score());
        redisCache.evictStudentCache(event.studentId());
    }
}`,
  'HospinixAPI.java': `// Hospinix: Secure Clinic & Pharmacy EMR Service
@RestController
@RequestMapping("/api/v1/pharmacy")
@PreAuthorize("hasRole('PHARMACIST') or hasRole('CHIEF_DOCTOR')")
public class PharmacyDispensaryController {
    private final PrescriptionWorkflowService workflow;

    @PostMapping("/{rxId}/dispense")
    public ResponseEntity<DispensaryReceipt> dispensePrescription(
            @PathVariable UUID rxId,
            @AuthenticationPrincipal JwtPrincipal principal) {
        return ResponseEntity.ok(workflow.processFulfillment(rxId, principal.getStaffId()));
    }
}`
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState('UweraKafka.java')
  const [terminalOutput, setTerminalOutput] = useState('System initialized. Ready for command execution.')
  const [isCompiling, setIsCompiling] = useState(false)
  const [copied, setCopied] = useState(false)

  const runSimulation = (cmd) => {
    setIsCompiling(true)
    if (cmd === 'test') {
      setTerminalOutput('Running JUnit 5 & Mockito test suite across services...\n✓ UweraAI Kafka streams: PASS (98ms)\n✓ Hospinix JPA security layer: PASS (142ms)\n✓ InziraX FastAPI endpoints: PASS (45ms)\n▶ All tests passed [100% SUCCESS]')
    } else if (cmd === 'build') {
      setTerminalOutput('Executing production build pipeline...\nBuilding Flutter APK & Spring Boot jar...\nOptimized Docker containers created.\n▶ Ready for Kubernetes deployment.')
    } else {
      setTerminalOutput(`nadine@rca:~$ status\n● Mode: Software Engineer (RCA Graduate)\n● Core Stack: Java, Spring Boot, Kafka, Flutter, Next.js\n● Location: Kigali, Rwanda`)
    }
    setTimeout(() => {
      setIsCompiling(false)
    }, 400)
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero__container">
        
        {/* Left Column: Hero Intro */}
        <div className="hero__content">
          <div className="telemetry-badge">
            <span className="pulse-indicator"></span>
            <span className="telemetry-badge__label">SYSTEM OPERATIONAL • RCA GRADUATE</span>
          </div>

          <h1 className="hero__title">
            Engineering <span className="hero__title--gradient">Distributed Backends</span> &amp; Modern Mobile Systems.
          </h1>

          <p className="hero__subtitle">
            Hi, I'm <strong className="hero__name-highlight">Izabayo Nadine</strong> — a software engineer and 
            graduate of <strong>Rwanda Coding Academy (RCA)</strong>. I build high-throughput microservices, event-driven pipelines with 
            Apache Kafka &amp; Spring Boot, and responsive applications in Flutter &amp; Next.js.
          </p>

          <div className="hero__meta-chips">
            <span className="meta-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Java &amp; Spring Boot
            </span>
            <span className="meta-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6z"/></svg>
              Apache Kafka &amp; Microservices
            </span>
            <span className="meta-chip">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"/><path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4"/></svg>
              Flutter &amp; Dart Mobile
            </span>
          </div>

          <div className="actions">
            <a href="#projects" className="btn primary glow-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
              <span>Explore Projects</span>
            </a>
            <a href="#contact" className="btn ghost">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Let's Connect</span>
            </a>
            <a href="/assets/Izabayo_Nadine_CV_updated.pdf" download="Izabayo_Nadine_CV_updated.pdf" className="btn outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Machine telemetry quick stats */}
          <div className="hero__stats">
            <div className="stat-card">
              <span className="stat-card__number">4</span>
              <span className="stat-card__label">Enterprise &amp; Mobile Architectures</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__number">10+</span>
              <span className="stat-card__label">Backend &amp; Cloud Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__number">100%</span>
              <span className="stat-card__label">RCA Engineering Mindset</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Developer Machine (The Moving Engine) */}
        <div className="hero__machine" aria-label="Interactive Developer Console">
          <div className="machine-window">
            
            {/* Window title bar */}
            <div className="machine-header">
              <div className="window-dots">
                <span className="dot dot--red"></span>
                <span className="dot dot--yellow"></span>
                <span className="dot dot--green"></span>
              </div>
              <div className="machine-tabs">
                {Object.keys(codeSnippets).map((filename) => (
                  <button
                    key={filename}
                    className={`tab-btn ${activeTab === filename ? 'tab-btn--active' : ''}`}
                    onClick={() => setActiveTab(filename)}
                  >
                    <span className="tab-icon">
                      {filename.endsWith('.dart') ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                          <polyline points="2 17 12 22 22 17"/>
                          <polyline points="2 12 12 17 22 12"/>
                        </svg>
                      ) : filename.endsWith('.java') ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="4 17 10 11 4 5"></polyline>
                          <line x1="12" y1="19" x2="20" y2="19"></line>
                        </svg>
                      )}
                    </span>
                    <span className="tab-title">{filename}</span>
                  </button>
                ))}
              </div>
              <button 
                className="copy-snippet-btn" 
                onClick={handleCopyCode} 
                title="Copy code snippet"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Code editor body */}
            <div className="machine-body">
              <div className="line-numbers">
                {codeSnippets[activeTab].split('\n').map((_, idx) => (
                  <span key={idx}>{idx + 1}</span>
                ))}
              </div>
              <pre className="code-content">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Simulated Live Terminal Engine Footer */}
            <div className="machine-terminal">
              <div className="terminal-bar">
                <span className="terminal-title">
                  <span className="terminal-prompt-sym">❯_</span> Engine Console
                </span>
                <div className="terminal-actions">
                  <button 
                    className="cmd-trigger-btn"
                    onClick={() => runSimulation('status')}
                    title="Check status"
                  >
                    status
                  </button>
                  <button 
                    className="cmd-trigger-btn"
                    onClick={() => runSimulation('test')}
                    title="Run test suite"
                  >
                    run tests
                  </button>
                  <button 
                    className="cmd-trigger-btn"
                    onClick={() => runSimulation('build')}
                    title="Build artifacts"
                  >
                    build
                  </button>
                </div>
              </div>
              <div className={`terminal-output ${isCompiling ? 'terminal-output--pulsing' : ''}`}>
                <pre>{terminalOutput}</pre>
              </div>
            </div>

            {/* Machine status ticker */}
            <div className="machine-status-ticker">
              <span className="ticker-live-dot"></span>
              <span className="ticker-text">ENGINE: JVM 21 • KAFKA BROKER CONNECTED • MAPBOX SDK MOUNTED • FASTAPI 0.110</span>
            </div>

          </div>
        </div>

      </div>

      {/* Infinite Running Tech Marquee */}
      <div className="ticker-ribbon" aria-hidden="true">
        <div className="ticker-ribbon__track">
          <span>JAVA 21</span>
          <span>•</span>
          <span>SPRING BOOT</span>
          <span>•</span>
          <span>APACHE KAFKA</span>
          <span>•</span>
          <span>FLUTTER &amp; DART</span>
          <span>•</span>
          <span>FASTAPI &amp; PYTHON</span>
          <span>•</span>
          <span>POSTGRESQL &amp; JPA</span>
          <span>•</span>
          <span>REDIS &amp; NEO4J</span>
          <span>•</span>
          <span>NEXT.JS &amp; REACT</span>
          <span>•</span>
          <span>MAPBOX GL</span>
          <span>•</span>
          <span>JUNIT &amp; MOCKITO</span>
          <span>•</span>
          <span>RWANDA CODING ACADEMY</span>
          <span>•</span>
          <span>JAVA 21</span>
          <span>•</span>
          <span>SPRING BOOT</span>
          <span>•</span>
          <span>APACHE KAFKA</span>
          <span>•</span>
          <span>FLUTTER &amp; DART</span>
          <span>•</span>
          <span>FASTAPI &amp; PYTHON</span>
          <span>•</span>
          <span>POSTGRESQL &amp; JPA</span>
          <span>•</span>
          <span>REDIS &amp; NEO4J</span>
          <span>•</span>
          <span>NEXT.JS &amp; REACT</span>
          <span>•</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
