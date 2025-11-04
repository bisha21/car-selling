import backgroundImage from '../../../../public/Rectangle 3.png';

export default function ProfileHero() {
  return (
    // Main container for the hero section
    <div className="relative h-64 bg-linear-to-r from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: 'cover', // Cover the entire container
          backgroundPosition: 'center', // Center the image
        }}
      />

      {/* Content above the background image */}
      <div className="relative z-10 text-center">
        {/* Main heading */}
        <h1 className="text-5xl font-bold text-white mb-2">Models</h1>

        {/* Subheading / description */}
        <p className="text-lg text-gray-300">
          Find a car that is perfect for you
        </p>
      </div>
    </div>
  );
}
