import React, { useState } from 'react';
import { 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Calculator, 
  Lock,
  RefreshCw,
  Check
} from 'lucide-react';
import { LIVE_RATES } from '../data/jewelryData';

export default function LiveBullionTicker({ onOpenCalculator, onOpenRateLock }) {
  const [viewUnit, setViewUnit] = useState('10g'); // '10g' or '1g'
  const [syncedJustNow, setSyncedJustNow] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleSync = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setSyncedJustNow(true);
      setTimeout(() => setSyncedJustNow(false), 3000);
    }, 600);
  };

  const formatRate = (ratePer10g, isSilver = false) => {
    if (isSilver) {
      // ratePer10g is per 1kg for silver (1000g)
      return viewUnit === '1g' 
        ? `₹${Math.round(ratePer10g / 1000).toLocaleString('en-IN')}`
        : `₹${ratePer10g.toLocaleString('en-IN')}`;
    }
    return viewUnit === '1g'
      ? `₹${Math.round(ratePer10g / 10).toLocaleString('en-IN')}`
      : `₹${ratePer10g.toLocaleString('en-IN')}`;
  };

  return (
    <section id="bullion" className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-4 sm:-mt-6">
      <div className="bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-4 sm:p-6 shadow-xs">
        
        {/* Header bar of Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#e5e7eb]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f1675d] animate-ping" />
            <h3 className="text-title-md font-medium text-[#516171]">
              Pune Live Bullion Rates
            </h3>
            <span className="ui-chip text-caption bg-[#fee7e1] text-[#516171]">
              Kharadi / Wadgaon Sheri
            </span>
          </div>

          <div className="flex items-center gap-3 text-body-sm text-[#516171]">
            <button
              onClick={handleSync}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#fee7e1] hover:bg-[#fed6cc] text-[#516171] text-caption font-medium transition-colors cursor-pointer"
              title="Refresh Live Bullion Rates"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#f1675d] ${isRotating ? 'animate-spin' : ''}`} />
              <span>{syncedJustNow ? 'Synced Today' : 'Sync Rates'}</span>
            </button>

            <span className="text-[#e5e7eb]">|</span>

            {/* 10g vs 1g Toggle */}
            <div className="inline-flex rounded-[4px] border border-[#e5e7eb] p-0.5 bg-[#fee7e1]/60 text-caption">
              <button
                onClick={() => setViewUnit('10g')}
                className={`px-2 py-0.5 rounded-[3px] font-medium transition-all cursor-pointer ${
                  viewUnit === '10g'
                    ? 'bg-[#516171] text-[#fee7e1]'
                    : 'text-[#516171] hover:text-[#f1675d]'
                }`}
              >
                Per 10g
              </button>
              <button
                onClick={() => setViewUnit('1g')}
                className={`px-2 py-0.5 rounded-[3px] font-medium transition-all cursor-pointer ${
                  viewUnit === '1g'
                    ? 'bg-[#516171] text-[#fee7e1]'
                    : 'text-[#516171] hover:text-[#f1675d]'
                }`}
              >
                Per 1g
              </button>
            </div>

            <span className="text-[#e5e7eb] hidden sm:inline">|</span>

            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#f1675d]" />
              {LIVE_RATES.timestamp}
            </span>
            <span className="text-[#e5e7eb] hidden md:inline">|</span>
            <span className="hidden md:flex items-center gap-1 text-[#d11b4d] font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              Trend: {LIVE_RATES.goldTrend}
            </span>
          </div>
        </div>

        {/* 4 Rates Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-4">
          
          {/* 24K Pure Gold */}
          <div className="p-4 rounded-[8px] bg-[#fee7e1] border border-[#e5e7eb] text-left">
            <div className="flex items-center justify-between text-body-sm text-[#516171] mb-1">
              <span className="font-medium text-[#f1675d]">24K Pure Gold</span>
              <span className="text-caption">99.9% Pure</span>
            </div>
            <div className="text-headline-md font-medium text-[#516171]">
              {formatRate(LIVE_RATES.gold24k)}
            </div>
            <div className="text-caption text-[#516171]/80 mt-0.5">
              {viewUnit === '1g' ? 'per 1 gram (Bullion)' : 'per 10 grams (Bullion Bar)'}
            </div>
          </div>

          {/* 22K Bridal Gold */}
          <div className="p-4 rounded-[8px] bg-[#fee7e1] border-2 border-[#f7c85f] text-left relative">
            <div className="flex items-center justify-between text-body-sm text-[#516171] mb-1">
              <span className="font-medium text-[#d11b4d] flex items-center gap-1.5">
                22K Hallmarked Gold
                <span className="px-1.5 py-0.2 bg-[#f1675d] text-[#ffffff] font-medium text-[10px] rounded-[3px]">
                  BRIDAL
                </span>
              </span>
              <span className="text-caption font-medium text-[#516171]">916 HUID</span>
            </div>
            <div className="text-headline-md font-medium text-[#d11b4d]">
              {formatRate(LIVE_RATES.gold22k)}
            </div>
            <div className="text-caption text-[#516171]/80 mt-0.5">
              {viewUnit === '1g' ? 'per 1 gram (Jewellery)' : 'per 10 grams (Jewellery Standard)'}
            </div>
          </div>

          {/* 18K Diamond Jewellery Gold */}
          <div className="p-4 rounded-[8px] bg-[#fee7e1] border border-[#e5e7eb] text-left">
            <div className="flex items-center justify-between text-body-sm text-[#516171] mb-1">
              <span className="font-medium text-[#516171]">18K Diamond Gold</span>
              <span className="text-caption">750 Gold</span>
            </div>
            <div className="text-headline-md font-medium text-[#516171]">
              {formatRate(LIVE_RATES.gold18k)}
            </div>
            <div className="text-caption text-[#516171]/80 mt-0.5">
              {viewUnit === '1g' ? 'per 1 gram (Diamond)' : 'per 10 grams (Solitaire Mounts)'}
            </div>
          </div>

          {/* Silver 999 Fine */}
          <div className="p-4 rounded-[8px] bg-[#fee7e1] border border-[#e5e7eb] text-left">
            <div className="flex items-center justify-between text-body-sm text-[#516171] mb-1">
              <span className="font-medium text-[#516171]">Fine Silver (Chandi)</span>
              <span className="text-caption">999 Purity</span>
            </div>
            <div className="text-headline-md font-medium text-[#516171]">
              {formatRate(LIVE_RATES.silver999, true)}
            </div>
            <div className="text-caption text-[#516171]/80 mt-0.5">
              {viewUnit === '1g' ? 'per 1 gram' : 'per 1 Kilogram (Bars & Coins)'}
            </div>
          </div>

        </div>

        {/* Action Ticker Footer */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-body-sm text-[#516171]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#f1675d]" />
            <span>BIS Hallmarking guarantees exact purity. 100% Karatmeter verified at our Pune flagship showroom.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="btn-secondary"
            >
              <Calculator className="w-4 h-4 mr-2 text-[#516171]" />
              <span>Calculate Price</span>
            </button>

            <button
              onClick={onOpenRateLock}
              className="btn-primary"
            >
              <Lock className="w-4 h-4 mr-2 text-[#fee7e1]" />
              <span>Lock Today's Rate</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
