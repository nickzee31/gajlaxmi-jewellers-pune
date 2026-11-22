import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Car, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Navigation,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FLAGSHIP_DETAILS, PUNE_TESTIMONIALS } from '../data/jewelryData';

export default function VisitPage() {
  const [activeFloor, setActiveFloor] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (11:00 AM - 1:00 PM)',
    serviceType: 'Royal Maharashtrian Bridal Trousseau (Kolhapuri Saaj / Thushi / Nath)',
  });

  const googleMapsUrl = "https://maps.google.com/?q=Shree+Gajlaxmi+Jewellers+Chandan+Nagar+Pune";

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
    <div className="py-10 sm:py-16 bg-[#fee7e1] text-[#516171] space-y-12 sm:space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Building2 className="w-3.5 h-3.5 mr-1" />
              Chandan Nagar Flagship Experience Center • 5,500 Sq. Ft.
            </span>
          </div>

          <h1 className="text-headline-lg sm:text-headline-display font-medium text-[#516171] leading-tight">
            Visit Our Flagship & Book VIP Suite
          </h1>

          <p className="text-body-lg text-[#516171] leading-relaxed">
            Located on Pune-Nagar Road at the Chandan Nagar / Kharadi bypass. Step inside our two-floor architectural jewellery palace designed for complete privacy and royal heritage.
          </p>
        </div>

        {/* 2-Column Grid: Left Booking Form, Right Showroom Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Full-Width Mobile-Optimized VIP Booking Form */}
          <div className="lg:col-span-7 bg-[#ffffff] border-2 border-[#f7c85f] rounded-[8px] p-6 sm:p-8 text-left shadow-xs">
            {!submitted ? (
              <div className="space-y-5">
                <div className="space-y-1.5 pb-3 border-b border-[#e5e7eb]">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-[#f1675d]" />
                    <h2 className="text-title-md sm:text-headline-sm font-medium text-[#516171]">
                      Reserve Your Private Consultation Suite
                    </h2>
                  </div>
                  <p className="text-body-sm text-[#516171]/80">
                    Complimentary 1-on-1 trousseau styling session with our senior gemologists and master karigars. Valet parking included.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-label-sm text-[#516171] font-medium block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Vaishali Patwardhan"
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
                      className="w-full ui-input font-mono"
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
                      <option>Old Gold Exchange & Free Karatmeter Purity Valuation</option>
                      <option>Bespoke Custom Jewellery Crafting</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-primary h-[48px] text-label-lg"
                    >
                      <CalendarCheck className="w-5 h-5 mr-2 text-[#f7c85f]" />
                      <span>Confirm VIP Suite Reservation</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-caption text-[#516171] pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#f1675d]" />
                    <span>Zero reservation fee • Instant WhatsApp confirmation • Free Valet</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
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
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Showroom Address & Timings */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 space-y-4 shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-label-sm text-[#f1675d] font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Showroom Location</span>
                </div>
                <h3 className="text-title-md font-medium text-[#516171]">
                  {FLAGSHIP_DETAILS.name}
                </h3>
                <p className="text-body-md text-[#516171] leading-relaxed">
                  {FLAGSHIP_DETAILS.address}
                </p>
                <p className="text-caption text-[#516171]/70">
                  Landmark: {FLAGSHIP_DETAILS.landmark}
                </p>
              </div>

              {/* Showroom Hours & Timings */}
              <div className="p-3 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] space-y-1 text-body-sm text-[#516171]">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-[#f1675d]" />
                  <span>Showroom Timings:</span>
                </div>
                <p className="pl-6 text-[#516171]/90">
                  {FLAGSHIP_DETAILS.timings} (Open Sunday)
                </p>
              </div>

              {/* Phone Contacts */}
              <div className="space-y-1.5 pt-1 text-body-sm">
                <div className="text-caption text-[#516171]/70 font-medium">
                  Direct Showroom Helpline
                </div>
                <div className="flex flex-wrap gap-2">
                  {FLAGSHIP_DETAILS.phoneNumbers.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="px-3 py-1.5 rounded-[4px] bg-[#fee7e1] border border-[#e5e7eb] text-[#516171] hover:border-[#f1675d] transition-colors flex items-center gap-2 text-body-sm font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#f1675d]" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Directions Button */}
              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary"
                >
                  <Navigation className="w-4 h-4 mr-2 text-[#fee7e1]" />
                  <span>Open in Google Maps / Directions</span>
                </a>
              </div>
            </div>

            {/* Valet Parking & Amenities */}
            <div className="p-4 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] flex items-center gap-3 text-body-sm text-[#516171]">
              <div className="w-9 h-9 rounded-full bg-[#fee7e1] flex items-center justify-center flex-shrink-0 text-[#f1675d]">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="font-medium block text-title-md">Complimentary Valet Parking</span>
                <span className="text-caption text-[#516171]/80">Drop your keys at our entrance on Pune-Nagar Road</span>
              </div>
            </div>
          </div>

        </div>

        {/* Showroom Floor Tour */}
        <div className="mt-12 bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8 text-left space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-headline-sm font-medium text-[#516171]">
                Explore the 5,500 Sq. Ft. Floors
              </h3>
              <p className="text-body-sm text-[#516171]/80">
                A dedicated sanctuary for bridal trousseau and diamond solitaires.
              </p>
            </div>

            <div className="flex gap-2">
              {FLAGSHIP_DETAILS.floors.map((floor, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFloor(idx)}
                  className={`px-4 py-2 rounded-[4px] text-label-md font-medium border cursor-pointer transition-colors ${
                    activeFloor === idx
                      ? 'bg-[#516171] text-[#fee7e1] border-[#516171]'
                      : 'bg-[#ffffff] text-[#516171] border-[#e5e7eb] hover:bg-[#fee7e1]/60'
                  }`}
                >
                  Floor 0{idx}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] space-y-3">
            <h4 className="text-title-md font-medium text-[#516171]">
              {FLAGSHIP_DETAILS.floors[activeFloor].title}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {FLAGSHIP_DETAILS.floors[activeFloor].features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-[4px] bg-[#ffffff] border border-[#e5e7eb] text-body-sm text-[#516171] flex items-start gap-2.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#f1675d] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
