import { useState } from 'react';
import image1 from './../../../../public/Rectangle 2.png';
import image2 from './../../../../public/Rectangle 3.png';
import image3 from './../../../../public/Rectangle 4.png';

interface FavoriteCar {
  id: number;
  model: string;
  year: number;
  distance: string;
  price: string;
  image: string;
}

const FAVORITE_CARS: FavoriteCar[] = [
  {
    id: 1,
    model: 'Lucio SUV',
    year: 2025,
    distance: '311 Miles',
    price: '$35,000',
    image: image1,
  },
  {
    id: 2,
    model: 'Lucio SUV',
    year: 2025,
    distance: '311 Miles',
    price: '$35,000',
    image: image2,
  },
  {
    id: 3,
    model: 'Lucio SUV',
    year: 2025,
    distance: '311 Miles',
    price: '$35,000',
    image: image3,
  },
  {
    id: 4,
    model: 'Lucio SUV',
    year: 2025,
    distance: '311 Miles',
    price: '$35,000',
    image: image3,
  },
];

export default function ProfileFavorites() {
  const [favorites, setFavorites] = useState<FavoriteCar[]>(FAVORITE_CARS);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((car) => car.id !== id));
  };

  return (
    <section className="py-12 px-4 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Your Favorites
        </h2>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favorites.map((car) => (
              <div key={car.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  {/* Car Image */}
                  <img
                    src={car.image || '/placeholder.svg'}
                    alt={`${car.model} ${car.year}`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Dark Overlay with Info */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <button
                      onClick={() => removeFavorite(car.id)}
                      className="text-white text-sm font-medium hover:text-red-400 transition-colors"
                    >
                      Remove from Favorites
                    </button>
                  </div>

                  {/* Car Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">
                      {car.model} - {car.year}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Distance: {car.distance}
                    </p>
                    <p className="text-white font-bold text-lg mt-2">
                      {car.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No favorite cars yet</p>
            <a
              href="/models"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Browse our models
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
