import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Search, 
  Heart, 
  Menu, 
  X, 
  ShieldCheck, 
  Calculator,
  CalendarCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { LIVE_RATES } from '../data/jewelryData';

export default function Navbar({ 
  wishlistCount = 0, 
  onOpenWishlist, 
  onOpenBooking, 
  onOpenCalculator,
  onOpenSearch 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('bridal');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'bridal', name: 'Bridal Atelier', href: '#bridal' },
    { id: 'heritage', name: 'Maharashtrian Heritage', href: '#heritage' },
    { id: 'collections', name: 'Solitaires & Gold', href: '#collections' },
    { id: 'lookbook', name: 'Bridal Lookbook', href: '#lookbook' },
    { id: 'bullion', name: 'Live Gold Rate', href: '#bullion' },
    { id: 'calculator', name: 'Transparency Calculator', href: '#calculator' },
    { id: 'flagship', name: 'Pune Flagship', href: '#flagship' },
  ];

  return (
    <>
      {/* Top Announcement Bar - Soft Blush & Coral Warmth */}
      <div className="bg-[#fee7e1] border-b border-[#e5e7eb] text-caption sm:text-body-sm text-[#516171] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Showroom Status */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#516171] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#f1675d] animate-pulse"></span>
              <span>Chandan Nagar, Pune Showroom:</span>
              <span className="font-normal text-[#516171]/80">Open All 7 Days (10:30 AM – 8:30 PM)</span>
            </span>
            <span className="hidden lg:inline text-[#e5e7eb]">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-[#516171]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f1675d]" />
              100% BIS Hallmarked (HUID) & IGI Certified Diamonds
            </span>
          </div>

          {/* Right: Live Pune Gold Ticker & Call */}
          <div className="flex items-center gap-4 ml-auto">
            <button 
              onClick={onOpenCalculator}
              className="flex items-center gap-1.5 text-[#d11b4d] hover:text-[#f1675d] transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Today 22K Pune: <strong>₹{(LIVE_RATES.gold22k).toLocaleString('en-IN')}/10g</strong></span>
            </button>
            <span className="text-[#e5e7eb]">|</span>
            <a 
              href="tel:+917796787878" 
              className="flex items-center gap-1 text-[#516171] hover:text-[#f1675d] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#f1675d]" />
              <span>+91 77967 87878</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Bar - Clean White (#ffffff) as per Design Spec */}
      <header className={`sticky top-0 z-40 bg-[#ffffff] transition-all duration-200 border-b border-[#e5e7eb] ${
        scrolled ? 'py-2.5 shadow-sm' : 'py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Retail Crest */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[#fee7e1] border border-[#f7c85f] flex items-center justify-center flex-shrink-0">
              <span className="text-headline-sm font-semibold text-[#f1675d]">
                ग
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-title-md font-medium text-[#516171] leading-tight">
                Gajlaxmi Jewellers
              </span>
              <span className="text-caption text-[#f1675d] font-medium leading-none mt-0.5">
                PUNE • 30+ YEARS OF TRUST
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Coral active styling */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveNav(link.id)}
                  className={`text-label-md transition-colors ${
                    isActive 
                      ? 'text-[#f1675d] font-medium' 
                      : 'text-[#516171] hover:text-[#f1675d]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Search, Wishlist, Primary Button */}
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

            {/* button-primary as per Design System: secondary bg (#516171), tertiary text (#fee7e1), 4px rounded, 40px height */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex btn-primary"
            >
              <CalendarCheck className="w-4 h-4 mr-2 text-[#f7c85f]" />
              <span>Book VIP Visit</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-[4px] text-[#516171] hover:bg-[#fee7e1]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#ffffff] border-t border-[#e5e7eb] px-5 py-4 space-y-3">
            <div className="space-y-1 pb-3 border-b border-[#e5e7eb]">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveNav(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between text-body-md text-[#516171] hover:text-[#f1675d] py-2"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#516171]/50" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full btn-primary"
              >
                Book VIP Consultation Suite
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
