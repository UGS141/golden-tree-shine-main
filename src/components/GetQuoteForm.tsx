import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GetQuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetQuoteForm({ open, onOpenChange }: GetQuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    serviceType: "",
    monthlyBill: "",
    interestedInFinance: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Netlify
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Connect With Us To Go Solar
          </DialogTitle>
        </DialogHeader>
        <form name="get-quote" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="form-name" value="get-quote" />
          
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
            <label className="block text-sm font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full p-2 border rounded"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Select Your State *</label>
            <select
              name="state"
              required
              className="w-full p-2 border rounded"
              value={formData.state}
              onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
            >
              <option value="">Select Your State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Karnataka">Karnataka</option>
              {/* Add more states as needed */}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Solar For Home/Commercial? *</label>
            <select
              name="serviceType"
              required
              className="w-full p-2 border rounded"
              value={formData.serviceType}
              onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
            >
              <option value="">Select</option>
              <option value="Home">Home</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Select Monthly Average Electricity Bill *</label>
            <select
              name="monthlyBill"
              required
              className="w-full p-2 border rounded"
              value={formData.monthlyBill}
              onChange={(e) => setFormData(prev => ({ ...prev, monthlyBill: e.target.value }))}
            >
              <option value="">Select</option>
              <option value="Less than ₹1500">Less than ₹1500</option>
              <option value="₹1500 - ₹2500">₹1500 - ₹2500</option>
              <option value="₹2500 - ₹4000">₹2500 - ₹4000</option>
              <option value="₹4000 - ₹8000">₹4000 - ₹8000</option>
              <option value="More than ₹8000">More than ₹8000</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Interested in Finance? *</label>
            <select
              name="interestedInFinance"
              required
              className="w-full p-2 border rounded"
              value={formData.interestedInFinance}
              onChange={(e) => setFormData(prev => ({ ...prev, interestedInFinance: e.target.value }))}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <Button type="submit" className="w-full bg-[#8DC63F] hover:bg-[#7AB62F]">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}