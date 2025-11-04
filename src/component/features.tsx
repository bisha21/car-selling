import image1 from '../../public/Rectangle 2.png';
import image2 from '../../public/Rectangle 3.png';
import image3 from '../../public/Rectangle 4.png';
import CarCard from './carCard';

// ✅ Define the structure for a Car object
interface Car {
  id: number;
  name: string;
  price: string;
  image: string; // This can be an imported image or a URL string
}

export default function FeaturedCars() {
  // ✅ Hardcoded list of featured cars
  const cars: Car[] = [
    { id: 1, name: 'Lucid SUV - 2025', price: '$89,000', image: image1 },
    { id: 2, name: 'Lucid SUV - 2025', price: '$89,000', image: image2 },
    { id: 3, name: 'Lucid SUV - 2025', price: '$89,000', image: image3 },
    { id: 4, name: 'Lucid SUV - 2025', price: '$89,000', image: image1 },
    { id: 5, name: 'Lucid SUV - 2025', price: '$89,000', image: image2 },
    { id: 6, name: 'Lucid SUV - 2025', price: '$89,000', image: image3 },
    { id: 7, name: 'Lucid SUV - 2025', price: '$89,000', image: image1 },
    { id: 8, name: 'Lucid SUV - 2025', price: '$89,000', image: image2 },
  ];

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Featured Cars</h2>

        {/* Grid of Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {cars.map((car) => (
            // ✅ Each CarCard receives a car object as a prop
            // @ts-expect-error 'some ts err occuer'
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
