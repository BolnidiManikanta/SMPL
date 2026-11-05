import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { BESTSELLER_PRODUCTS, CURATED_RETREAT_PRODUCTS } from '../data/bathwareData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const allProducts = [...BESTSELLER_PRODUCTS, ...CURATED_RETREAT_PRODUCTS];
  const uniqueProducts = Array.from(new Map(allProducts.map((p) => [p.id, p])).values());

  const results = query.trim()
    ? uniqueProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase()) ||
          p.finishes.some((f) => f.name.toLowerCase().includes(query.toLowerCase()))
      )
    : uniqueProducts.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-xs" />

      <div className="relative bg-[#FAF8F5] border border-[#DDD5C8] rounded-sm max-w-2xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in slide-in-from-top-4 duration-200">
        <div className="p-4 border-b border-[#E8E2D7] flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-500" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search faucets, showers, stone baths, finishes, or spaces..."
            className="flex-1 bg-transparent text-sm text-[#24211E] placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-stone-400 hover:text-black">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-stone-600 hover:text-black font-medium"
          >
            Esc
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-4 py-2.5 bg-[#F2EDE5] border-b border-[#E2DBD0] flex items-center gap-2 overflow-x-auto text-[11px] text-stone-600">
          <span className="font-medium text-stone-800">Popular:</span>
          {['Brushed Brass', 'Freestanding Bath', 'Concealed Shower', 'Stone Basin', 'Gooseneck'].map(
            (tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2 py-0.5 bg-white border border-[#DDD5C8] rounded-full hover:border-[#725C48] hover:text-[#725C48] whitespace-nowrap cursor-pointer transition-colors"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium mb-1">
            {query.trim() ? `Search Results (${results.length})` : 'Curated Suggestions'}
          </div>

          {results.length === 0 ? (
            <p className="text-xs text-stone-500 py-8 text-center">
              No matching architectural fittings found. Try searching for "Brass", "Shower", or "Basin".
            </p>
          ) : (
            results.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod);
                  onClose();
                }}
                className="flex items-center gap-3 p-2.5 hover:bg-[#F2ECE2] rounded-xs cursor-pointer transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-xs p-1 flex items-center justify-center shrink-0 border border-[#E8E2D7]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-[#24211E] group-hover:text-[#725C48] truncate">
                    {prod.name}
                  </h4>
                  <p className="text-[10px] text-stone-500">
                    {prod.category} · {prod.collection}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-medium text-[#24211E]">
                    ${prod.price.toLocaleString()}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#725C48] group-hover:translate-x-1 transition-all inline-block ml-2" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
