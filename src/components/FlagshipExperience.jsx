import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Car, 
  Sparkles, 
  Building2, 
  Navigation
} from 'lucide-react';
import { FLAGSHIP_DETAILS } from '../data/jewelryData';

export default function FlagshipExperience({ onOpenBooking }) {
  const [activeFloor, setActiveFloor] = useState(0);

  const googleMapsUrl = "https://maps.google.com/?q=Shree+Gajlaxmi+Jewellers+Chandan+Nagar+Pune";

  return (
    <section id="flagship" className="py-16 sm:py-24 bg-[#fee7e1] border-t border-[#e5e7eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Building2 className="w-3.5 h-3.5 mr-1" />
              Flagship Experience Center • 5,500 Sq. Ft.
            </span>
          </div>

          <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
            Pune’s Grandest Jewellery Destination
          </h2>

          <p className="text-body-lg text-[#516171] leading-relaxed">
            Located strategically on Pune-Nagar Road at Chandan Nagar / Kharadi bypass. Step inside our two-floor architectural palace designed for privacy, royal heritage, and effortless elegance.
          </p>
        </div>

        {/* Showroom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Left: Floor Selector & Amenities */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8 space-y-6 flex flex-col justify-between text-left">
            <div>
              {/* Floor Tabs */}
              <div className="flex gap-3 mb-6">
                {FLAGSHIP_DETAILS.floors.map((floor, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFloor(idx)}
                    className={`flex-1 p-3.5 rounded-[4px] border text-left transition-all cursor-pointer ${
                      activeFloor === idx
                        ? 'bg-[#fee7e1] border-[#f1675d] text-[#516171]'
                        : 'bg-[#ffffff] border-[#e5e7eb] text-[#516171] hover:bg-[#fee7e1]/50'
                    }`}
                  >
                    <span className="text-label-sm font-medium text-[#f1675d] block">
                      Floor 0{idx}
                    </span>
                    <span className="text-body-sm font-medium mt-0.5 block truncate text-[#516171]">
                      {floor.level}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Floor Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f1675d]"></span>
                  <h3 className="text-headline-sm font-medium text-[#516171]">
                    {FLAGSHIP_DETAILS.floors[activeFloor].title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {FLAGSHIP_DETAILS.floors[activeFloor].features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] text-body-sm text-[#516171] flex items-start gap-2.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#f1675d] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Valet & Hospitality Perks */}
            <div className="pt-6 border-t border-[#e5e7eb] flex flex-wrap items-center justify-between gap-4 text-body-sm text-[#516171]">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#f1675d]" />
                <span>Complimentary Valet Parking & Refreshment Lounge</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="btn-secondary"
              >
                Reserve Consultation
              </button>
            </div>
          </div>

          {/* Right: Address & Contact Card */}
          <div className="lg:col-span-5 bg-[#ffffff] border-2 border-[#f7c85f] rounded-[8px] p-6 sm:p-8 flex flex-col justify-between space-y-5 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-label-sm text-[#f1675d] font-medium">
                <MapPin className="w-4 h-4" />
                <span>Visit Us in Pune</span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-title-md font-medium text-[#516171]">
                  {FLAGSHIP_DETAILS.name}
                </h4>
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
            </div>

            {/* Direction Button: button-primary */}
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

        </div>

      </div>
    </section>
  );
}
