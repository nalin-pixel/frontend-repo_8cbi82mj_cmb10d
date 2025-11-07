import { Flame, Snowflake, Shield, Sword } from 'lucide-react';

const features = [
  {
    title: 'Elemental Modes',
    desc: 'Switch between fire and ice to transform the entire experience.',
    iconFire: Flame,
    iconIce: Snowflake,
  },
  {
    title: 'Dragon Guard',
    desc: 'Protected by ancient scales and arcane wards.',
    iconFire: Shield,
    iconIce: Shield,
  },
  {
    title: 'Blade of Realms',
    desc: 'Cut through the fog of ordinary design with legendary clarity.',
    iconFire: Sword,
    iconIce: Sword,
  },
];

export default function FeatureCards({ theme }) {
  const isFire = theme === 'fire';

  return (
    <section id="lore" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = isFire ? f.iconFire : f.iconIce;
            return (
              <div
                key={i}
                className={`rounded-xl p-6 ring-1 transition-all shadow-lg/30 shadow-black/10 ${
                  isFire
                    ? 'bg-orange-500/10 ring-orange-400/30 hover:ring-orange-300/60'
                    : 'bg-cyan-500/10 ring-cyan-400/30 hover:ring-cyan-300/60'
                }`}
              >
                <div
                  className={`h-10 w-10 grid place-items-center rounded-md mb-4 ${
                    isFire ? 'bg-orange-500/20' : 'bg-cyan-500/20'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isFire ? 'text-orange-200' : 'text-cyan-200'}`} />
                </div>
                <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                <p className="text-white/75 mt-1 text-sm">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
