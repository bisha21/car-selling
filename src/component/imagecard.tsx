
export default function ImageCard({ image }:{image:string}) {
  return (
    <div className="relative w-96 h-96 lg:w-md lg:h-112 mx-auto">
      {/* Background offset */}
      <div className="absolute top-6 left-6 w-full h-full bg-blue-100 rounded-2xl"></div>

      {/* Main Image */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
        <img src={image} alt="Card" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
