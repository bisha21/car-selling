import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function CarSpecs() {
  const [isFavorite, setIsFavorite] = useState(false);

  const car = {
    name: 'Ford TRN Model 7',
    brand: 'Ford',
    modelYear: '2019',
    condition: 'Used',
    bodyStyle: 'Coupe',
    fuelType: 'Diesel',
    transmission: 'Manual',
    color: 'Red',
    odometer: '35691 Miles',
    price: '$ 23,000 /-',
  };

  const specs = [
    { label: 'Name', value: car.name },
    { label: 'Brand', value: car.brand },
    { label: 'Model Year', value: car.modelYear },
    { label: 'Condition', value: car.condition },
    { label: 'Body Style', value: car.bodyStyle },
    { label: 'Fuel Type', value: car.fuelType },
    { label: 'Transmission', value: car.transmission },
    { label: 'Color', value: car.color },
    { label: 'Odometer', value: car.odometer },
    { label: 'Price', value: car.price },
  ];

  return (
    <div className="max-w-md mx-auto p-8 bg-white">
      {/* Title */}
      <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
        FORD TRN MODEL 7
      </h1>

      {/* Specs List */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <div className="space-y-3">
          {specs.map((spec, index) => (
            <div key={index} className="flex text-sm">
              <span className="font-semibold text-gray-800 w-32 flex-shrink-0">
                {spec.label}
              </span>
              <span className="text-gray-600 mr-2">:</span>
              <span className="font-bold text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add to Favorites Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
          isFavorite
            ? 'bg-red-500 text-white hover:bg-red-600'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}
