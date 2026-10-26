import { About } from './components/About';
import { Contact } from './components/Contact';
import { Coursework } from './components/Coursework';
import { DirectionEntry } from './components/DirectionEntry';
import { Hero } from './components/Hero';
import { KitBand } from './components/KitBand';
import { Spine, useLogRef } from './components/motion';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { VitalyEntry } from './components/VitalyEntry';
import { WasherEntry } from './components/WasherEntry';

export default function App() {
  const logRef = useLogRef();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="log" ref={logRef}>
        <Spine target={logRef} />
        <Hero />
        <KitBand />
        <DirectionEntry />
        <VitalyEntry />
        <WasherEntry />
        <Coursework />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
