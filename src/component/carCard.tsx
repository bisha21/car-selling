// Import the Link component from react-router-dom
// This lets us navigate to another route without reloading the page.
import { Link } from 'react-router-dom';

// ✅ Define a TypeScript interface for the Car object
// This helps ensure that each car has consistent properties and types.
interface Car {
  id: number;
  name: string;
  year: number;
  image: string;
  distance: string;
  mileage: string;
  price: number;
  location: string;
  condition: string;
  fuelType: string;
  transmission: string;
  color: string;
}

// ✅ Define the props that the CarCard component will receive.
// In this case, it expects a single "car" object.
interface CarCardProps {
  car: Car;
}

// ✅ The main functional component
// It receives a "car" prop and displays its details in a styled card.
export default function CarCard({ car }: CarCardProps) {
  // Destructure only the properties we need to display from the car object
  const { name, price, image, distance, mileage } = car;

  return (
    // ✅ The whole card is wrapped in a <Link>
    // When clicked, it navigates to a dynamic route like "/modals/1"
    <Link to={`/models/${car.id}`} className="cursor-pointer group">
      {/* Main card container */}
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition w-full h-80 sm:h-96">
        {/* ✅ Background image section */}
        {/* The image covers the entire div area */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* ✅ Overlay: adds a dark transparent layer for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ✅ Text content section */}
        {/* Positioned at the bottom of the card with a gradient background */}
        <div className="absolute bottom-0 w-full p-4 bg-linear-to-t from-black/70 to-transparent text-white text-center">
          {/* Car name */}
          <h3 className="font-semibold text-lg sm:text-xl">{name}</h3>

          {/* Car distance and mileage info */}
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Distance: {distance} | Mileage: {mileage}
          </p>

          {/* Car price (formatted with commas) */}
          <p className="text-lg sm:text-xl font-bold mt-2">
            ${price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
