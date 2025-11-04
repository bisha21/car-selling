import CarCard from '../../../component/carCard';

// Type definition for a single Car object
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

// Props for the ModelsGrid component
interface ModelsGridProps {
  cars: Car[]; // Array of car objects to display
}

// Grid component that displays a list of cars
export default function ModelsGrid({ cars }: ModelsGridProps) {
  // If no cars are found, show a friendly message
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No cars found matching your filters.
        </p>
      </div>
    );
  }

  // Display the cars in a responsive grid layout
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        // Each car is rendered using the CarCard component
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
