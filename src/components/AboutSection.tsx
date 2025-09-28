import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Wrench,
  Leaf,
  DollarSign,
  Sun,
  Zap,
  Battery,
  Smile,
  Quote,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

// ----------------- About Section Component -----------------
const AboutSection = () => {
  // Calculator State
  const [bill, setBill] = useState<number>(1500);
  const [units, setUnits] = useState<number>(300);

  // Calculator Logic
  const estimatedSavings = Math.round(bill * 0.75);
  const systemSize = Math.max(1, Math.round(units / 120));

  // FAQ State
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Expert Technicians", icon: Users },
    { number: "10+", label: "Years Experience", icon: Wrench },
    { number: "98%", label: "Customer Satisfaction", icon: Leaf },
  ];

  const testimonials = [
    {
      name: "Ravi Sharma",
      role: "Homeowner, Bangalore",
      feedback:
        "Golden Tree installed my solar system with precision. My electricity bills dropped by 70% within the first month!",
    },
    {
      name: "Priya Menon",
      role: "Entrepreneur, Hyderabad",
      feedback:
        "The consultation team was transparent and professional. The ROI calculator gave me confidence before investing.",
    },
    {
      name: "Arun Kumar",
      role: "School Principal, Chennai",
      feedback:
        "Eco-friendly and cost-effective solution. The team supported us from start to finish seamlessly.",
    },
  ];

  const benefits = [
    {
      title: "Save Big on Bills",
      desc: "Cut your electricity bills by up to 75% with premium-grade solar panels.",
      icon: DollarSign,
    },
    {
      title: "Clean & Green Energy",
      desc: "Reduce carbon footprint and embrace sustainable living.",
      icon: Leaf,
    },
    {
      title: "Long-Term ROI",
      desc: "Recover your investment within 4-5 years and enjoy free power after.",
      icon: Zap,
    },
    {
      title: "Government Subsidy",
      desc: "Avail up to 40% subsidy on installation under national solar schemes.",
      icon: Sun,
    },
    {
      title: "Energy Independence",
      desc: "No more power cuts – store energy using smart batteries.",
      icon: Battery,
    },
    {
      title: "Trusted by Thousands",
      desc: "Join 500+ happy families & businesses who chose Golden Tree.",
      icon: Smile,
    },
  ];

  const faqs = [
    {
      q: "How much can I save with solar panels?",
      a: "Most customers save between 60-80% on their electricity bills, depending on usage and system size.",
    },
    {
      q: "How long is the warranty?",
      a: "Golden Tree provides up to 25 years performance warranty on solar panels.",
    },
    {
      q: "What is the average installation time?",
      a: "Residential projects take 2-5 days, while commercial setups may take up to 15 days.",
    },
    {
      q: "Can I get government subsidies?",
      a: "Yes! You can avail up to 40% subsidy on rooftop solar installations as per current policies.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-gold-50">
      <div className="container mx-auto px-4 space-y-24">
        {/* ---------------- Why Choose Golden Tree ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6">
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-yellow-600">
                Golden Tree?
              </span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are committed to providing sustainable energy solutions and
              advanced safety infrastructure that transforms homes and
              businesses into smart, secure, and energy-efficient spaces.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Certified Excellence
                  </h3>
                  <p className="text-gray-600">
                    Our team consists of certified professionals with extensive
                    training in solar technology and security systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Sustainable Solutions
                  </h3>
                  <p className="text-gray-600">
                    We prioritize eco-friendly technologies that reduce carbon
                    footprint and energy costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Complete Support
                  </h3>
                  <p className="text-gray-600">
                    From consultation to installation and maintenance, we
                    provide end-to-end service support.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-lg hover:scale-105 transition-transform"
            >
              Schedule Free Consultation
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={index}
                  className="card-hover bg-gradient-to-br from-green-50 to-yellow-50 border border-yellow-200 shadow-md"
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-yellow-600 rounded-xl mx-auto mb-4 shadow-md">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-green-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ---------------- Solar Calculator ---------------- */}
        <div className="py-16 px-6 lg:px-20 bg-gradient-to-r from-green-700 to-yellow-600 rounded-3xl shadow-xl text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            🌞 Want to Reduce Your Electricity Bills?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Calculator Form */}
            <div className="space-y-6">
              <label className="block">
                <span className="font-medium">Current Monthly Bill (₹)</span>
                <input
                  type="number"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full p-3 mt-2 rounded-lg text-black"
                />
              </label>

              <label className="block">
                <span className="font-medium">Monthly Units Consumed</span>
                <input
                  type="number"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full p-3 mt-2 rounded-lg text-black"
                />
              </label>

              <Button
                size="lg"
                className="w-full bg-white text-green-700 font-semibold hover:scale-105 transition-transform"
              >
                Calculate Savings
              </Button>
            </div>

            {/* Calculator Output */}
            <div className="bg-white text-green-900 rounded-2xl p-8 shadow-lg space-y-6">
              <h4 className="text-2xl font-bold">Your Solar Estimate</h4>
              <p className="text-lg">
                💰 Estimated Monthly Savings:{" "}
                <span className="font-bold text-green-700">
                  ₹{estimatedSavings}
                </span>
              </p>
              <p className="text-lg">
                ⚡ Suggested Solar System Size:{" "}
                <span className="font-bold text-yellow-600">{systemSize} kW</span>
              </p>
              <p className="text-sm text-gray-600">
                *Based on average sunlight & usage. Actual results may vary.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- Testimonials ---------------- */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-green-900 mb-12">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-2xl shadow-md"
              >
                <Quote className="h-8 w-8 text-yellow-600 mb-4" />
                <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
                <div className="font-semibold text-green-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------------- Benefits Grid ---------------- */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-green-900 mb-12">
            Benefits of Going Solar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-2">
                    {b.title}
                  </h4>
                  <p className="text-gray-600">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------- FAQ Section ---------------- */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-green-900 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border rounded-lg bg-gradient-to-r from-green-50 to-yellow-50"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  <span className="font-semibold text-green-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-yellow-600 transition-transform ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-4 text-gray-700">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
