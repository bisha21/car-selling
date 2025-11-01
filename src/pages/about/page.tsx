import ContactUs from '../../component/contactus';
import AboutHero from './components/hero';
import HeroSection from './components/hero2';
import MissionSection from './components/mission';
import StatsSection from './components/stats-section';
import StorySection from './components/story-section';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <AboutHero />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <StorySection />
      <ContactUs />
    </div>
  );
}
