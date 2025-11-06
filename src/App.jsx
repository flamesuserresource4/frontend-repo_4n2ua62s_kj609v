import React, { useState, useMemo } from 'react';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import EmotionTracker from './components/EmotionTracker';
import AvatarZone from './components/AvatarZone';

const dummyUser = {
  xp: 1240,
  streak: 3,
  mood: 'neutral',
  badge: 'Rising Star',
};

function App() {
  const [started, setStarted] = useState(false);
  const [emotion, setEmotion] = useState(dummyUser.mood);
  const [xp, setXp] = useState(dummyUser.xp);
  const [streak, setStreak] = useState(dummyUser.streak);

  const dashData = useMemo(() => ({
    xp,
    streak,
    mood: emotion,
    badge: dummyUser.badge,
  }), [xp, streak, emotion]);

  if (!started) {
    return <Hero onStart={() => setStarted(true)} />;
  }

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(60rem_60rem_at_70%_-10%,rgba(255,153,0,0.15),transparent),radial-gradient(40rem_40rem_at_-10%_30%,rgba(255,255,255,0.06),transparent)] from-gray-950 to-black px-4 py-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-3">
          <Dashboard data={dashData} />
        </div>
        <div className="md:col-span-2">
          <ChatInterface emotion={emotion} onGainXP={(g) => setXp(v => v + g)} />
        </div>
        <div className="space-y-6">
          <EmotionTracker onEmotion={setEmotion} />
          <AvatarZone emotion={emotion} />
        </div>
      </div>
    </div>
  );
}

export default App;
