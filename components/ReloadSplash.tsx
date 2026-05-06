'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ReloadSplash() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;

    if (navigationEntry?.type !== 'reload') {
      return;
    }

    setVisible(true);

    const timeoutId = window.setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <motion.p
            className="px-8 text-center text-3xl font-bold uppercase tracking-[0.18em] md:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            Martin Klaffensteiner
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}