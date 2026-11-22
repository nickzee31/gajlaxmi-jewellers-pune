import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Eye, 
  ArrowUpRight,
  MessageCircle,
  Gem
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/jewelryData';

export default function CollectionShowcase({ 
  onOpenQuickView, 
  onToggleWishlist, 
  wishlist = [],
  onOpenBooking 
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'bridal', label: 'Maharashtrian Bridal' },
    { id: 'diamond', label: 'Solitaires & Diamonds' },
    { id: 'antique', label: 'Antique Temple Gold' },
    { id: 'daily', label: 'Everyday 18K Chic' },
    { id: 'mens', label: "Men's Royal Gold" },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS_CATALOG 
    : PRODUCTS_CATALOG.filter(p => p.category === activeCategory);

  const isWishlisted = (id) => wishlist.some(item => item.id === id);

  const handleWhatsAppProduct = (product, e) => {
    e.stopPropagation();
    const text = `Hello Gajlaxmi Jewellers Pune, I am interested in ${product.name} (Code: ${product.id}). Gross Wt: ${product.grossWeight}. Please share availability and current price at your Kharadi showroom.`;
    window.open(`https://wa.me/917796787878?text=${text}`, '_blank');
  };

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#fee7e1] border-t border-[#e5e7eb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 text-left">
            <div className="inline-flex">
              <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
                <Gem className="w-3.5 h-3.5 mr-1" />
                Haute Joaillerie & Gold Atelier
              </span>
            </div>
            <h2 className="text-headline-lg font-medium text-[#516171] leading-tight">
              Curated Showroom Masterpieces
            </h2>
            <p className="text-body-lg text-[#516171] max-w-xl">
              Each ornament is stamped with a unique 6-digit BIS Hallmark Unique Identification (HUID) code and backed by lifetime exchange guarantee.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="hidden lg:flex items-center gap-6 p-4 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] text-body-sm text-[#516171]">
            <div className="text-left">
              <span className="text-caption text-[#516171]/70 block">Showroom Selection:</span>
              <span className="text-title-md font-medium text-[#516171]">3,500+ Handcrafted Designs</span>
            </div>
            <span className="w-[1px] h-8 bg-[#e5e7eb]"></span>
            <div className="text-left">
              <span className="text-caption text-[#516171]/70 block">Gold Testing:</span>
              <span className="text-title-md font-medium text-[#d11b4d]">Free Karatmeter Test</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-[4px] text-label-md font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#516171] text-[#fee7e1]'
                  : 'bg-[#ffffff] text-[#516171] border border-[#e5e7eb] hover:bg-[#fee7e1]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: card token (bg surface / white, border muted #e5e7eb, rounded 8px, padding 16px) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#ffffff] rounded-[8px] border border-[#e5e7eb] overflow-hidden flex flex-col justify-between hover:border-[#f1675d]/60 transition-colors"
              >
                
                {/* Image Container */}
                <div 
                  className="relative aspect-square overflow-hidden bg-[#fee7e1] cursor-pointer"
                  onClick={() => onOpenQuickView(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="ui-chip text-caption bg-[#ffffff]/90 text-[#516171] border border-[#e5e7eb]">
                      {product.badge}
                    </span>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      className="pointer-events-auto p-2 rounded-[4px] bg-[#ffffff] border border-[#e5e7eb] text-[#516171] hover:text-[#d11b4d] transition-all cursor-pointer"
                      title="Save to Wishlist"
                    >
                      <Heart 
                        className={`w-3.5 h-3.5 ${
                          isWishlisted(product.id) ? 'fill-[#d11b4d] text-[#d11b4d]' : ''
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-[4px] bg-[#ffffff] border border-[#e5e7eb] text-label-sm text-[#516171] font-medium flex items-center gap-1.5 shadow-xs">
                      <Eye className="w-3.5 h-3.5 text-[#f1675d]" />
                      <span>Inspect Details</span>
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 text-left">
                    <div className="flex items-center justify-between text-caption text-[#516171]/80">
                      <span className="font-medium text-[#f1675d]">{product.purity}</span>
                      <span>{product.grossWeight}</span>
                    </div>

                    <h3 
                      onClick={() => onOpenQuickView(product)}
                      className="text-title-md font-medium text-[#516171] leading-snug hover:text-[#f1675d] transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>

                    <p className="text-body-sm text-[#516171]/80 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing & WhatsApp Actions */}
                  <div className="pt-2.5 border-t border-[#e5e7eb] flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-caption text-[#516171]/70 block">Fair Estimate</span>
                      <span className="text-headline-sm font-medium text-[#d11b4d]">
                        ₹{product.priceEstimate.toLocaleString('en-IN')}*
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleWhatsAppProduct(product, e)}
                        className="p-2 rounded-[4px] bg-[#fee7e1] border border-[#e5e7eb] text-[#516171] hover:text-[#25d366] transition-colors cursor-pointer"
                        title="Enquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onOpenQuickView(product)}
                        className="p-2 rounded-[4px] bg-[#516171] text-[#fee7e1] hover:bg-[#3f4c59] transition-all cursor-pointer"
                        title="View Full Specs"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Order Gold-Framed Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-[8px] bg-[#ffffff] border-2 border-[#f7c85f] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-headline-sm font-medium text-[#516171]">
              Looking for a Custom Heavier Trousseau or Solitaire Setting?
            </h4>
            <p className="text-body-md text-[#516171]">
              Our master karigars create bespoke jewellery from your exact references or heirloom remakes.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-primary whitespace-nowrap"
          >
            Schedule Bespoke Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
