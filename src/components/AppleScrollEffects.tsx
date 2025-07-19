import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface AppleScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
  parallaxOffset?: number;
  scaleRange?: [number, number];
  opacityRange?: [number, number];
  yRange?: [string, string];
}

export const AppleScrollWrapper: React.FC<AppleScrollWrapperProps> = ({
  children,
  className = '',
  parallaxOffset = 0.5,
  scaleRange = [0.8, 1],
  opacityRange = [0, 1],
  yRange = ['100px', '0px']
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values based on scroll
  const y = useTransform(smoothProgress, [0, 1], yRange);
  const scale = useTransform(smoothProgress, [0, 1], scaleRange);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        scale,
        opacity
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-100 * speed}px`, `${100 * speed}px`]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

interface AppleRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const AppleReveal: React.FC<AppleRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0
}) => {
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return { y: 100, opacity: 0 };
      case 'down': return { y: -100, opacity: 0 };
      case 'left': return { x: 100, opacity: 0 };
      case 'right': return { x: -100, opacity: 0 };
      default: return { y: 100, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialTransform()}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

interface AppleScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  scaleFrom?: number;
  delay?: number;
}

export const AppleScaleReveal: React.FC<AppleScaleRevealProps> = ({
  children,
  className = '',
  scaleFrom = 0.8,
  delay = 0
}) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: scaleFrom, opacity: 0 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 1,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};