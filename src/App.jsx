import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MotionHero from './components/MotionHero';
import LiveBullionTicker from './components/LiveBullionTicker';
import MaharashtrianHeritageFeature from './components/MaharashtrianHeritageFeature';
import GoldRateCalculator from './components/GoldRateCalculator';
import CollectionShowcase from './components/CollectionShowcase';
import VirtualLookbook from './components/VirtualLookbook';
import FlagshipExperience from './components/FlagshipExperience';
import TrustBadges from './components/TrustBadges';
import CustomerStories from './components/CustomerStories';
import Footer from './components/Footer';
import VIPBookingModal from './components/VIPBookingModal';
import QuickViewModal from './components/QuickViewModal';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import FloatingConcierge from './components/FloatingConcierge';
import { PRODUCTS_CATALOG } from './data/jewelryData';

export default function App() {
  const [wishlist, setWishlist] = useState([
    PRODUCTS_CATALOG[0], // Pre-loaded with Maharani Peshwai Choker as a luxury teaser
  ]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Wishlist handler
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

  // Quick view handler
  const handleOpenQuickView = (productOrId) => {
    if (typeof productOrId === 'string') {
      const found = PRODUCTS_CATALOG.find((p) => p.id === productOrId) || PRODUCTS_CATALOG[0];
      setSelectedProduct(found);
    } else {
      setSelectedProduct(productOrId);
    }
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fee7e1] text-[#516171] flex flex-col font-sans selection:bg-[#f1675d]/20 selection:text-[#d11b4d]">
      
      {/* Top Navbar */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCalculator={() => handleScrollToSection('calculator')}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Motion / Animated Hero Component */}
      <main className="flex-1">
        <MotionHero
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenQuickView={handleOpenQuickView}
          onExploreCollection={() => handleScrollToSection('collections')}
        />

        {/* Live Pune Bullion Rate Ticker */}
        <LiveBullionTicker
          onOpenCalculator={() => handleScrollToSection('calculator')}
          onOpenRateLock={() => setIsBookingOpen(true)}
        />

        {/* Traditional Maharashtrian Heritage Feature */}
        <MaharashtrianHeritageFeature
          onSelectHeirloom={(item) => handleOpenQuickView(item)}
          onAddToWishlist={handleToggleWishlist}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Interactive Curated Collections Catalog */}
        <CollectionShowcase
          onOpenQuickView={handleOpenQuickView}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Interactive Virtual Lookbook & Trousseau Styling */}
        <VirtualLookbook
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenQuickView={handleOpenQuickView}
        />

        {/* Karatmeter Pricing & Making Charge Transparency Calculator */}
        <GoldRateCalculator
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* The 5,500 Sq. Ft. Flagship Showroom Experience */}
        <FlagshipExperience
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* The 5 Gajlaxmi Guarantees */}
        <TrustBadges />

        {/* Customer Stories from Pune */}
        <CustomerStories />
      </main>

      {/* Royal Footer */}
      <Footer
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCalculator={() => handleScrollToSection('calculator')}
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
          setIsBookingOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onOpenBooking={() => {
          setIsWishlistOpen(false);
          setIsBookingOpen(true);
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
