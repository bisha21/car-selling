
interface CarFilterSidebarProps {
  filters: any;
  setFilters: (filters: any) => void;
  resetFilters: () => void;
}

export default function CarFilterSidebar({
  filters,
  setFilters,
  resetFilters,
}: CarFilterSidebarProps) {
  const handleInputChange = (key: string, value: any) => {
    setFilters((prev: any) => ({ ...prev, [key]: value }));
  };

  const colors = [
    { name: 'White', code: '#FFFFFF' },
    { name: 'Brown', code: '#8B4513' },
    { name: 'Black', code: '#000000' },
    { name: 'Red', code: '#DC143C' },
    { name: 'Beige', code: '#F5F5DC' },
    { name: 'Silver', code: '#C0C0C0' },
    { name: 'Blue', code: '#1E90FF' },
    { name: 'Tan', code: '#D2B48C' },
  ];

  return (
    <div className="w-full lg:w-64 bg-white border border-gray-300 rounded-lg p-4  overflow-y-auto h-fit shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Search */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search..."
          value={filters.search}
          onChange={(e) => handleInputChange('search', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Condition */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Condition</h4>
        {['New', 'Used'].map((condition) => (
          <label key={condition} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.condition.includes(condition)}
              onChange={(e) => {
                const newConditions = e.target.checked
                  ? [...filters.condition, condition]
                  : filters.condition.filter((c: string) => c !== condition);
                handleInputChange('condition', newConditions);
              }}
            />
            {condition}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Price Range</h4>
        <div className="flex gap-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) =>
              handleInputChange('minPrice', Number(e.target.value))
            }
            placeholder="Min"
            className="w-1/2 px-2 py-1 border rounded text-sm"
          />
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) =>
              handleInputChange('maxPrice', Number(e.target.value))
            }
            placeholder="Max"
            className="w-1/2 px-2 py-1 border rounded text-sm"
          />
        </div>
      </div>

      {/* Year */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Model Year</h4>
        <div className="flex gap-2">
          <input
            type="number"
            value={filters.minYear}
            onChange={(e) =>
              handleInputChange('minYear', Number(e.target.value))
            }
            placeholder="Min"
            className="w-1/2 px-2 py-1 border rounded text-sm"
          />
          <input
            type="number"
            value={filters.maxYear}
            onChange={(e) =>
              handleInputChange('maxYear', Number(e.target.value))
            }
            placeholder="Max"
            className="w-1/2 px-2 py-1 border rounded text-sm"
          />
        </div>
      </div>

      {/* Fuel Type */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Fuel Type</h4>
        {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map((fuel) => (
          <label key={fuel} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.fuelType.includes(fuel)}
              onChange={(e) => {
                const newFuel = e.target.checked
                  ? [...filters.fuelType, fuel]
                  : filters.fuelType.filter((f: string) => f !== fuel);
                handleInputChange('fuelType', newFuel);
              }}
            />
            {fuel}
          </label>
        ))}
      </div>

      {/* Transmission */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-2">Transmission</h4>
        {['Automatic', 'Manual'].map((type) => (
          <label key={type} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.transmission.includes(type)}
              onChange={(e) => {
                const newTrans = e.target.checked
                  ? [...filters.transmission, type]
                  : filters.transmission.filter((t: string) => t !== type);
                handleInputChange('transmission', newTrans);
              }}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Color */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Color</h4>
        <div className="grid grid-cols-2 gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleInputChange('color', color.name)}
              className={`flex items-center justify-between border px-2 py-1 rounded text-sm ${
                filters.color === color.name
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300'
              }`}
            >
              <span>{color.name}</span>
              <span
                className="w-4 h-4 rounded border"
                style={{ backgroundColor: color.code }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
