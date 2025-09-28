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

/* ---------------------- Utility: Count Up Hook ---------------------- */
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

/* ---------------------- Main Component ---------------------- */
const AboutSection: React.FC = () => {
  /* ---------- Stats and counters ---------- */
  const stats = [
    { number: 500, label: "Projects Completed", icon: Award },
    { number: 50, label: "Expert Technicians", icon: Users },
    { number: 10, label: "Years Experience", icon: Wrench },
    { number: 98, label: "Customer Satisfaction (%)", icon: Leaf },
  ];
  const statsTargets = stats.map((s) => s.number);
  const counts = statsTargets.map((n) => useCountUp(n, 1300));

  /* ---------- Calculator State ---------- */
  const [mode, setMode] = useState<"home" | "commercial">("home");
  const [monthlyBill, setMonthlyBill] = useState<number>(2500);
  const [avgUnits, setAvgUnits] = useState<number>(300);
  const [systemSize, setSystemSize] = useState<number>(0);
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
    const sizeKw = Math.max(1, Math.round(unitsVal / perKwUnits) || Math.max(1, Math.round(billVal / 800)));
    const monthlyProduction = Math.round(sizeKw * perKwUnits);
    const estSavings = Math.round(Math.min(billVal, (monthlyProduction / Math.max(1, unitsVal)) * billVal || billVal * 0.6));
    const sqft = Math.round(sizeKw * 80);
    const basePrice = Math.round(sizeKw * 65000);
    const subsidy = mode === "home" ? Math.min(78000, Math.round(basePrice * 0.2)) : 0;
    const discount = 0;
    const finalCost = Math.max(0, basePrice - subsidy - discount);

    setSystemSize(sizeKw);
    setGeneratedUnitsPerMonth(monthlyProduction);
    setEstimatedMonthlySavings(estSavings);
    setSpaceRequiredSqft(sqft);
    setPriceBeforeSubsidy(basePrice);
    setSubsidyAmount(subsidy);
    setFinalProjectCost(finalCost);
  }, [monthlyBill, avgUnits, mode]);

  /* ---------- Testimonials Carousel ---------- */
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

  /* ---------- FAQ accordion ---------- */
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

  /* ---------- Helpers ---------- */
  const currency = (n: number) => `₹${n.toLocaleString()}`;

  /* ---------- Render ---------- */
  return (
    <section className="about-section">
      <div className="mx-auto container px-4 py-16 space-y-16">
        {/* Header & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Intro + Features */}
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

            <div className="mt-6 flex gap-3">
              <Button className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-lg px-6 py-3">Book Free Site Visit</Button>
              <Link to="/services" className="inline-block">
                <Button variant="outline" className="px-6 py-3">View Services</Button>
              </Link>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Card key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-emerald-100 text-emerald-700">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-emerald-900">{counts[idx]}</div>
                        <div className="text-sm text-gray-600">{s.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <h3 className="text-2xl font-bold text-emerald-900">Estimate Your Solar Savings</h3>
          <div className="flex gap-4">
            <Button
              variant={mode === "home" ? "default" : "outline"}
              onClick={() => setMode("home")}
            >
              Home
            </Button>
            <Button
              variant={mode === "commercial" ? "default" : "outline"}
              onClick={() => setMode("commercial")}
            >
              Commercial
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Monthly Bill (₹)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Average Units (kWh)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200"
                value={avgUnits}
                onChange={(e) => setAvgUnits(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-emerald-50 rounded-lg shadow">
              <div className="text-sm text-gray-500">System Size (kW)</div>
              <div className="text-lg font-bold text-emerald-900">{systemSize}</div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg shadow">
              <div className="text-sm text-gray-500">Monthly Savings</div>
              <div className="text-lg font-bold text-emerald-900">{currency(estimatedMonthlySavings)}</div>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg shadow">
              <div className="text-sm text-gray-500">Generated Units</div>
              <div className="text-lg font-bold text-emerald-900">{generatedUnitsPerMonth}</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-emerald-900">Testimonials</h3>
            <div className="flex gap-2">
              <button onClick={prevTestimonial}><ChevronLeft /></button>
              <button onClick={nextTestimonial}><ChevronRight /></button>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-gray-700">{testimonials[testIndex].text}</p>
            <div className="flex justify-between items-center">
              <div className="font-semibold text-emerald-900">{testimonials[testIndex].name}, {testimonials[testIndex].place}</div>
              <div className="flex gap-1">
                {Array(testimonials[testIndex].rating).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-amber-500" />)}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-3">
          <h3 className="text-2xl font-bold text-emerald-900">FAQs</h3>
          {faqList.map((f, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-none">
              <button
                className="w-full text-left py-2 flex justify-between items-center"
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              >
                <span>{f.q}</span>
                <HelpCircle className="w-5 h-5 text-emerald-600" />
              </button>
              {openFaqIndex === idx && <p className="text-gray-700 py-2">{f.a}</p>}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-emerald-700 to-amber-500 text-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-2">Ready to Switch to Solar?</h3>
          <p className="mb-4">Contact Golden Tree Life Spaces today and start saving energy & money!</p>
          <Button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 font-semibold">Book Your Free Consultation</Button>
        </div>
      </div>

      <style>
        {`
          .about-section {
            background: linear-gradient(180deg, #f7fff6 0%, #fffaf0 100%);
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
