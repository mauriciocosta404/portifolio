import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  fullWidth?: boolean;
}

const FadeIn = ({ children, delay = 0, direction = 'up', fullWidth = false }: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const motionProps = {
    initial: {
      opacity: 0,
      ...directionOffset[direction],
    },
    animate: inView ? {
      opacity: 1,
      x: 0,
      y: 0,
    } : {},
    transition: {
      duration: 0.7,
      delay,
      ease: [0.21, 1.02, 0.73, 0.99],
    },
  };

  return (
    <motion.div
      ref={ref}
      {...motionProps}
      className={fullWidth ? 'w-full' : ''}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;