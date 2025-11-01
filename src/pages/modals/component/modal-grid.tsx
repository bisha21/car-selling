import CarCard from "../../../component/CarCard";

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

interface ModelsGridProps {
  cars: Car[];
}

export default function ModelsGrid({ cars }: ModelsGridProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No cars found matching your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
