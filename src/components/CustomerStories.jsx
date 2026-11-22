import React from 'react';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { PUNE_TESTIMONIALS } from '../data/jewelryData';

export default function CustomerStories() {
  return (
    <section className="py-16 sm:py-24 bg-[#fee7e1] border-t border-[#e5e7eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Quote className="w-3.5 h-3.5 mr-1" />
              Voices of Pune Families • पुणेकरांचा विश्वास
            </span>
          </div>

          <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
            Cherished Across Generations
          </h2>

          <p className="text-body-lg text-[#516171] leading-relaxed">
            Read authentic experiences from brides, grooms, and families who chose Gajlaxmi Jewellers for their most sacred celebrations.
          </p>
        </div>

        {/* Testimonials 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PUNE_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] hover:border-[#f1675d]/60 flex flex-col justify-between space-y-5 text-left transition-colors"
            >
              <div className="space-y-3">
                {/* 5 Stars in Gold */}
                <div className="flex items-center gap-1 text-[#f7c85f]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f7c85f]" />
                  ))}
                </div>

                <p className="text-body-md text-[#516171] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Locality */}
              <div className="pt-3 border-t border-[#e5e7eb] flex items-center justify-between">
                <div>
                  <h4 className="text-body-lg font-medium text-[#516171]">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-caption text-[#f1675d] mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{item.locality}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-caption font-medium text-[#d11b4d] block flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                  <span className="text-caption text-[#516171]/70 block">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
