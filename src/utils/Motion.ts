// Shared Framer Motion variants — keep every step's motion consistent.
// Respects prefers-reduced-motion automatically via the `useReducedMotion`
// hook in each component (Framer Motion handles this for `animate`/`initial`
// when you swap distances to 0, see usage in components).

export const stepTransition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const stepVariants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

export const cardEntrance = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export const popIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
};