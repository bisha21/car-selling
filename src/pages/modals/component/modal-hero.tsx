import backgroundImage from '../../../../public/Rectangle 3.png';

// Hero section for the Models page
export default function ModelsHero() {
  return (
    <div className="relative h-64 bg-linear-to-r from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background image with low opacity for subtle effect */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use imported image
          backgroundSize: 'cover', // Make image cover the whole div
          backgroundPosition: 'center', // Center the image
        }}
      />

      {/* Content on top of the background */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-2">Models</h1>
        <p className="text-lg text-gray-300">
          Find a car that is perfect for you
        </p>
      </div>
    </div>
  );
}
