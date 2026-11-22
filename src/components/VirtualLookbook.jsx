import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Layers,
  Sparkles
} from 'lucide-react';
import { LOOKBOOK_LOOKS } from '../data/jewelryData';

export default function VirtualLookbook({ onOpenBooking }) {
  const [activeLook, setActiveLook] = useState('peshwai');

  const currentLook = LOOKBOOK_LOOKS.find(l => l.id === activeLook) || LOOKBOOK_LOOKS[0];

  return (
    <section id="lookbook" className="py-12 sm:py-16 bg-[#fee7e1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Layers className="w-3.5 h-3.5 mr-1" />
              Curated Bridal Lookbook • नवरीचा शृंगार
            </span>
          </div>

          <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
            Styling Your Wedding Trousseau
          </h2>

          <p className="text-body-md text-[#516171] leading-relaxed">
            Explore how our heirloom bridal jewellery coordinates with traditional Paithani silks, royal lehengas, and contemporary reception ensembles.
          </p>
        </div>

        {/* Lookbook Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-[6px] bg-[#ffffff] border border-[#e5e7eb] gap-1">
            {LOOKBOOK_LOOKS.map((look) => (
              <button
                key={look.id}
                onClick={() => setActiveLook(look.id)}
                className={`px-3 sm:px-5 py-2 rounded-[4px] text-label-md font-medium transition-all cursor-pointer ${
                  activeLook === look.id
                    ? 'bg-[#516171] text-[#fee7e1]'
                    : 'text-[#516171] hover:bg-[#fee7e1]/50'
                }`}
              >
                {look.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Display Grid */}
        <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Photo */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] rounded-[8px] overflow-hidden border border-[#e5e7eb] bg-[#fee7e1] relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentLook.id}
                    src={currentLook.image}
                    alt={currentLook.title}
                    onError={(e) => {
                      e.currentTarget.src = './images/hero-bridal.jpg';
                    }}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="ui-chip bg-[#ffffff] text-[#516171] border border-[#e5e7eb] text-caption font-medium">
                    Look #{currentLook.id.toUpperCase()}
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-[6px] bg-[#ffffff]/95 border border-[#e5e7eb] text-body-sm text-[#516171]">
                  <span className="text-[#f1675d] font-medium block text-caption">Complementary Palette</span>
                  {currentLook.palette}
                </div>
              </div>
            </div>

            {/* Styling Notes & Stack Breakdown */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-label-sm text-[#f1675d] font-medium block">
                  Attire: {currentLook.attire}
                </span>

                <h3 className="text-headline-md font-medium text-[#516171]">
                  {currentLook.title}
                </h3>

                <p className="text-body-md text-[#516171] font-medium">
                  Ideal Neckline: <span className="text-[#d11b4d]">{currentLook.curatedNeckline}</span>
                </p>

                <p className="text-body-md text-[#516171] leading-relaxed">
                  {currentLook.description}
                </p>
              </div>

              {/* Stacked Jewellery Pieces in this Look */}
              <div className="space-y-2">
                <h5 className="text-label-sm font-medium text-[#516171]">
                  Curated Jewellery Ensemble:
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentLook.ornaments.map((ornament, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-[#f1675d] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-body-sm font-medium text-[#516171]">
                          {ornament.name}
                        </div>
                        <div className="text-caption text-[#516171]/70 mt-0.5">
                          {ornament.spec}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                >
                  Book Bridal Suite Try-On
                </button>

                <div className="text-body-sm text-[#516171] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#f1675d]" />
                  <span>Bring your wedding outfit to our Kharadi VIP suite for drape matching</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
