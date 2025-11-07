import { motion } from 'framer-motion';

const items = [
  {
    title: 'Wyrmspire Citadel',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Glacier Keep',
    img: 'https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Volcanic Verge',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Gallery({ theme }) {
  const isFire = theme === 'fire';

  return (
    <section id="gallery" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The Realms</h2>
          <span className="text-xs text-white/60">
            {isFire ? 'Forged in flame' : 'Born of frost'}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-xl ring-1 ${
                isFire ? 'ring-orange-400/30' : 'ring-cyan-400/30'
              }`}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white font-semibold">
                  {card.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
