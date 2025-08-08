import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface FreeVisitFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FreeVisitForm({ open, onOpenChange }: FreeVisitFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    pincode: "",
    monthlyBill: "Less than ₹1500",
    type: "Residential"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Netlify
  };

  const handleTypeChange = (type: string) => {
    if (type === "Housing Society" || type === "Commercial") {
      toast({
        title: "Under Construction",
        description: `${type} booking is currently under development. Please try residential booking or contact us directly.`,
        variant: "default"
      });
      return;
    }
    setFormData(prev => ({ ...prev, type }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Schedule a FREE consultation
          </DialogTitle>
        </DialogHeader>
        <form name="free-visit" className="space-y-4" data-netlify="true">
          <input type="hidden" name="form-name" value="free-visit" />
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            <button
              type="button"
              className={`py-2 px-4 rounded ${formData.type === "Residential" ? "bg-primary text-white" : "bg-gray-100"}`}
              onClick={() => handleTypeChange("Residential")}
            >
              Residential
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${formData.type === "Housing Society" ? "bg-primary text-white" : "bg-gray-100"}`}
              onClick={() => handleTypeChange("Housing Society")}
            >
              Housing Society
            </button>
            <button
              type="button"
              className={`py-2 px-4 rounded ${formData.type === "Commercial" ? "bg-primary text-white" : "bg-gray-100"}`}
              onClick={() => handleTypeChange("Commercial")}
            >
              Commercial
            </button>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full p-2 border rounded"
              value={formData.fullName}
              onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">WhatsApp Number *</label>
            <input
              type="tel"
              name="whatsappNumber"
              required
              className="w-full p-2 border rounded"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData(prev => ({ ...prev, whatsappNumber: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Pin Code *</label>
            <input
              type="text"
              name="pincode"
              required
              className="w-full p-2 border rounded"
              value={formData.pincode}
              onChange={(e) => setFormData(prev => ({ ...prev, pincode: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">What is your average monthly bill? *</label>
            <select
              name="monthlyBill"
              required
              className="w-full p-2 border rounded"
              value={formData.monthlyBill}
              onChange={(e) => setFormData(prev => ({ ...prev, monthlyBill: e.target.value }))}
            >
              <option value="Less than ₹1500">Less than ₹1500</option>
              <option value="₹1500 - ₹2500">₹1500 - ₹2500</option>
              <option value="₹2500 - ₹4000">₹2500 - ₹4000</option>
              <option value="₹4000 - ₹8000">₹4000 - ₹8000</option>
              <option value="More than ₹8000">More than ₹8000</option>
            </select>
          </div>

          <Button type="submit" className="w-full">Submit Details</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}