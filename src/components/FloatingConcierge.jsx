import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function FloatingConcierge() {
  const handleOpenWhatsApp = () => {
    const text = "Hello Gajlaxmi Jewellers Pune, I would like to enquire about jewellery designs and visit your Chandan Nagar / Kharadi showroom.";
    window.open(`https://wa.me/917796787878?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Tooltip badge */}
      <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffffff] border border-[#e5e7eb] text-caption text-[#516171] shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-[#f1675d]" />
        <span>Kharadi Showroom Concierge Online</span>
      </div>

      {/* Floating Button: Coral-filled or Secondary-filled */}
      <button
        onClick={handleOpenWhatsApp}
        className="flex items-center gap-2 px-4 py-2.5 rounded-[4px] bg-[#516171] text-[#fee7e1] text-label-md font-medium shadow-xs hover:bg-[#3f4c59] transition-all cursor-pointer"
        title="Chat with Pune Flagship Concierge"
      >
        <MessageCircle className="w-5 h-5 text-[#f7c85f]" />
        <span>WhatsApp Concierge</span>
      </button>
    </div>
  );
}
