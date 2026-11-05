import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, finish: string, delta: number) => void;
  onRemoveItem: (productId: string, finish: string) => void;
  onClearCart: () => void;
  onOpenCheckout?: (discountAmount: number, code: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenCheckout,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = appliedPromo === 'ARCHITECT10' ? Math.round(rawSubtotal * 0.1) : 0;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);

  const freeShippingThreshold = 1000;
  const progressPercent = Math.min(100, (rawSubtotal / freeShippingThreshold) * 100);
  const diffToFree = freeShippingThreshold - rawSubtotal;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'ARCHITECT10') {
      setAppliedPromo('ARCHITECT10');
      setPromoError(null);
    } else {
      setPromoError('Invalid code. Use "ARCHITECT10" for 10% architectural trade discount.');
    }
  };

  const handleCheckout = () => {
    onClose();
    if (onOpenCheckout) {
      onOpenCheckout(discountAmount, appliedPromo || '');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E2DBD0] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E8E2D8] flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl text-[#24211E]">Shopping Bag</h2>
              <p className="text-[11px] text-stone-500 tracking-wide mt-0.5">
                {items.length} {items.length === 1 ? 'fitting' : 'fittings'} selected
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close bag"
              className="p-1.5 text-stone-600 hover:text-black rounded-full hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-5 py-3 bg-[#F0EAE0]/70 border-b border-[#E5DFD4] text-xs">
            {diffToFree > 0 ? (
              <p className="text-stone-700">
                Add <span className="font-semibold text-[#24211E] font-mono">${diffToFree.toLocaleString()}</span> more for complimentary White-Glove delivery.
              </p>
            ) : (
              <p className="text-emerald-800 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Complimentary Insured White-Glove Shipping unlocked</span>
              </p>
            )}
            <div className="w-full bg-[#DDD6C8] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#725C48] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-serif text-xl text-stone-600">Your bag is empty</p>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our curated architectural fittings and select from high-grade brassware, stone bathtubs, and showers.
                </p>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedFinish}-${idx}`}
                  className="flex gap-3.5 p-3 bg-white border border-[#E8E2D7] rounded-[2px]"
                >
                  <div className="w-20 h-20 bg-[#F6F2EC] rounded-xs flex items-center justify-center p-2 shrink-0 border border-[#E8E2D7]">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-[#24211E] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#725C48] font-medium mt-0.5">
                      Finish: {item.selectedFinish}
                    </p>
                    <p className="text-xs font-mono font-medium text-[#24211E] mt-1">
                      ${item.product.price.toLocaleString()}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#DDD5C8] rounded-xs bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedFinish, -1)}
                          className="p-1 hover:bg-[#EDE7DC] text-stone-600 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedFinish, 1)}
                          className="p-1 hover:bg-[#EDE7DC] text-stone-600 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedFinish)}
                        className="text-stone-400 hover:text-red-700 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal, Promo Code & Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E8E2D8] bg-[#F4EFE6] space-y-3">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="space-y-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Discount code (e.g. ARCHITECT10)"
                    className="flex-1 bg-white border border-[#DDD5C8] rounded-[2px] px-3 py-1.5 text-xs text-stone-900 focus:outline-none uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#24211E] text-white text-[11px] font-semibold uppercase tracking-wider rounded-[2px] hover:bg-black cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <div className="text-[11px] text-emerald-800 font-semibold flex items-center justify-between">
                    <span>Applied: {appliedPromo} (10% Trade Discount)</span>
                    <button
                      type="button"
                      onClick={() => setAppliedPromo(null)}
                      className="text-stone-500 hover:text-red-700 underline"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {promoError && (
                  <div className="text-[11px] text-amber-800 font-medium">{promoError}</div>
                )}
              </form>

              {/* Subtotal & Discount Breakdown */}
              <div className="space-y-1 pt-2 border-t border-[#E0D7CA] text-xs">
                <div className="flex items-center justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium">${rawSubtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex items-center justify-between text-emerald-800 font-semibold">
                    <span>Discount (ARCHITECT10)</span>
                    <span className="font-mono">-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm font-bold text-[#24211E] pt-1 border-t border-[#E0D7CA]">
                  <span>Total</span>
                  <span className="text-base font-mono font-semibold">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-stone-500">
                15-year PVD finish & ceramic valve guarantee included. White-glove insured carrier dispatched within 24h.
              </p>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 bg-[#725C48] hover:bg-[#5C4938] text-white text-xs tracking-wider uppercase font-medium rounded-xs flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
