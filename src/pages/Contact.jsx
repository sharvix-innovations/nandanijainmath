import React, { useState } from "react";
import { GiByzantinTemple, GiOpenBook, GiMeditation } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User,
  Calendar,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <MapPin className="text-2xl" />,
      title: "Our Address",
      info: "Nandani Jain Math, Near Shivaji University",
      details: "Kolhapur, Maharashtra 416004, India",
    },
    {
      icon: <Phone className="text-2xl" />,
      title: "Call Us",
      info: "+91 231-2691234",
      details: "+91 9876543210",
    },
    {
      icon: <Mail className="text-2xl" />,
      title: "Email Us",
      info: "info@nandanijainmath.org",
      details: "contact@nandanijainmath.org",
    },
    {
      icon: <Clock className="text-2xl" />,
      title: "Visiting Hours",
      info: "5:00 AM - 9:00 PM",
      details: "All days of the week",
    },
  ];

  // Math branches with contact details
  const mathBranches = [
    {
      name: "Shri Laxmisen Digambar Jain Math",
      address: "P629+HQV, C Ward, Shukrawar Peth, Kolhapur, Maharashtra 416002",
      phone: "+91 231-2691234",
      image: "/1.jpg",
      address_link: "https://maps.app.goo.gl/p7VUn8KXQrT57Sdj7",
    },
    {
      name: "shantisagar Ashram Shedbal",
      address: "MQQ4+R7X, Shedbal, Karnataka 591315",
      phone: "+91 231-2691235",
      image: "/2.jpg",
      address_link: "https://maps.app.goo.gl/soKk6vrjGXb8L4pH6",
    },
    {
      name: "Belgaum Jain Math",
      address: "Old City Area, Belgaum, Karnataka",
      phone: "+91 831-2461234",
      image: "/3.jpg",
      address_link:
        "https://www.google.com/maps/place/Belgaum+Jain+Math/@15.8552,74.5050,17z",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-secondary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
            <GiByzantinTemple className="text-secondary" /> GET IN TOUCH
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Contact Us
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We welcome you to connect with us for spiritual guidance, temple
            visits, or any inquiries about our activities.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-secondary/20 rounded-full animate-pulse"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-accent -mt-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="relative group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>
                <div className="flex items-center gap-6">
                  {/* Icon */}
                  <div className="relative bg-gradient-to-r from-primary to-secondary text-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500">
                    {info.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                </div>

                {/* Info */}
                <p className="text-gray-700 font-semibold mb-1">{info.info}</p>
                <p className="text-gray-500 text-sm">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <p className="text-primary font-semibold uppercase flex items-center gap-2 mb-3">
                  <MessageCircle className="text-primary" /> SEND MESSAGE
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
                  We'd Love to Hear From You
                </h2>
                <p className="text-gray-600">
                  Share your thoughts, questions, or requests with us. Our team
                  will respond to your message promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map/Location Info */}
            <div className="space-y-8">
              <div>
                <p className="text-primary font-semibold uppercase flex items-center gap-2 mb-3">
                  <MapPin className="text-primary" /> FIND US
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
                  Visit Our Sacred Place
                </h2>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Kolhapur, our Math is easily
                  accessible and welcomes devotees from all walks of life.
                </p>
              </div>

              {/* Map Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8036.112257035736!2d74.53258118060087!3d16.727382914828127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11f79408c881f%3A0x23e26773e9abf563!2sSWASTISHRI%20JINSEN%20BHATTARAK%20PATTACHARYA%20MAHASWAMI!5e1!3m2!1sen!2sin!4v1755589616970!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Math Branches Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <FaMapLocationDot className="text-primary" /> OUR LOCATIONS
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
              Visit Our Math Branches
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {mathBranches.map((branch, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-500"
              >
                {/* Image with Overlay */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  />
                </div>

                {/* Floating Info Box */}
                <div className="absolute bottom-0 w-[90%] left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {branch.name}
                  </h3>

                  <div className="space-y-3 text-gray-700 text-sm mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span>{branch.phone}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(branch.address_link, "_blank")}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-white font-semibold py-2.5 px-4 rounded-xl transition-transform duration-300 hover:scale-105 shadow-md"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
