// components/ModelsBrowser.tsx
import { useState, useMemo } from 'react';
import ModelsSidebar from './modal-sidebar';
import ModelsGrid from './modal-grid';
import ModelsPagination from './modal-pagination';
import { Filter, X } from 'lucide-react';

// Images (Next.js App Router)
import image1 from '../../../../public/Rectangle 2.png';
import image2 from '../../../../public/Rectangle 3.png';
import image3 from '../../../../public/Rectangle 4.png';

// Types
interface Car {
  id: number;
  name: string;
  year: number;
  image: any;
  distance: string;
  mileage: string;
  price: number;
  location: string;
  condition: string;
  fuelType: string;
  transmission: string;
  color: string;
}

interface Filters {
  search: string;
  location: string;
  minYear: number;
  maxYear: number;
  condition: string[];
  minPrice: number;
  maxPrice: number;
  mileage: string[];
  fuelType: string[];
  transmission: string[];
}

const CARS_DATA: Car[] = [
  {
    id: 1,
    name: 'Lucio SUV',
    year: 2025,
    image: image1,
    distance: '310 Miles',
    mileage: '5,234 mi',
    price: 45000,
    location: 'New York',
    condition: 'New',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Blue',
  },
  {
    id: 2,
    name: 'Lucio SUV',
    year: 2025,
    image: image2,
    distance: '310 Miles',
    mileage: '5,234 mi',
    price: 48000,
    location: 'Los Angeles',
    condition: 'New',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Silver',
  },
  {
    id: 3,
    name: 'Lucio SUV',
    year: 2025,
    image: image3,
    distance: '310 Miles',
    mileage: '5,234 mi',
    price: 46500,
    location: 'Chicago',
    condition: 'New',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Lucio SUV',
    year: 2025,
    image: image1,
    distance: '310 Miles',
    mileage: '5,234 mi',
    price: 44500,
    location: 'Houston',
    condition: 'New',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    color: 'White',
  },
  {
    id: 5,
    name: 'Lucio SUV',
    year: 2024,
    image: image2,
    distance: '310 Miles',
    mileage: '8,500 mi',
    price: 42000,
    location: 'Phoenix',
    condition: 'Used',
    fuelType: 'Petrol',
    transmission: 'Manual',
    color: 'Red',
  },
  {
    id: 6,
    name: 'Lucio SUV',
    year: 2024,
    image: image3,
    distance: '310 Miles',
    mileage: '12,000 mi',
    price: 39500,
    location: 'Philadelphia',
    condition: 'Used',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Gray',
  },
  {
    id: 7,
    name: 'Lucio SUV',
    year: 2023,
    image: image1,
    distance: '310 Miles',
    mileage: '25,000 mi',
    price: 35000,
    location: 'San Antonio',
    condition: 'Used',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    color: 'Bronze',
  },
  {
    id: 8,
    name: 'Lucio SUV',
    year: 2023,
    image: image2,
    distance: '310 Miles',
    mileage: '30,000 mi',
    price: 33000,
    location: 'San Diego',
    condition: 'Used',
    fuelType: 'Petrol',
    transmission: 'Manual',
    color: 'Green',
  },
  {
    id: 9,
    name: 'Lucio SUV',
    year: 2025,
    image: image3,
    distance: '310 Miles',
    mileage: '2,100 mi',
    price: 49500,
    location: 'Dallas',
    condition: 'New',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Pearl',
  },
  {
    id: 10,
    name: 'Lucio SUV',
    year: 2024,
    image: image1,
    distance: '310 Miles',
    mileage: '7,800 mi',
    price: 41000,
    location: 'San Jose',
    condition: 'Used',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    color: 'Navy',
  },
  {
    id: 11,
    name: 'Lucio SUV',
    year: 2025,
    image: image1,
    distance: '310 Miles',
    mileage: '3,500 mi',
    price: 47000,
    location: 'Austin',
    condition: 'New',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Cream',
  },
  {
    id: 12,
    name: 'Lucio SUV',
    year: 2024,
    image: image2,
    distance: '310 Miles',
    mileage: '9,200 mi',
    price: 40000,
    location: 'Jacksonville',
    condition: 'Used',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    color: 'Charcoal',
  },
];

const ITEMS_PER_PAGE = 6;

export default function ModelsBrowser() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    search: '',
    location: '',
    minYear: 2020,
    maxYear: 2025,
    condition: [],
    minPrice: 0,
    maxPrice: 100000,
    mileage: [],
    fuelType: [],
    transmission: [],
  });

  const [sortBy, setSortBy] = useState<
    'price-low-high' | 'price-high-low' | 'year-new-old' | 'year-old-new'
  >('price-low-high');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCars = useMemo(() => {
    const result = CARS_DATA.filter((car) => {
      const matchesSearch =
        !filters.search ||
        car.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.location.toLowerCase().includes(filters.search.toLowerCase());

      const matchesLocation =
        !filters.location ||
        car.location.toLowerCase().includes(filters.location.toLowerCase());

      const matchesYear =
        car.year >= filters.minYear && car.year <= filters.maxYear;
      const matchesPrice =
        car.price >= filters.minPrice && car.price <= filters.maxPrice;
      const matchesCondition =
        filters.condition.length === 0 ||
        filters.condition.includes(car.condition);
      const matchesFuel =
        filters.fuelType.length === 0 ||
        filters.fuelType.includes(car.fuelType);
      const matchesTrans =
        filters.transmission.length === 0 ||
        filters.transmission.includes(car.transmission);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesYear &&
        matchesPrice &&
        matchesCondition &&
        matchesFuel &&
        matchesTrans
      );
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low-high':
          return a.price - b.price;
        case 'price-high-low':
          return b.price - a.price;
        case 'year-new-old':
          return b.year - a.year;
        case 'year-old-new':
          return a.year - b.year;
        default:
          return 0;
      }
    });

    return result;
  }, [filters, sortBy]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <section className="py-8 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Browse through the models
          </h2>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all"
            >
              <Filter size={24} />
              Filters ({filteredCars.length} cars)
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-80">
              <ModelsSidebar
                filters={filters}
                setFilters={setFilters}
                // @ts-expect-error "some ts err occuer"

                setCurrentPage={setCurrentPage}
              />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Sort Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-bold text-gray-800">Sort by:</span>
                {[
                  { key: 'price-low-high', label: 'Price: Low to High' },
                  { key: 'price-high-low', label: 'Price: High to Low' },
                  { key: 'year-new-old', label: 'Newest First' },
                  { key: 'year-old-new', label: 'Oldest First' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSortBy(key as typeof sortBy);
                      setCurrentPage(1);
                    }}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      sortBy === key
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white border-2 border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <p className="text-gray-600 mb-6">
                Showing {paginatedCars.length} of {filteredCars.length} cars
              </p>

              <ModelsGrid cars={paginatedCars} />

              {totalPages > 1 && (
                <div className="mt-10">
                  <ModelsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Drawer (Right Side) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={() => setIsDrawerOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-5 bg-linear-to-r from-blue-600 to-blue-700 text-white border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Filters</h3>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex-1 overflow-y-auto p-5">
              <ModelsSidebar
                filters={filters}
                setFilters={setFilters}
                // @ts-expect-error "some ts err occuer"
                setCurrentPage={setCurrentPage}
              />
            </div>

            {/* Footer */}
            <div className="p-5 border-t bg-white">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setFilters({
                      search: '',
                      location: '',
                      minYear: 2020,
                      maxYear: 2025,
                      condition: [],
                      minPrice: 0,
                      maxPrice: 100000,
                      mileage: [],
                      fuelType: [],
                      transmission: [],
                    });
                    setCurrentPage(1);
                  }}
                  className="flex-1 border-2 border-gray-400 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex-1 bg-linear-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition"
                >
                  Show Results ({filteredCars.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
