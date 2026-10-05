"use client";
import React, { useRef, useEffect } from 'react';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const tiltRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const tiltElement = tiltRef.current;
    if (tiltElement) {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = tiltElement.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const tiltX = (y - 0.5) * 15;
        const tiltY = (x - 0.5) * -15;

        tiltElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`;
      };

      const handleMouseLeave = () => {
        tiltElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      };

      tiltElement.addEventListener('mousemove', handleMouseMove);
      tiltElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        tiltElement.removeEventListener('mousemove', handleMouseMove);
        tiltElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: [0.23, 1, 0.32, 1],
        duration: 1.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.23, 1, 0.32, 1], duration: 1 }
    }
  };

  return (
    <section id="home" className="hero-section" ref={containerRef}>
      <div className="hero-content container">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="badge" style={{
            background: 'rgba(196, 164, 132, 0.1)',
            borderColor: 'rgba(196, 164, 132, 0.2)',
            color: 'var(--accent-primary)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontSize: '0.75rem'
          }}>
            Available for Opportunities
          </motion.div>

          <motion.h1 variants={itemVariants}>
            RASINDU NETHMINA <br />
            <span style={{ color: 'var(--accent-primary)' }}>SOFTWARE DEVELOPER</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="description" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            I'm a results-driven Software Developer passionate about building robust systems that solve real problems.
            Leveraging my experience at AIT Services Australia, I specialize in bridging the gap between
            complex technical requirements and scalable, production-ready code.
          </motion.p>

          <motion.div variants={itemVariants} className="action-buttons" style={{ marginTop: '3rem' }}>
            <a href="#credentials" className="btn btn-primary interactive" style={{ padding: '1.2rem 2.5rem' }}>
              <span>The Work</span>
              <FaArrowRight size={16} />
            </a>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginLeft: '1rem' }}>
              <motion.a whileHover={{ y: -3 }} href="https://github.com/RasinduNHA" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <FaGithub size={24} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/rasindu-hettiarachchi-7b0423281" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Decorative elements for a more 'designer' feel */}
          <motion.div
            className="decorative-circle"
            style={{
              y: y1,
              position: 'absolute',
              top: '-10%',
              right: '-10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196, 164, 132, 0.05) 0%, transparent 70%)',
              zIndex: 0
            }}
          />

          <div ref={tiltRef} className="profile-card glass-card tilt-element" style={{
            zIndex: 2,
            overflow: 'hidden',
            border: '1px solid rgba(196, 164, 132, 0.1)',
            padding: '12px'
          }}>
            <div className="image-wrapper" style={{ borderRadius: '24px' }}>
              <img
                src="/img/about.png"
                alt="Rasindu"
                style={{ filter: 'grayscale(100%)', mixBlendMode: 'luminosity' }}
              />
            </div>
          </div>

          {/* Floating abstract element */}
          <motion.div
            className="abstract-shape"
            style={{
              y: y2,
              position: 'absolute',
              bottom: '10%',
              left: '-20%',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(45deg, var(--accent-secondary), transparent)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              filter: 'blur(40px)',
              opacity: 0.3,
              zIndex: 1
            }}
          />
        </motion.div>
      </div>

      <div className="scroll-indicator" style={{ bottom: '40px' }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mouse"
          style={{ borderColor: 'rgba(196, 164, 132, 0.3)' }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
