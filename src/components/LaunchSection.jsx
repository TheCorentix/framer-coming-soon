import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame } from 'lucide-react';
import './LaunchSection.css';

export default function LaunchSection() {
  const phases = [
    {
      id: "01",
      name: "Concept & Design",
      desc: "Architecting the distributed engine core and drafting the Space Design system.",
      status: "completed"
    },
    {
      id: "02",
      name: "Private Beta",
      desc: "Exposing secure API endpoints and testing telemetry with selected developer partners.",
      status: "active"
    },
    {
      id: "03",
      name: "Public Launch",
      desc: "Opening global clusters for general access and scaling visual telemetry panels.",
      status: "upcoming"
    }
  ];

  return (
    <section className="section ce-owner-panel">
      {/* Visual background details */}
      <div className="ce-vm-glow" style={{ bottom: '10%', right: '5%', opacity: 0.35 }}></div>

      <div className="launch-container wrap">
        
        {/* Header */}
        <div className="section-head" style={{ margin: '0 auto 64px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>On the horizon</div>
          <h2>The Evolution Under Construction</h2>
          <p style={{ margin: '16px auto 0' }}>
            Telemetry status indicators for our release cycles. Track active phases as we synchronize nodes for deployment.
          </p>
        </div>

        {/* Timeline */}
        <div className="launch-timeline">
          
          {/* Main Horizontal Connector Line (hidden on mobile) */}
          <div className="timeline-connector-line" aria-hidden="true">
            <motion.div 
              className="connector-line-progress"
              initial={{ width: "0%" }}
              whileInView={{ width: "50%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="timeline-items">
            {phases.map((phase, index) => {
              const isCompleted = phase.status === "completed";
              const isActive = phase.status === "active";
              
              return (
                <motion.div 
                  key={index}
                  className={`timeline-item ${phase.status}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step Bubble */}
                  <div className="step-bubble-wrapper">
                    <div className="step-bubble">
                      {isCompleted ? (
                        <Check size={16} className="step-icon-complete" />
                      ) : isActive ? (
                        <Flame size={16} className="step-icon-active" />
                      ) : (
                        <span className="step-number">{phase.id}</span>
                      )}
                    </div>
                    {isActive && (
                      <span className="active-pulse-ring"></span>
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="step-card">
                    <div className="step-badge">{phase.status.toUpperCase()}</div>
                    <h3 className="step-name">{phase.name}</h3>
                    <p className="step-desc">{phase.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
