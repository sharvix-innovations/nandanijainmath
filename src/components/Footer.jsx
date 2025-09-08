import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/service2.jpg')" }}
    >
      <div className="absolute inset-0 bg-primary/90"></div>
      {/* Top Section with Newsletter */}
      <div className="container mx-auto px-6 lg:px-12 pb-16 pt-10 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/20 pb-12 gap-8">
          {/* Left Content */}
          <div>
            <p className="text-sm text-secondary">Stay Updated</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 font-heading">
              Subscribe to our Newsletter
            </h2>
            <p className="mt-2 text-gray-300 text-sm max-w-md">
              Get the latest updates on Pooja timings, upcoming events,
              Pathshala activities, and Seva opportunities at Nandani Jain Math.
            </p>
          </div>

          {/* Newsletter Input */}
          <form className="w-full lg:w-1/2 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-secondary text-black font-semibold px-6 py-3 rounded-r-md shadow hover:bg-secondary/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-12">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Nandani Jain Math Logo"
                className="w-40 h-20 object-contain"
              />
            </div>
            <p className="mt-4 text-gray-200 text-sm leading-relaxed">
              Nandani Jain Math, located in Kolhapur district, Maharashtra, is a
              sacred spiritual seat of Jain Dharma. It is a center for
              meditation, pathshala, rituals, and community welfare based on the
              principles of Ahimsa and compassion.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <span className="text-sm">Follow Us:</span>
              <a href="#" className="bg-secondary text-black p-2 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-secondary text-black p-2 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" className="bg-secondary text-black p-2 rounded-full">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-secondary text-black p-2 rounded-full">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>About Math</li>
              <li>Pooja Timings</li>
              <li>Events & Festivals</li>
              <li>Pathshala</li>
              <li>Donation</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-4 text-sm">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Seva Registration</li>
              <li>Feedback</li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <img
                src="/1.jpg"
                alt="Gallery 1"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/2.jpg"
                alt="Gallery 2"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/3.jpg"
                alt="Gallery 3"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/12.jpg"
                alt="Gallery 4"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/hero1.jpg"
                alt="Gallery 5"
                className="w-full h-16 object-cover rounded"
              />
              <img
                src="/hero2.jpg"
                alt="Gallery 6"
                className="w-full h-16 object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>
            © 2025{" "}
            <span className="text-secondary font-semibold">
              Nandani Jain Math
            </span>
            . All Rights Reserved.
          </p>
          <p className="mt-4 md:mt-0 flex items-center gap-1">
            Crafted with <span className="text-red-500">❤️</span> by
            <a
              href="https://sharvix.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold hover:underline"
            >
              Sharvix Innovations
            </a>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-secondary text-black p-3 px-5 rounded-full shadow-lg hover:bg-secondary/90 transition"
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
