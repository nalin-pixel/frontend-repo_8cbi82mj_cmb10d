import { Flame, Snowflake } from 'lucide-react';

export default function Navbar({ theme, onThemeChange }) {
  const isFire = theme === 'fire';

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`h-9 w-9 rounded-lg grid place-items-center shadow-inner transition-colors duration-300 ${
              isFire ? 'bg-orange-500/20 ring-1 ring-orange-400/40' : 'bg-cyan-500/20 ring-1 ring-cyan-400/40'
            }`}
          >
            {isFire ? (
              <Flame className="h-5 w-5 text-orange-300" />
            ) : (
              <Snowflake className="h-5 w-5 text-cyan-300" />
            )}
          </div>
          <span className="font-semibold tracking-wide text-white/90 select-none">
            DragonForge
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onThemeChange('fire')}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
              isFire
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-600/30 ring-orange-400'
                : 'bg-white/5 text-white/80 hover:bg-white/10 ring-transparent'
            }`}
            aria-pressed={isFire}
          >
            <Flame className="h-4 w-4" /> Fire
          </button>
          <button
            onClick={() => onThemeChange('ice')}
            className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
              !isFire
                ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-600/30 ring-cyan-400'
                : 'bg-white/5 text-white/80 hover:bg-white/10 ring-transparent'
            }`}
            aria-pressed={!isFire}
          >
            <Snowflake className="h-4 w-4" /> Ice
          </button>
        </div>
      </div>
    </header>
  );
}
