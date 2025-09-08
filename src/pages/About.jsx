import { GiByzantinTemple, GiOpenBook, GiMeditation } from "react-icons/gi";

const About = () => {
  const branches = [
    { name: "Nandani Jain Math - Kolhapur", image: "/1.jpg" },
    { name: "Branch 2", image: "/2.jpg" },
    { name: "Branch 3", image: "/3.jpg" },
    { name: "Branch 4", image: "/12.jpg" },
  ];

  const history = [
    {
      year: "1920",
      event:
        "Nandani Jain Math established in Kolhapur, marking the beginning of spiritual and cultural activities for the local Jain community.",
    },
    {
      year: "1950",
      event:
        "First major temple renovation completed, including installation of new idols and frescoes, attracting more devotees and enhancing temple facilities.",
    },
    {
      year: "2000",
      event:
        "Community seva programs launched, providing social support, educational initiatives, and health services to nearby communities.",
    },
    {
      year: "2025",
      event:
        "Digital Pooja live started, allowing devotees from across the world to participate virtually in temple rituals and spiritual events.",
    },
  ];

  return (
    <>
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

      {/* About Jain Dharma */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold uppercase flex items-center gap-2 mb-3">
              <GiByzantinTemple className="text-primary" /> About Jain Dharma
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              Know The Eternal Path of Jain Philosophy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in 1952 by Acharya Shri Nirmal Sagar Ji Maharaj, Nadani
              Jain Math began as a small ashram dedicated to the practice and
              propagation of Jain principles. Over the decades, it has grown
              into a spiritual center attracting seekers from around the world.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our Math has preserved ancient Jain manuscripts, promoted
              vegetarianism, and built educational institutions that combine
              Jain values with modern learning.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <img
              src="/hero1.jpg"
              alt="Temple"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Heritage & History Timeline */}
      <section className="py-24 bg-accent/10 relative">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center pb-12">
            {/* Heading */}
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3 text-sm sm:text-base">
              <GiByzantinTemple className="text-primary text-lg sm:text-xl" />{" "}
              Heritage & History
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-6 font-heading">
              Heritage & History
            </h2>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-primary h-full"></div>

            {history.map((h, i) => (
              <div
                key={i}
                className={`mb-12 flex flex-col items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } justify-between`}
              >
                <div className="lg:w-5/12 w-full text-center lg:text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {h.year}
                  </h3>
                  <p className="text-gray-600">{h.event}</p>
                </div>
                <div className="relative lg:w-1/12 w-full flex justify-center my-4 lg:my-0">
                  <div className="w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
                <div className="lg:w-5/12 w-full hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches / Math */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
            <GiByzantinTemple className="text-primary" /> Our Branches
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-12 font-heading">
            Four Prominent Jain Math
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {branches.map((b, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-md rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition"
              >
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h3 className="text-primary font-semibold text-lg text-center">
                  {b.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
