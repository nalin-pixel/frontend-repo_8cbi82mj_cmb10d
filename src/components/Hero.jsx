import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ theme }) {
  const isFire = theme === 'fire';

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Optional Spline scene. Replace URL with your own if desired. */}
        <Spline
          scene="https://prod.spline.design/0f8nKZC7q0M8r8qg/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40 ${
            isFire ? 'bg-orange-500/40' : 'bg-cyan-500/40'
          }`}
        />
        <div
          className={`absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40 ${
            isFire ? 'bg-red-500/40' : 'bg-blue-600/40'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span
            className={`inline-block mb-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wider ring-1 backdrop-blur ${
              isFire
                ? 'bg-orange-500/10 text-orange-200 ring-orange-400/40'
                : 'bg-cyan-500/10 text-cyan-200 ring-cyan-400/40'
            }`}
          >
            {isFire ? 'Fire & Dragon' : 'Ice & Dragon'}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow">
            Forge your legend in the realm of dragons
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            A modern showcase blending elemental power with elegant design. Toggle
            between blazing fire and crystalline ice to change the mood.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#gallery"
              className={`${
                isFire
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500'
                  : 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600'
              } text-white px-5 py-3 rounded-md text-sm font-semibold shadow-lg shadow-black/30 transition-colors`}
            >
              Explore the Realm
            </a>
            <a
              href="#lore"
              className="px-5 py-3 rounded-md text-sm font-semibold bg-white/10 hover:bg-white/15 text-white/90 ring-1 ring-white/15"
            >
              Read the Lore
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
