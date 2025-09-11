import React, { useState } from 'react';
import {
  GiByzantinTemple,
  GiOpenBook,
  GiMeditation,
  GiClockwork,
} from "react-icons/gi";
import { 
  Calendar, 
  Clock, 
  MapPin,
  Users,
  Filter,
  Star,
  ChevronRight,
  Bell,
  Share2,
  Bookmark,
  Eye,
  Phone,
  Mail,
  Ticket
} from 'lucide-react';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Event categories
  const eventCategories = [
    { id: 'all', name: 'All Events', icon: <Calendar /> },
    { id: 'festivals', name: 'Festivals', icon: <Star /> },
    { id: 'spiritual', name: 'Spiritual', icon: <GiMeditation /> },
    { id: 'educational', name: 'Educational', icon: <GiOpenBook /> },
    { id: 'community', name: 'Community', icon: <Users /> }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Paryushan Parv",
      category: "festivals",
      date: "2025-09-15",
      time: "7:00 AM",
      duration: "8 days",
      location: "Main Temple Hall",
      image: "/1.jpg",
      description: "The most important festival of Jains, focusing on spiritual purification, meditation, and fasting. Join us for eight days of divine celebrations.",
      highlights: ["Daily Pravachan", "Samvatsari Celebration", "Kshamavani", "Community Meals"],
      organizer: "Math Committee",
      contact: "+91 231-2691234",
      price: "Free",
      capacity: "500 devotees",
      status: "upcoming",
      featured: true
    },
    {
      id: 2,
      title: "Das Lakshan Mahaparva",
      category: "festivals",
      date: "2025-10-28",
      time: "8:00 AM",
      duration: "10 days",
      location: "All Math Branches",
      image: "/2.jpg",
      description: "Celebration of the ten virtues of Dharma. A time for spiritual reflection and learning about the fundamental principles of Jainism.",
      highlights: ["Ten Dharma Lectures", "Spiritual Discourses", "Youth Programs", "Cultural Activities"],
      organizer: "Acharya Committee",
      contact: "+91 231-2691235",
      price: "Free",
      capacity: "1000 devotees",
      status: "upcoming",
      featured: true
    },
    {
      id: 3,
      title: "Mahavir Janma Kalyanak",
      category: "festivals",
      date: "2026-04-06",
      time: "9:00 AM",
      duration: "Full day",
      location: "Main Temple Complex",
      image: "/3.jpg",
      description: "Celebrating the birth anniversary of Lord Mahavir. Special prayers, processions, and community celebrations.",
      highlights: ["Abhishek Ceremony", "Shobha Yatra", "Prasadam Distribution", "Cultural Programs"],
      organizer: "Festival Committee",
      contact: "+91 231-2691236",
      price: "Free",
      capacity: "2000 devotees",
      status: "upcoming",
      featured: true
    },
    {
      id: 4,
      title: "Weekly Swadhyay",
      category: "educational",
      date: "2025-09-20",
      time: "11:00 AM",
      duration: "2 hours",
      location: "Study Hall",
      image: "/service2.jpg",
      description: "Weekly scripture study sessions for devotees to deepen their understanding of Jain philosophy and texts.",
      highlights: ["Agam Study", "Q&A Session", "Group Discussion", "Take-home Materials"],
      organizer: "Education Committee",
      contact: "+91 231-2691237",
      price: "Free",
      capacity: "50 participants",
      status: "upcoming",
      featured: false
    },
    {
      id: 5,
      title: "Meditation Workshop",
      category: "spiritual",
      date: "2025-09-25",
      time: "6:00 PM",
      duration: "3 hours",
      location: "Meditation Hall",
      image: "/service1.jpg",
      description: "Learn ancient Jain meditation techniques for inner peace and spiritual growth. Suitable for beginners and advanced practitioners.",
      highlights: ["Guided Meditation", "Breathing Techniques", "Spiritual Music", "Personal Guidance"],
      organizer: "Meditation Center",
      contact: "+91 231-2691238",
      price: "₹200",
      capacity: "30 participants",
      status: "upcoming",
      featured: false
    },
    {
      id: 6,
      title: "Community Blood Donation Camp",
      category: "community",
      date: "2025-10-05",
      time: "9:00 AM",
      duration: "6 hours",
      location: "Community Hall",
      image: "/12.jpg",
      description: "Annual blood donation drive to serve the community and save lives. Free health checkup included.",
      highlights: ["Free Health Checkup", "Refreshments", "Certificate", "Follow-up Care"],
      organizer: "Seva Committee",
      contact: "+91 231-2691239",
      price: "Free",
      capacity: "200 donors",
      status: "upcoming",
      featured: false
    }
  ];

  // Past events
  const pastEvents = [
    {
      id: 7,
      title: "Akshaya Tritiya Celebration",
      category: "festivals",
      date: "2025-05-10",
      location: "Main Temple",
      image: "/hero1.jpg",
      attendees: "800+",
      status: "completed"
    },
    {
      id: 8,
      title: "Jain Philosophy Seminar",
      category: "educational",
      date: "2025-03-15",
      location: "Conference Hall",
      image: "/hero2.jpg",
      attendees: "150+",
      status: "completed"
    },
    {
      id: 9,
      title: "Youth Cultural Program",
      category: "community",
      date: "2025-02-20",
      location: "Community Center",
      image: "/hero4.jpg",
      attendees: "300+",
      status: "completed"
    }
  ];

  // Filter events
  const filteredUpcomingEvents = selectedFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTimeUntilEvent = (dateString) => {
    const eventDate = new Date(dateString);
    const now = new Date();
    const diffTime = eventDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Event passed";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    return `${diffDays} days to go`;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-accent font-semibold uppercase flex items-center justify-center gap-2 mb-3">
            <Calendar className="text-accent" /> UPCOMING EVENTS
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Sacred Events & Celebrations
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Join us for spiritual festivals, educational programs, and community events that bring devotees together in celebration of Jain Dharma.
          </p>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-accent/30 rounded-full animate-bounce flex items-center justify-center">
          <Calendar className="text-accent w-6 h-6" />
        </div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-accent/20 rounded-full animate-pulse flex items-center justify-center">
          <Star className="text-accent w-8 h-8" />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-accent -mt-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Annual Events", icon: <Calendar /> },
              { number: "10,000+", label: "Participants", icon: <Users /> },
              { number: "12", label: "Major Festivals", icon: <Star /> },
              { number: "24/7", label: "Temple Open", icon: <GiByzantinTemple /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-primary group-hover:bg-secondary transition-colors text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <Filter className="text-primary" /> BROWSE EVENTS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
              Find Events by Category
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {eventCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === category.id
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

      {/* Featured Events */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <Star className="text-primary" /> FEATURED EVENTS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
              Don't Miss These Special Celebrations
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {filteredUpcomingEvents.filter(event => event.featured).map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {getTimeUntilEvent(event.date)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-gray-600 text-sm">{event.location}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 text-sm">{event.duration}</span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.highlights.slice(0, 3).map((highlight, i) => (
                      <span key={i} className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.capacity}
                      </div>
                      <div className="flex items-center gap-1">
                        <Ticket className="w-4 h-4" />
                        {event.price}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading mb-4">
              All Upcoming Events
            </h2>
            <p className="text-gray-600">
              Browse all upcoming events and mark your calendar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUpcomingEvents.filter(event => !event.featured).map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-lg text-xs font-semibold">
                    {getTimeUntilEvent(event.date)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      {event.time} • {event.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-semibold">{event.price}</span>
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <Eye className="text-primary" /> PAST EVENTS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
              Recent Celebrations
            </h2>
            <p className="text-gray-600 mt-4">
              Take a look at our recent successful events and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                      <p className="text-sm opacity-90">{event.attendees} participated</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.date)}
                    <span className="text-gray-400">•</span>
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Successfully Completed
                    </span>
                    <button className="text-secondary hover:text-secondary/80 font-semibold text-sm">
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(selectedEvent.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedEvent.time}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-gray-600">{selectedEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Duration</div>
                      <div className="text-gray-600">{selectedEvent.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Capacity</div>
                      <div className="text-gray-600">{selectedEvent.capacity}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Entry</div>
                      <div className="text-gray-600">{selectedEvent.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Contact</div>
                      <div className="text-gray-600">{selectedEvent.contact}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="font-semibold">Organizer</div>
                      <div className="text-gray-600">{selectedEvent.organizer}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">About This Event</h3>
                <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-3">Event Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedEvent.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                  <Bell className="w-5 h-5" />
                  Register Interest
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg transition">
                  <Share2 className="w-5 h-5" />
                  Share Event
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg transition">
                  <Bookmark className="w-5 h-5" />
                  Save
                </button>
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
              Stay Updated on Our Events
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Subscribe to our newsletter and never miss important festivals, spiritual programs, or community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent/90 text-primary font-semibold py-3 px-8 rounded-lg shadow-lg transition">
                Subscribe to Newsletter
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
