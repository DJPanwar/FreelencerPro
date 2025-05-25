import { testimonials } from "../constant/constant";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, []);

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section
      id="testimonials"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <Quote
          size={200}
          className="absolute text-emerald-500 top-10 left-10 transform -rotate-12"
        />
        <Quote
          size={200}
          className="absolute text-emerald-500 bottom-10 right-10 transform rotate-12"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say
            about working with me
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                    <div className="mb-6">
                      <Quote
                        size={36}
                        className="text-emerald-500 opacity-50"
                      />
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed text-lg italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-emerald-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-emerald-600 text-white rounded-full p-2 shadow-lg hover:bg-emerald-700 transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-emerald-600 text-white rounded-full p-2 shadow-lg hover:bg-emerald-700 transition-colors duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  activeIndex === index
                    ? "bg-emerald-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
