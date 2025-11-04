import handshake from '../../../../public/Ellipse 15.png'; // Import the handshake image
import ImageCard from '../../../component/imagecard'; // Import a reusable ImageCard component

export default function MissionSection() {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Container for the section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Card on the left (flex-1 ensures equal width) */}
        <div className="flex-1 flex justify-center">
          <ImageCard image={handshake} />
        </div>

        {/* Text Content on the right */}
        <div className="flex-1">
          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Our Mission: Getting you your dream car!
          </h2>

          {/* Paragraphs */}
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
            Duis a felis massa. Nullam pellentesque purus malesuada, vehicula
            nulla et, laoreet ante. Vivamus id convallis nunc.
          </p>
        </div>

        {/* You can optionally add another image here if needed */}
      </div>
    </section>
  );
}
