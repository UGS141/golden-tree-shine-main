import { CheckCircle, Smartphone, Headphones, CreditCard, FileText } from "lucide-react";

// Import images directly from assets
import endToEnd from "@/assets/hero-solar.jpg"; 
import freyrApp from "@/assets/hero-solar-home.jpg";
import support from "@/assets/security-system.jpg";
import emi from "@/assets/rooftop-solar.jpg";
import projectReport from "@/assets/solar-inverter.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      image: endToEnd,
      title: "End-to-End Solutions",
      icon: <CheckCircle className="h-5 w-5 text-white" />,
    },
    {
      image: freyrApp,
      title: "Freyr Energy App",
      icon: <Smartphone className="h-5 w-5 text-white" />,
    },
    {
      image: support,
      title: "24x7 Support",
      icon: <Headphones className="h-5 w-5 text-white" />,
    },
    {
      image: emi,
      title: "EMIs starting from ₹1,466",
      icon: <CreditCard className="h-5 w-5 text-white" />,
    },
    {
      image: projectReport,
      title: "Design / Detailed Project Report",
      icon: <FileText className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                {feature.icon}
                <span className="font-semibold">{feature.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
