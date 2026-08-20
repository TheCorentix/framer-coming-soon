import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Zap, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';
import './Features.css';

export default function Features() {
  const features = [
    {
      title: "Simple",
      description: "Everything you need, without unnecessary complexity or configuration overhead.",
      icon: Feather
    },
    {
      title: "Powerful",
      description: "Powerful computational models designed to help you execute workflows faster.",
      icon: Zap
    },
    {
      title: "Designed for the Future",
      description: "Built with a modern core structure designed for whatever scale comes next.",
      icon: Sparkles
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section ce-owner-panel" id="features">
      {/* Background visual detail */}
      <div className="ce-vm-glow" style={{ top: '20%', left: '10%', opacity: 0.4 }}></div>

      <div className="wrap">
        {/* Section Header */}
        <motion.div 
          className="section-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="eyebrow" variants={textVariants}>
            Core Capabilities
          </motion.div>
          <motion.h2 variants={textVariants}>
            Built for what's next.
          </motion.h2>
          <motion.p variants={textVariants}>
            A unified architecture engineered to eliminate bottlenecks. Focus on creation, not optimization.
          </motion.p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div 
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardContainerVariants}
        >
          {features.map((feat, idx) => (
            <motion.div key={idx} variants={cardItemVariants}>
              <FeatureCard 
                title={feat.title}
                description={feat.description}
                icon={feat.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
