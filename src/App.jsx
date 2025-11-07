import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('fire'); // 'fire' | 'ice'

  const themeClasses = useMemo(
    () =>
      theme === 'fire'
        ? 'from-[#0b0a09] via-[#1a0e07] to-[#2b0b07]'
        : 'from-[#05090f] via-[#08121d] to-[#0b1c2a]',
    [theme]
  );

  return (
    <div id="top" className={`min-h-screen bg-gradient-to-br ${themeClasses} text-white`}>
      <Navbar theme={theme} onThemeChange={setTheme} />
      <Hero theme={theme} />
      <FeatureCards theme={theme} />
      <Gallery theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
