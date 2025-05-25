import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "InnovateX",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Working with this freelancer was an absolute pleasure. They delivered a website that exceeded our expectations and has significantly improved our online presence. Their attention to detail and ability to translate our vision into reality was impressive."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "Pulse Media",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The SEO and marketing strategy developed for our brand was nothing short of brilliant. Our organic traffic increased by 200% in just three months, and our conversion rates have improved dramatically. Highly recommend their services."
  },
  {
    id: 3,
    name: "Olivia Rodriguez",
    position: "Founder",
    company: "Artisan Boutique",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The brand identity created for my boutique perfectly captures our essence. From logo design to color palette, every element aligns with our vision. They truly understood what we needed and delivered beyond our expectations."
  }
];

const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Quote size={200} className="absolute text-emerald-500 top-10 left-10 transform -rotate-12" />
        <Quote size={200} className="absolute text-emerald-500 bottom-10 right-10 transform rotate-12" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about working with me
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                    <div className="mb-6">
                      <Quote size={36} className="text-emerald-500 opacity-50" />
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
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-emerald-400">{testimonial.position}, {testimonial.company}</p>
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
                  activeIndex === index ? 'bg-emerald-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
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