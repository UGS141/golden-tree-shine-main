import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Wrench, Leaf, Home, Building2, PiggyBank, Zap, Ruler } from 'lucide-react';
import { useState } from 'react';

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "50+", label: "Expert Technicians", icon: Users },
    { number: "10+", label: "Years Experience", icon: Wrench },
    { number: "98%", label: "Customer Satisfaction", icon: Leaf }
  ];

  // Calculator States
  const [mode, setMode] = useState<"home" | "commercial">("home");
  const [bill, setBill] = useState<number>(2500);

  // Calculation Logic
  const systemSize = Math.max(1, Math.round(bill / 850)); // rough kW calc
  const annualSavings = bill * 12; // simple annual savings
  const generatedUnits = systemSize * 1440; // ~1440 units per kW
  const spaceRequired = systemSize * 80; // ~80 sqft per kW
  const basePrice = systemSize * 65000; // ~₹65k per kW
  const subsidy = mode === "home" ? 78000 : 0;
  const discount = 22000;
  const projectCost = Math.max(0, basePrice - subsidy - discount);

  return (
    <>
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Why Choose <span className="text-gradient">Golden Tree?</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are committed to providing sustainable energy solutions and advanced safety 
                  infrastructure that transforms homes and businesses into smart, secure, and 
                  energy-efficient spaces.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Certified Excellence</h3>
                    <p className="text-muted-foreground">
                      Our team consists of certified professionals with extensive training in solar technology and security systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-6 w-6 text-accent-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Sustainable Solutions</h3>
                    <p className="text-muted-foreground">
                      We prioritize eco-friendly technologies that reduce carbon footprint and energy costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Complete Support</h3>
                    <p className="text-muted-foreground">
                      From consultation to installation and maintenance, we provide end-to-end service support.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="btn-accent">
                Schedule Free Consultation
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="card-hover bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                    <CardContent className="p-8 text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solar Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            Do you want to <span className="text-yellow-300">reduce your current bill?</span>
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Explore the potential of solar energy and start saving from Day One!
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Input */}
            <div className="bg-white text-gray-900 rounded-xl shadow-xl p-6 space-y-6">
              <div className="flex space-x-4">
                <Button 
                  variant={mode === "home" ? "default" : "outline"} 
                  className={`flex-1 ${mode === "home" ? "bg-green-500 text-white" : ""}`}
                  onClick={() => setMode("home")}
                >
                  <Home className="mr-2 h-5 w-5" /> Home
                </Button>
                <Button 
                  variant={mode === "commercial" ? "default" : "outline"} 
                  className={`flex-1 ${mode === "commercial" ? "bg-green-500 text-white" : ""}`}
                  onClick={() => setMode("commercial")}
                >
                  <Building2 className="mr-2 h-5 w-5" /> Commercial
                </Button>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Monthly Electricity Bill (₹)</label>
                <input
                  type="number"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            {/* Right - Results */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 flex items-center justify-center">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" /> System Size
                  </h3>
                  <p className="text-2xl font-bold">{systemSize} kW</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 flex items-center justify-center">
                    <PiggyBank className="h-5 w-5 mr-2 text-green-600" /> Annual Savings
                  </h3>
                  <p className="text-2xl font-bold">₹{annualSavings.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 flex items-center justify-center">
                    <Zap className="h-5 w-5 mr-2 text-blue-600" /> Energy Generated
                  </h3>
                  <p className="text-2xl font-bold">{generatedUnits.toLocaleString()} Units</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-gray-900">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2 flex items-center justify-center">
                    <Ruler className="h-5 w-5 mr-2 text-purple-600" /> Space Required
                  </h3>
                  <p className="text-2xl font-bold">{spaceRequired} Sqft</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Cost Section */}
          <div className="mt-12 grid lg:grid-cols-3 gap-6 text-gray-900">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Price (Excl. Subsidy & GST)</h3>
                <p className="text-2xl font-bold">₹{basePrice.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Subsidy + Discount</h3>
                <p className="text-2xl font-bold">₹{subsidy.toLocaleString()} + ₹{discount.toLocaleString()}</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2 text-green-600">Final Project Cost</h3>
                <p className="text-2xl font-bold text-green-600">₹{projectCost.toLocaleString()}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
