import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import './ProductPreview.css';

export default function ProductPreview() {
  const activities = [
    { name: "Sarah Connor", action: "Upgraded to Pro Plan", time: "2m ago", amount: "+$89.00" },
    { name: "Marcus Wright", action: "Integrated API keys", time: "14m ago" },
    { name: "John Connor", action: "Joined Team Workspace", time: "1h ago" }
  ];

  return (
    <section className="section preview-section" id="product">
      <div className="preview-container wrap">
        
        {/* Scroll Reveal Wrapper */}
        <motion.div
          className="preview-wrapper"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle slow float animation */}
          <motion.div 
            className="dashboard-mockup"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Mockup Top Header */}
            <div className="mockup-header">
              <div className="mockup-header-left">
                <span className="mockup-logo-dot"></span>
                <span className="mockup-brand">Corentix.OS</span>
                <nav className="mockup-nav">
                  <span>Overview</span>
                  <span className="active">Analytics</span>
                  <span>Deployments</span>
                </nav>
              </div>
              <div className="mockup-header-right">
                <div className="mockup-search">
                  <Search size={12} />
                  <span>Search logs...</span>
                </div>
                <div className="mockup-icon-btn">
                  <Bell size={12} />
                </div>
                <div className="mockup-avatar">JD</div>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="mockup-body">
              {/* Sidebar */}
              <div className="mockup-sidebar">
                <div className="sidebar-group">
                  <div className="sidebar-item active">Overview</div>
                  <div className="sidebar-item">Analytics</div>
                  <div className="sidebar-item">Workspaces</div>
                  <div className="sidebar-item">Webhooks</div>
                  <div className="sidebar-item">Access Keys</div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="mockup-content">
                {/* Stats Row */}
                <div className="mockup-stats-row">
                  <div className="stat-card">
                    <div className="stat-card-header">
                      <span className="stat-lbl">Active Instances</span>
                      <div className="stat-icon-box"><Users size={12} /></div>
                    </div>
                    <div className="stat-card-val">1,842</div>
                    <div className="stat-card-trend">
                      <TrendingUp size={12} className="text-success" />
                      <span>+8.2% vs last week</span>
                    </div>
                  </div>
                </div>

                {/* Chart & Live Activity Grid */}
                <div className="mockup-grid">
                  {/* Chart Card */}
                  <div className="grid-card chart-card">
                    <div className="card-lbl-row">
                      <span className="grid-card-title">Compute Node Usage</span>
                      <span className="card-action">Metrics <ArrowUpRight size={12} /></span>
                    </div>
                    <div className="mockup-chart-container">
                      <svg viewBox="0 0 400 140" className="dashboard-chart-svg" aria-label="Compute usage telemetry trend">
                        <defs>
                          <linearGradient id="chart-glow-orange" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.25"/>
                            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.0"/>
                          </linearGradient>
                        </defs>
                        {/* Grid gridlines */}
                        <line x1="0" y1="30" x2="400" y2="30" stroke="var(--line)" strokeDasharray="3" />
                        <line x1="0" y1="70" x2="400" y2="70" stroke="var(--line)" strokeDasharray="3" />
                        <line x1="0" y1="110" x2="400" y2="110" stroke="var(--line)" strokeDasharray="3" />
                        
                        {/* Gradient Underlay */}
                        <path d="M0,140 L0,110 Q40,95 80,105 T160,65 T240,85 T320,40 T400,20 L400,140 Z" fill="url(#chart-glow-orange)" />
                        
                        {/* Stroke Path */}
                        <path d="M0,110 Q40,95 80,105 T160,65 T240,85 T320,40 T400,20" fill="none" stroke="var(--cyan)" strokeWidth="2.5" strokeLinecap="round" />
                        
                        {/* Target dots */}
                        <circle cx="320" cy="40" r="4" fill="var(--cyan-2)" stroke="var(--bg-elevated)" strokeWidth="1.5" />
                        <circle cx="160" cy="65" r="4" fill="var(--cyan-2)" stroke="var(--bg-elevated)" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Activity Card */}
                  <div className="grid-card activity-card">
                    <div className="card-lbl-row">
                      <span className="grid-card-title">Realtime events</span>
                      <span className="live-dot-indicator"><span className="pulse-dot"></span>Live</span>
                    </div>
                    
                    <div className="activity-list">
                      {activities.map((act, idx) => (
                        <div key={idx} className="activity-item">
                          <div className="act-details">
                            <span className="act-name">{act.name}</span>
                            <span className="act-action">{act.action}</span>
                          </div>
                          <div className="act-meta">
                            {act.amount && <span className="act-amt text-success">{act.amount}</span>}
                            <span className="act-time">{act.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
