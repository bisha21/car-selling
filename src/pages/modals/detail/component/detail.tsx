import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function CarDetailsPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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
    images: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
    ],
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
    <div className="min-h-screen bg-[#F5F5F5] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg  p-6">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={car.images[selectedImageIndex]}
                alt="Main car image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-blue-500 ring-2 ring-blue-300'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Car thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Car Specs */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
              FORD TRN MODEL 7
            </h1>

            {/* Specs List */}
            <div className="bg-gray-100 rounded-lg p-6 mb-6 grow">
              <div className="space-y-3">
                {specs.map((spec, index) => (
                  <div key={index} className="flex text-sm">
                    <span className="font-semibold text-gray-800 w-32 shrink-0">
                      {spec.label}
                    </span>
                    <span className="text-gray-600 mr-2">:</span>
                    <span className="font-bold text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Favorites Button */}
          </div>
          <div className='mx-auto col-span-2'>
            <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all  ${
              isFavorite
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
