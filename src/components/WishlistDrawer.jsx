import React from 'react';
import { 
  X, 
  Trash2, 
  Heart, 
  MessageCircle, 
  ArrowRight
} from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlist = [], 
  onRemoveItem, 
  onOpenBooking,
  onOpenQuickView 
}) {
  if (!isOpen) return null;

  const totalEstimate = wishlist.reduce((acc, curr) => acc + (curr.priceEstimate || 0), 0);

  const handleShareWishlistWhatsApp = () => {
    if (wishlist.length === 0) return;
    const itemsText = wishlist.map((item, idx) => 
      `${idx + 1}. ${item.name} (${item.purity}, ${item.grossWeight || item.typicalWeight || ''})`
    ).join('%0A');

    const text = `Hello Gajlaxmi Jewellers Pune, here is my saved Bridal Wishlist:%0A${itemsText}%0AApprox Total Value: ₹${totalEstimate.toLocaleString('en-IN')}%0AI would like to schedule a private viewing at your Kharadi showroom.`;
    window.open(`https://wa.me/917796787878?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#ffffff] border-l border-[#e5e7eb] h-full flex flex-col justify-between shadow-lg p-6 sm:p-7 overflow-y-auto">
        
        {/* Top Bar */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#e5e7eb]">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#f1675d] fill-[#f1675d]" />
              <h3 className="text-title-md font-medium text-[#516171]">
                Your Saved Trousseau ({wishlist.length})
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-[4px] text-[#516171] hover:bg-[#fee7e1] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="py-4 space-y-3">
            {wishlist.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#fee7e1] text-[#f1675d] flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6" />
                </div>
                <p className="text-body-md text-[#516171] font-medium">
                  Your bridal wishlist is empty.
                </p>
                <p className="text-body-sm text-[#516171]/80">
                  Browse our Peshwai bridal chokers, solitaires, or antique temple ornaments and click the heart icon.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] flex gap-3 items-center group text-left"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-[4px] object-cover object-center bg-[#ffffff] flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 
                      onClick={() => onOpenQuickView(item)}
                      className="text-body-sm font-medium text-[#516171] truncate cursor-pointer hover:text-[#f1675d] transition-colors"
                    >
                      {item.name}
                    </h4>
                    <div className="text-caption text-[#516171]/80 mt-0.5">
                      {item.purity} • {item.grossWeight || item.typicalWeight || ''}
                    </div>
                    {item.priceEstimate && (
                      <div className="text-body-sm font-medium text-[#d11b4d] mt-1">
                        ₹{item.priceEstimate.toLocaleString('en-IN')}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-[#516171]/70 hover:text-[#d11b4d] transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        {wishlist.length > 0 && (
          <div className="pt-4 border-t border-[#e5e7eb] space-y-3 text-left">
            <div className="flex items-center justify-between text-body-md text-[#516171]">
              <span>Total Estimated Value:</span>
              <span className="text-headline-sm font-medium text-[#d11b4d]">
                ₹{totalEstimate.toLocaleString('en-IN')}*
              </span>
            </div>

            <p className="text-caption text-[#516171]/80">
              *Rates finalized at showroom based on live Pune 22K/18K market bullion rate.
            </p>

            <button
              onClick={handleShareWishlistWhatsApp}
              className="w-full btn-secondary"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-[#25d366]" />
              <span>Share Wishlist on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full btn-primary"
            >
              <span>Book Try-On For These Pieces</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
