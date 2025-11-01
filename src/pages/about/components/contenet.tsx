import image from '../../../../public/Ellipse 15.png';
interface ContentSectionProps {
  title: string;
  imageSide?: 'left' | 'right';
  children: React.ReactNode;
}
export default function ContentSection({
  title,
  imageSide = 'right',
  children,
}: ContentSectionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h2>
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
          imageSide === 'left' ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {imageSide === 'left' && (
          <div className="order-2 lg:order-1">
            <img
              src={image}
              alt="Car dealership"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}
        <div className={imageSide === 'left' ? 'order-1 lg:order-2' : ''}>
          {children}
        </div>
        {imageSide === 'right' && (
          <div>
            <img
              src={image}
              alt="Car dealership"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
