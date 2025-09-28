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
 * Premium "Why Choose Golden Tree" section with:
 * - Green & gold theme
 * - Animated counters
 * - Solar calculator preview + cost breakdown
 * - Features/Services cards
 * - Testimonials carousel (auto-rotate)
 * - Timeline/process
 * - Benefits grid
 * - FAQ accordion
 * - CTA footer
 *
 * No framer-motion or other external animation libs used.
 */

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
    { number: 98, label:  "Customer Satisfaction (%)", icon: Leaf },
  ];

  const statsTargets = stats.map((s) => s.number);
  const counts = statsTargets.map((n) => useCountUp(n, 1300));

  /* ---------- Calculator State ---------- */
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

  /* Calculator algorithm (simple approximation) */
  useEffect(() => {
    // Protect from invalid inputs
    const billVal = Math.max(0, Number(monthlyBill) || 0);
    const unitsVal = Math.max(0, Number(avgUnits) || 0);

    // Estimate system size by units. Average generation ~120-150 units/kW/month
    const perKwUnits = 130; // adjustable constant
    const sizeKw = Math.max(1, Math.round(unitsVal / perKwUnits) || Math.max(1, Math.round(billVal / 800)));
    const monthlyProduction = Math.round(sizeKw * perKwUnits);
    const estSavings = Math.round(Math.min(billVal, (monthlyProduction / Math.max(1, unitsVal)) * billVal || billVal * 0.6));
    const sqft = Math.round(sizeKw * 80); // ballpark 80 sqft per kW
    const basePrice = Math.round(sizeKw * 65000); // ₹65k per kW
    const subsidy = mode === "home" ? Math.min(78000, Math.round(basePrice * 0.2)) : 0; // sample logic
    const discount = 0; // you may tie promotions
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

  /* ---------- small UI helpers ---------- */
  const currency = (n: number) => `₹${n.toLocaleString()}`;

  /* ---------- Render ---------- */
  return (
    <section className="about-section">
      {/* Container wrapper */}
      <div className="mx-auto container px-4 py-16 space-y-16">
        {/* Header & intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-emerald-900">
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-emerald-600">Golden Tree Life Spaces</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              We deliver premium solar and energy solutions for homes and businesses — engineered for performance, longevity and maximum savings. From design to installation, warranties and AMC, we handle every step with professionalism.
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

          {/* Stats cards */}
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

        {/* Calculator + Features Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Calculator column (big) */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-emerald-700 to-amber-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Solar Savings Calculator</h3>
                  <p className="text-sm text-amber-100/80">Estimate your system size, costs and monthly savings</p>
                </div>
                <div className="text-sm text-amber-50 bg-white/10 px-3 py-2 rounded-lg">
                  Premium estimate • Non-binding
                </div>
              </div>

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

                {/* Quick summary panel */}
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
                    <Button className="w-full bg-emerald-700 text-white">Schedule Free Site Visit</Button>
                    <div className="text-xs text-gray-500 mt-2">No obligation — personalized assessment after on-site visit</div>
                  </div>
                </div>
              </div>

              {/* cost breakdown */}
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

            {/* small features column */}
            <aside className="mt-4 p-4 rounded-xl border bg-white/60 shadow">
              <h4 className="font-bold text-emerald-900">Core Services</h4>
              <p className="text-sm text-gray-600 mb-4">Comprehensive solutions to cover entire solar lifecycle</p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-emerald-600 text-white flex items-center justify-center"><Sun className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Rooftop Solar</div>
                    <div className="text-sm text-gray-600">Residential & commercial panels</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-yellow-500 text-white flex items-center justify-center"><Battery className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Battery Systems</div>
                    <div className="text-sm text-gray-600">Reliable backup & hybrid setups</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md bg-amber-600 text-white flex items-center justify-center"><Camera className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold">Solar CCTV & Security</div>
                    <div className="text-sm text-gray-600">CCTV, fencing, and alarm systems</div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link to="/services" className="block">
                    <Button variant="outline" className="w-full">Explore All Services</Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Timeline / Process */}
        <div className="bg-white rounded-2xl p-8 shadow">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6">Our Process: Simple, Transparent, Professional</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Consultation", desc: "Phone/On-site survey & requirement analysis" },
              { step: "02", title: "Custom Proposal", desc: "Detailed quote, 3D layout & financing options" },
              { step: "03", title: "Professional Installation", desc: "Certified team installs & commissions system" },
              { step: "04", title: "Ongoing Support", desc: "AMC, monitoring & 24/7 customer support" },
            ].map((p) => (
              <div key={p.step} className="text-center p-4 border rounded-lg hover:shadow-lg transition">
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-emerald-600 text-white flex items-center justify-center text-lg font-bold mb-3">{p.step}</div>
                <div className="font-semibold text-emerald-900">{p.title}</div>
                <div className="text-sm text-gray-600 mt-2">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits grid */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-6">Why go solar? Key benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Lower Bills", desc: "Slash electricity bills and save long-term", icon: Zap },
              { title: "Energy Independence", desc: "Backup & hybrid systems keep lights on", icon: Battery },
              { title: "Environment", desc: "Cut CO₂ emissions and go green", icon: Leaf },
              { title: "Low Maintenance", desc: "Panels require minimal maintenance", icon: Wrench },
              { title: "High Value", desc: "Increase property value with rooftop solar", icon: Ruler },
              { title: "Security", desc: "Combine solar with CCTV & fencing", icon: Camera },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="p-6 rounded-xl border bg-white hover:shadow-xl transition">
                  <div className="w-12 h-12 rounded-md bg-emerald-600 text-white flex items-center justify-center mb-3"><Icon className="w-5 h-5" /></div>
                  <div className="font-semibold text-emerald-900">{b.title}</div>
                  <div className="text-sm text-gray-600 mt-2">{b.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-emerald-900">Customer Stories</h3>
              <div className="text-sm text-gray-600">Real results from real customers</div>
            </div>
            <div className="flex gap-2">
              <button onClick={prevTestimonial} className="p-2 rounded-full bg-white shadow"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={nextTestimonial} className="p-2 rounded-full bg-white shadow"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="relative">
            {/* Testimonial cards (simple slide effect) */}
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${testIndex * 100}%)` }}
              >
                {testimonials.map((t, idx) => (
                  <div key={idx} className="min-w-full p-6">
                    <div className="bg-white rounded-xl p-6 shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xl font-bold">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-emerald-900">{t.name}</div>
                          <div className="text-sm text-gray-500">{t.place}</div>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-700">“{t.text}”</p>
                      <div className="mt-4 flex gap-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* small dots */}
            <div className="flex gap-2 justify-center mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestIndex(i)}
                  className={`w-3 h-3 rounded-full ${i === testIndex ? "bg-emerald-800" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {faqList.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full px-5 py-4 flex justify-between items-center bg-emerald-50"
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                >
                  <div className="text-left">
                    <div className="font-semibold text-emerald-900">{faq.q}</div>
                    <div className="text-sm text-gray-600">{openFaqIndex === i ? "Click to collapse" : "Click to expand"}</div>
                  </div>
                  <HelpCircle className={`w-5 h-5 text-amber-500 ${openFaqIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openFaqIndex === i && (
                  <div className="px-5 py-4 text-gray-700">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA footer */}
        <div className="bg-gradient-to-r from-emerald-700 to-amber-500 text-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Ready to switch to cleaner energy?</h3>
              <p className="text-sm text-amber-100 mt-1">Book a free site visit and receive a no-obligation quote within 24 hours.</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+917993436520" className="inline-flex items-center bg-white text-emerald-700 px-5 py-3 rounded-lg font-semibold shadow">
                <Phone className="w-4 h-4 mr-2" /> Call +91 9885848445
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ---------- Tailwind-like CSS for minor keyframe polish (scoped) ---------- */}
      <style jsx>{`
        .about-section { background: linear-gradient(180deg, #f7fff6 0%, #fffaf0 100%); }
      `}</style>
    </section>
  );
};

export default AboutSection;
