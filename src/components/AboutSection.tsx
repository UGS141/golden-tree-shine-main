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

  const counts = stats.map((s) => useCountUp(s.number, 1300));

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

  /* Calculator algorithm */
  useEffect(() => {
    const billVal = Math.max(0, monthlyBill);
    const unitsVal = Math.max(0, avgUnits);

    const perKwUnits = 130;
    const sizeKw = Math.max(1, Math.round(unitsVal / perKwUnits) || Math.round(billVal / 800));
    const monthlyProduction = Math.round(sizeKw * perKwUnits);
    const estSavings = Math.round(Math.min(billVal, (monthlyProduction / Math.max(1, unitsVal)) * billVal || billVal * 0.6));
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

  /* ---------- Testimonials Carousel ---------- */
  const testimonials = [
    { name: "Ravi Sharma", place: "Nellore", text: "Golden Tree's team replaced our old system and we saw our bill drop by 72%. Professional service and timely follow-up.", rating: 5 },
    { name: "Sangeeta Rao", place: "Hyderabad", text: "Installation was clean and fast. The inverters and panels were top-quality. Highly recommended!", rating: 5 },
    { name: "Karthik", place: "Chennai", text: "Strong after-sales support and clear paperwork. Financing options made it easy to take the plunge.", rating: 5 },
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

  function prevTestimonial() { setTestIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1)); }
  function nextTestimonial() { setTestIndex((p) => (p + 1) % testimonials.length); }

  /* ---------- FAQ accordion ---------- */
  const faqList = [
    { q: "How much can I save after installing solar?", a: "Savings depend on usage and system size. Typical customers save 50–80% on their electricity bills. Our calculator shows an estimate — we’ll provide a formal quote after the site survey." },
    { q: "Do you provide financing options?", a: "Yes — we have flexible EMI and financing schemes. Our team will guide you through options that suit your budget." },
    { q: "How long does installation take?", a: "Residential installations usually take 2–5 days. Commercial projects depend on scale and may take longer." },
    { q: "What is the warranty on panels and inverters?", a: "Panels typically come with 10–25 year performance warranties. Inverters have separate warranties (3–10 years depending on model)." },
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currency = (n: number) => `₹${n.toLocaleString()}`;

  return (
    <section className="about-section bg-gradient-to-b from-emerald-50 to-amber-50 py-16">
      <div className="container mx-auto px-4 space-y-16">
        {/* ---------------- Header & Intro ---------------- */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-emerald-900">
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-emerald-600">Golden Tree Life Spaces</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Premium solar & energy solutions engineered for performance, longevity, and maximum savings.
            </p>

            {/* Core Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { icon: Award, title: "Certified Experts", desc: "Trained & verified team" },
                { icon: Leaf, title: "Sustainable Design", desc: "Eco-first engineering" },
                { icon: CheckCircle, title: "Service Guarantee", desc: "Timely service & support" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-lg shadow hover:shadow-lg transition">
                    <div className="p-2 rounded-md bg-amber-500 text-white"><Icon className="w-5 h-5" /></div>
                    <div>
                      <div className="text-sm font-semibold text-emerald-900">{s.title}</div>
                      <div className="text-sm text-gray-600">{s.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex gap-3">
              <Button className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-lg px-6 py-3">Book Free Site Visit</Button>
              <Link to="/services"><Button variant="outline" className="px-6 py-3">View Services</Button></Link>
            </div>
          </div>

          {/* ---------------- Stats ---------------- */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Card key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-600 to-amber-500 text-white shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-900">{counts[i]}{s.label.includes("%") ? "%" : "+"}</div>
                      <div className="text-sm text-gray-600">{s.label}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ---------------- Solar Calculator ---------------- */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-emerald-900">Solar Savings Calculator</h3>
          <div className="flex gap-4">
            <Button variant={mode === "home" ? "default" : "outline"} onClick={() => setMode("home")}>Home</Button>
            <Button variant={mode === "commercial" ? "default" : "outline"} onClick={() => setMode("commercial")}>Commercial</Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Monthly Electricity Bill (₹)</label>
              <input type="number" value={monthlyBill} onChange={(e) => setMonthlyBill(+e.target.value)} className="mt-1 p-2 border rounded w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Average Units Consumed</label>
              <input type="number" value={avgUnits} onChange={(e) => setAvgUnits(+e.target.value)} className="mt-1 p-2 border rounded w-full" />
            </div>
          </div>

          {/* Results */}
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <Card className="p-4 bg-emerald-50 rounded-xl shadow">
              <CardContent>
                <div className="text-sm text-gray-600">System Size (KW)</div>
                <div className="text-xl font-bold text-emerald-900">{systemSize} KW</div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-amber-50 rounded-xl shadow">
              <CardContent>
                <div className="text-sm text-gray-600">Estimated Monthly Savings</div>
                <div className="text-xl font-bold text-emerald-900">{currency(estimatedMonthlySavings)}</div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-emerald-50 rounded-xl shadow">
              <CardContent>
                <div className="text-sm text-gray-600">Generated Units/Month</div>
                <div className="text-xl font-bold text-emerald-900">{generatedUnitsPerMonth} Units</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <Card className="p-4 bg-amber-50 rounded-xl shadow">
              <CardContent>
                <div className="text-sm text-gray-600">Space Required (Sq. Ft.)</div>
                <div className="text-xl font-bold text-emerald-900">{spaceRequiredSqft}</div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-emerald-50 rounded-xl shadow">
              <CardContent>
                <div className="text-sm text-gray-600">Price Before Subsidy</div>
                <div className="text-xl font-bold text-emerald-900">{currency(priceBeforeSubsidy)}</div>
              </CardContent>
            </Card>
            <Card className="p-4 bg-amber-50 rounded-xl shadow">
              <CardContent>
                <div className="text-sm text-gray-600">Subsidy Amount</div>
                <div className="text-xl font-bold text-emerald-900">{currency(subsidyAmount)}</div>
                <div className="text-sm text-gray-600 mt-1">Final Project Cost: {currency(finalProjectCost)}</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ---------------- Testimonials ---------------- */}
        <div className="relative bg-white rounded-xl shadow-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-emerald-900">What Our Customers Say</h3>
          <div className="space-y-2">
            <p className="text-gray-700 italic">"{testimonials[testIndex].text}"</p>
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-emerald-900">{testimonials[testIndex].name}, {testimonials[testIndex].place}</div>
              <div className="flex gap-1">{Array(testimonials[testIndex].rating).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400" />)}</div>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer" onClick={prevTestimonial}><ChevronLeft /></div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer" onClick={nextTestimonial}><ChevronRight /></div>
        </div>

        {/* ---------------- FAQ ---------------- */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">
          <h3 className="text-2xl font-bold text-emerald-900">Frequently Asked Questions</h3>
          {faqList.map((faq, i) => (
            <div key={i} className="border-b last:border-b-0">
              <button
                className="w-full text-left flex justify-between items-center py-2 font-medium text-gray-700"
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                aria-expanded={openFaqIndex === i}
              >
                {faq.q} <HelpCircle className="w-5 h-5" />
              </button>
              {openFaqIndex === i && <div className="p-2 text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>

        {/* ---------------- CTA ---------------- */}
        <div className="bg-gradient-to-r from-emerald-600 to-amber-500 text-white rounded-xl p-12 text-center shadow-lg space-y-4">
          <h3 className="text-3xl font-bold">Ready to Go Solar?</h3>
          <p>Book a free site visit today and start saving on your electricity bills!</p>
          <Button className="bg-white text-emerald-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">Book Free Site Visit</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
