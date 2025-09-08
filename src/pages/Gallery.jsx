import React from "react";

const Gallery = () => {
  const images = [
    { src: "/gallery1.jpg", span: "md:col-span-3", height: "h-[400px]" },
    { src: "/gallery2.jpg", span: "", height: "h-48" },
    { src: "/gallery3.jpg", span: "", height: "h-48" },
    { src: "/gallery4.jpg", span: "", height: "h-48" },
    { src: "/gallery5.jpg", span: "", height: "h-48" },
    { src: "/gallery6.jpg", span: "", height: "h-48" },
    { src: "/gallery7.jpg", span: "", height: "h-48" },
    { src: "/gallery8.jpg", span: "", height: "h-48" },
  ];

  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold uppercase tracking-wide mb-3">
            Our Gallery
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Temple Memories
          </h2>
          <p className="mt-3 text-text max-w-2xl mx-auto">
            A glimpse of divine moments and cultural heritage captured beautifully.
          </p>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-2xl shadow-md ${img.span} ${img.height}`}
            >
              <img
                src={img.src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/90 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow-md">
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
