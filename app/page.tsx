import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { PlaygroundFeature } from '@/components/sections/PlaygroundFeature';
import { ForWho } from '@/components/sections/ForWho';
import { Playground } from '@/components/sections/Playground';
import { Resources } from '@/components/sections/Resources';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <PlaygroundFeature />
      <ForWho />
      <Playground />
      <Resources />
      <Footer />
    </main>
  );
}
