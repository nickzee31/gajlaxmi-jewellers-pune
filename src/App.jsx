import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MotionHero from './components/MotionHero';
import LiveBullionTicker from './components/LiveBullionTicker';
import MaharashtrianHeritageFeature from './components/MaharashtrianHeritageFeature';
import GoldRateCalculator from './components/GoldRateCalculator';
import CollectionShowcase from './components/CollectionShowcase';
import VirtualLookbook from './components/VirtualLookbook';
import VisitPage from './components/VisitPage';
import TrustBadges from './components/TrustBadges';
import CustomerStories from './components/CustomerStories';
import Footer from './components/Footer';
import VIPBookingModal from './components/VIPBookingModal';
import QuickViewModal from './components/QuickViewModal';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import FloatingConcierge from './components/FloatingConcierge';
import { PRODUCTS_CATALOG } from './data/jewelryData';
import { ArrowRight, Sparkles, Gem, CalendarCheck } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [wishlist, setWishlist] = useState([
    PRODUCTS_CATALOG[0], // Pre-loaded with Maharani Peshwai Choker
  ]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'collections', 'heritage', 'calculator', 'visit'].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = `#/${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveWishlistItem = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const handleOpenQuickView = (productOrId) => {
    if (typeof productOrId === 'string') {
      const found = PRODUCTS_CATALOG.find((p) => p.id === productOrId) || PRODUCTS_CATALOG[0];
      setSelectedProduct(found);
    } else {
      setSelectedProduct(productOrId);
    }
  };

  return (
    <div className="min-h-screen bg-[#fee7e1] text-[#516171] flex flex-col font-sans selection:bg-[#f1675d]/20 selection:text-[#d11b4d] pb-16 lg:pb-0">
      
      {/* Top Navbar with Multi-Page Tabs & Mobile-Ready VIP Button */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenBooking={() => handleNavigate('visit')}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Router */}
      <main className="flex-1">
        
        {/* ================= PAGE 1: HOME ================= */}
        {activePage === 'home' && (
          <div className="space-y-12 sm:space-y-16">
            {/* Grand Motion Hero */}
            <MotionHero
              onOpenBooking={() => handleNavigate('visit')}
              onOpenQuickView={handleOpenQuickView}
              onExploreCollection={() => handleNavigate('collections')}
            />

            {/* Pune Live Bullion Ticker */}
            <LiveBullionTicker
              onOpenCalculator={() => handleNavigate('calculator')}
              onOpenRateLock={() => handleNavigate('visit')}
            />

            {/* Curated Highlights Teaser (Uncluttered, 3 pieces) */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
                <div>
                  <div className="inline-flex">
                    <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] text-label-sm font-medium">
                      <Gem className="w-3.5 h-3.5 mr-1" />
                      Featured Highlights
                    </span>
                  </div>
                  <h2 className="text-headline-lg font-medium text-[#516171] mt-2">
                    Handcrafted Showroom Icons
                  </h2>
                </div>

                <button
                  onClick={() => handleNavigate('collections')}
                  className="btn-secondary"
                >
                  <span>View All 3,500+ Designs</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* 3 Featured Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PRODUCTS_CATALOG.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenQuickView(item)}
                    className="p-4 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] hover:border-[#f1675d] transition-colors cursor-pointer text-left space-y-3 group"
                  >
                    <div className="aspect-[4/3] rounded-[6px] overflow-hidden bg-[#fee7e1]">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => { e.currentTarget.src = './images/hero-bridal.jpg'; }}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-caption text-[#f1675d] font-medium block">{item.collection}</span>
                      <h4 className="text-title-md font-medium text-[#516171] group-hover:text-[#f1675d] transition-colors truncate">
                        {item.name}
                      </h4>
                      <p className="text-caption text-[#516171]/80 mt-0.5">{item.purity} • {item.grossWeight}</p>
                      <div className="text-title-md font-medium text-[#d11b4d] mt-2">
                        ₹{item.priceEstimate.toLocaleString('en-IN')}*
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* The 5 Gajlaxmi Guarantees */}
            <TrustBadges />

            {/* Flagship Showroom Banner */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
              <div className="p-6 sm:p-10 rounded-[8px] bg-[#ffffff] border-2 border-[#f7c85f] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                <div className="space-y-2">
                  <span className="ui-chip bg-[#fee7e1] text-[#f1675d] text-label-sm font-medium">
                    Chandan Nagar, Pune
                  </span>
                  <h3 className="text-headline-sm sm:text-headline-md font-medium text-[#516171]">
                    Experience Our 5,500 Sq. Ft. Jewellery Flagship
                  </h3>
                  <p className="text-body-md text-[#516171] max-w-xl">
                    Private bridal consultation suites, high-carat solitaire lounge, and live computerized Karatmeter testing before your eyes.
                  </p>
                </div>

                <button
                  onClick={() => handleNavigate('visit')}
                  className="btn-primary whitespace-nowrap h-[44px]"
                >
                  <CalendarCheck className="w-4 h-4 mr-2 text-[#f7c85f]" />
                  <span>Book VIP Visit & Tour</span>
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ================= PAGE 2: COLLECTIONS ================= */}
        {activePage === 'collections' && (
          <div className="py-8 sm:py-12 space-y-8">
            <CollectionShowcase
              onOpenQuickView={handleOpenQuickView}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
              onOpenBooking={() => handleNavigate('visit')}
            />
          </div>
        )}

        {/* ================= PAGE 3: BRIDAL HERITAGE ================= */}
        {activePage === 'heritage' && (
          <div className="py-8 sm:py-12 space-y-12">
            <MaharashtrianHeritageFeature
              onSelectHeirloom={(item) => handleOpenQuickView(item)}
              onAddToWishlist={handleToggleWishlist}
              onOpenBooking={() => handleNavigate('visit')}
            />

            <VirtualLookbook
              onOpenBooking={() => handleNavigate('visit')}
            />
          </div>
        )}

        {/* ================= PAGE 4: GOLD RATES & CALCULATOR ================= */}
        {activePage === 'calculator' && (
          <div className="py-8 sm:py-12 space-y-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <LiveBullionTicker
                onOpenCalculator={() => {}}
                onOpenRateLock={() => handleNavigate('visit')}
              />
            </div>

            <GoldRateCalculator
              onOpenBooking={() => handleNavigate('visit')}
            />
          </div>
        )}

        {/* ================= PAGE 5: FLAGSHIP & BOOK VIP VISIT ================= */}
        {activePage === 'visit' && (
          <div className="py-4 space-y-10">
            <VisitPage />
            <CustomerStories />
          </div>
        )}

      </main>

      {/* Royal Footer */}
      <Footer
        onOpenBooking={() => handleNavigate('visit')}
        onOpenCalculator={() => handleNavigate('calculator')}
      />

      {/* Floating Concierge WhatsApp Action */}
      <FloatingConcierge />

      {/* Modals & Drawers */}
      <VIPBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlist.some(p => p.id === selectedProduct.id) : false}
        onOpenBooking={() => {
          setSelectedProduct(null);
          handleNavigate('visit');
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onOpenBooking={() => {
          setIsWishlistOpen(false);
          handleNavigate('visit');
        }}
        onOpenQuickView={(item) => {
          setIsWishlistOpen(false);
          setSelectedProduct(item);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

    </div>
  );
}
