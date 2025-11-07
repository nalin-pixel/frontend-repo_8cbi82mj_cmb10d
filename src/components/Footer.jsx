export default function Footer({ theme }) {
  const isFire = theme === 'fire';

  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between">
          <p className="text-white/70 text-sm">© 2025 DragonForge. All rights reserved.</p>
          <a
            href="#top"
            className={`text-sm font-medium hover:underline ${
              isFire ? 'text-orange-200' : 'text-cyan-200'
            }`}
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
