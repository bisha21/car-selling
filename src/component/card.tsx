// Define the TypeScript interface for testimonial data
interface TestimonialCardProps {
  id: number; // Unique ID for the testimonial
  name: string; // Name of the person giving testimonial
  role: string; // Role or title of the person
  text: string; // The testimonial message
  rating: number; // Star rating (1-5)
  image: string; // Profile image URL
}

// Functional component receives a testimonial prop of type TestimonialCardProps
export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialCardProps;
}) {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* =========================
          Profile Image
          Positioned absolutely to overlap the card
      ========================= */}
      <div className="absolute left-0 top-20 z-10">
        <div className="w-24 h-24 rounded-full bg-yellow-400 p-1">
          <img
            src={
              testimonial.image ||
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
            }
            alt={testimonial.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* =========================
          Top Quote Icon
          Decorative element to show quotes
      ========================= */}
      <div className="absolute left-24 -top-3 z-20">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>
      </div>

      {/* =========================
          Main Card
          Rounded rectangle with shadow and border
      ========================= */}
      <div className="ml-12 bg-white rounded-2xl border-2 border-yellow-400 p-3 pt-6 shadow-lg">
        {/* Header: Name, Role, and Star Rating */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            {/* Person's Name */}
            <h3 className="text-2xl font-bold text-gray-900">
              {testimonial.name}
            </h3>

            {/* Underline decoration */}
            <div className="w-24 h-0.5 bg-yellow-400 mt-1"></div>

            {/* Role / Title */}
            <p className="text-sm text-gray-500 mt-1">
              {testimonial.role || 'Client'}
            </p>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 mt-5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>

        {/* =========================
            Testimonial Text
            Margin-left to align with card content
        ========================= */}
        <p className="text-gray-600 leading-relaxed ml-14">
          {testimonial.text}
        </p>

        {/* =========================
            Bottom Quote Icon
            Decorative element mirrored from top
        ========================= */}
        <div className="absolute right-4 -bottom-4">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center top-10">
            <svg
              className="w-5 h-5 text-white transform rotate-180"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
