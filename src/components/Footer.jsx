import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ShieldCheck
} from 'lucide-react';
import { FLAGSHIP_DETAILS } from '../data/jewelryData';

export default function Footer({ onOpenBooking, onOpenCalculator }) {
  return (
    <footer className="bg-[#ffffff] text-[#516171] border-t border-[#e5e7eb] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#e5e7eb]">
          
          {/* Col 1: Brand & Legacy */}
          <div className="lg:col-span-5 space-y-3.5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[8px] bg-[#fee7e1] border border-[#f7c85f] flex items-center justify-center flex-shrink-0">
                <span className="text-headline-sm font-semibold text-[#f1675d]">
                  ग
                </span>
              </div>
              <div>
                <span className="text-title-md font-medium text-[#516171] block">
                  Gajlaxmi Jewellers
                </span>
                <span className="text-caption text-[#f1675d] font-medium uppercase">
                  PUNE • 30+ YEARS OF HERITAGE
                </span>
              </div>
            </div>

            <p className="text-body-md text-[#516171] leading-relaxed max-w-sm">
              Formed through the enduring union of <strong>Shree Laxmi Jewellers</strong> and <strong>Giriraj Jewellers</strong>, carrying over 30 years of family trust across Pune. Spanning 5,500 sq.ft of celebratory retail at Pune-Nagar Road, Chandan Nagar / Kharadi.
            </p>

            <div className="flex items-center gap-2 text-body-sm text-[#516171] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#f1675d]" />
              <span>100% BIS Hallmarked (HUID) & IGI Solitaires</span>
            </div>
          </div>

          {/* Col 2: Showroom Location & Timings */}
          <div className="lg:col-span-4 space-y-2.5 text-left">
            <h4 className="text-label-md font-medium text-[#516171] uppercase tracking-wider">
              Pune Flagship Showroom
            </h4>

            <div className="text-body-sm space-y-2 text-[#516171]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f1675d] flex-shrink-0 mt-0.5" />
                <span>{FLAGSHIP_DETAILS.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#f1675d] flex-shrink-0" />
                <span>Open All 7 Days: 10:30 AM – 8:30 PM</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f1675d] flex-shrink-0" />
                <span>+91 77967 87878 / +91 77699 81010</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f1675d] flex-shrink-0" />
                <span>{FLAGSHIP_DETAILS.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Client Concierge Links */}
          <div className="lg:col-span-3 space-y-2.5 text-left">
            <h4 className="text-label-md font-medium text-[#516171] uppercase tracking-wider">
              Client Concierge
            </h4>

            <ul className="text-body-sm space-y-2">
              <li>
                <a href="#bridal" className="btn-link">
                  Maharashtrian Bridal Sanctum
                </a>
              </li>
              <li>
                <a href="#collections" className="btn-link">
                  Solitaire Diamond Lounge
                </a>
              </li>
              <li>
                <a href="#bullion" className="btn-link">
                  Pune Live Bullion Rates
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenCalculator} 
                  className="btn-link"
                >
                  Transparency Price Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenBooking} 
                  className="btn-link"
                >
                  Book Private Bridal Suite
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-caption text-[#516171]/80">
          <div>
            © {new Date().getFullYear()} Shree Gajlaxmi Jewellers Private Limited. All Rights Reserved. Pune, Maharashtra.
          </div>

          <div className="flex items-center gap-3">
            <span>BIS Hallmarking Reg: 916 HUID</span>
            <span>•</span>
            <span>Natural Certified Diamonds</span>
            <span>•</span>
            <span>Zero Wastage Transparency</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
