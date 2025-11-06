import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

// Placeholder webcam module. Integrate face-api.js and Firebase here in future.
const EmotionTracker = ({ onEmotion }) => {
  const [status, setStatus] = useState('Idle');
  const [emotion, setEmotion] = useState('neutral');

  useEffect(() => {
    // Simulate emotion updates every few seconds
    const pool = ['happy', 'stressed', 'focused', 'neutral'];
    setStatus('Calibrating');
    const id = setInterval(() => {
      const e = pool[Math.floor(Math.random() * pool.length)];
      setEmotion(e);
      onEmotion?.(e);
      setStatus('Tracking');
    }, 4000);
    return () => clearInterval(id);
  }, [onEmotion]);

  return (
    <section className="w-full rounded-3xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-400">
            <Camera className="h-4 w-4 text-white" />
          </span>
          <div>
            <h3 className="text-sm font-semibold">Emotion Tracker</h3>
            <p className="text-xs text-gray-300">Status: {status}</p>
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200">{emotion}</span>
      </div>
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        {/* Webcam feed placeholder */}
        <div className="flex h-full items-center justify-center text-xs text-gray-400">Webcam preview</div>
      </div>
    </section>
  );
};

export default EmotionTracker;
