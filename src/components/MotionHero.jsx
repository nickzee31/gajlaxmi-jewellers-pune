import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Gem, 
  Award, 
  Rotate3d,
  Tag
} from 'lucide-react';
import { HERO_SLIDES, LIVE_RATES } from '../data/jewelryData';

export default function MotionHero({ onOpenBooking, onOpenQuickView, onExploreCollection }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [zoomMode, setZoomMode] = useState(false);
  const canvasRef = useRef(null);

  const slide = HERO_SLIDES[currentSlide];

  // Auto-advance slides every 6 seconds unless hovered
  useEffect(() => {
    if (isHovered || zoomMode) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered, zoomMode]);

  // Soft celebratory particle canvas (warm gold & coral floating embers)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Warm, festive celebratory particles in coral & gold
    const particles = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      color: Math.random() > 0.5 ? '241, 103, 93' : '247, 200, 95', // Coral or Gold
      alpha: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.5 - 0.15,
      pulse: Math.random() * 0.02 + 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        p.alpha += Math.sin(Date.now() * p.pulse) * 0.008;
        const clampedAlpha = Math.max(0.1, Math.min(0.6, p.alpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${clampedAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="bridal"
      className="relative bg-[#fee7e1] pt-8 pb-16 sm:py-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Soft Festive Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Promotional Gold-Framed Offer Banner */}
        <div className="mb-8 p-3 sm:p-4 rounded-[8px] bg-[#ffffff] border-2 border-[#f7c85f] flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-[#f1675d] text-[#ffffff] flex items-center justify-center text-xs">
              ✨
            </span>
            <div className="text-left">
              <span className="text-body-sm font-medium text-[#516171] block">
                <strong className="text-[#d11b4d]">लग्नसोहळा & Festive Season Offer:</strong> Special Karigari making charge benefits on Maharashtrian bridal sets.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="ui-chip text-caption bg-[#fee7e1] text-[#516171]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f1675d]" />
              100% BIS 916 HUID
            </span>
            <span className="ui-chip text-caption bg-[#fee7e1] text-[#516171] hidden sm:inline-flex">
              Kharadi, Pune
            </span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-4"
              >
                {/* Chip Tag as per design spec */}
                <div className="inline-flex">
                  <span className="ui-chip bg-[#ffffff] border border-[#f1675d]/30 text-[#f1675d] font-medium text-label-sm">
                    {slide.tag}
                  </span>
                </div>

                {/* Main Headline - Poppins medium, no forced uppercase */}
                <h1 className="text-headline-lg sm:text-headline-display font-medium text-[#516171] leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle - Poppins body-lg, calm & spacious */}
                <p className="text-body-lg text-[#516171] max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Spec Card: card token (bg surface #fee7e1, border muted #e5e7eb, rounded 8px) */}
                <div className="p-3.5 rounded-[8px] bg-[#ffffff] border border-[#e5e7eb] flex flex-wrap items-center gap-3 text-body-sm text-[#516171]">
                  <span className="flex items-center gap-1.5 font-medium text-[#d11b4d]">
                    <Gem className="w-4 h-4 text-[#f1675d]" />
                    {slide.spec}
                  </span>
                  <span className="text-[#e5e7eb]">|</span>
                  <span>{slide.weight}</span>
                  <span className="text-[#e5e7eb]">|</span>
                  <span className="text-[#516171] font-medium">{slide.highlight}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Component Buttons as per Design Specification */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* button-primary: bg secondary #516171, text tertiary #fee7e1, rounded 4px, height 40px */}
              <button
                onClick={onOpenBooking}
                className="btn-primary"
              >
                <span>Book VIP Bridal Suite</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              {/* button-secondary: surface bg #fee7e1, border #516171, rounded 4px, height 40px */}
              <button
                onClick={() => onExploreCollection(slide.id)}
                className="btn-secondary"
              >
                <span>Explore Curated Pieces</span>
              </button>

              {/* button-link: underline, minimal */}
              <button
                onClick={() => {
                  const el = document.getElementById('calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-link text-body-sm ml-2 hidden sm:inline-flex"
              >
                View Live Pune Gold Rates
              </button>
            </div>

            {/* Slide Navigation Controls */}
            <div className="pt-6 flex items-center gap-4 border-t border-[#e5e7eb]">
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="p-2 rounded-[4px] bg-[#ffffff] border border-[#e5e7eb] text-[#516171] hover:text-[#f1675d] hover:border-[#f1675d] transition-all cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="p-2 rounded-[4px] bg-[#ffffff] border border-[#e5e7eb] text-[#516171] hover:text-[#f1675d] hover:border-[#f1675d] transition-all cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className="group py-2 cursor-pointer"
                  >
                    <div className={`h-1.5 transition-all duration-300 rounded-[2px] ${
                      currentSlide === idx ? 'w-8 bg-[#f1675d]' : 'w-2 bg-[#d1d5db] group-hover:bg-[#516171]'
                    }`} />
                  </button>
                ))}
              </div>

              <span className="text-caption text-[#516171]/70 ml-auto font-medium">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>
          </div>

          {/* Right Column: Framed Retail Jewelry Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Card container: rounded-md (8px), muted border, white/surface base */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[8px] p-2 bg-[#ffffff] border border-[#e5e7eb] overflow-hidden">
              <div className="relative w-full h-full rounded-[6px] overflow-hidden bg-[#fee7e1]">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: zoomMode ? 1.35 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Gentle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#516171]/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>

                {/* Inspect & Rotate controls */}
                <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
                  <button
                    onClick={() => setZoomMode(!zoomMode)}
                    className="p-2 rounded-[4px] bg-[#ffffff] border border-[#e5e7eb] text-[#516171] hover:text-[#f1675d] transition-all cursor-pointer"
                    title={zoomMode ? "Zoom Out" : "Inspect Craftsmanship"}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenQuickView(slide.id)}
                    className="p-2 rounded-[4px] bg-[#ffffff] border border-[#e5e7eb] text-[#516171] hover:text-[#f1675d] transition-all cursor-pointer"
                    title="View Full Specifications"
                  >
                    <Rotate3d className="w-4 h-4" />
                  </button>
                </div>

                {/* Hallmark Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <span className="ui-chip bg-[#ffffff] text-[#516171] text-caption font-medium border border-[#e5e7eb]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f1675d]" />
                    BIS 916 HUID
                  </span>
                </div>

                {/* Bottom Card Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-20 bg-gradient-to-t from-[#516171] via-[#516171]/90 to-transparent text-[#ffffff]">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-caption text-[#f7c85f] font-medium block">
                        Featured Piece
                      </span>
                      <h4 className="text-title-md font-medium text-[#ffffff]">
                        {slide.title}
                      </h4>
                      <p className="text-caption text-[#fee7e1] mt-0.5">
                        {slide.weight}
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenQuickView(slide.id)}
                      className="px-3 py-1.5 rounded-[4px] bg-[#ffffff] text-[#516171] text-label-sm font-medium hover:bg-[#fee7e1] transition-colors cursor-pointer"
                    >
                      Inspect
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 4 Category Quick Selection Cards */}
        <div className="mt-10 hidden md:grid grid-cols-4 gap-3">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`p-3.5 rounded-[8px] text-left transition-all border cursor-pointer ${
                currentSlide === idx
                  ? 'bg-[#ffffff] border-[#f1675d] shadow-xs'
                  : 'bg-[#ffffff]/60 border-[#e5e7eb] hover:bg-[#ffffff]'
              }`}
            >
              <div className="flex items-center justify-between text-caption mb-1">
                <span className={`font-medium ${
                  currentSlide === idx ? 'text-[#f1675d]' : 'text-[#516171]/70'
                }`}>
                  0{idx + 1}
                </span>
                {currentSlide === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f1675d]"></span>
                )}
              </div>
              <div className={`text-label-md font-medium truncate ${
                currentSlide === idx ? 'text-[#516171]' : 'text-[#516171]/80'
              }`}>
                {s.title}
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
