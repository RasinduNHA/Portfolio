"use client";
import React, { useState } from 'react';
import { Award, Download, X, ExternalLink, Shield, ChevronRight, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Document Mockup Component ---
const DocumentMockup = ({ type = 'cert', title, issuer, date }) => {
  const isCert = type === 'cert';
  return (
    <div style={{
      width: '100%',
      aspectRatio: '1.414 / 1',
      background: 'linear-gradient(145deg, #12121a 0%, #08080f 100%)',
      border: `1px solid ${isCert ? 'rgba(255, 215, 0, 0.25)' : 'rgba(0, 240, 255, 0.25)'}`,
      borderRadius: '8px',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '150%', height: '150%',
        background: `radial-gradient(circle, ${isCert ? 'rgba(255,215,0,0.04)' : 'rgba(0,240,255,0.04)'} 0%, transparent 60%)`,
        pointerEvents: 'none'
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ border: `1px solid ${isCert ? '#FFD700' : '#00f0ff'}`, padding: '6px', borderRadius: '4px' }}>
          {isCert ? <Award size={18} color="#FFD700" /> : <Shield size={18} color="#00f0ff" />}
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '2px', textTransform: 'uppercase' }}>Issued By</p>
          <p style={{ fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>{issuer}</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
          {isCert ? 'Certificate of Achievement' : 'Official Service Letter'}
        </p>
        <h3 style={{
          fontSize: '1rem', color: '#fff', fontWeight: 800,
          fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.4rem', lineHeight: 1.3
        }}>
          {title}
        </h3>
        <div style={{ width: '30px', height: '2px', background: isCert ? '#FFD700' : '#00f0ff', margin: '0.4rem auto 0.6rem' }} />
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>
          {isCert ? 'Successfully completed by Rasindu Nethmina' : 'Professional tenure of Rasindu Nethmina'}
        </p>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
        <div>
          <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>{isCert ? 'Issuer' : 'Organization'}</p>
          <p style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>{issuer}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Date</p>
          <p style={{ fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>{date}</p>
        </div>
      </div>
    </div>
  );
};

const Credentials = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const certificates = [
    { id: 1, title: "Diploma in English (DiE)", issuer: "ESOFT Metro Campus", date: "Sep 2023", file: "/certificate/Diploma_in_English_ESOFT.pdf", type: 'cert' }
  ];

  const serviceLetters = [
    { id: 3, title: "Software Developer Intern", company: "AIT Services Australia", date: "Feb 2026", file: "/certificate/Service Letter_-Rasindu Nethmina.pdf", type: 'letter' }
  ];

  const allDocs = [...certificates, ...serviceLetters];

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] } })
  };

  return (
    <section id="cv-certs" className="section" style={{ background: 'radial-gradient(circle at bottom, rgba(0, 240, 255, 0.05) 0%, transparent 50%)' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <div className="badge glass-badge" style={{ marginBottom: '1rem' }}>Verified Portfolio</div>
          <h2 className="section-title">Academic & <span className="accent">Professional</span> Vault</h2>
          <p className="section-subtitle">A meticulously curated collection of my certifications, professional endorsements, and career history.</p>
        </div>

        {/* Top Row: CV Card + Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'stretch'
        }}>
          {/* CV Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card interactive"
            style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden', gridColumn: 'span 2' }}
          >
            <div style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.15 }}>
              <FileCheck size={50} color="var(--accent-primary)" />
            </div>

            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* CV Visual Mockup */}
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: '160px', height: '220px',
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '10px',
                  border: '1px solid var(--glass-border)',
                  padding: '1.2rem',
                  display: 'flex', flexDirection: 'column', gap: '10px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  transform: 'rotate(-4deg)'
                }}>
                  <div style={{ width: '45%', height: '10px', background: 'var(--accent-primary)', borderRadius: '3px' }} />
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />
                  <div style={{ width: '75%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px' }} />
                  <div style={{ width: '90%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px' }} />
                  <div style={{ width: '60%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px' }} />
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <div style={{ width: '65%', height: '5px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }} />
                      <div style={{ width: '45%', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Info */}
              <div style={{ flex: 1, minWidth: '220px' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.8rem', color: '#fff' }}>The Master CV</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.8rem', lineHeight: '1.8', maxWidth: '500px' }}>
                  Explore my complete professional timeline, academic background, and technical expertise consolidated into a single, comprehensive document.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href="/assets/cv.pdf" download className="btn btn-primary" style={{ padding: '0.9rem 1.8rem' }}>
                    <Download size={18} /> Download Resume
                  </a>
                  <a href="/assets/cv.pdf" target="_blank" className="btn btn-outline" style={{ padding: '0.9rem 1.8rem' }}>
                    <ExternalLink size={18} /> View Online
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat: Total Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card"
            style={{ padding: '2rem', borderLeft: '4px solid var(--accent-secondary)' }}
          >
            <h4 style={{ color: 'var(--accent-secondary)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Total Certifications</h4>
            <p style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>08+</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.5rem' }}>Recognized by Meta, Google, and industry leaders.</p>
          </motion.div>

          {/* Stat: Professional Endorsements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card"
            style={{ padding: '2rem', borderLeft: '4px solid var(--accent-tertiary)' }}
          >
            <h4 style={{ color: 'var(--accent-tertiary)', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Professional Endorsements</h4>
            <p style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>03</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.5rem' }}>Verified service letters from industry leaders.</p>
          </motion.div>
        </div>

        {/* Documents Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.8rem'
        }}>
          {allDocs.map((doc, i) => (
            <motion.div
              key={doc.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="glass-card interactive"
              style={{ padding: '1.4rem', cursor: 'pointer' }}
              onClick={() => setSelectedDoc(doc)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div style={{ marginBottom: '1.2rem' }}>
                <DocumentMockup type={doc.type} title={doc.title} issuer={doc.issuer || doc.company} date={doc.date} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{doc.issuer || doc.company} · {doc.date}</p>
                </div>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)', flexShrink: 0, marginLeft: '0.8rem'
                }}>
                  <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedDoc && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedDoc(null); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
            style={{ maxWidth: '780px', width: '100%', padding: '2.5rem', position: 'relative' }}
          >
            <button
              onClick={() => setSelectedDoc(null)}
              style={{
                position: 'absolute', top: '1.2rem', right: '1.2rem',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'white', borderRadius: '50%', width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <DocumentMockup type={selectedDoc.type} title={selectedDoc.title} issuer={selectedDoc.issuer || selectedDoc.company} date={selectedDoc.date} />
              </div>
              <div>
                <div className="badge glass-badge" style={{ marginBottom: '1rem', color: selectedDoc.type === 'cert' ? '#FFD700' : 'var(--accent-primary)' }}>
                  {selectedDoc.type === 'cert' ? 'Verified Certificate' : 'Employment Verification'}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.8rem', lineHeight: 1.3 }}>{selectedDoc.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.8rem', fontSize: '0.95rem' }}>
                  This official document serves as verified evidence of {selectedDoc.type === 'cert' ? 'academic achievement' : 'professional service'} at <strong style={{ color: '#fff' }}>{selectedDoc.issuer || selectedDoc.company}</strong>.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href={selectedDoc.file} download className="btn btn-primary" style={{ justifyContent: 'center' }}>
                    <Download size={18} /> Download PDF
                  </a>
                  <a href={selectedDoc.file} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent: 'center' }}>
                    <ExternalLink size={18} /> View Online
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Credentials;
