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

export default function App({ productPage = false }: { productPage?: boolean }) {
  const logRef = useLogRef();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader productPage={productPage} />
      <main id="main" className="log" ref={logRef}>
        {productPage ? (
          <div id="top"><KitBand fullPage /></div>
        ) : (
          <>
            <Spine target={logRef} />
            <Hero />
            <DirectionEntry />
            <VitalyEntry />
            <WasherEntry />
            <KitBand />
            <Coursework />
            <About />
            <Contact />
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
