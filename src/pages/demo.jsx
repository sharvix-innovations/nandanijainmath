import React, { useState } from 'react';
import {
  GiByzantinTemple,
  GiOpenBook,
  GiMeditation,
  GiClockwork,
} from "react-icons/gi";
import { 
  Heart, 
  CreditCard, 
  Shield,
  CheckCircle,
  Users,
  Building,
  Utensils,
  BookOpen,
  Gift,
  Star,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const predefinedAmounts = [51, 101, 501, 1001, 2501, 5000];

  // Donation categories
  const donationCategories = [
    {
      id: 'general',
      name: 'General Donation',
      icon: <Heart />,
      description: 'Support overall temple maintenance and activities',
      color: 'bg-primary'
    },
    {
      id: 'temple',
      name: 'Temple Construction',
      icon: <Building />,
      description: 'Contribute to temple development and infrastructure',
      color: 'bg-secondary'
    },
    {
      id: 'food',
      name: 'Prasadam & Food',
      icon: <Utensils />,
      description: 'Support community meals and prasadam distribution',
      color: 'bg-green-500'
    },
    {
      id: 'education',
      name: 'Educational Programs',
      icon: <BookOpen />,
      description: 'Fund pathshala and spiritual learning initiatives',
      color: 'bg-blue-500'
    },
    {
      id: 'seva',
      name: 'Community Seva',
      icon: <Users />,
      description: 'Support welfare activities and community services',
      color: 'bg-purple-500'
    },
    {
      id: 'special',
      name: 'Special Occasions',
      icon: <Gift />,
      description: 'Contribute for festivals and special celebrations',
      color: 'bg-orange-500'
    }
  ];

  // Impact statistics
  const impactStats = [
    {
      icon: <Users className="text-2xl" />,
      number: "10,000+",
      label: "Devotees Served",
      description: "Monthly"
    },
    {
      icon: <Utensils className="text-2xl" />,
      number: "500+",
      label: "Meals Distributed",
      description: "Daily"
    },
    {
      icon: <BookOpen className="text-2xl" />,
      number: "200+",
      label: "Students in Pathshala",
      description: "Learning Dharma"
    },
    {
      icon: <Building className="text-2xl" />,
      number: "4",
      label: "Active Math Centers",
      description: "Serving Community"
    }
  ];

  // Recent donors (testimonials)
  const recentDonors = [
    {
      name: "Shri Rajesh Kumar",
      amount: "₹5,000",
      message: "Happy to contribute to temple maintenance. May Lord Mahavir bless all.",
      category: "Temple Construction",
      date: "2 days ago"
    },
    {
      name: "Smt. Priya Jain",
      amount: "₹2,100",
      message: "Contributing for prasadam distribution. Seva Parmo Dharma.",
      category: "Food & Prasadam",
      date: "3 days ago"
    },
    {
      name: "Dr. Amit Shah",
      amount: "₹10,000",
      message: "Supporting educational programs for children's spiritual growth.",
      category: "Educational Programs",
      date: "5 days ago"
    }
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && donorInfo.name && donorInfo.email) {
      alert(`Thank you ${donorInfo.name}! Your donation of ₹${amount} for ${donationCategories.find(c => c.id === selectedCategory)?.name} is being processed.`);
    } else {
      alert('Please fill in all required fields and select an amount.');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-accent font-semibold uppercase flex items-center justify-center gap-2 mb-3">
            <Heart className="text-accent" /> SUPPORT OUR MISSION
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Donate & Make a Difference
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Your generous contribution helps preserve Jain Dharma, support community welfare, and maintain our sacred temples for future generations.
          </p>
        </div>
        
        {/* Floating donation symbols */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-accent/30 rounded-full animate-bounce flex items-center justify-center">
          <Heart className="text-accent w-6 h-6" />
        </div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-accent/20 rounded-full animate-pulse flex items-center justify-center">
          <Gift className="text-accent w-8 h-8" />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-accent/20 rounded-full animate-ping"></div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-accent -mt-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-primary group-hover:bg-secondary transition-colors text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-gray-700 font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-primary font-semibold uppercase flex items-center gap-2 mb-3">
                  <CreditCard className="text-primary" /> MAKE A DONATION
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
                  Choose Your Contribution
                </h2>
                <p className="text-gray-600">
                  Every donation, no matter the size, makes a meaningful impact on our community and helps us continue our sacred mission.
                </p>
              </div>

              {/* Donation Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Select Donation Purpose</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {donationCategories.map((category) => (
                    <div
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'border-secondary bg-secondary/10 shadow-lg'
                          : 'border-gray-200 hover:border-secondary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${category.color} text-white rounded-full p-2 flex-shrink-0`}>
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{category.name}</h4>
                          <p className="text-gray-600 text-sm">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Choose Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-secondary text-white shadow-lg transform scale-105'
                          : 'bg-accent hover:bg-secondary hover:text-white border border-gray-200'
                      }`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={donorInfo.address}
                    onChange={(e) => setDonorInfo({...donorInfo, address: e.target.value})}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-accent rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-secondary w-6 h-6" />
                  <h4 className="font-bold text-primary">Secure Donation</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-gray-700">SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-gray-700">Tax Deductible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-gray-700">Receipt Provided</span>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <Heart className="w-5 h-5" />
                Donate Now - ₹{selectedAmount || customAmount || '0'}
              </button>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Donation Options */}
              <div className="bg-accent rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Target className="text-secondary" />
                  Popular Donations
                </h3>
                <div className="space-y-3">
                  {[
                    { amount: '₹51', purpose: 'Daily Aarti', popular: true },
                    { amount: '₹501', purpose: 'Monthly Seva', popular: false },
                    { amount: '₹1,001', purpose: 'Festival Support', popular: true },
                    { amount: '₹5,000', purpose: 'Temple Maintenance', popular: false }
                  ].map((option, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition">
                      <div>
                        <div className="font-semibold text-primary">{option.amount}</div>
                        <div className="text-gray-600 text-sm">{option.purpose}</div>
                      </div>
                      {option.popular && (
                        <div className="bg-secondary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" fill="currentColor" />
                          Popular
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tax Benefits */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="text-accent" />
                  Tax Benefits
                </h3>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-accent w-5 h-5 mt-0.5" />
                    <div>
                      <div className="font-semibold">80G Tax Exemption</div>
                      <div className="text-sm">Get 50% tax deduction</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-accent w-5 h-5 mt-0.5" />
                    <div>
                      <div className="font-semibold">Instant Receipt</div>
                      <div className="text-sm">Email receipt immediately</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-accent w-5 h-5 mt-0.5" />
                    <div>
                      <div className="font-semibold">Registered Trust</div>
                      <div className="text-sm">Government approved</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Giving */}
              <div className="bg-white border-2 border-secondary rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <TrendingUp className="text-secondary" />
                  Monthly Giving
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our monthly donors program and make a lasting impact with regular contributions.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">₹500/month</span>
                    <span className="text-secondary font-semibold">Basic Seva</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">₹1,000/month</span>
                    <span className="text-secondary font-semibold">Regular Support</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">₹2,500/month</span>
                    <span className="text-secondary font-semibold">Premium Patron</span>
                  </div>
                </div>
                <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 px-4 rounded-lg transition">
                  Start Monthly Giving
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Donors Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase flex items-center justify-center gap-2 mb-3">
              <Users className="text-primary" /> COMMUNITY SUPPORT
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
              Recent Donors & Their Messages
            </h2>
            <p className="text-gray-600 mt-4">
              Join our generous community of donors who are making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentDonors.map((donor, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {donor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary">{donor.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-secondary font-semibold">{donor.amount}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{donor.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 italic">"{donor.message}"</p>
                <div className="text-sm text-secondary font-semibold">{donor.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Donation;