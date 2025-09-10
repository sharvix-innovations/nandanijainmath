import {
  GiByzantinTemple,
  GiOpenBook,
  GiMeditation,
  GiClockwork,
  GiTempleGate,
  GiFlowerPot,
} from "react-icons/gi";
import {
  FaBookOpen,
  FaBalanceScale,
  FaUserTie
} from "react-icons/fa";

const About = () => {
  // Our History Timeline
  const timeline = [
    {
      year: "1850",
      title: "Foundation",
      description:
        "Establishment of the original Math by revered saints in the serene hills of Kolhapur district.",
    },
    {
      year: "1920",
      title: "Temple Construction",
      description:
        "Construction of the main temple dedicated to Bhagwan Neminath with intricate architectural details.",
    },
    {
      year: "1975",
      title: "Community Growth",
      description:
        "Expansion of community activities and establishment of regular Pathshala for children and youth.",
    },
    {
      year: "2000",
      title: "Modern Era",
      description:
        "Introduction of modern facilities while preserving ancient traditions and spiritual practices.",
    },
    {
      year: "2020",
      title: "Digital Integration",
      description:
        "Launch of online seva and virtual participation in daily prayers and major festivals.",
    },
  ];

  // Our Values
  const values = [
    {
      title: "Ahimsa",
      description:
        "Non-violence in thought, word, and action. We promote compassion towards all living beings.",
      icon: <GiMeditation />,
      color: "bg-green-500",
    },
    {
      title: "Satya",
      description:
        "Truth and honesty in all our dealings and spiritual practices.",
      icon: <GiOpenBook />,
      color: "bg-blue-500",
    },
    {
      title: "Dharma",
      description:
        "Righteous living according to Jain principles and teachings.",
      icon: <GiByzantinTemple />,
      color: "bg-purple-500",
    },
    {
      title: "Seva",
      description:
        "Selfless service to the community and preservation of Jain heritage.",
      icon: <GiFlowerPot />,
      color: "bg-orange-500",
    },
  ];

  // Leadership Team
  const leadership = [
    {
      name: "Swastishri Jinsen Bhattarak Pattachary Mahaswamy",
      position: "Spiritual Head",
      description:
        "Guiding the Math with profound knowledge of Jain Agams and spiritual wisdom for over 30 years.",
      image: "/2.jpg",
    },
    {
      name: "Shri Rajesh Kumar Jain",
      position: "Managing Committee President",
      description:
        "Leading community initiatives and overseeing the administrative affairs of the Math.",
      image: "/3.jpg",
    },
    {
      name: "Shrimati Sunita Jain",
      position: "Women's Committee Head",
      description:
        "Organizing women's spiritual activities and community welfare programs.",
      image: "/12.jpg",
    },
  ];

  // Statistics
  const stats = [
    {
      number: "175+",
      title: "Years of Heritage",
      desc: "Preserving Jain traditions since 1850.",
    },
    {
      number: "800+",
      title: "Devotee Families",
      desc: "Active community members participating in Math activities.",
    },
    {
      number: "50+",
      title: "Annual Events",
      desc: "Religious festivals and community programs organized yearly.",
    },
    {
      number: "25L+",
      title: "Community Fund",
      desc: "Collected for Math maintenance and social welfare activities.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/20 to-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-32 text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4 font-heading">
            About Nandani Jain Math
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Explore the rich spiritual heritage, history, and Bhattarak lineage
            of our revered Math.
          </p>
        </div>
        {/* Decorative Floating Icons */}
        <div className="absolute -top-10 left-10 w-16 h-16 bg-primary/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-1/3 h-32 bg-gradient-to-t from-secondary/30 to-transparent rounded-t-full"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            <p className="text-primary font-semibold uppercase flex items-center gap-2 mb-3">
              <FaBookOpen className="text-primary" /> Our Story
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              A Legacy of <br /> Spiritual Excellence
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Established in 1850, Nandani Jain Math stands as a beacon of Jain
              spirituality and cultural preservation in Maharashtra. Located
              amidst the tranquil hills of Kolhapur district, our Math has been
              a center of learning, devotion, and community service for over
              seven generations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Under the blessed guidance of Swastishri Jinsen Bhattarak
              Pattachary Mahaswamy, we continue to uphold the sacred traditions
              while adapting to modern times. Our Math serves as a spiritual
              home for over 800 families across the region.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From daily Prabhat Aarti to grand celebrations of Paryushan and
              Das Lakshan, every activity at Nandani Math is infused with
              devotion and dedication to preserving the timeless wisdom of
              Jainism.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-accent rounded-lg"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    {stat.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src="/1.jpg"
                alt="Nandani Jain Math"
                className="w-full h-96 object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-white/30 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-[600ms] ease-linear group-hover:h-[250%] group-hover:bg-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-20 -left-8 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-bold text-primary mb-1">
                {stats[2].number}
              </div>
              <div className="text-sm font-semibold text-gray-700">
                {stats[2].title}
              </div>
              <div className="text-xs text-gray-500">{stats[2].desc}</div>
            </div>

            <div className="absolute -top-20 -right-8 bg-secondary text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-bold mb-1">{stats[3].number}</div>
              <div className="text-sm font-semibold">{stats[3].title}</div>
              <div className="text-xs opacity-90">{stats[3].desc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-accent to-accent/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/counter-shape.png')] opacity-10 bg-center bg-cover"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3 tracking-widest">
              <FaBalanceScale className="text-primary text-2xl" /> Core Values
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              Our Guiding Principles
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-8 pt-20 shadow-xl text-center bg-gradient-to-tr from-primary via-primary/90 to-primary/70 
          hover:scale-105 transition-transform duration-300 ease-out group overflow-hidden"
              >
                {/* Floating Icon */}
                <div
                  className="absolute top-0 left-20 -translate-x-1/2 bg-secondary text-white w-16 h-16 flex items-center justify-center 
          rounded-b-full shadow-lg"
                >
                  <span className="text-3xl">{value.icon}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {value.title}
                </h2>

                {/* Divider Line */}
                <div className="w-12 h-1 bg-secondary mx-auto mb-6 rounded-full group-hover:w-20 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-100">
                  {value.description}
                </p>

                {/* Glow Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 
          group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <GiClockwork className="text-primary" /> Our Journey
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              Historic Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div className="bg-accent p-6 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold text-secondary mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <FaUserTie className="text-primary" /> Leadership
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              Our Guiding Lights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover transition-transform duration-[1300ms] ease-in-out group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute left-1/2 top-1/2 w-[200%] h-0 bg-white/30 -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-[600ms] ease-linear group-hover:h-[250%] group-hover:bg-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {leader.name}
                </h3>
                <p className="text-secondary font-semibold mb-3">
                  {leader.position}
                </p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto lg:mx-0 mb-6">
                <GiOpenBook />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To preserve and propagate the sacred teachings of Jainism,
                foster spiritual growth among devotees, and serve humanity
                through the principles of Ahimsa, Truth, and Compassion. We
                strive to create a harmonious community that upholds Jain values
                while embracing modern progress.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto lg:mx-0 mb-6">
                <GiMeditation />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To establish Nandani Jain Math as a globally recognized center
                of Jain spirituality, learning, and community service. We
                envision a world where Jain principles of non-violence and
                compassion inspire positive change and contribute to universal
                peace and harmony.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
