import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../../public/Rectangle 2.png';
import image2 from '../../public/Rectangle 3.png';
import image3 from '../../public/Rectangle 4.png';

export default function Hero() {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides, each with an image and title
  const slides = [
    { image: image1, title: 'Bugatti Chiron' },
    { image: image2, title: 'Ferrari F8' },
    { image: image3, title: 'Lamborghini Huracán' },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    // Use modulo to loop back to the first slide
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    // Use modulo to loop back to the last slide if at first
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Slide Image */}
            <img
              src={slide.image || '/placeholder.svg'}
              alt={slide.title}
              className="w-full h-full object-fill"
            />
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition"
      >
        <ChevronLeft size={24} className="text-gray-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition"
      >
        <ChevronRight size={24} className="text-gray-900" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
