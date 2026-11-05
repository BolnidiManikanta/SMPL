import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, finish: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-xs" />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E2DBD0] shadow-2xl flex flex-col">
          <div className="p-5 border-b border-[#E8E2D8] flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl text-[#24211E]">Saved Specifications</h2>
              <p className="text-[11px] text-stone-500 tracking-wide mt-0.5">
                {wishlist.length} architectural {wishlist.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-600 hover:text-black rounded-full hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <p className="font-serif text-xl text-stone-600">No saved items</p>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Click the heart icon on any product to save it to your project specification board.
                </p>
              </div>
            ) : (
              wishlist.map((prod) => (
                <div
                  key={prod.id}
                  className="flex gap-3.5 p-3.5 bg-white border border-[#E8E2D7] rounded-[2px]"
                >
                  <div className="w-18 h-18 bg-[#F6F2EC] rounded-xs flex items-center justify-center p-2 shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-medium text-[#24211E] truncate">{prod.name}</h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">{prod.material}</p>
                    <p className="text-xs font-mono font-medium text-[#24211E] mt-1">
                      ${prod.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-2 mt-2.5">
                      <button
                        onClick={() => {
                          onAddToCart(prod, prod.finishes[0]?.name || 'Standard');
                          onRemoveFromWishlist(prod.id);
                        }}
                        className="flex-1 py-1 px-2.5 bg-[#725C48] hover:bg-[#5C4938] text-white text-[10px] font-medium tracking-wider uppercase rounded-xs flex items-center justify-center gap-1 transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(prod.id)}
                        className="p-1 text-stone-400 hover:text-red-700"
                        title="Remove from board"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
