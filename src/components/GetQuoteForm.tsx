"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";

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

  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Thank you! Your request has been submitted successfully.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          state: "",
          serviceType: "",
          monthlyBill: "",
          interestedInFinance: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to submit. Please try again later.");
    }
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[90vh] sm:h-auto overflow-hidden flex flex-col p-0">
        {/* Fixed Header */}
        <DialogHeader className="sticky top-0 z-50 bg-white px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Get Your Free Quote
            </DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Fill in your details and we'll get back to you within 24 hours
          </p>
        </DialogHeader>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <form
            name="get-quote"
            className="space-y-6"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="get-quote" />

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full p-3 border rounded-lg"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full p-3 border rounded-lg"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Your State *
                </label>
                <select
                  name="state"
                  required
                  className="w-full p-3 border rounded-lg bg-white"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, state: e.target.value }))
                  }
                >
                  <option value="">Select Your State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Solar For Home/Commercial? *
                </label>
                <select
                  name="serviceType"
                  required
                  className="w-full p-3 border rounded-lg bg-white"
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      serviceType: e.target.value,
                    }))
                  }
                >
                  <option value="">Select</option>
                  <option value="Home">Home</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Monthly Average Electricity Bill *
                </label>
                <select
                  name="monthlyBill"
                  required
                  className="w-full p-3 border rounded-lg bg-white"
                  value={formData.monthlyBill}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      monthlyBill: e.target.value,
                    }))
                  }
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
                <label className="block text-sm font-medium text-gray-700">
                  Interested in Finance? *
                </label>
                <select
                  name="interestedInFinance"
                  required
                  className="w-full p-3 border rounded-lg bg-white"
                  value={formData.interestedInFinance}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      interestedInFinance: e.target.value,
                    }))
                  }
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Fixed Footer */}
        <div className="sticky bottom-0 border-t bg-white px-6 py-4">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-medium rounded-lg transition-all"
            onClick={handleSubmit}
          >
            Get Your Free Quote
          </Button>
          {status && (
            <p className="text-sm text-center mt-2">{status}</p>
          )}
          <p className="text-xs text-center text-muted-foreground mt-3">
            By submitting this form, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```
