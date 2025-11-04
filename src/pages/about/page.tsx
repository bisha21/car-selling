import ContactUs from '../../component/contactus';       // Contact form section
import AboutHero from './components/hero';               // Top hero/banner section
import HeroSection from './components/hero2';           // Secondary hero section
import MissionSection from './components/mission';      // Mission statement section
import StatsSection from './components/stats-section';  // Company statistics section
import StorySection from './components/story-section';  // Story/History section

export default function AboutUs() {
  return (
    // Main container for About Us page with background color and full height
    <div className="min-h-screen bg-[#f5f5f5]">
      
      {/* Page Sections in order */}
      <AboutHero />       {/* Top hero section introducing About Us */}
      <HeroSection />     {/* Secondary hero for more visuals/content */}
      <StatsSection />    {/* Display key numbers/statistics */}
      <MissionSection />  {/* Company's mission statement */}
      <StorySection />    {/* Story or history of the company */}
      <ContactUs />       {/* Contact form at the bottom */}
      
    </div>
  );
}
