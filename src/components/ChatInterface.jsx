import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Placeholder adaptive response system - wired for future LLM integration
const generateAdaptiveReply = async (message, emotion) => {
  const tones = {
    happy: '✨ Love the energy! Let’s level up together.',
    stressed: '🌿 Deep breath. We’ll take it step by step.',
    focused: '🎯 Locked in. Here’s a crisp breakdown.',
    neutral: '🤖 Ready when you are!'
  };
  const tone = tones[emotion] || tones.neutral;
  return `${tone} You said: "${message}". Here’s a quick insight: try summarizing your thought in one sentence.`;
};

const ChatInterface = ({ emotion = 'neutral', onGainXP }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey! I’m GENIE. Share what you’re learning today and I’ll guide you.' }
  ]);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    const reply = await generateAdaptiveReply(userMsg.content, emotion);
    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    onGainXP?.(5);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="flex h-[32rem] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/60 to-black/60 text-white backdrop-blur-xl">
      <div className="border-b border-white/10 p-4 text-sm text-gray-300">Learning Chat — tuned to your current mood: <span className="font-medium text-white">{emotion}</span></div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${m.role === 'assistant' ? 'bg-white/10 text-white' : 'ml-auto bg-orange-500/90 text-black'}`}
          >
            {m.content}
          </motion.div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex items-center gap-2 border-t border-white/10 p-3">
        <div className="flex-1">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Type your thought…"
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none ring-0 focus:border-orange-400 focus:outline-none"
          />
        </div>
        <button
          onClick={sendMessage}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:brightness-105"
        >
          <Sparkles className="h-4 w-4" />
          Send
        </button>
      </div>
    </section>
  );
};

export default ChatInterface;
