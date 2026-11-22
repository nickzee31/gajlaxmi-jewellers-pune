import React from 'react';
import { 
  ShieldCheck, 
  Gem, 
  Activity, 
  ReceiptText, 
  RefreshCw, 
  Award
} from 'lucide-react';
import { TRUST_PILLARS } from '../data/jewelryData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Gem: Gem,
  Activity: Activity,
  ReceiptText: ReceiptText,
  RefreshCw: RefreshCw,
};

export default function TrustBadges() {
  return (
    <section className="py-16 sm:py-24 bg-[#fee7e1] border-t border-[#e5e7eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Award className="w-3.5 h-3.5 mr-1" />
              The 5 Gajlaxmi Guarantees • विश्वासाची ३० वर्षे
            </span>
          </div>

          <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
            Built on Uncompromising Purity
          </h2>

          <p className="text-body-lg text-[#516171] leading-relaxed">
            Founded through the union of Shree Laxmi Jewellers and Giriraj Jewellers. Three decades of unblemished family trust in Pune.
          </p>
        </div>

        {/* 5 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-5 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] hover:border-[#f1675d] transition-colors flex flex-col justify-between text-left"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-[6px] bg-[#fee7e1] border border-[#f1675d]/30 flex items-center justify-center text-[#f1675d]">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-title-md font-medium text-[#516171] leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-body-sm text-[#516171]/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e5e7eb] flex items-center justify-between text-caption text-[#516171]/70 font-medium">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-[#d11b4d]">Certified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
