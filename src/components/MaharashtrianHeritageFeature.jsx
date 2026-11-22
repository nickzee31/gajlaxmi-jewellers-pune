import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Crown, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';
import { MAHARASHTRIAN_HEIRLOOMS } from '../data/jewelryData';

export default function MaharashtrianHeritageFeature({ onSelectHeirloom, onAddToWishlist, onOpenBooking }) {
  const [selectedId, setSelectedId] = useState(MAHARASHTRIAN_HEIRLOOMS[0].id);
  const activeItem = MAHARASHTRIAN_HEIRLOOMS.find(item => item.id === selectedId) || MAHARASHTRIAN_HEIRLOOMS[0];

  return (
    <section id="heritage" className="py-16 sm:py-24 bg-[#fee7e1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Crown className="w-3.5 h-3.5 mr-1" />
              The Pride of Maharashtra • मराठमोळा साज
            </span>
          </div>

          <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
            Sacred Heirlooms of the Peshwai Legacy
          </h2>

          <p className="text-body-lg text-[#516171] leading-relaxed">
            Honoring Pune’s royal heritage through masterfully cast 22K gold ornaments. Each piece is traditionally blessed, HUID hallmarked, and handcrafted by generational Maharashtrian karigars.
          </p>
        </div>

        {/* 4 Interactive Heirloom Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {MAHARASHTRIAN_HEIRLOOMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`p-4 rounded-[8px] text-left transition-all border cursor-pointer ${
                selectedId === item.id
                  ? 'bg-[#ffffff] border-[#f1675d] shadow-xs'
                  : 'bg-[#ffffff]/70 border-[#e5e7eb] hover:bg-[#ffffff]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-label-sm font-medium ${
                  selectedId === item.id ? 'text-[#f1675d]' : 'text-[#516171]/70'
                }`}>
                  {item.purity}
                </span>
                <span className="text-body-sm font-medium text-[#d11b4d]">
                  {item.marathiName}
                </span>
              </div>
              <div className={`text-title-md font-medium ${
                selectedId === item.id ? 'text-[#516171]' : 'text-[#516171]/80'
              }`}>
                {item.name}
              </div>
            </button>
          ))}
        </div>

        {/* Active Heirloom Detailed Display Card */}
        <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Photo Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[8px] overflow-hidden border border-[#e5e7eb] bg-[#fee7e1]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeItem.id}
                    src={activeItem.image}
                    alt={activeItem.name}
                    onError={(e) => {
                      e.currentTarget.src = './images/hero-bridal.jpg';
                    }}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
                
                {/* Hallmark Stamp */}
                <div className="absolute top-3 left-3">
                  <span className="ui-chip bg-[#ffffff] text-[#516171] border border-[#e5e7eb] text-caption font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f1675d]" />
                    BIS 916 Pure Gold
                  </span>
                </div>

                {/* Marathi Script Emblem */}
                <div className="absolute bottom-3 right-3 bg-[#ffffff] px-3 py-1 rounded-[4px] border border-[#e5e7eb] text-body-sm font-medium text-[#d11b4d]">
                  {activeItem.marathiName}
                </div>
              </div>
            </div>

            {/* Cultural Storytelling & Specs */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-label-sm text-[#f1675d] font-medium">
                  <span>Maharashtrian Bridal Sanctum</span>
                  <span>•</span>
                  <span>{activeItem.significance}</span>
                </div>

                <h3 className="text-headline-md font-medium text-[#516171]">
                  {activeItem.name}
                </h3>

                <p className="text-body-md text-[#516171] leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Symbolism & Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
                <div className="p-3.5 rounded-[8px] bg-[#fee7e1] border border-[#e5e7eb]">
                  <span className="text-caption text-[#516171]/80 block mb-0.5">
                    Sacred Symbolism
                  </span>
                  <p className="text-body-sm font-medium text-[#516171]">
                    {activeItem.symbolism}
                  </p>
                </div>

                <div className="p-3.5 rounded-[8px] bg-[#fee7e1] border border-[#e5e7eb]">
                  <span className="text-caption text-[#516171]/80 block mb-0.5">
                    Traditional Weight Range
                  </span>
                  <p className="text-body-sm font-medium text-[#d11b4d]">
                    {activeItem.typicalWeight} (Customizable)
                  </p>
                </div>
              </div>

              {/* Gajlaxmi Karigari Guarantee */}
              <div className="p-3.5 rounded-[8px] bg-[#fee7e1]/60 border border-[#f7c85f] space-y-1">
                <div className="text-label-sm font-medium text-[#516171] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#f1675d]" />
                  <span>The Gajlaxmi Karigari Guarantee</span>
                </div>
                <p className="text-body-sm text-[#516171] leading-relaxed">
                  Available in our Kharadi showroom’s private bridal lounge. You can inspect the hallmark with our certified loupes and observe real-time Karatmeter testing before taking your bridal trousseau home.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                >
                  <span>Book Bridal Consultation</span>
                </button>

                <button
                  onClick={() => onAddToWishlist(activeItem)}
                  className="btn-secondary"
                >
                  <Heart className="w-4 h-4 mr-2 text-[#f1675d]" />
                  <span>Save to Bridal Wishlist</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
