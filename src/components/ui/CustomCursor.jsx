"use client";
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    // Use requestAnimationFrame for smooth cursor tracking
    const animateCursor = () => {
      // Smooth glow follows cursor with lerp
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.12;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.12;

      if (cursor) {
        cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      if (cursorGlow) {
        cursorGlow.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animateCursor);
    };

    const onMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const onMouseEnterLink = () => {
      if (cursor) cursor.classList.add('cursor-hover');
    };
    const onMouseLeaveLink = () => {
      if (cursor) cursor.classList.remove('cursor-hover');
    };

    const onMouseDown = () => {
      if (cursor) cursor.classList.add('cursor-click');
    };
    const onMouseUp = () => {
      if (cursor) cursor.classList.remove('cursor-click');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    rafRef.current = requestAnimationFrame(animateCursor);

    // Attach hover effect to interactive elements using event delegation
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, .interactive')) {
        onMouseEnterLink();
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, .interactive')) {
        onMouseLeaveLink();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorGlowRef} className="cursor-glow" />
    </>
  );
};

export default CustomCursor;
