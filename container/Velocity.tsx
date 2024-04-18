"use client"
import React, { useRef, useEffect } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const contentWidth = contentRef.current?.offsetWidth || 0;

    if (containerWidth < contentWidth) {
      const distance = contentWidth - containerWidth;
      const duration = distance / speed;
      const keyframes = `marquee ${duration}s linear infinite`;

      if (contentRef.current) {
        contentRef.current.style.animation = keyframes;
      }
    }
  }, [speed]);

  return (
    <div
      ref={containerRef}
      style={{ overflow: 'hidden', width: '100%' }}
    >
      <div
        ref={contentRef}
        style={{ whiteSpace: 'nowrap' }}
        className='flex gap-10'
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
