import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Heart, 
  MessageCircle
} from 'lucide-react';

export default function QuickViewModal({ 
  product, 
  onClose, 
  onToggleWishlist, 
  isWishlisted = false,
  onOpenBooking 
}) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = `Hello Gajlaxmi Jewellers Pune, I am inquiring about the ${product.name} (SKU: ${product.id}).%0APurity: ${product.purity}%0AGross Wt: ${product.grossWeight}%0APlease share availability at the Chandan Nagar / Kharadi showroom.`;
    window.open(`https://wa.me/917796787878?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] overflow-hidden shadow-md max-h-[92vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-[4px] bg-[#fee7e1] text-[#516171] hover:bg-[#fed6cc] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-[#fee7e1] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute top-3 left-3">
            <span className="ui-chip bg-[#ffffff] text-[#516171] border border-[#e5e7eb] text-caption font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f1675d]" />
              {product.hallmarkId}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-[6px] bg-[#ffffff]/95 border border-[#e5e7eb] text-caption text-[#516171]">
            Inspected and certified in accordance with Bureau of Indian Standards (BIS) Hallmarking Regulations.
          </div>
        </div>

        {/* Right: Detailed Specifications */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-4 text-left">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="ui-chip bg-[#fee7e1] text-[#f1675d] text-label-sm font-medium">
                {product.collection}
              </span>
              <span className="text-caption text-[#516171]/70">{product.id}</span>
            </div>

            <h3 className="text-headline-sm font-medium text-[#516171]">
              {product.name}
            </h3>

            <p className="text-body-md text-[#516171] leading-relaxed">
              {product.description}
            </p>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-3 py-2 border-y border-[#e5e7eb] text-body-sm text-[#516171]">
              <div className="p-2.5 rounded-[4px] bg-[#fee7e1] border border-[#e5e7eb]">
                <span className="text-caption text-[#516171]/70 block">Gold Purity</span>
                <span className="font-medium text-[#516171]">{product.purity}</span>
              </div>

              <div className="p-2.5 rounded-[4px] bg-[#fee7e1] border border-[#e5e7eb]">
                <span className="text-caption text-[#516171]/70 block">Gross Weight</span>
                <span className="font-medium text-[#516171]">{product.grossWeight}</span>
              </div>

              <div className="p-2.5 rounded-[4px] bg-[#fee7e1] border border-[#e5e7eb]">
                <span className="text-caption text-[#516171]/70 block">Net Gold Weight</span>
                <span className="font-medium text-[#d11b4d]">{product.netWeight}</span>
              </div>

              <div className="p-2.5 rounded-[4px] bg-[#fee7e1] border border-[#e5e7eb]">
                <span className="text-caption text-[#516171]/70 block">Gemstone / Stone</span>
                <span className="text-[#516171] truncate block">{product.stoneDetail}</span>
              </div>
            </div>

            {/* Price Preview */}
            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-caption text-[#516171]/70 uppercase block">
                  Estimated Showroom Price
                </span>
                <span className="text-headline-md font-medium text-[#d11b4d]">
                  ₹{product.priceEstimate.toLocaleString('en-IN')}*
                </span>
              </div>
              <span className="text-caption text-[#516171]/70">
                *Subject to Pune live gold rate on invoice
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full btn-secondary"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-[#25d366]" />
              <span>Inquire Availability on WhatsApp</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 btn-primary"
              >
                Book Showroom Try-on
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-2 rounded-[4px] border transition-all cursor-pointer ${
                  isWishlisted
                    ? 'bg-[#fee7e1] border-[#f1675d] text-[#d11b4d]'
                    : 'bg-[#ffffff] border-[#e5e7eb] text-[#516171] hover:bg-[#fee7e1]'
                }`}
                title="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#d11b4d]' : ''}`} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
