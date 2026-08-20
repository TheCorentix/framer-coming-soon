import React from 'react';
import { motion } from 'framer-motion';

export default function StatsStrip() {
  const stats = [
    { value: "3.4s", label: "Page load speed" },
    { value: "99.9%", label: "Expected uptime" },
    { value: "14.2%", label: "Calculated scale" },
    { value: "240+", label: "Joined early" }
  ];

  return (
    <section className="stats-strip-section">
      <div className="wrap">
        <motion.div 
          className="cx-stats-standalone"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="cx-stat-card">
              <strong>{stat.value}</strong>
              <span className="lbl">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
