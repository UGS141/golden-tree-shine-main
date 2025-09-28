// src/components/AboutSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Wrench,
  Leaf,
  Sun,
  Zap,
  Battery,
  Camera,
  Shield,
  Ruler,
  Phone,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

/**
 * AboutSection.tsx
 *
 * Premium "Why Choose Golden Tree Life Spaces" section
 * - Emerald + Gold theme
 * - Animated counters
 * - Fully responsive solar calculator
 * - Features, benefits, testimonials, FAQ, CTA
 */

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(10, Math.floor(duration / Math.max(1, target)));
    const increment = target > 0 ? 1 : 0;
    let timer: number | undefined;
    if (target === 0) {
      setCount(0);
      return;
    }
    timer = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        if (timer) window.clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [target, duration]);
  return count;
}

const AboutSection: React.FC = () => {
  /* ---------- Stats ---------- */
  const stats = [
    { number: 500, label: "Projects Completed", icon: Award },
    { number: 50, label: "Expert Technicians", icon: Users },
    { number: 10, label: "Years Experience", icon: Wrench },
    { number: 98, label: "Customer Satisfaction (%)", icon: Leaf },
  ];
  const counts = stats.map((s) => useCountUp(s.number, 1300));

  /* ---------- Calculator ---------- */
  const [mode, setMode] = useState<"home" | "commercial">("home");
  const [monthlyBill, setMonthlyBill] = useState<number>(2500);
  const [avgUnits, setAvgUnits] = useState<number>(300);
  const [systemSize, setSystemSize] = useState<number>(0); // kW
  const [estimatedMonthlySavings, setEstimatedMonthlySavings] = useState<number>(0);
  const [generatedUnitsPerMonth, setGeneratedUnitsPerMonth] = useState<number>(0);
  const [spaceRequiredSqft, setSpaceRequiredSqft] = useState<number>(0);
  const [priceBeforeSubsidy, setPriceBeforeSubsidy] = useState<number>(0);
  const [subsidyAmount, setSubsidyAmount] = useState<number>(0);
  const [finalProjectCost, setFinalProjectCost] = useState<number>(0);

  useEffect(() => {
    const billVal = Math.max(0, Number(monthlyBill) || 0);
    const unitsVal = Math.max(0, Number(avgUnits) || 0);
    const perKwUnits = 130;
    const sizeKw = Math.max(
      1,
      Math.min(
        50,
        Math.round(unitsVal / perKwUnits) || Math.round(billVal / 800)
      )
    );
    const monthlyProduction = Math.round(sizeKw * perKwUnits);
    const estSavings = Math.round(
      Math.min(billVal, (monthlyProduction / Math.max(1, unitsVal)) * billVal || billVal * 0.6)
    );
    const sqft = Math.round(sizeKw * 80);
    const basePrice = Math.round(sizeKw * 65000);
    const subsidy = mode === "home" ? Math.min(78000, Math.round(basePrice * 0.2)) : 0;
    const finalCost = Math.max(0, basePrice - subsidy);

    setSystemSize(sizeKw);
    setGeneratedUnitsPerMonth(monthlyProduction);
    setEstimatedMonthlySavings(estSavings);
    setSpaceRequiredSqft(sqft);
    setPriceBeforeSubsidy(basePrice);
    setSubsidyAmount(subsidy);
    setFinalProjectCost(finalCost);
  }, [monthlyBill, avgUnits, mode]);

  /* ---------- Testimonials ---------- */
  const testimonials = [
    {
      name: "Ravi Sharma",
      place: "Nellore",
      text: "Golden Tree's team replaced our old system and we saw our bill drop by 72%. Professional service and timely follow-up.",
      rating: 5,
    },
    {
      name: "Sangeeta Rao",
      place: "Hyderabad",
      text: "Installation was clean and fast. The inverters and panels were top-quality. Highly recommended!",
      rating: 5,
    },
    {
      name: "Karthik",
      place: "Chennai",
      text: "Strong after-sales support and clear paperwork. Financing options made it easy to take the plunge.",
      rating: 5,
    },
  ];
  const [testIndex, setTestIndex] = useState(0);
  const testimonialTimerRef = useRef<number | null>(null);
  useEffect(() => {
    testimonialTimerRef.current = window.setInterval(() => {
      setTestIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => {
      if (testimonialTimerRef.current) window.clearInterval(testimonialTimerRef.current);
    };
  }, []);

  function prevTestimonial() {
    setTestIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  }
  function nextTestimonial() {
    setTestIndex((p) => (p + 1) % testimonials.length);
  }

  /* ---------- FAQ ---------- */
  const faqList = [
    {
      q: "How much can I save after installing solar?",
      a: "Savings depend on usage and system size. Typical customers save 50–80% on their electricity bills. Our calculator shows an estimate — we’ll provide a formal quote after the site survey.",
    },
    {
      q: "Do you provide financing options?",
      a: "Yes — we have flexible EMI and financing schemes. Our team will guide you through options that suit your budget.",
    },
    {
      q: "How long does installation take?",
      a: "Residential installations usually take 2–5 days. Commercial projects depend on scale and may take longer.",
    },
    {
      q: "What is the warranty on panels and inverters?",
      a: "Panels typically come with 10–25 year performance warranties. Inverters have separate warranties (3–10 years depending on model).",
    },
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currency = (n: number) => `₹${n.toLocaleString()}`;

  return (
    <section className="about-section">
      <div className="mx-auto container px-4 py-16 space-y-16">
        {/* Header & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-emerald-900">
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-emerald-600">Golden Tree Life Spaces</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              We deliver premium solar and energy solutions for homes and businesses — engineered for performance, longevity and maximum savings.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg shadow">
                <div className="p-2 rounded-md bg-amber-500 text-white"><Award className="w-5 h-5" /></div>
                <div>
                  <div className="text-sm font-semibold text-emerald-900">Certified Experts</div>
                  <div className="text-sm text-gray-600">Trained & verified team</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg shadow">
                <div className="p-2 rounded-md bg-emerald-600 text-white"><Leaf className="w-5 h-5" /></div>
                <div>
                  <div className="text-sm font-semibold text-emerald-900">Sustainable Design</div>
                  <div className="text-sm text-gray-600">Eco-first engineering</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg shadow">
                <div className="p-2 rounded-md bg-amber-500 text-white"><CheckCircle className="w-5 h-5" /></div>
                <div>
                  <div className="text-sm font-semibold text-emerald-900">Service Guarantee</div>
                  <div className="text-sm text-gray-600">Timely service & support</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-lg px-6 py-3">Book Free Site Visit</Button>
              <Link to="/services" className="inline-block">
                <Button variant="outline" className="px-6 py-3">View Services</Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-amber-500 text-white shadow">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-900">{counts[idx]}{s.label === "Customer Satisfaction (%)" ? "%" : "+"}</div>
                        <div className="text-sm text-gray-600">{s.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Calculator + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-emerald-700 to-amber-500 p-6 text-white">
              {/* Calculator Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold">Solar Savings Calculator</h3>
                  <p className="text-sm text-amber-100/80">Estimate your system size, costs and monthly savings</p>
                </div>
                <div className="text-sm text-amber-50 bg-white/10 px-3 py-2 rounded-lg">
                  Premium estimate • Non-binding
                </div>
              </div>

              {/* Calculator Inputs */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-white/10 p-4 rounded-xl">
                  <div className="flex gap-3 mb-4">
                    <button
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition ${
                        mode === "home" ? "bg-white text-emerald-700" : "bg-transparent text-white/90 border border-white/20"
                      }`}
                      onClick={() => setMode("home")}
                    >
                      Home
                    </button>
                    <button
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold transition ${
                        mode === "commercial" ? "bg-white text-emerald-700" : "bg-transparent text-white/90 border border-white/20"
                      }`}
                      onClick={() => setMode("commercial")}
                    >
                      Commercial
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="block">
                      <div className="text-sm mb-1">Monthly Electricity Bill (₹)</div>
                      <input
                        type="number"
                        min={0}
                        value={monthlyBill}
                        onChange={(e) => setMonthlyBill(Number(e.target.value))}
                        className="w-full rounded-lg p-3 text-emerald-900"
                      />
                    </label>
                    <label className="block">
                      <div className="text-sm mb-1">Avg Monthly Units (kWh)</div>
                      <input
                        type="number"
                        min={0}
                        value={avgUnits}
                        onChange={(e) => setAvgUnits(Number(e.target.value))}
                        className="w-full rounded-lg p-3 text-emerald-900"
                      />
                    </label>
                    <div className="md:col-span-2 text-sm text-amber-50/90">
                      Tip: If you don't know units, enter bill amount and our estimator will calculate a recommended system size.
                    </div>
                  </div>
                </div>

                {/* Quick Summary */}
                <div className="bg-white rounded-xl p-4 text-emerald-900 shadow">
                  <div className="text-sm text-gray-600">Suggested System</div>
                  <div className="text-3xl font-bold mt-2">{systemSize} kW</div>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <div>Est. Monthly Savings</div>
                      <div className="font-semibold">{currency(estimatedMonthlySavings)}</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Monthly Generation</div>
                      <div className="font-semibold">{generatedUnitsPerMonth} kWh</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>Space Required</div>
                      <div className="font-semibold">{spaceRequiredSqft} sqft</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Link
                      to="https://docs.google.com/forms/d/e/1FAIpQLSdRdjDw8egRHqtBqGW8h4LFdBUmynSVDOQTWWBky2h53bcjDQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-emerald-700 text-white">Schedule Free Site Visit</Button>
                    </Link>
                    <div className="text-xs text-gray-500 mt-2">No obligation — personalized assessment after on-site visit</div>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/90 rounded-xl p-4 text-emerald-900">
                      <div className="text-sm">Price (est)</div>
                      <div className="text-lg font-bold mt-1">{currency(priceBeforeSubsidy)}</div>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 text-emerald-900">
                      <div className="text-sm">Subsidy / Discounts</div>
                      <div className="text-lg font-bold mt-1">{currency(subsidyAmount)}</div>
                    </div>
                    <div className="bg-white/90 rounded-xl p-4 text-emerald-900">
                      <div className="text-sm">Final Project Cost</div>
                      <div className="text-lg font-bold mt-1">{currency(finalProjectCost)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Services */}
            <aside className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
                <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                  <Sun className="w-10 h-10 text-emerald-600" />
                  <h4 className="font-bold text-lg text-emerald-900">Solar Panel Installation</h4>
                  <p className="text-gray-600 text-sm">
                    High-quality panels with optimized efficiency and lifetime performance.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
                <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                  <Zap className="w-10 h-10 text-amber-500" />
                  <h4 className="font-bold text-lg text-emerald-900">Inverters & Battery Storage</h4>
                  <p className="text-gray-600 text-sm">
                    Best-in-class inverters & smart batteries for uninterrupted power backup.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
                <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                  <Wrench className="w-10 h-10 text-emerald-600" />
                  <h4 className="font-bold text-lg text-emerald-900">Maintenance & Support</h4>
                  <p className="text-gray-600 text-sm">
                    Full system checkups, maintenance packages and 24/7 support.
                  </p>
                </CardContent>
              </Card>
            </aside>

            {/* Testimonials */}
            <section className="mt-16 relative">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Customer Testimonials</h3>
              <div className="bg-white shadow-xl rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
                <button onClick={prevTestimonial} className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition">
                  <ChevronLeft className="w-5 h-5 text-emerald-700" />
                </button>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-700 italic">"{testimonials[testIndex].text}"</p>
                  <div className="mt-4 font-semibold text-emerald-900">
                    {testimonials[testIndex].name}, {testimonials[testIndex].place}
                  </div>
                  <div className="flex justify-center md:justify-start mt-1 gap-1 text-amber-400">
                    {Array.from({ length: testimonials[testIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>
                <button onClick={nextTestimonial} className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 transition">
                  <ChevronRight className="w-5 h-5 text-emerald-700" />
                </button>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-16">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqList.map((faq, idx) => (
                  <div key={idx} className="border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="flex justify-between items-center w-full p-4 bg-emerald-50 text-emerald-900 font-semibold text-left"
                    >
                      {faq.q}
                      <HelpCircle className={`w-5 h-5 transition-transform ${openFaqIndex === idx ? "rotate-180" : ""}`} />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 bg-white text-gray-700">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-16 text-center bg-emerald-700 text-white rounded-xl py-12 px-6 shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Harness Solar Power?</h3>
              <p className="mb-6 text-lg text-amber-100 max-w-2xl mx-auto">
                Schedule a free site visit today and let our experts design a solar system tailored to your home or business.
              </p>
              <Button
                className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-8 py-3 font-bold shadow-lg"
              >
                Book Free Site Visit
              </Button>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
