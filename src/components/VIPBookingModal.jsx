import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VIPBookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (11:00 AM - 1:00 PM)',
    serviceType: 'Royal Bridal Trousseau Consultation',
    suitePreference: 'First Floor Private Bridal Sanctuary',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f1675d', '#f7c85f', '#516171', '#d11b4d'],
      });
    } catch (err) {}

    setTimeout(() => {
      const text = `VIP Appointment Request - Gajlaxmi Jewellers Pune%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Date: ${formData.date}%0A- Time Slot: ${formData.timeSlot}%0A- Service: ${formData.serviceType}`;
      window.open(`https://wa.me/917796787878?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8 shadow-md overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-[4px] bg-[#fee7e1] text-[#516171] hover:bg-[#fed6cc] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-left space-y-2 mb-6">
              <div className="inline-flex">
                <span className="ui-chip bg-[#fee7e1] text-[#f1675d] text-label-sm font-medium">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Chandan Nagar Flagship Experience
                </span>
              </div>
              <h3 className="text-headline-sm font-medium text-[#516171]">
                Reserve VIP Consultation Suite
              </h3>
              <p className="text-body-md text-[#516171]">
                Enjoy a private 1-on-1 trousseau styling session with our senior gemologists and master karigars. Complimentary valet parking included.
              </p>
            </div>

            {/* Booking Form with Design Tokens */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="text-label-sm text-[#516171] font-medium block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Deshmukh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full ui-input"
                />
              </div>

              <div>
                <label className="text-label-sm text-[#516171] font-medium block mb-1">
                  WhatsApp Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full ui-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-label-sm text-[#516171] font-medium block mb-1">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full ui-input text-body-sm"
                  />
                </div>

                <div>
                  <label className="text-label-sm text-[#516171] font-medium block mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full ui-input text-body-sm"
                  >
                    <option>Morning (11:00 AM - 1:00 PM)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM)</option>
                    <option>Evening (5:30 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-label-sm text-[#516171] font-medium block mb-1">
                  Consultation Focus
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full ui-input text-body-sm"
                >
                  <option>Royal Maharashtrian Bridal Trousseau (Kolhapuri Saaj / Thushi / Nath)</option>
                  <option>Solitaire Diamond Engagement Ring & Fine Diamonds</option>
                  <option>Antique Temple Gold / Polki & Jadau Chokers</option>
                  <option>Old Gold Exchange & Karatmeter Purity Valuation</option>
                  <option>Bespoke Custom Jewellery Crafting</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Confirm VIP Suite Reservation
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-caption text-[#516171] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f1675d]" />
                <span>Zero reservation fee • Instant WhatsApp confirmation</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#fee7e1] text-[#f1675d] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-headline-sm font-medium text-[#516171]">
              VIP Suite Reserved, {formData.name}!
            </h3>

            <p className="text-body-md text-[#516171] max-w-sm mx-auto leading-relaxed">
              We have allocated the private bridal lounge for you on <strong>{formData.date || 'your selected date'}</strong> ({formData.timeSlot}) at our Kharadi showroom.
            </p>

            <div className="p-3.5 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] text-body-sm text-[#516171] text-left space-y-1">
              <div>📍 <strong>Address:</strong> Vedriti Commercial, Pune-Nagar Road, Chandan Nagar / Kharadi, Pune</div>
              <div>📞 <strong>Direct Showroom Line:</strong> +91 77967 87878</div>
              <div>🚗 <strong>Valet Parking:</strong> Enabled under your name</div>
            </div>

            <button
              onClick={onClose}
              className="btn-secondary"
            >
              Close & Return to Collections
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
