import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle, 
  Layers
} from 'lucide-react';

export default function VirtualLookbook({ onOpenBooking }) {
  const [activeLook, setActiveLook] = useState('peshwai');

  const looks = [
    {
      id: 'peshwai',
      title: 'The Shrimant Peshwai Bride',
      attire: 'Traditional Nauvari Paithani Silk Saree',
      curatedNeckline: 'Deep Sweetheart / Traditional Boat Neck',
      image: 'https://images.unsplash.com/photo-1543290954-bc649dcab857?auto=format&fit=crop&w=1000&q=80',
      description: 'The definitive royal Pune bridal aesthetic: layering the iconic Kolhapuri Saaj with a snug Peshwai Thushi, crowned by the Puneri Chandrakor Nath and Gahu Tode.',
      ornaments: [
        { name: 'Kolhapuri Saaj (21 Charms)', spec: '22K Gold • 65g' },
        { name: 'Peshwai Royal Thushi Choker', spec: '22K Gold & Potta Ruby • 34g' },
        { name: 'Puneri Chandrakor Pearl Nath', spec: 'Basra Pearl & Ruby • 6.2g' },
        { name: 'Pichodi & Gahu Tode Kadas', spec: '22K Solid Gold • 54g' },
      ],
      palette: 'Royal Emerald Green & Burnished Antique Gold',
    },
    {
      id: 'rajwadi',
      title: 'The Imperial Rajwadi Sangeet',
      attire: 'Crimson Velvet Bridal Zardozi Lehenga',
      curatedNeckline: 'Broad Scoop / Royal Maharani Neckline',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80',
      description: 'Grand uncut Polki diamonds and Zambian emerald droplets set in antique 22K gold, catching the spotlight across royal wedding palace halls.',
      ornaments: [
        { name: 'Maharani Polki Choker with Emeralds', spec: '22K Jadau • 84g' },
        { name: 'Chandbali Cascading Jhumkas', spec: 'Natural Pearls • 32g' },
        { name: 'Haathphool Floral Hand Harness', spec: '18K Polki • 28g' },
        { name: 'Maang Tikka & Mathapatti', spec: '22K Gold • 22g' },
      ],
      palette: 'Imperial Crimson Red & Uncut Diamond Radiance',
    },
    {
      id: 'cocktail',
      title: 'The Contemporary Solitaire Gala',
      attire: 'Modern Metallic Champagne Cocktail Gown',
      curatedNeckline: 'Off-Shoulder / V-Plunge Architectural Neckline',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
      description: 'Minimalist high-carat diamond luxury. Pure, scintillating GIA & IGI certified diamonds that illuminate modern evening celebrations.',
      ornaments: [
        { name: 'Cascading Ethereal Diamond Choker', spec: '18K White Gold • 12.5 Ct' },
        { name: 'Classic Solitaire Engagement Ring', spec: '2.15 Ct IGI E-VVS1' },
        { name: 'Fluid Diamond Tennis Bracelet', spec: '3.40 Ct Diamonds' },
        { name: 'Solitaire Stud Drops', spec: '1.20 Ct Pair' },
      ],
      palette: 'Champagne Platinum & Liquid Light Scintillation',
    },
  ];

  const currentLook = looks.find(l => l.id === activeLook) || looks[0];

  return (
    <section id="lookbook" className="py-16 sm:py-24 bg-[#fee7e1] border-t border-[#e5e7eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Layers className="w-3.5 h-3.5 mr-1" />
              Curated Bridal Lookbook • नवरीचा शृंगार
            </span>
          </div>

          <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
            Styling Your Wedding Trousseau
          </h2>

          <p className="text-body-lg text-[#516171] leading-relaxed">
            Explore how our heirloom bridal jewellery coordinates with traditional Paithani silks, royal lehengas, and contemporary reception ensembles.
          </p>
        </div>

        {/* Lookbook Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-[6px] bg-[#ffffff] border border-[#e5e7eb] gap-1">
            {looks.map((look) => (
              <button
                key={look.id}
                onClick={() => setActiveLook(look.id)}
                className={`px-4 sm:px-5 py-2 rounded-[4px] text-label-md font-medium transition-all cursor-pointer ${
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
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="ui-chip bg-[#ffffff] text-[#516171] border border-[#e5e7eb] text-caption font-medium">
                    Look #{currentLook.id.toUpperCase()}
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-3 p-3 rounded-[6px] bg-[#ffffff]/95 border border-[#e5e7eb] text-body-sm text-[#516171]">
                  <span className="text-[#f1675d] font-medium block text-caption">Complementary Palette</span>
                  {currentLook.palette}
                </div>
              </div>
            </div>

            {/* Styling Notes & Stack Breakdown */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-1.5">
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

              {/* Private Suite Booking */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                >
                  Book Bridal Suite Try-On
                </button>

                <div className="text-body-sm text-[#516171] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#f1675d]" />
                  <span>Bring your wedding outfit to our Kharadi VIP suite for custom drape matching</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
