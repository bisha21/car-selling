import { Link } from 'react-router-dom';

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { name, price, image } = car;
  return (
    <Link to={`/modals/${car.id}`} className="cursor-pointer group">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition w-full h-80 sm:h-96">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content at the bottom */}
        <div className="absolute bottom-0 w-full p-4 bg-linear-to-t from-black/70 to-transparent text-white text-center">
          <h3 className="font-semibold text-lg sm:text-xl">{name}</h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Distance: 31K Miles
          </p>
          <p className="text-lg sm:text-xl font-bold mt-2">{price}</p>
        </div>
      </div>
    </Link>
  );
}
