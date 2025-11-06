import React from 'react';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';

// Placeholder 3D avatar zone. Ready Player Me or similar can be integrated later.
const AvatarZone = ({ emotion = 'neutral' }) => {
  const emotionHint = {
    happy: 'smiles and waves',
    stressed: 'breathes slowly',
    focused: 'nods attentively',
    neutral: 'stands by'
  }[emotion] || 'stands by';

  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/60 p-4 text-white backdrop-blur-xl">
      <div className="mb-2 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-400">
          <Smile className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-semibold">GENIE Avatar</h3>
        <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200">{emotion}</span>
      </div>
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="flex h-full items-center justify-center text-sm text-gray-300">
          The avatar {emotionHint}.
        </div>
      </div>
    </section>
  );
};

export default AvatarZone;
