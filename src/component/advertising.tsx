import banner from '../../public/Rectangle 8.png';

export default function AdvertisingBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
      <img
        src={banner}
        alt="Car Banner"
        className="absolute inset-0 w-full h-full object-fill"
      />
    </section>
  );
}
