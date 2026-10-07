import { SiteFrame } from './components/SiteFrame';
import { About } from './sections/About';
import { Campaign } from './sections/Campaign';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Research } from './sections/Research';
import { Service } from './sections/Service';
import { Work } from './sections/Work';

export default function App() {
  return (
    <SiteFrame>
      <Hero />
      <About />
      <Work />
      <Service />
      <Campaign />
      <Education />
      <Research />
      <Gallery />
      <Contact />
    </SiteFrame>
  );
}
