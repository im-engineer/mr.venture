import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { FeaturesPreview } from '../components/home/FeaturesPreview';
import { Testimonials } from '../components/Testimonials';
import { TrustBadges } from '../components/home/TrustBadges';
import { AboutMRVenture } from '../components/home/AboutMRVenture';
import { ComparisonSection } from '../components/home/ComparisonSection';
import { LiveDemo } from '../components/home/LiveDemo';
import { CTA } from '../components/CTA';

type HomePageProps = {
  navigate: (page: string, slug?: string) => void;
};

export function HomePage({ navigate }: HomePageProps) {
  return (
    <div>
      <Hero navigate={navigate} />
      <TrustBadges />
      <AboutMRVenture />
      <Stats />
      <ServicesPreview navigate={navigate} />
      <ComparisonSection navigate={navigate} />
      <FeaturesPreview navigate={navigate} />
      <LiveDemo navigate={navigate} />
      <Testimonials />
      <CTA />
    </div>
  );
}
