import {
  GiByzantinTemple,
  GiOpenBook,
  GiMeditation,
  GiClockwork,
} from "react-icons/gi";
import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  // Daily Pooja Timings
  const prayers = [
    { name: "Prabhat Aarti", time: "5:00 AM", active: true },
    { name: "Snatra Pooja", time: "6:30 AM" },
    { name: "Abhishek & Shantidhara", time: "8:00 AM" },
    { name: "Swadhyay", time: "11:00 AM" },
    { name: "Sandhya Aarti", time: "6:30 PM" },
    { name: "Mangal Aarti", time: "8:00 PM" },
  ];

  // Services of Math
  const services = [
    {
      title: "Mandir Seva",
      description:
        "Daily pooja, aarti, and rituals performed with devotion, keeping alive centuries-old traditions of Jain Dharma.",
      icon: <GiByzantinTemple />,
      image: "service1.jpg",
    },
    {
      title: "Adhyayan & Swadhyay",
      description:
        "Regular teaching of Jain Agams, Bhaktamar, and Pathshala for children, youth, and elders.",
      icon: <GiOpenBook />,
      image: "service2.jpg",
    },
    {
      title: "Community Welfare",
      description:
        "Organizing food donation, gaushala seva, blood donation camps, and activities promoting Ahimsa.",
      icon: <GiMeditation />,
      image: "3.jpg",
    },
  ];

  // Donation amounts
  const amounts = [51, 101, 501, 1001, 5000];

  // Stats
  const stats = [
    {
      number: "800+",
      title: "Shravak Families",
      desc: "Over 800 families connected with Math activities.",
    },
    {
      number: "40+",
      title: "Events",
      desc: "Major yearly events like Paryushan, Das Lakshan, Mahavir Jayanti, Varshitap Parna.",
    },
    {
      number: "100%",
      title: "Ahimsa Seva",
      desc: "Strong focus on non-violence, cow protection, and social service.",
    },
    {
      number: "25L+",
      title: "Donation",
      desc: "Over 25 Lakh rupees collected for Mandir renovation and community upliftment.",
    },
  ];

  // Upcoming Events
  const events = [
    {
      day: "15",
      month: "Sep 2025",
      title: "Paryushan Parv",
      time: "Monday 7:00 AM",
      image: "/1.jpg",
      dayLabel: "Maha Parv",
    },
    {
      day: "28",
      month: "Oct 2025",
      title: "Das Lakshan Mahaparva",
      time: "Tuesday 8:00 AM",
      image: "/2.jpg",
      dayLabel: "Annual Event",
    },
    {
      day: "6",
      month: "Apr 2026",
      title: "Mahavir Janma Kalyanak",
      time: "Sunday 9:00 AM",
      image: "/3.jpg",
      dayLabel: "Jayanti",
    },
  ];

// Top वर define करायचं (component च्या आत पण return च्या बाहेर)
const branches = [
  {
    name: "Shri Laxmisen Digamber Jain Math",
    description:
      "A prominent Jain Math preserving rich traditions and spiritual activities under the guidance of revered saints.",
    image: "/1.jpg",
    icon: <GiMeditation />,
  },
  {
    name: "Swastishri Jinsen Bhattarak Pattachary Mahaswamy",
    description:
      "Spiritual guidance and Jain dharma activities led by Swastishri Jinsen Bhattarak Mahaswamy.",
    image: "/2.jpg",
    icon: <GiOpenBook />,
  },
  {
    name: "Shri 1008 Neminath Digamber Jain Mandir",
    description:
      "Dedicated to Bhagwan Neminath, this temple is a hub for devotees and regular religious ceremonies.",
    image: "/3.jpg",
    icon: <GiClockwork />,
  },
  {
    name: "Belgaum Jain Math",
    description:
      "One of the oldest centers for Jain spiritual practice and learning in the region.",
    image: "/12.jpg",
    icon: <GiByzantinTemple />,
  },
];



  return (
    <>
      <HeroCarousel />

      {/* Daily Pooja Live */}
      <section className="relative py-16 bg-gradient-to-b from-accent to-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Central Live Pooja */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 mx-auto rounded-full bg-primary/20 flex items-center justify-center shadow-2xl animate-pulse">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-secondary rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg">
                  Live
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mt-6">
                Prabhat Aarti
              </h3>
              <p className="text-gray-700 mt-2">5:30 AM</p>
              <button className="mt-4 bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                Watch Live
              </button>
            </div>

            {/* Other Poojas */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {prayers.map((p, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center rounded-2xl border border-secondary/40 p-6 shadow-sm transition bg-white/10 backdrop-blur-sm hover:shadow-md"
                  >
                    <img
                      src="/clock2.svg"
                      alt="Clock"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                    <h3 className="mt-4 text-lg sm:text-lg font-bold text-primary text-center">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-base text-text text-center">
                      {p.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            <p className="text-primary font-semibold uppercase flex items-center gap-2 mb-3">
              <GiByzantinTemple className="text-primary" /> About Nandani Jain
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              A Sacred Seat of Jain Tradition <br /> in Kolhapur
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Nandani Jain Math, located in Kolhapur district, Maharashtra, is a
              revered Jain spiritual center. Surrounded by serene hills, the
              Math preserves ancient idols and scriptures, serving as a hub for
              religious learning, meditation, and community seva. Pilgrims from
              across India visit here to seek blessings, participate in
              Paryushan, Das Lakshan, and other major Jain festivals.
            </p>

            {/* Mission Box */}
            <div className="bg-accent rounded-lg py-5 px-8 flex items-start gap-4 mb-5">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <GiOpenBook className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-lg">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To preserve Jain traditions, promote Ahimsa, and inspire
                  generations through spiritual learning.
                </p>
              </div>
            </div>

            {/* Vision Box */}
            <div className="bg-accent rounded-lg py-5 px-8 flex items-start gap-4 mb-8">
              <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <GiMeditation className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-lg">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To establish Nandani Math as a global center of Jain Dharma,
                  meditation, and community seva.
                </p>
              </div>
            </div>

            <button className="bg-secondary hover:bg-secondary/60 font-semibold py-3 px-6 rounded-md shadow text-sm text-background">
              Read More
            </button>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative flex gap-6 justify-center lg:justify-end">
            <div className="relative overflow-hidden group rounded-2xl shadow-lg w-1/2">
              <img
                src="/service1.jpg"
                alt="Jain Mandir"
                className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-125"
              />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-white/30 
                    -translate-x-1/2 -translate-y-1/2 -rotate-45 
                    transition-all duration-[600ms] ease-linear 
                    group-hover:h-[250%] group-hover:bg-transparent"
              ></div>
            </div>

            <div className="rounded-2xl  shadow-lg w-1/2 mt-16 relative">
              <img
                src="/service2.jpg"
                alt="Jain Sthanak"
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Circular Logo */}
              <div className="absolute -top-36 right-10">
                <div className="relative w-52 h-52 flex items-center justify-center">
                  <img
                    src="/about-shape.png"
                    alt="Shape"
                    className="absolute inset-0 w-full h-full object-contain scale-125"
                  />
                  <svg viewBox="0 0 200 200" className="absolute w-full h-full">
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                    />
                    <text
                      fill="#020842"
                      fontSize="14"
                      fontWeight="bold"
                      letterSpacing="2px"
                    >
                      <textPath href="#circlePath" startOffset="0%">
                        • Ahimsa • Satya • Dharma • Seva • Ahimsa • Satya •
                        Dharma •
                      </textPath>
                    </text>
                  </svg>

                  <div className="bg-primary text-white rounded-full w-28 h-28 flex items-center justify-center relative z-10">
                    <GiMeditation className="text-5xl border rounded-full p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-accent">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="text-center pb-12">
            {/* Heading */}
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3 text-sm sm:text-base">
              <GiByzantinTemple className="text-primary text-lg sm:text-xl" />{" "}
              EVENTS & PROGRAMS
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              Upcoming Events
            </h2>
          </div>

          {/* Events Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 rounded-lg overflow-hidden items-stretch"
              >
                {/* Date (desktop/tablet only) */}
                <div className="hidden sm:flex flex-shrink-0 text-center w-28 md:w-40 flex-col justify-between">
                  <div className="bg-primary text-white p-4 md:p-6 rounded-t-lg h-full text-start font-heading">
                    <div className="text-5xl md:text-6xl font-bold">
                      {event.day}
                    </div>
                    <div className="text-base pt-1">{event.month}</div>
                  </div>
                  <div className="bg-secondary text-primary text-sm font-bold py-3 rounded-b-lg ">
                    {event.dayLabel}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1 flex flex-col sm:flex-row items-start gap-4 p-4 bg-background shadow-sm rounded-lg">
                  <div className="relative w-full sm:w-32 md:w-40 h-40 sm:h-28 md:h-40 flex-shrink-0 rounded-lg overflow-hidden group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-125"
                    />

                    {/* Diagonal overlay */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-white/30 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-[600ms] ease-linear group-hover:h-[250%] group-hover:bg-transparent"></div>

                    {/* Free Badge */}
                    <div className="absolute top-2 right-2 bg-secondary text-xs font-semibold px-1.5 py-0.5 rounded">
                      Free
                    </div>

                    {/* Date (mobile only) */}
                    <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs sm:hidden">
                      <span className="font-bold">{event.day}</span>{" "}
                      {event.month} • {event.dayLabel}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between w-full">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">
                        {event.title}
                      </h3>
                      <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 mb-2 font-semibold">
                        <GiClockwork className="text-primary" />
                        {event.time}
                      </p>
                    </div>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-50 w-full sm:w-1/2 text-sm">
                      Event Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            <p className="text-primary font-semibold uppercase flex items-center gap-2 mb-3 text-sm sm:text-base">
              <GiByzantinTemple className="text-primary text-lg sm:text-xl" />{" "}
              Support & Donation
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-6 font-heading leading-snug">
              Contribute Towards <br className="hidden sm:block" /> Mandir &
              Seva
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
              Your generous donation helps us maintain our temple, organize
              community events, and support seva activities. Together we can
              preserve Jain Dharma for future generations.
            </p>

            {/* Donation Amount Options */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
              {[51, 101, 501, 1001, 5000].map((amt, idx) => (
                <button
                  key={idx}
                  className="px-4 sm:px-5 py-2 rounded-lg border border-primary text-primary text-sm sm:text-base font-semibold hover:bg-primary hover:text-white transition"
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            {/* Custom Amount + Donate Now */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="number"
                placeholder="Enter Amount"
                className="border border-gray-300 px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary flex-1 text-sm sm:text-base"
              />
              <button
                onClick={() => (window.location.href = "/donate")}
                className="bg-secondary hover:bg-secondary/80 text-background font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md text-sm sm:text-base"
              >
                Donate Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group h-60 sm:h-80 lg:h-full">
            <img
              src="/bg-donation.jpg"
              alt="Donation"
              className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-white/30 
        -translate-x-1/2 -translate-y-1/2 -rotate-45 
        transition-all duration-[600ms] ease-linear 
        group-hover:h-[250%] group-hover:bg-transparent"
            ></div>

            {/* Overlay text */}
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl text-center px-4">
                Seva Parmo Dharma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          {/* Heading */}
          <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
            <GiByzantinTemple className="text-primary" /> Our Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
            Services We Offer
          </h2>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-accent"
              >
                {/* Image Wrapper with effect */}
                <div className="relative overflow-hidden group h-64">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-125"
                  />
                  {/* White diagonal shade */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-white/30 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-[600ms] ease-linear group-hover:h-[250%] group-hover:bg-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="bg-accent rounded-t-2xl -mt-10 relative z-10 p-6 text-left mx-3 overflow-hidden">
                  <div className="bg-primary text-white rounded-b-full w-12 h-16 flex items-center justify-center -mt-7 mb-4">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{s.description}</p>
                  <div className="flex justify-end items-end">
                    <button className="bg-secondary hover:bg-secondary/90 text-background font-semibold py-2 px-4 rounded-md shadow">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center pb-12">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <GiByzantinTemple className="text-primary" /> OUR GALLERY
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              Temple Memories
            </h2>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
            {/* Big Image */}
            <div className="md:col-span-3 relative group overflow-hidden rounded-2xl shadow-lg h-[400px]">
              <img
                src="/1.jpg"
                alt="Gallery 1"
                className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
              />
              {/* Diagonal overlay effect */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-primary/30 
          -translate-x-1/2 -translate-y-1/2 -rotate-45 
          transition-all duration-[600ms] ease-linear 
          group-hover:h-[250%] group-hover:bg-transparent"
              ></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <button className="text-white font-medium text-md bg-secondary/50 px-4 py-2 rounded-full">
                  View Photo
                </button>
              </div>
            </div>

            {/* Small Images */}
            <div className="md:col-span-3 grid grid-cols-2 gap-4">
              {["/2.jpg", "/3.jpg", "/12.jpg", "/hero1.jpg"].map((src, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl shadow-md h-48"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 2}`}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
                  />
                  {/* Diagonal overlay effect */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-primary/30 
              -translate-x-1/2 -translate-y-1/2 -rotate-45 
              transition-all duration-[600ms] ease-linear 
              group-hover:h-[250%] group-hover:bg-transparent"
                  ></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <button className="text-white font-medium text-md bg-secondary/50 px-4 py-2 rounded-full">
                      View Photo
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Last row: 3 small images */}
            <div className="md:col-span-6 grid grid-cols-3 gap-4 mt-4">
              {["/hero4.jpg", "/hero2.jpg", "/service2.jpg"].map((src, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl shadow-md h-48"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 6}`}
                    className="w-full h-full object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
                  />
                  {/* Diagonal overlay effect */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-primary/30 
              -translate-x-1/2 -translate-y-1/2 -rotate-45 
              transition-all duration-[600ms] ease-linear 
              group-hover:h-[250%] group-hover:bg-transparent"
                  ></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <button className="text-white font-medium text-md bg-secondary/50 px-4 py-2 rounded-full">
                      View Photo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Premium Branches Section */}
<section className="py-20 bg-accent">
  <div className="container mx-auto px-6 lg:px-16">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
        <GiByzantinTemple className="text-primary" /> Our Branches
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-heading">
        Explore Our Four Sacred Math
      </h2>
    </div>

    {/* Branch Cards Grid */}
    <div className="grid gap-12 lg:grid-cols-2">
      {branches.map((branch, i) => (
        <div
          key={i}
          className={`relative flex flex-col sm:flex-row items-center gap-6 group ${
            i % 2 === 1 ? "sm:flex-row-reverse" : ""
          }`}
        >
          {/* Image Container */}
          <div className="relative w-full sm:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={branch.image}
              alt={branch.name}
              className="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-[1200ms] ease-in-out group-hover:scale-110"
            />
            <div className="absolute -inset-2 bg-white/30 opacity-70 pointer-events-none transition-all duration-[600ms] ease-linear group-hover:opacity-0"></div>
          </div>

          {/* Info Box */}
          <div className="flex-1 relative w-full sm:w-1/2">
            <div
              className={`absolute -top-10 ${
                i % 2 === 1 ? "right-0" : "left-0"
              } bg-secondary w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-white text-3xl transform transition-transform duration-500 group-hover:scale-110 z-10`}
            >
              {branch.icon}
            </div>

            <div
              className={`bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg transition group-hover:shadow-2xl ${
                i % 2 === 1 ? "pr-20" : "pl-20"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                {branch.name}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {branch.description}
              </p>
              <div className="mt-4 flex justify-end">
                <button className="bg-secondary hover:bg-secondary/90 text-background font-semibold py-2 px-4 rounded-md shadow">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
