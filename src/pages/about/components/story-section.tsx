import handshake from '../../../../public/Ellipse 15.png';
import ImageCard from '../../../component/imagecard';

export default function StorySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center  gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            CAR-BUD started with a simple mission: to make car ownership easier
            and more accessible for everyone. From our humble beginnings in a
            small garage, we focused on understanding customer needs and
            building trust through transparent service.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            Over the years, we expanded our reach, offering a wide variety of
            vehicles and ensuring that every client experiences a seamless
            buying process. Our dedicated team works tirelessly to provide
            expert advice, personalized options, and reliable after-sales
            support.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            Innovation is at the heart of our story. We constantly explore new
            technologies and partnerships to enhance the customer experience,
            from online bookings to flexible financing options, making it easier
            than ever to get behind the wheel of your dream car.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify">
            Today, CAR-BUD is proud to serve thousands of happy customers across
            the country. Our story continues to be driven by passion, integrity,
            and a commitment to helping people find the perfect car for their
            lifestyle.
          </p>
        </div>

        {/* Image Card */}
        <div className="flex-1 flex justify-center ">
          <ImageCard image={handshake} />
        </div>
      </div>
    </section>
  );
}
