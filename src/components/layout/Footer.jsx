"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '4rem', background: 'rgba(0,0,0,0.5)' }}>
      <div className="container footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div className="footer-brand">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.5rem' }}>
            RN<span className="accent">.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>Building digital experiences with passion and ethics.</p>
        </div>
        <div className="social-links" style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/RasinduNHA" target="_blank" rel="noopener noreferrer" className="social-link" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', textDecoration: 'none', transition: 'all 0.3s' }}>
            <i className="fab fa-github" style={{ fontSize: '20px' }}></i>
          </a>
          <a href="https://www.linkedin.com/in/rasindu-hettiarachchi-7b0423281" target="_blank" rel="noopener noreferrer" className="social-link" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', textDecoration: 'none', transition: 'all 0.3s' }}>
            <i className="fab fa-linkedin" style={{ fontSize: '20px' }}></i>
          </a>
          <a href="mailto:rasindunetmina12@gmail.com" className="social-link" style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)', textDecoration: 'none', transition: 'all 0.3s' }}>
            <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Rasindu Nethmina. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
