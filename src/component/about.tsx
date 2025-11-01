import handshake from '../../public/Ellipse 15.png';

export default function AboutUs() {
  return (
    <section className="py-16 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bringing You Your Dream Car!
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              molestias deleniti aliquid expedita similique, vero vel, maxime,
              itaque quod aperiam quas ratione ea reprehenderit. Quod ipsa
              debitis cupiditate temporibus cum possimus adipisci maxime ratione
              neque! Quaerat, natus quasi. Recusandae iusto iure officiis totam
              ut, est voluptatibus quisquam. Unde, nemo iusto?
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              molestias deleniti aliquid expedita similique, vero vel, maxime,
              itaque quod aperiam quas ratione ea reprehenderit. Quod ipsa
              debitis cupiditate temporibus cum possimus adipisci maxime ratione
              neque! Quaerat, natus quasi. Recusandae iusto iure officiis totam
              ut, est voluptatibus quisquam. Unde, nemo iusto?
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex relative justify-center items-center overflow-visible">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <img
                src={handshake}
                alt="About Us"
                className="relative w-96 h-96 object-cover rounded-full z-50"
              />
            </div>

            {/* Blue Circle extending beyond 100vw */}
            <div
              className="absolute bg-[#2D93ED] w-[500px] h-[500px] rounded-full top-1/2 left-[60%] transform -translate-y-1/2 z-10"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
