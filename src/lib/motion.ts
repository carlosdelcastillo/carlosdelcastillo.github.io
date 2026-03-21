import type { Variants, ViewportOptions } from 'framer-motion';

export const sectionViewport: ViewportOptions = {
  once: true,
  amount: 0.1,
  margin: '0px 0px 120px 0px',
};

export function createFadeStaggerContainer(
  staggerChildren = 0.1,
  delayChildren = 0
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export function createFadeUpItem(
  duration = 0.5,
  offsetY = 20
): Variants {
  return {
    hidden: { opacity: 0, y: offsetY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };
}

export function createFadeXItem(
  duration = 0.5,
  offsetX = -30
): Variants {
  return {
    hidden: { opacity: 0, x: offsetX },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };
}
