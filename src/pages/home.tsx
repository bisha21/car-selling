import AboutUs from '../component/about'; // Section describing the company or website
import AdvertisingBanner from '../component/advertising'; // Promotional or ad banner section
import ContactUs from '../component/contactus'; // Contact form section
import FeaturedCars from '../component/features'; // Section showing featured cars
import Hero from '../component/hero'; // Main landing hero banner with headline
import Testimonials from '../component/testinimonial'; // Customer testimonials section

function Home() {
  return (
    <div>
      {/* Hero section: main landing banner */}
      <Hero />

      {/* Highlighted or featured cars */}
      <FeaturedCars />

      {/* Advertising or promotional banner */}
      <AdvertisingBanner />

      {/* Customer testimonials to build trust */}
      <Testimonials />

      {/* About Us section: info about company/website */}
      <AboutUs />

      {/* Contact form at the bottom of the page */}
      <ContactUs />
    </div>
  );
}

export default Home;
