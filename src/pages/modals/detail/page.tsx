import ContactUs from '../../../component/contactus';
import Testimonials from '../../../component/testinimonial';
import CarDetailsContent from './component/detail';
import FAQs from './component/faq';
import DetailHero from './component/hero';

function ModelDetailPage() {
  return (
    <div>
      <DetailHero />
      <CarDetailsContent />
      <Testimonials />
      <FAQs />
      <ContactUs />
    </div>
  );
}

export default ModelDetailPage;
