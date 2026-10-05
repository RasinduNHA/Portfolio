"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Send, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (e.g. Gmail) → copy the Service ID below
// 3. Create an Email Template → copy the Template ID below
//    Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Go to Account → copy your Public Key below
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';    // e.g. 'abc123XYZ...'
// ─────────────────────────────────────────────────────────────────────────────

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    gsap.fromTo('.contact-card',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
      }
    );
    gsap.fromTo('.contact-info-card',
      { x: -40, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
      }
    );
  }, []);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    // If EmailJS is not configured, fall back to mailto
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      const link = `mailto:rasindunetmina12@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
      window.location.href = link;
      setStatus(STATUS.SUCCESS);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus(STATUS.SUCCESS);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--glass-border)',
    padding: '1rem 1.2rem',
    borderRadius: '12px',
    color: 'white',
    outline: 'none',
    fontSize: '0.95rem',
    transition: 'border-color 0.3s',
    fontFamily: 'var(--font-body)',
  };

  const contactItems = [
    { icon: <Mail size={22} />, label: 'Email', value: 'rasindunetmina12@gmail.com', color: 'var(--accent-primary)', bg: 'rgba(0,240,255,0.08)', href: 'mailto:rasindunetmina12@gmail.com' },
    { icon: <MapPin size={22} />, label: 'Location', value: 'Sri Lanka', color: 'var(--accent-secondary)', bg: 'rgba(112,0,255,0.08)' },
    { icon: <Phone size={22} />, label: 'Phone', value: '+94 77 401 9024', color: 'var(--accent-tertiary)', bg: 'rgba(255,0,85,0.08)', href: 'tel:+94774019024' },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind or just want to say hi? Drop me a message!</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left — Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="glass-card contact-info-card interactive"
                style={{ padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none' }}
                {...(item.href ? { as: 'a', onClick: () => window.open(item.href) } : {})}
              >
                <div style={{ background: item.bg, padding: '14px', borderRadius: '14px', color: item.color, display: 'flex', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ color: 'var(--text-main)', fontWeight: 500 }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid #00E676' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00E676', boxShadow: '0 0 10px #00E676', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                <p style={{ color: 'var(--text-main)', fontWeight: 600 }}>Open to Opportunities</p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '8px' }}>Available for internships, freelance, and full-time roles.</p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="glass-card contact-card" style={{ padding: '2.5rem' }}>

            {/* Success State */}
            {status === STATUS.SUCCESS && (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle size={60} style={{ color: '#00E676', marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.8rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            )}

            {/* Error State */}
            {status === STATUS.ERROR && (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <AlertCircle size={60} style={{ color: 'var(--accent-tertiary)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.8rem' }}>Something went wrong</h3>
                <p style={{ color: 'var(--text-muted)' }}>Please try emailing me directly at <a href="mailto:rasindunetmina12@gmail.com" style={{ color: 'var(--accent-primary)' }}>rasindunetmina12@gmail.com</a></p>
              </div>
            )}

            {/* Form */}
            {(status === STATUS.IDLE || status === STATUS.SENDING) && (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.4rem' }}>
                  <input style={inputStyle} type="text" name="from_name" placeholder="Your Name" value={formState.name} onChange={handleChange} required />
                  <input style={inputStyle} type="email" name="from_email" placeholder="Your Email" value={formState.email} onChange={handleChange} required />
                </div>
                <input style={inputStyle} type="text" name="subject" placeholder="Subject" value={formState.subject} onChange={handleChange} required />
                <textarea
                  style={{ ...inputStyle, resize: 'none' }}
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or just say hello..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary interactive"
                  disabled={status === STATUS.SENDING}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === STATUS.SENDING ? 0.7 : 1, cursor: status === STATUS.SENDING ? 'not-allowed' : 'none' }}
                >
                  {status === STATUS.SENDING
                    ? <><Loader size={18} style={{ marginRight: '10px', animation: 'spin 1s linear infinite' }} /> Sending...</>
                    : <><Send size={18} style={{ marginRight: '10px' }} /> Send Message</>
                  }
                </button>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center' }}>
                  Your message will be sent to <span style={{ color: 'var(--accent-primary)' }}>rasindunetmina12@gmail.com</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
