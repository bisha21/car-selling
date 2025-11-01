import TestimonialCard from './card';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jonh Doe',
      role: 'Client',
      text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus...',

      rating: 5,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    {
      id: 2,
      name: 'Maria Johnson',
      role: 'Client',
      text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer finibus...',
      rating: 4,
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    },
    {
      id: 3,
      name: 'Robert Smith',
      role: 'Client',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop',
    },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What our customers say
        </h2>

        {/* Scrollable container on mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="shrink-0 w-[80%] sm:w-[60%] md:w-auto snap-center"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
