import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import service pages
import RooftopSolar from "./pages/services/RooftopSolar";
import SolarCCTV from "./pages/services/SolarCCTV";
import SolarFencing from "./pages/services/SolarFencing";
import SolarInverters from "./pages/services/SolarInverters";
import SolarStreetLights from "./pages/services/SolarStreetLights";
import SolarWaterHeaters from "./pages/services/SolarWaterHeaters";
import SolarWaterPumping from "./pages/services/SolarWaterPumping";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Routes */}
          <Route path="/services/RooftopSolar" element={<RooftopSolar />} />
          <Route path="/services/SolarCCTV" element={<SolarCCTV />} />
          <Route path="/services/SolarFencing" element={<SolarFencing />} />
          <Route path="/services/SolarInverters" element={<SolarInverters />} />
          <Route path="/services/SolarStreetLights" element={<SolarStreetLights />} />
          <Route path="/services/SolarWaterHeaters" element={<SolarWaterHeaters />} />
          <Route path="/services/SolarWaterPumping" element={<SolarWaterPumping />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
