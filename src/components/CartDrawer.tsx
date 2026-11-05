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
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 1500;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const diffToFree = freeShippingThreshold - subtotal;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderConfirmed(true);
    setTimeout(() => {
      onClearCart();
    }, 1500);
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
            {orderConfirmed ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#725C48] mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl text-[#24211E]">Order Confirmed</h3>
                <p className="text-xs text-stone-600 max-w-xs mx-auto">
                  Thank you, {customerName || 'valued client'}. Your architectural order is being prepared by our master dispatch atelier.
                </p>
                <div className="p-3 bg-[#EFE9DD] rounded-sm text-xs font-mono text-stone-700 max-w-xs mx-auto">
                  Reference: SMPL-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  onClick={() => {
                    setOrderConfirmed(false);
                    setIsCheckingOut(false);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#24211E] text-white text-xs tracking-wider uppercase rounded-xs"
                >
                  Continue Browsing
                </button>
              </div>
            ) : isCheckingOut ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                <div className="pb-2 border-b border-[#E5DFD4]">
                  <h3 className="font-serif text-lg text-[#24211E]">Delivery & Billing Details</h3>
                  <p className="text-[11px] text-stone-500">Provide project delivery specifications</p>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Full Name / Architect Name</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Julian Ross Studio"
                    className="w-full p-2.5 bg-white border border-[#D5CCC0] rounded-xs text-xs focus:outline-none focus:border-[#725C48]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="studio@architecture.com"
                    className="w-full p-2.5 bg-white border border-[#D5CCC0] rounded-xs text-xs focus:outline-none focus:border-[#725C48]"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Site Delivery Address</label>
                  <textarea
                    required
                    rows={2}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Street, City, Postal Code"
                    className="w-full p-2.5 bg-white border border-[#D5CCC0] rounded-xs text-xs focus:outline-none focus:border-[#725C48]"
                  />
                </div>

                <div className="p-3 bg-[#EFEAE2] rounded-xs space-y-1 text-[11px] text-stone-600">
                  <div className="flex justify-between">
                    <span>Order Subtotal:</span>
                    <span className="font-mono font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>White-Glove Courier:</span>
                    <span className="font-mono font-medium text-emerald-800">
                      {subtotal >= freeShippingThreshold ? 'FREE' : '$120'}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#DDD4C7] font-semibold text-[#24211E]">
                    <span>Total Investment:</span>
                    <span className="font-mono">
                      ${(subtotal + (subtotal >= freeShippingThreshold ? 0 : 120)).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="flex-1 py-2.5 border border-[#D5CCC0] text-stone-700 rounded-xs font-medium"
                  >
                    Back to Bag
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#725C48] hover:bg-[#5C4938] text-white rounded-xs font-medium uppercase tracking-wider"
                  >
                    Confirm Order
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
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
                  <div className="w-18 h-18 bg-[#F6F2EC] rounded-xs flex items-center justify-center p-2 shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain"
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
                          className="p-1 hover:bg-[#EDE7DC] text-stone-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedFinish, 1)}
                          className="p-1 hover:bg-[#EDE7DC] text-stone-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedFinish)}
                        className="text-stone-400 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {!orderConfirmed && items.length > 0 && !isCheckingOut && (
            <div className="p-5 border-t border-[#E8E2D8] bg-[#F4EFE6] space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span>Subtotal</span>
                <span className="text-base font-mono font-semibold text-[#24211E]">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <p className="text-[10px] text-stone-500">
                Taxes calculated at dispatch. 15-year warranty included on all PVD architectural hardware.
              </p>

              <button
                onClick={() => setIsCheckingOut(true)}
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
