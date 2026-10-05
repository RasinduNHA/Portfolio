"use client";
import React, { useEffect } from 'react';
import { Briefcase, Bug, Code, Layout, Search, Image as ImageIcon, Presentation, CheckCircle, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    // Animate the main cards
    gsap.fromTo('.experience-card', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.experience-section',
          start: "top 80%",
        }
      }
    );

    // Animate highlight cards staggered
    gsap.fromTo('.highlight-card',
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.experience-section',
          start: "top 85%",
        }
      }
    );
  }, []);

  const experiences = [
    {
      role: "Software Developer Intern",
      company: "AIT Services Australia (Pvt) Ltd",
      period: "August 2025 – February 2026 (6 Months)",
      description: "Successfully completed a six-month Software Developer Internship, contributing to software development, testing, UI/UX evaluation, digital optimization, and design-related tasks.",
      certificateLink: "/certificate/Service Letter_-Rasindu Nethmina.pdf",
      certificateLabel: "Internship Completion Certificate",
      responsibilities: [
        { icon: <Bug size={20} />, text: "Bug identification and reporting" },
        { icon: <Code size={20} />, text: "WordPress development" },
        { icon: <CheckCircle size={20} />, text: "Website functional testing" },
        { icon: <Layout size={20} />, text: "UI/UX testing for web and mobile applications" },
        { icon: <Search size={20} />, text: "SEO and digital optimization" },
        { icon: <ImageIcon size={20} />, text: "Image editing and optimization for web use" },
        { icon: <Presentation size={20} />, text: "Poster and banner design (print and digital)" },
        { icon: <Briefcase size={20} />, text: "Social media creative design" }
      ],
      highlights: [
        { title: "Testing & Debugging", desc: "Improved testing and debugging experience" },
        { title: "Web Development", desc: "Gained practical web development exposure" },
        { title: "UI/UX & Performance", desc: "Contributed to UI/UX and performance improvements" },
        { title: "Digital Optimization", desc: "Strengthened SEO and digital optimization knowledge" }
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work <span className="accent">Experiences</span></h2>
          <p className="section-subtitle">
            My professional journey, industry training, and contributions as a software developer.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {experiences.map((exp, expIdx) => (
            <div key={expIdx} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Main Experience Card */}
              <div className="glass-card experience-card interactive" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.2rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.3rem', color: 'var(--text-main)' }}>
                      {exp.role}
                    </h3>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', marginBottom: '0.3rem', fontWeight: '500' }}>
                      {exp.company}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}>
                      <Briefcase size={14} /> {exp.period}
                    </p>
                  </div>
                  
                  {exp.certificateLink && (
                    <a 
                      href={exp.certificateLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="badge glass-badge" 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        padding: '0.5rem 1rem', 
                        background: 'rgba(112,0,255,0.1)', 
                        borderColor: 'var(--accent-secondary)', 
                        color: 'var(--text-main)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.85rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(112,0,255,0.2)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(112,0,255,0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Award className="text-accent" size={16} />
                      <span style={{ fontWeight: '600' }}>{exp.certificateLabel}</span>
                    </a>
                  )}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '900px', lineHeight: '1.7' }}>
                  {exp.description}
                </p>

                <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Key Responsibilities</h5>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {exp.responsibilities.map((resp, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      <div style={{ background: 'rgba(0, 240, 255, 0.1)', padding: '8px', borderRadius: '8px', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {React.cloneElement(resp.icon, { size: 16 })}
                      </div>
                      <span>{resp.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights Grid */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="highlights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  {exp.highlights.map((item, index) => (
                    <div key={index} className="glass-card highlight-card interactive" style={{ padding: '1.5rem', borderTop: '4px solid var(--accent-secondary)' }}>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
