import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = ({ onStart }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          GENIE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-gray-200"
        >
          The Gamified AI Companion for Emotional Intelligence and Cognitive Growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-black">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold">Start with GENIE</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-sm text-gray-300"
        >
          Fun, futuristic, and emotion-aware — learn with a smile.
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
