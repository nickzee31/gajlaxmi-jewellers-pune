import React, { useState } from 'react';
import { 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare
} from 'lucide-react';
import { LIVE_RATES } from '../data/jewelryData';

export default function GoldRateCalculator({ onOpenBooking }) {
  const [purity, setPurity] = useState('22k'); // '24k', '22k', '18k'
  const [weight, setWeight] = useState(25); // grams
  const [craftTier, setCraftTier] = useState('heritage'); // 'heritage', 'temple', 'daily', 'coin'

  const getGoldRatePerGram = () => {
    if (purity === '24k') return LIVE_RATES.gold24k / 10;
    if (purity === '22k') return LIVE_RATES.gold22k / 10;
    if (purity === '18k') return LIVE_RATES.gold18k / 10;
    return LIVE_RATES.gold22k / 10;
  };

  const getMakingRatePercent = () => {
    switch (craftTier) {
      case 'heritage': return 0.16; // 16% for intricate Peshwai/Jadau
      case 'temple': return 0.13; // 13% for antique nakshi work
      case 'daily': return 0.09; // 9% for modern laser/die casting
      case 'coin': return 0.03; // 3% for bullion coins
      default: return 0.13;
    }
  };

  const baseGoldValue = Math.round(getGoldRatePerGram() * weight);
  const makingCharges = Math.round(baseGoldValue * getMakingRatePercent());
  const subtotal = baseGoldValue + makingCharges;
  const gst = Math.round(subtotal * 0.03); // 3% GST on jewellery
  const grandTotal = subtotal + gst;

  const presets = [5, 10, 20, 35, 50, 75, 100];

  const handleWhatsAppQuote = () => {
    const text = `Hello Gajlaxmi Jewellers Pune, I calculated an estimate on your website:%0A- Purity: ${purity.toUpperCase()}%0A- Weight: ${weight} grams%0A- Karigari: ${craftTier}%0A- Estimated Net Total: ₹${grandTotal.toLocaleString('en-IN')}%0AI would like to lock this rate / visit the Kharadi showroom.`;
    window.open(`https://wa.me/917796787878?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#fee7e1] border-t border-[#e5e7eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex">
            <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
              <Calculator className="w-3.5 h-3.5 mr-1" />
              100% Billing Transparency • करमुक्त व शुद्ध भाव
            </span>
          </div>

          <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
            Karatmeter & Fair Price Estimator
          </h2>

          <p className="text-body-lg text-[#516171] leading-relaxed">
            No hidden wastage deductions. Calculate the authentic Pune market value of your custom gold jewellery instantly.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 sm:p-8 space-y-6 text-left">
            
            {/* Step 1: Purity Selection */}
            <div>
              <label className="text-label-sm text-[#516171] font-medium block mb-2">
                1. Select Gold Purity
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPurity('22k')}
                  className={`p-3 rounded-[4px] border text-left transition-all cursor-pointer ${
                    purity === '22k'
                      ? 'bg-[#fee7e1] border-[#f1675d] text-[#516171]'
                      : 'bg-[#ffffff] border-[#e5e7eb] text-[#516171] hover:bg-[#fee7e1]/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-label-md font-medium text-[#d11b4d]">
                    <span>22K BIS 916</span>
                    {purity === '22k' && <CheckCircle2 className="w-4 h-4 text-[#f1675d]" />}
                  </div>
                  <div className="text-body-sm text-[#516171] font-medium mt-0.5">Bridal Gold</div>
                  <div className="text-caption text-[#516171]/70">91.6% Pure Gold</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPurity('18k')}
                  className={`p-3 rounded-[4px] border text-left transition-all cursor-pointer ${
                    purity === '18k'
                      ? 'bg-[#fee7e1] border-[#f1675d] text-[#516171]'
                      : 'bg-[#ffffff] border-[#e5e7eb] text-[#516171] hover:bg-[#fee7e1]/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-label-md font-medium text-[#516171]">
                    <span>18K BIS 750</span>
                    {purity === '18k' && <CheckCircle2 className="w-4 h-4 text-[#f1675d]" />}
                  </div>
                  <div className="text-body-sm text-[#516171] font-medium mt-0.5">Diamond Wear</div>
                  <div className="text-caption text-[#516171]/70">75.0% Pure Gold</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPurity('24k')}
                  className={`p-3 rounded-[4px] border text-left transition-all cursor-pointer ${
                    purity === '24k'
                      ? 'bg-[#fee7e1] border-[#f1675d] text-[#516171]'
                      : 'bg-[#ffffff] border-[#e5e7eb] text-[#516171] hover:bg-[#fee7e1]/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-label-md font-medium text-[#516171]">
                    <span>24K Pure</span>
                    {purity === '24k' && <CheckCircle2 className="w-4 h-4 text-[#f1675d]" />}
                  </div>
                  <div className="text-body-sm text-[#516171] font-medium mt-0.5">Bullion / Coin</div>
                  <div className="text-caption text-[#516171]/70">99.9% Pure Bar</div>
                </button>
              </div>
            </div>

            {/* Step 2: Weight Slider & Gram Presets */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-label-sm text-[#516171] font-medium">
                  2. Approximate Weight (Grams)
                </label>
                <div className="text-headline-sm font-medium text-[#d11b4d]">
                  {weight} grams
                </div>
              </div>

              <input
                type="range"
                min="2"
                max="120"
                step="1"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-[#fee7e1] rounded-lg appearance-none cursor-pointer accent-[#f1675d]"
              />

              {/* Presets */}
              <div className="flex flex-wrap gap-2 mt-3">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => setWeight(p)}
                    className={`px-3 py-1 rounded-[4px] text-body-sm transition-colors cursor-pointer ${
                      weight === p
                        ? 'bg-[#516171] text-[#fee7e1] font-medium'
                        : 'bg-[#fee7e1] text-[#516171] border border-[#e5e7eb] hover:bg-[#fed9d0]'
                    }`}
                  >
                    {p}g
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Karigari Craft Tier */}
            <div>
              <label className="text-label-sm text-[#516171] font-medium block mb-2">
                3. Karigari & Craftsmanship Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'heritage', name: 'Peshwai Bridal', rate: '16%' },
                  { id: 'temple', name: 'Antique Temple', rate: '13%' },
                  { id: 'daily', name: 'Modern Daily', rate: '9%' },
                  { id: 'coin', name: 'Bullion Coin', rate: '3%' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setCraftTier(tier.id)}
                    className={`p-3 rounded-[4px] border text-center transition-all cursor-pointer ${
                      craftTier === tier.id
                        ? 'bg-[#fee7e1] border-[#f1675d] text-[#516171]'
                        : 'bg-[#ffffff] border-[#e5e7eb] text-[#516171] hover:bg-[#fee7e1]/50'
                    }`}
                  >
                    <div className="text-body-sm font-medium">{tier.name}</div>
                    <div className="text-caption font-medium text-[#d11b4d] mt-0.5">{tier.rate} Making</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Breakdown & Net Summary Right Column */}
          <div className="lg:col-span-5 bg-[#ffffff] border-2 border-[#f7c85f] rounded-[8px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e7eb]">
                <h4 className="text-title-md font-medium text-[#516171]">
                  Transparent Net Estimate
                </h4>
                <span className="ui-chip text-caption bg-[#fee7e1] text-[#516171]">
                  Pune Live Rate
                </span>
              </div>

              {/* Itemized Calculation */}
              <div className="space-y-2.5 text-body-md text-[#516171]">
                <div className="flex items-center justify-between">
                  <span>Gold Value ({weight}g @ ₹{Math.round(getGoldRatePerGram()).toLocaleString('en-IN')}/g):</span>
                  <span className="font-medium text-[#516171]">₹{baseGoldValue.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Craftsmanship / Making Charges:</span>
                  <span className="font-medium text-[#516171]">₹{makingCharges.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Statutory GST (3% on Gold):</span>
                  <span className="font-medium text-[#516171]">₹{gst.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Grand Total Box */}
              <div className="p-4 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] text-center space-y-1">
                <span className="text-caption text-[#516171] uppercase tracking-wider font-medium">
                  Total Estimated Value (All-Inclusive)
                </span>
                <div className="text-headline-lg font-medium text-[#d11b4d]">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </div>
                <div className="text-caption text-[#516171]/80">
                  Based on Pune live rates • Zero hidden deductions
                </div>
              </div>

              {/* Karatmeter Guarantee Notice */}
              <div className="flex items-start gap-2.5 p-3 rounded-[6px] bg-[#fee7e1]/50 border border-[#e5e7eb] text-body-sm text-[#516171]">
                <ShieldCheck className="w-4 h-4 text-[#f1675d] flex-shrink-0 mt-0.5" />
                <p>
                  Old Gold Exchange: Bring your old gold to our Kharadi showroom for a free 45-second Karatmeter purity test. Receive 100% current market rate with zero melting fee.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 space-y-3">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full btn-secondary"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-[#516171]" />
                <span>Save Quote on WhatsApp</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full btn-primary"
              >
                <span>Lock Rate at Showroom</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
