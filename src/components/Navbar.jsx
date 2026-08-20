import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="hero" id="product">
      {/* Dynamic Thruster Glow overlay */}
      <div className="thruster-glow" aria-hidden="true" style={{ opacity: 0.85 }}></div>

      <div className="hero-grid wrap">
        {/* Left Copy Column */}
        <motion.div 
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-eyebrow" variants={itemVariants}>
            On the horizon
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Beyond the<br />
            <span className="grad-text"> Next Generation.</span>
          </motion.h1>

          <motion.p className="hero-lead" variants={itemVariants}>
            We are engineering Corentix: an intelligent ecosystem built to anticipate your every move. The digital experience isn't just getting an upgrade. It's evolving.

The evolution begins shortly.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="hero-form-dark">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="hero-input-dark"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email for early access"
                />
                <motion.button
                  type="submit"
                  className="cx-btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Stay Tuned</span>
                  <motion.span 
                    className="button-arrow"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={15} />
                  </motion.span>
                </motion.button>
              </form>
            ) : (
              <motion.div 
                className="success-badge-dark"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="success-icon-circle-dark">
                  <Check size={14} />
                </div>
                <span>You're on the list. We'll notify you.</span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Right 3D Orbit Scene Column */}
        <motion.div 
          className="hero-scene"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="hero-visual-shell">
            <div className="hero-aurora" aria-hidden="true"></div>
            <div className="hero-particles" aria-hidden="true"></div>
            
            <div className="hero-canvas-wrap">
              {/* Centered pulsing core */}
              <div className="scene-core" aria-hidden="true"></div>

              {/* Orbiting rings */}
              <motion.div 
                className="scene-ring ring-1" 
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="scene-ring ring-2" 
                aria-hidden="true"
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                {/* Node orbiting on ring 2 */}
                <div className="scene-node" style={{ top: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                  <span className="node-dot"></span>
                  <span className="node-label">Corentix v1.0</span>
                </div>
              </motion.div>

              <div className="scene-ring ring-3" aria-hidden="true">
                <div className="scene-node" style={{ bottom: '25%', left: '5%' }}>
                  <span className="node-dot" style={{ background: '#E8B75C', boxShadow: '0 0 10px #E8B75C' }}></span>
                  <span className="node-label">L3 Compute</span>
                </div>
              </div>

              {/* Glass floating stats/decorative badges */}
              <motion.div 
                className="hero-badge hero-badge-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>SPEED</span>
                <small>3.4s load time</small>
              </motion.div>

              <motion.div 
                className="hero-badge hero-badge-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span>UPTIME</span>
                <small>99.99% active</small>
              </motion.div>

              <motion.div 
                className="hero-badge hero-badge-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span>GROWTH</span>
                <small>+14.2% rate</small>
              </motion.div>

              <motion.div 
                className="hero-badge hero-badge-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <span>MEMBERS</span>
                <small>240+ waiting</small>
              </motion.div>

              <div className="hero-core-badge">
                Corentix ENGINE OS
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
