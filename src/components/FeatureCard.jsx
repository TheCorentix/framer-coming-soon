import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      className="feature-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-hover-bg" aria-hidden="true" />
      <div className="card-glow" aria-hidden="true" />

      <div className="feature-card-top">
        <div className="feature-icon-wrapper">
          <Icon size={20} className="feature-icon" />
        </div>
      </div>

      <div className="feature-card-body">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>

      <div className="feature-card-foot">
        <span className="feature-link">
          Learn more <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.div>
  );
}