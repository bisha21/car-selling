import image from '../../../../public/Ellipse 15.png';

interface ContentSectionProps {
  title: string; // The title of this section
  imageSide?: 'left' | 'right'; // Determines if the image appears on the left or right
  children: React.ReactNode; // Content to display next to the image
}

export default function ContentSection({
  title,
  imageSide = 'right', // Default image position is right
  children,
}: ContentSectionProps) {
  return (
    <div className="mb-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>

      {/* Grid container for image and content */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          imageSide === 'left' ? 'lg:grid-flow-col-dense' : ''
        }`}
      >
        {/* Image */}
        <div className={imageSide === 'left' ? 'lg:col-start-2' : ''}>
          <img
            src={image} // Image source
            alt="Car dealership" // Alt text for accessibility
            className="w-full h-80 object-cover rounded-2xl shadow-lg" // Styling
          />
        </div>

        {/* Content area (children passed to the component) */}
        <div className={imageSide === 'left' ? 'lg:col-start-1' : ''}>
          {children}
        </div>
      </div>
    </div>
  );
}
