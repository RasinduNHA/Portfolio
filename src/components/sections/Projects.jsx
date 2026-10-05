"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Legal Case Similarity & IR",
      subtitle: "BSc (Hons) IT Final Year Research · SLIIT",
      desc: "A hybrid legal case retrieval system built using Legal-BERT semantic embeddings and Neo4j knowledge graph reasoning. Classifies case sentences into rhetorical roles (Facts, Issues, Arguments, Decisions) for role-aware similarity scoring. Achieved 0.97+ similarity scores on Sri Lankan legal documents.",
      tech: ["Python", "FastAPI", "Legal-BERT", "Neo4j Aura", "MongoDB Atlas", "Docker"],
      github: [
        { label: "Frontend", url: "https://github.com/RasinduNHA/JUR_WEB_FRONTEND" },
        { label: "Backend", url: "https://github.com/RasinduNHA/JUR_WEB_BACKEND" }
      ],
      live: null,
      featured: true
    },
    {
      title: "Aura Gateway",
      subtitle: "Microservices API Gateway",
      desc: "A highly resilient microservices API gateway designed for low latency, featuring JWT authentication, rate limiting, and Redis caching.",
      tech: ["Express", "Redis", "Docker", "PostgreSQL", "Jest"],
      github: "https://github.com/RasinduNHA",
      live: null,
      featured: false
    },
    {
      title: "Zenith Analytics",
      subtitle: "Real-time Dashboard & Charts",
      desc: "A high-performance analytics dashboard displaying real-time metrics with custom data visualizations, WebSockets integration, and a modular widget layout.",
      tech: ["React", "Node.js", "Recharts", "Socket.io", "Tailwind CSS"],
      github: "https://github.com/RasinduNHA",
      live: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-darker)' }}>
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '6rem' }}>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '1rem' }}
          >
            SELECTED WORK
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured <span className="accent">Projects</span>
          </motion.h2>
          <p className="section-subtitle">
            A showcase of systems and applications I've designed, architected, and built.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card interactive"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                height: '100%',
                borderTop: project.featured ? '3px solid var(--accent-primary)' : '1px solid var(--glass-border)'
              }}
            >
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '2rem',
                  background: 'var(--accent-primary)',
                  color: 'var(--bg-dark)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={10} /> Featured Project
                </div>
              )}

              <div>
                {/* Header Icons */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <div style={{ color: 'var(--accent-secondary)' }}>
                    <Folder size={36} strokeWidth={1.5} />
                  </div>
                  <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    {Array.isArray(project.github) ? (
                      project.github.map((git, gitIdx) => (
                        <a 
                          key={gitIdx} 
                          href={git.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ color: 'var(--text-muted)', transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', textDecoration: 'none' }} 
                          className="hover-white"
                          title={`GitHub: ${git.label}`}
                        >
                          <FaGithub size={18} />
                          <span style={{ fontWeight: 500 }}>{git.label}</span>
                        </a>
                      ))
                    ) : (
                      project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} className="hover-white">
                          <FaGithub size={20} />
                        </a>
                      )
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} className="hover-white">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  {project.title}
                </h3>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', fontWeight: 500 }}>
                  {project.subtitle}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                  {project.desc}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    style={{ 
                      fontSize: '0.75rem', 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.05)', 
                      padding: '4px 10px', 
                      borderRadius: '6px', 
                      color: 'var(--text-muted)' 
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
