import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "./12.jpg" },
    { id: 2, image: "./hero2.jpg" },
    { id: 3, image: "./hero4.jpg" },
    { id: 4, image: "./hero1.jpg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative w-full flex justify-center">
      {/* Main Container */}
      <div className="relative w-full ">
        
        {/* Image Container with Card Design */}
        <div className="relative">
          <div className="relative overflow-hidden shadow-xl" style={{ height: '80vh' }}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0 z-10'
                    : index > currentSlide
                    ? 'opacity-0 translate-x-full z-0'
                    : 'opacity-0 -translate-x-full z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, 
                    rgba(237, 163, 90, 0.1) 0%, 
                    transparent 30%, 
                    transparent 70%, 
                    rgba(255, 213, 79, 0.1) 100%)`
                }}></div>
              </div>
            ))}

            {/* Floating Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <ChevronLeft className="group-hover:-translate-x-0.5 transition-transform" style={{ color: '#EDA35A' }} size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <ChevronRight className="group-hover:translate-x-0.5 transition-transform" style={{ color: '#EDA35A' }} size={24} />
            </button>
          </div>

          {/* Bottom Navigation Panel */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:flex items-center gap-4 px-8 py-4 rounded-2xl z-20 hidden sm:block" style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: `2px solid rgba(237, 163, 90, 0.2)`
          }}>
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? 'scale-110 ring-3 ring-offset-2'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    ringColor: index === currentSlide ? '#EDA35A' : 'transparent',
                    ringOffsetColor: '#FFFFFF'
                  }}
                >
                  <img
                    src={slide.image}
                    alt={`Thumb ${slide.id}`}
                    className="w-full h-full object-cover"
                  />
                  {index === currentSlide && (
                    <div className="absolute inset-0 border-2 rounded-xl" style={{ borderColor: '#EDA35A' }}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-8 mx-2" style={{ backgroundColor: 'rgba(237, 163, 90, 0.3)' }}></div>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative"
                >
                  <div
                    className={`rounded-full transition-all duration-500 ${
                      index === currentSlide ? 'w-8 h-3' : 'w-3 h-3 hover:scale-125'
                    }`}
                    style={{
                      backgroundColor: index === currentSlide ? '#EDA35A' : 'rgba(237, 163, 90, 0.3)'
                    }}
                  >
                    {index === currentSlide && (
                      <div 
                        className="absolute inset-0 rounded-full animate-pulse"
                        style={{ backgroundColor: '#FFD54F' }}
                      ></div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="w-px h-8 mx-2" style={{ backgroundColor: 'rgba(237, 163, 90, 0.3)' }}></div>
            <div className="px-3 py-1 rounded-lg text-sm font-semibold" style={{
              backgroundColor: 'rgba(237, 163, 90, 0.1)',
              color: '#333333'
            }}>
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden absolute -bottom-20 left-1/2 -translate-x-1/2 z-20">
            <div className="container rounded-2xl p-4 items-center" style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: `2px solid rgba(237, 163, 90, 0.2)`
          }}>
            {/* Mobile Thumbnails */}
            <div className="flex justify-center gap-2 mb-4 overflow-x-auto pb-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 relative w-14 h-14 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? 'scale-110 ring-2 ring-offset-1'
                      : 'hover:scale-105 opacity-70'
                  }`}
                  style={{
                    ringColor: index === currentSlide ? '#EDA35A' : 'transparent',
                    ringOffsetColor: '#fffbf5'
                  }}
                >
                  <img
                    src={slide.image}
                    alt={`Thumb ${slide.id}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Mobile Control Panel */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-4 px-6 py-3 rounded-2xl" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                border: `1px solid rgba(237, 163, 90, 0.2)`
              }}>
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ backgroundColor: '#EDA35A', color: '#FFFFFF' }}
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex gap-1.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'w-6 h-2.5' : 'w-2.5 h-2.5'
                      }`}
                      style={{
                        backgroundColor: index === currentSlide ? '#EDA35A' : 'rgba(237, 163, 90, 0.4)'
                      }}
                    />
                  ))}
                </div>

                <div className="px-2 py-0.5 rounded-md text-xs font-semibold" style={{
                  backgroundColor: 'rgba(237, 163, 90, 0.1)',
                  color: '#333333'
                }}>
                  {currentSlide + 1}/{slides.length}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ backgroundColor: '#EDA35A', color: '#FFFFFF' }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

       
    </div>
  );
};

export default HeroCarousel;