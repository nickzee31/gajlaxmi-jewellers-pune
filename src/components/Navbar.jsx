import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Search, 
  Heart, 
  Menu, 
  X, 
  ShieldCheck, 
  Calculator,
  CalendarCheck,
  ChevronRight,
  Sparkles,
  Home,
  Gem,
  Crown,
  MapPin
} from 'lucide-react';
import { LIVE_RATES } from '../data/jewelryData';

export default function Navbar({ 
  activePage = 'home',
  onNavigate,
  wishlistCount = 0, 
  onOpenWishlist, 
  onOpenBooking, 
  onOpenSearch 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navPages = [
    { id: 'home', name: 'Home' },
    { id: 'collections', name: 'Collections' },
    { id: 'heritage', name: 'Bridal Heritage' },
    { id: 'calculator', name: 'Gold Rates & Calculator' },
    { id: 'visit', name: 'Flagship & Book Visit' },
  ];

  return (
    <>
      {/* Top Announcement Bar - Soft Blush & Coral Warmth */}
      <div className="bg-[#fee7e1] border-b border-[#e5e7eb] text-caption text-[#516171] py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Showroom Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1.5 text-[#516171] font-medium text-caption sm:text-body-sm">
              <span className="w-2 h-2 rounded-full bg-[#f1675d] animate-pulse"></span>
              <span className="hidden sm:inline">Chandan Nagar, Pune:</span>
              <span className="sm:hidden">Pune Flagship:</span>
              <span className="font-normal text-[#516171]/80">Open 10:30 AM – 8:30 PM</span>
            </span>
            <span className="hidden lg:inline text-[#e5e7eb]">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-[#516171]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f1675d]" />
              100% BIS Hallmarked (HUID) & IGI Certified Diamonds
            </span>
          </div>

          {/* Right: Live Pune Gold Ticker & Call */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto text-caption sm:text-body-sm">
            <button 
              onClick={() => onNavigate('calculator')}
              className="flex items-center gap-1 text-[#d11b4d] hover:text-[#f1675d] transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Today 22K: <strong>₹{(LIVE_RATES.gold22k).toLocaleString('en-IN')}/10g</strong></span>
            </button>
            <span className="text-[#e5e7eb] hidden sm:inline">|</span>
            <a 
              href="tel:+917796787878" 
              className="hidden sm:flex items-center gap-1 text-[#516171] hover:text-[#f1675d] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f1675d]" />
              <span>+91 77967 87878</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Bar - Clean White (#ffffff) */}
      <header className={`sticky top-0 z-40 bg-[#ffffff] transition-all duration-200 border-b border-[#e5e7eb] ${
        scrolled ? 'py-2 shadow-xs' : 'py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer border-none bg-transparent p-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-[#fee7e1] border border-[#f7c85f] flex items-center justify-center flex-shrink-0">
              <span className="text-title-md sm:text-headline-sm font-semibold text-[#f1675d]">
                ग
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-body-md sm:text-title-md font-medium text-[#516171] leading-tight">
                Gajlaxmi Jewellers
              </span>
              <span className="text-[10px] sm:text-caption text-[#f1675d] font-medium leading-none mt-0.5">
                PUNE • ESTD. 1994
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navPages.map((page) => {
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => onNavigate(page.id)}
                  className={`text-label-md transition-colors cursor-pointer bg-transparent border-none py-1 relative ${
                    isActive 
                      ? 'text-[#f1675d] font-medium after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#f1675d]' 
                      : 'text-[#516171] hover:text-[#f1675d]'
                  }`}
                >
                  {page.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-[4px] text-[#516171] hover:text-[#f1675d] hover:bg-[#fee7e1] transition-all cursor-pointer"
              title="Search Jewelry"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-[4px] text-[#516171] hover:text-[#f1675d] hover:bg-[#fee7e1] transition-all cursor-pointer"
              title="View Wishlist"
            >
              <Heart className="w-4.5 h-4.5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f1675d] text-[#ffffff] font-medium text-[10px] flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Desktop & Mobile Fixed VIP Visit Button */}
            <button
              onClick={() => onNavigate('visit')}
              className="inline-flex items-center btn-primary text-caption sm:text-label-lg px-2.5 sm:px-4 py-1.5 sm:py-2 h-[34px] sm:h-[40px]"
            >
              <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-[#f7c85f]" />
              <span className="hidden sm:inline">Book VIP Visit</span>
              <span className="sm:hidden">VIP Visit</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-[4px] text-[#516171] hover:bg-[#fee7e1] cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#ffffff] border-t border-[#e5e7eb] px-5 py-4 space-y-3 animate-in fade-in duration-150">
            <div className="space-y-1 pb-3 border-b border-[#e5e7eb] text-left">
              {navPages.map((page) => {
                const isActive = activePage === page.id;
                return (
                  <button
                    key={page.id}
                    onClick={() => {
                      onNavigate(page.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-body-md py-2.5 px-2 rounded-[4px] cursor-pointer text-left ${
                      isActive 
                        ? 'bg-[#fee7e1] text-[#f1675d] font-medium' 
                        : 'text-[#516171] hover:bg-[#fee7e1]/50'
                    }`}
                  >
                    <span>{page.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#516171]/50" />
                  </button>
                );
              })}
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('visit');
                }}
                className="w-full btn-primary h-[44px]"
              >
                <CalendarCheck className="w-4 h-4 mr-2 text-[#f7c85f]" />
                Book VIP Consultation Suite
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Persistent Mobile Bottom Navigation Bar (Ultra-clean, breezy 1-tap switching) */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#ffffff] border-t border-[#e5e7eb] py-2 px-3 flex items-center justify-around shadow-sm">
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center gap-0.5 text-caption cursor-pointer ${
            activePage === 'home' ? 'text-[#f1675d] font-medium' : 'text-[#516171]'
          }`}
        >
          <Home className="w-4.5 h-4.5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => onNavigate('collections')}
          className={`flex flex-col items-center gap-0.5 text-caption cursor-pointer ${
            activePage === 'collections' ? 'text-[#f1675d] font-medium' : 'text-[#516171]'
          }`}
        >
          <Gem className="w-4.5 h-4.5" />
          <span>Jewellery</span>
        </button>

        <button
          onClick={() => onNavigate('heritage')}
          className={`flex flex-col items-center gap-0.5 text-caption cursor-pointer ${
            activePage === 'heritage' ? 'text-[#f1675d] font-medium' : 'text-[#516171]'
          }`}
        >
          <Crown className="w-4.5 h-4.5" />
          <span>Bridal</span>
        </button>

        <button
          onClick={() => onNavigate('calculator')}
          className={`flex flex-col items-center gap-0.5 text-caption cursor-pointer ${
            activePage === 'calculator' ? 'text-[#f1675d] font-medium' : 'text-[#516171]'
          }`}
        >
          <Calculator className="w-4.5 h-4.5" />
          <span>Rates</span>
        </button>

        <button
          onClick={() => onNavigate('visit')}
          className={`flex flex-col items-center gap-0.5 text-caption cursor-pointer ${
            activePage === 'visit' ? 'text-[#f1675d] font-medium' : 'text-[#516171]'
          }`}
        >
          <CalendarCheck className="w-4.5 h-4.5 text-[#f1675d]" />
          <span className="font-medium text-[#f1675d]">Book VIP</span>
        </button>
      </div>
    </>
  );
}
