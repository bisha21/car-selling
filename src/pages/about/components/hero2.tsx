import handshake from '../../../../public/Ellipse 15.png';
import ImageCard from '../../../component/imagecard';
export default function HeroSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            CAR-BUD
          </h1>

          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-justify text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada, nunc ut blandit efficitur, magna justo cursus purus, ut
            fermentum purus ipsum at justo.
          </p>

          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-justify text-gray-600">
            Sed tincidunt mi vitae sem fringilla, ac vehicula netus rhoncus.
            Integer sit amet justo ut metus fermentum ullamcorper.
          </p>

          <p className="text-lg lg:text-xl leading-relaxed text-justify text-gray-600">
            Nullam pellentesque purus malesuada, vehicula nulla et, laoreet
            ante. Vivamus id convallis nunc.
          </p>
        </div>

        {/* Image Card */}
        <div className="flex-1 flex justify-center">
          <ImageCard image={handshake} />
        </div>
      </div>
    </section>
  );
}
