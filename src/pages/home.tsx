import AboutUs from '../component/about';
import AdvertisingBanner from '../component/advertising';
import ContactUs from '../component/contactus';
import FeaturedCars from '../component/features';
import Hero from '../component/hero';
import Testimonials from '../component/testinimonial';

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCars />
      <AdvertisingBanner />
      <Testimonials />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
