import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Trophy, Calendar, Smile } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
  >
    <div className="flex items-center gap-3">
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}
      >
        <Icon className="h-5 w-5 text-white" />
      </span>
      <div>
        <div className="text-sm text-gray-300">{label}</div>
        <div className="text-xl font-bold text-white">{value}</div>
      </div>
    </div>
  </motion.div>
);

const Dashboard = ({ data }) => {
  const { xp, streak, mood, badge } = data;
  return (
    <section className="w-full rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/60 to-black/60 p-6 text-white shadow-xl backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your Dashboard</h2>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200">GENIE Beta</span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon={Trophy} label="XP" value={`${xp.toLocaleString()} pts`} accent="bg-gradient-to-tr from-orange-500 to-amber-400" />
        <StatCard icon={Flame} label="Streak" value={`${streak} days`} accent="bg-gradient-to-tr from-pink-500 to-rose-400" />
        <StatCard icon={Smile} label="Mood" value={mood} accent="bg-gradient-to-tr from-emerald-500 to-teal-400" />
        <StatCard icon={Calendar} label="Badge" value={badge} accent="bg-gradient-to-tr from-indigo-500 to-violet-400" />
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <h3 className="mb-2 text-sm text-gray-300">Current Challenge</h3>
        <p className="text-gray-100">Complete a 10-minute focus session with GENIE and maintain a positive mood trend.</p>
      </div>
    </section>
  );
};

export default Dashboard;
