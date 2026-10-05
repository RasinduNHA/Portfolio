"use client";
import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Introduction' },
    { id: 'experience', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv-certs', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'glass-effect' : ''}`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      background: isScrolled ? 'rgba(5, 5, 5, 0.7)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
    }}>
      <div className="nav-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#home" className="logo" style={{
          textDecoration: 'none',
          fontFamily: 'var(--font-heading)',
          fontSize: '1.8rem',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-1px'
        }}>
          RN<span className="accent">.</span>
        </a>
        
        <nav className="nav-links" style={{ display: 'flex', gap: '2.5rem' }}>
          {navLinks.map(link => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="mobile-menu-btn" style={{ background: 'none', border: 'none', color: 'white', display: 'none' }}>
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
