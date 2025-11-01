interface CarImageGalleryProps {
  images: string[];
  selectedIndex: number;
  onSelectImage: (index: number) => void;
}

export default function CarImageGallery({
  images,
  selectedIndex,
  onSelectImage,
}: CarImageGalleryProps) {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[selectedIndex] || '/placeholder.svg'}
          alt="Main car image"
          className=" h-full w-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onSelectImage(index)}
            className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedIndex === index
                ? 'border-blue-500 ring-2 ring-blue-300'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <img
              src={image || '/placeholder.svg'}
              alt={`Car thumbnail ${index + 1}`}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
