import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLeaf,
  FaPlaceOfWorship,
  FaBook,
  FaHistory,
  FaMedal,
  FaStar,
} from "react-icons/fa";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Kolhapur Jain Math",
      highlighted: "Kolhapur",
      subtitle:
        "A historic center of Jain learning and spirituality in Maharashtra",
      image: "./12.jpg",
      cta1: "/kolhapur-legacy",
      cta2: "/kolhapur-events",
      icon: <FaPlaceOfWorship />,
    },
    {
      id: 2,
      title: "Nandani Jain Math",
      highlighted: "Nandani",
      subtitle: "The spiritual heart of Jain tradition and teachings",
      image: "./hero2.jpg",
      cta1: "/nandani-legacy",
      cta2: "/nandani-events",
      icon: <FaBook />,
    },
    {
      id: 3,
      title: "Belagavi Jain Heritage",
      highlighted: "Belagavi",
      subtitle:
        "Home to ancient Kamal Basadi and magnificent Jain architecture",
      image: "./hero4.jpg",
      cta1: "/belagavi-heritage",
      cta2: "/belagavi-events",
      icon: <FaHistory />,
    },
    {
      id: 4,
      title: "Terdal Jain Temples",
      highlighted: "Terdal",
      subtitle:
        "Sacred temples showcasing exquisite craftsmanship and devotion",
      image: "./hero1.jpg",
      cta1: "/terdal-temples",
      cta2: "/terdal-events",
      icon: <FaMedal />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative min-h-[80vh] sm:min-h-[70vh] lg:min-h-[85vh] overflow-hidden bg-gradient-to-br from-background via-accent to-secondary">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <FaStar
              className="text-secondary opacity-20"
              size={Math.random() * 10 + 6}
            />
          </div>
        ))}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-accent/70"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-accent to-transparent"></div>
              <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-4 border-accent opacity-30 animate-spin-slow"></div>
              <div className="absolute bottom-28 right-24 w-40 h-40 rounded-full border-4 border-secondary opacity-30 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-accent opacity-20 rounded-full">
                <div className="absolute inset-4 border-2 border-secondary rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-16 h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-block mb-6 bg-background px-5 py-2 rounded-full border border-accent shadow-sm">
                    <p className="text-primary font-medium flex items-center justify-center lg:justify-start text-sm sm:text-base">
                      <FaLeaf className="mr-2 text-primary/60" />
                      Embracing Ahimsa Since 1952
                    </p>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
                    <span className="font-light">
                      {slide.title.split(" ")[0]}
                    </span>{" "}
                    <span className="text-primary font-semibold">
                      {slide.highlighted}
                    </span>{" "}
                    <span className="font-medium">
                      {slide.title.split(" ").slice(2).join(" ")}
                    </span>
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl text-text/80 max-w-2xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      to={slide.cta1}
                      className="inline-flex items-center justify-center bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      Discover Our Legacy
                    </Link>
                    <Link
                      to={slide.cta2}
                      className="inline-flex items-center justify-center bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      View Events
                    </Link>
                  </div>
                </div>

                 {/* Symbol */}
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <div className="w-72 h-72 flex items-center justify-center bg-white/90 rounded-full shadow-2xl border-8 border-accent relative overflow-hidden">
                      {/* Mandala pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-primary/40"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-4 border-secondary"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-primary/50"></div>
                      </div>

                      <div className="text-secondary text-8xl z-10">
                        <img src="/counter-shape.png" alt="Shape" />
                      </div>
                    </div>

                    {/* Rotating rings */}
                    <div className="absolute -ins-6 rounded-full border-4 border-accent opacity-60 animate-spin-slow"></div>
                    <div className="absolute -ins-12 rounded-full border-2 border-primary/90 opacity-40 animate-spin-medium"></div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent opacity-70 animate-float"></div>
                    <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-primary opacity-70 animate-float-reverse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-lg border border-white/20 transition-all duration-300 z-20 group hover:scale-105"
      >
        <FaChevronLeft size={18} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-lg border border-white/20 transition-all duration-300 z-20 group hover:scale-105"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
