import React, { useState } from 'react';
import {
  GiByzantinTemple,
  GiOpenBook,
  GiMeditation,
  GiClockwork,
} from "react-icons/gi";
import { 
  Camera, 
  Play, 
  Calendar,
  Users,
  Filter,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Photos', icon: <Camera /> },
    { id: 'temple', name: 'Temple', icon: <GiByzantinTemple /> },
    { id: 'events', name: 'Events', icon: <Calendar /> },
    { id: 'activities', name: 'Activities', icon: <GiMeditation /> },
    { id: 'festivals', name: 'Festivals', icon: <GiOpenBook /> }
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/1.jpg",
      title: "Main Temple Architecture",
      category: "temple",
      description: "Beautiful view of the main temple complex showcasing traditional Jain architecture",
      date: "March 2024"
    },
    {
      id: 2,
      src: "/2.jpg",
      title: "Paryushan Celebration",
      category: "festivals",
      description: "Devotees gathered during the sacred Paryushan festival celebrations",
      date: "September 2024"
    },
    {
      id: 3,
      src: "/3.jpg",
      title: "Morning Prayer Session",
      category: "activities",
      description: "Daily morning prayers and meditation session in the temple hall",
      date: "August 2024"
    },
    {
      id: 4,
      src: "/12.jpg",
      title: "Mahavir Jayanti",
      category: "festivals",
      description: "Grand celebration of Lord Mahavir's birth anniversary",
      date: "April 2024"
    },
    {
      id: 5,
      src: "/hero1.jpg",
      title: "Temple Interior",
      category: "temple",
      description: "Sacred interior of the main prayer hall with beautiful decorations",
      date: "February 2024"
    },
    {
      id: 6,
      src: "/hero2.jpg",
      title: "Community Seva",
      category: "activities",
      description: "Community members participating in food distribution seva",
      date: "January 2024"
    },
    {
      id: 7,
      src: "/hero4.jpg",
      title: "Evening Aarti",
      category: "activities",
      description: "Beautiful evening aarti ceremony with devotees",
      date: "December 2023"
    },
    {
      id: 8,
      src: "/service1.jpg",
      title: "Educational Programs",
      category: "events",
      description: "Children learning Jain scriptures and values in pathshala",
      date: "November 2023"
    },
    {
      id: 9,
      src: "/service2.jpg",
      title: "Spiritual Discourse",
      category: "events",
      description: "Learned scholars delivering spiritual discourse to devotees",
      date: "October 2023"
    },
    {
      id: 10,
      src: "/bg-donation.jpg",
      title: "Das Lakshan Parv",
      category: "festivals",
      description: "Ten-day festival celebrating the ten virtues of Dharma",
      date: "September 2023"
    }
  ];

  // Filter images based on category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Handle image click
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Handle navigation in lightbox
  const handlePrevious = () => {
    const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-accent font-semibold uppercase flex items-center justify-center gap-2 mb-3">
            <Camera className="text-accent" /> TEMPLE GALLERY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Sacred Memories
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Explore the divine beauty, spiritual activities, and joyous celebrations at Nandani Jain Math through our photo gallery.
          </p>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-accent/20 rounded-full animate-ping"></div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <Filter className="text-primary" /> FILTER GALLERY
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
              Browse by Category
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-white shadow-lg transform scale-105'
                    : 'bg-accent text-primary hover:bg-secondary hover:text-white hover:shadow-md'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-sm mb-1">{image.title}</h3>
                      <p className="text-xs opacity-90">{image.date}</p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-secondary text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {categories.find(cat => cat.id === image.category)?.name}
                  </div>

                  {/* View icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <Play className="text-primary" /> VIDEO GALLERY
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
              Sacred Moments in Motion
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prabhat Aarti - Morning Prayer",
                duration: "15:30",
                thumbnail: "/hero1.jpg",
                date: "March 2024"
              },
              {
                title: "Paryushan Celebration Highlights",
                duration: "25:45",
                thumbnail: "/2.jpg",
                date: "September 2024"
              },
              {
                title: "Community Seva Activities",
                duration: "12:20",
                thumbnail: "/service1.jpg",
                date: "August 2024"
              }
            ].map((video, i) => (
              <div
                key={i}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="bg-secondary text-white rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>

                <div className="bg-white p-4">
                  <h3 className="font-bold text-primary mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                <p className="text-sm text-gray-500">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
              Want to Share Your Photos?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Have you captured beautiful moments at our Math? We'd love to feature your photos in our gallery. Share your memories with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-8 rounded-lg shadow-lg transition">
                Submit Photos
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;