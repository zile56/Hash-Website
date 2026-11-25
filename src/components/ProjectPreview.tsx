import React from 'react';
import {
  Users,
  MapPin,
  Compass,
  TrendingUp,
  BarChart2,
  Boxes,
  ShoppingBag,
  Gamepad2,
} from 'lucide-react';

interface ProjectPreviewProps {
  type: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ type }) => {
  switch (type) {
    case 'circle-sync':
      return (
        <div className="preview-canvas preview-circlo">
          <div className="preview-header-bar">
            <span className="preview-pill"><Users size={12} /> 4 Circles</span>
            <span className="preview-pill-live">● Live Sync</span>
          </div>
          <div className="preview-circles-row">
            <span className="circle-node c1">SM</span>
            <span className="circle-node c2">AK</span>
            <span className="circle-node c3">ZH</span>
            <span className="circle-more">+12</span>
          </div>
          <div className="preview-chat-snippet">
            <div className="chat-bubble">Calendar sync completed for Friday launch.</div>
          </div>
        </div>
      );

    case 'carpool-map':
      return (
        <div className="preview-canvas preview-yaozay">
          <div className="preview-header-bar">
            <span className="preview-pill"><MapPin size={12} /> Route Optimizer</span>
            <span className="preview-pill-tag">Automated Fare</span>
          </div>
          <div className="preview-map-visual">
            <div className="map-node node-a" />
            <div className="map-line-dashed" />
            <div className="map-node node-b" />
          </div>
          <div className="preview-fare-row">
            <span>Route Match: 98%</span>
            <strong className="fare-badge">$4.20 / seat</strong>
          </div>
        </div>
      );

    case 'prayer-compass':
      return (
        <div className="preview-canvas preview-qaza">
          <div className="preview-header-bar">
            <span className="preview-pill"><Compass size={12} /> Qaza Tracker</span>
            <span className="preview-pill-tag">100% Offline Room DB</span>
          </div>
          <div className="preview-compass-dial">
            <div className="compass-needle" />
            <div className="compass-core" />
          </div>
          <div className="preview-streak-badge">
            <span>42 Day Streak</span>
            <span style={{ color: 'var(--mut)', fontSize: '11px' }}>Widget Logged · v1.1.4</span>
          </div>
        </div>
      );

    case 'ai-telemetry':
      return (
        <div className="preview-canvas preview-alpha-physio">
          <div className="preview-header-bar">
            <span className="preview-pill"><TrendingUp size={12} /> Clinical Telemetry</span>
            <span className="preview-pill-live">● Live Briefs</span>
          </div>
          <div className="preview-sparkline-box">
            <svg viewBox="0 0 160 40" className="preview-sparkline-svg">
              <path
                d="M0 30 Q 25 35, 45 20 T 90 22 T 130 8 T 160 14"
                fill="none"
                stroke="var(--sv)"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="preview-stat-row">
            <span className="telemetry-pill">5 Sources Aggregated</span>
            <span className="telemetry-highlight">+18.4% Efficiency</span>
          </div>
        </div>
      );

    case 'sales-funnel':
      return (
        <div className="preview-canvas preview-oscill">
          <div className="preview-header-bar">
            <span className="preview-pill"><BarChart2 size={12} /> Identity Synthesis</span>
            <span className="preview-pill-tag">Embeddings + OpenAI</span>
          </div>
          <div className="preview-bars-row">
            <div className="mini-bar-col"><span style={{ height: '45%' }} /></div>
            <div className="mini-bar-col"><span style={{ height: '70%' }} /></div>
            <div className="mini-bar-col"><span style={{ height: '55%' }} /></div>
            <div className="mini-bar-col"><span style={{ height: '90%' }} className="bar-highlight" /></div>
            <div className="mini-bar-col"><span style={{ height: '65%' }} /></div>
          </div>
          <div className="preview-stat-row">
            <span>Evolution Timeline Active</span>
            <span className="telemetry-pill">Guardrailed AI Chat</span>
          </div>
        </div>
      );

    case 'inventory-matrix':
      return (
        <div className="preview-canvas preview-system">
          <div className="preview-header-bar">
            <span className="preview-pill"><Boxes size={12} /> Multi-Warehouse Ops</span>
            <span className="preview-pill-live">● Sub-second Lag</span>
          </div>
          <div className="preview-table-rows">
            <div className="table-row-item">
              <span>SKU-8821</span>
              <span className="status-badge-ok">In Stock (1,420)</span>
            </div>
            <div className="table-row-item">
              <span>SKU-9042</span>
              <span className="status-badge-warn">Pending Approval</span>
            </div>
          </div>
        </div>
      );

    case 'luxury-store':
      return (
        <div className="preview-canvas preview-sissy">
          <div className="preview-header-bar">
            <span className="preview-pill"><ShoppingBag size={12} /> High-Conversion Store</span>
            <span className="preview-pill-tag">Sub-second Pay</span>
          </div>
          <div className="preview-luxury-card">
            <div className="luxury-product-tag">Autumn Capsule · $185</div>
            <div className="luxury-btn-sim">Express Checkout ↗</div>
          </div>
        </div>
      );

    case 'game-hud':
      return (
        <div className="preview-canvas preview-lastofus">
          <div className="preview-header-bar">
            <span className="preview-pill"><Gamepad2 size={12} /> Game Universe HUD</span>
            <span className="preview-pill-live">● 12.4k Online</span>
          </div>
          <div className="preview-hud-radar">
            <div className="radar-circle" />
            <div className="radar-crosshair" />
            <span className="hud-label mono">SECTOR 04 ACTIVE</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="preview-canvas">
          <div className="preview-header-bar">
            <span className="preview-pill">Engineered Prototype</span>
          </div>
        </div>
      );
  }
};
