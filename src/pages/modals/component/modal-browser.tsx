import { useState, useMemo } from 'react';
import ModelsSidebar from './modal-sidebar';        // Sidebar component for filtering options
import ModelsGrid from './modal-grid';              // Grid component to display car cards
import ModelsPagination from './modal-pagination';  // Pagination component for navigating pages
import image1 from '../../../../public/Rectangle 2.png';
import image2 from '../../../../public/Rectangle 3.png';
import image3 from '../../../../public/Rectangle 4.png';

// Type definition for a Car object
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

// Type definition for Filters
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

const ITEMS_PER_PAGE = 6; // Number of cars displayed per page

export default function ModelsBrowser() {
  // State to hold filter values
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

  // State to handle sorting
  const [sortBy, setSortBy] = useState<
    'price-low-high' | 'price-high-low' | 'year-new-old' | 'year-old-new'
  >('price-low-high');

  // State to track current pagination page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Memoized calculation of filtered and sorted cars
  const filteredCars = useMemo(() => {
    // Filter cars based on current filter state
    const result = CARS_DATA.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(filters.search.toLowerCase());
      const matchesLocation =
        !filters.location || car.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesYear = car.year >= filters.minYear && car.year <= filters.maxYear;
      const matchesPrice = car.price >= filters.minPrice && car.price <= filters.maxPrice;
      const matchesCondition = filters.condition.length === 0 || filters.condition.includes(car.condition);
      const matchesFuelType = filters.fuelType.length === 0 || filters.fuelType.includes(car.fuelType);
      const matchesTransmission = filters.transmission.length === 0 || filters.transmission.includes(car.transmission);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesYear &&
        matchesPrice &&
        matchesCondition &&
        matchesFuelType &&
        matchesTransmission
      );
    });

    // Sort the filtered cars based on selected sort option
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
  }, [filters, sortBy]); // Recalculate only when filters or sortBy change

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  // Slice filtered cars for the current page
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold mb-2 text-center">
          Browse through the models
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar for filtering */}
          <ModelsSidebar
            filters={filters}
            setFilters={setFilters}
            // Reset current page when filters change
            // @ts-expect-error temporary TS error handling
            setCurrentPage={setCurrentPage}
          />

          {/* Main content area */}
          <div className="flex-1">
            {/* Sorting options */}
            <div className="flex items-center gap-10 mb-6">
              <p className="text-lg font-bold text-black">Sort By:</p>
              <div className="flex gap-2 flex-wrap">
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
                      setCurrentPage(1); // Reset to first page when sorting changes
                    }}
                    className={`px-3 py-1 text-sm rounded-2xl ${
                      sortBy === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-[#2D93ED] border border-gray-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Display cars grid */}
            <ModelsGrid cars={paginatedCars} />

            {/* Pagination component */}
            {totalPages > 1 && (
              <ModelsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
