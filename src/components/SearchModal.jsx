import React, { useState } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/jewelryData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickTags = ['Nath', 'Thushi', 'Solitaire', 'Jhumka', 'Bangles', 'Kada', '22K Gold', 'Emerald'];

  const results = query.trim() === ''
    ? []
    : PRODUCTS_CATALOG.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.collection.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.stoneDetail.toLowerCase().includes(query.toLowerCase()) ||
        p.purity.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#ffffff] border border-[#e5e7eb] rounded-[8px] p-6 shadow-md space-y-4 text-left max-h-[85vh] flex flex-col">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-[#f1675d]" />
          <input
            type="text"
            autoFocus
            placeholder="Search Pune heirloom pieces, solitaires, thushi, nath..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 rounded-[4px] bg-[#fee7e1] border border-[#e5e7eb] text-body-md text-[#516171] placeholder-[#516171]/60 focus:outline-none focus:border-[#f1675d]"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 p-1 text-[#516171] hover:text-[#f1675d] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="absolute right-4 p-1 text-[#516171] hover:text-[#f1675d] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Tags */}
        <div className="flex items-center gap-2 flex-wrap text-caption text-[#516171]">
          <span>Trending in Pune:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-[#fee7e1] text-[#516171] hover:bg-[#fed6cc] transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1 space-y-2 py-2 pr-1">
          {query.trim() !== '' && results.length === 0 && (
            <div className="text-center py-8 text-body-sm text-[#516171]/80">
              No ornaments found for "{query}". Try searching "Nath", "Thushi", or "22K".
            </div>
          )}

          {results.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                onClose();
                onSelectProduct(product);
              }}
              className="p-3 rounded-[6px] bg-[#fee7e1] border border-[#e5e7eb] hover:border-[#f1675d] flex items-center justify-between gap-4 cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded-[4px] object-cover object-center bg-[#ffffff]"
                />
                <div>
                  <h4 className="text-title-md font-medium text-[#516171] group-hover:text-[#f1675d] transition-colors">
                    {product.name}
                  </h4>
                  <div className="text-caption text-[#516171]/80 mt-0.5">
                    {product.purity} • {product.grossWeight} • {product.collection}
                  </div>
                </div>
              </div>

              <div className="text-right flex items-center gap-3">
                <span className="text-headline-sm font-medium text-[#d11b4d]">
                  ₹{product.priceEstimate.toLocaleString('en-IN')}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#516171] group-hover:text-[#f1675d] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
