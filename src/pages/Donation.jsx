const Donation = () => {
  return (
    <section
        className="relative text-white pt-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-donation.jpg')" }} // background image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Donation Form */}
          <div className="pb-12">
            {/* Heading */}
            <p className="text-secondary font-semibold uppercase flex items-center gap-2 mb-3">
              <GiByzantinTemple className="text-secondary" /> Support & Donation
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-snug">
              Support us, We need <br /> Your Help
            </h2>

            {/* Donation Amount Options */}
            <div className="flex flex-wrap gap-3 mb-6">
              {amounts.map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    setAmount(val);
                    setCustom(false);
                  }}
                  className={`px-6 py-2 border rounded-md font-medium ${
                    amount === val && !custom
                      ? "bg-secondary text-primary"
                      : "hover:bg-secondary/90 hover:text-primary"
                  }`}
                >
                  ${val}
                </button>
              ))}
              <button
                onClick={() => setCustom(true)}
                className={`px-6 py-2 border rounded-md font-medium ${
                  custom ? "bg-secondary text-primary" : ""
                }`}
              >
                Custom
              </button>
            </div>

            {/* Donation Input */}
            <div className="flex items-center border rounded-md mb-4 bg-white text-black">
              <span className="px-3 text-lg">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full outline-none py-2 px-2"
              />
            </div>

            {/* Monthly Donation */}
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="monthly" />
              <label htmlFor="monthly" className="text-sm">
                I would like to make this a monthly donation
              </label>
            </div>

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70 w-full"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70 w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70 w-full"
              />
              <input
                type="text"
                placeholder="Your Address"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70 w-full"
              />
              <input
                type="text"
                placeholder="Zip"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70 w-full"
              />
              <input
                type="text"
                placeholder="City"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70 w-full"
              />
            </div>

            {/* Card Details */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <select className="p-3 rounded-md border border-white bg-transparent text-white text-sm">
                <option className="text-black">Visa</option>
                <option className="text-black">MasterCard</option>
                <option className="text-black">PayPal</option>
              </select>
              <input
                type="text"
                placeholder="Enter credit card number"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70 col-span-2"
              />
              <input
                type="text"
                placeholder="Card Expiration"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70"
              />
              <input
                type="text"
                placeholder="CVV"
                className="p-3 rounded-md border border-white bg-transparent text-white placeholder:text-sm placeholder:text-white/70"
              />
            </div>

            {/* Submit */}
            <button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold py-3 px-6 rounded-md shadow">
              Donate Now
            </button>
          </div>

          {/* Right Side - Two Images */}
          <div className="text-primary bg-white p-10  pt-40 h-full rounded-t-full text-center">
            <button className="border border-primary rounded-full px-5 py-1 text-sm mb-4 font-bold">
              DONATION
            </button>
            <h2 className="text-4xl font-bold leading-snug mb-8">
              support us, we need <br /> your help
            </h2>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-secondary text-primary w-20 h-20 flex items-center justify-center rounded-full mx-auto font-bold text-lg">
                  15k
                </div>
                <p className="mt-2 font-medium">Growing</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-primary w-20 h-20 flex items-center justify-center rounded-full mx-auto font-bold text-lg">
                  70+
                </div>
                <p className="mt-2 font-medium">Diverse</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-primary w-20 h-20 flex items-center justify-center rounded-full mx-auto font-bold text-lg">
                  90%
                </div>
                <p className="mt-2 font-medium">Community</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary text-primary w-20 h-20 flex items-center justify-center rounded-full mx-auto font-bold text-lg">
                  60k
                </div>
                <p className="mt-2 font-medium">Donation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Donation;
