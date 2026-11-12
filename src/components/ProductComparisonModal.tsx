import React from 'react';
import { X, Check, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, finish: string) => void;
}

export const ProductComparisonModal: React.FC<ProductComparisonModalProps> = ({
  products,
  onClose,
  onSelectProduct,
  onAddToCart,
}) => {
  if (products.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-xs" />

      <div className="relative bg-[#FAF8F5] border border-[#DDD5C8] rounded-sm max-w-6xl w-full shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-[#E8E2D7] flex items-center justify-between bg-white">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
              SPECIFICATION BENCHMARK
            </span>
            <h2 className="font-serif text-2xl text-[#24211E]">
              Architectural Product Comparison ({products.length} models)
            </h2>
          </div>
          <button onClick={onClose} className="p-1.5 text-stone-500 hover:text-black rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-6">
          <table className="w-full border-collapse text-left text-xs min-w-[700px]">
            <thead>
              <tr className="border-b border-[#DDD5C8]">
                <th className="p-3 w-44 text-stone-400 font-normal uppercase text-[11px] tracking-wider">
                  Specification
                </th>
                {products.map((p) => (
                  <th key={p.id} className="p-3 w-64 align-top">
                    <div className="bg-[#F3EFE7] rounded-sm p-4 h-48 flex items-center justify-center mb-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-md scale-110"
                      />
                    </div>
                    <div className="text-[11px] font-mono text-stone-400">{p.modelNumber}</div>
                    <div className="font-medium text-sm text-[#24211E] line-clamp-2 mb-1">{p.name}</div>
                    <div className="text-sm font-mono font-semibold text-[#725C48] mb-3">
                      ${p.price.toLocaleString()}
                    </div>
                    <button
                      onClick={() => onAddToCart(p, p.finishes[0]?.name || 'Standard')}
                      className="w-full py-1.5 px-2 bg-[#24211E] hover:bg-[#38332F] text-white text-[11px] uppercase tracking-wider font-medium rounded-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE4D9]">
              <tr>
                <td className="p-3 font-medium text-stone-500">Department &amp; Category</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-stone-800">
                    {p.department} · {p.category}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">Mounting / Installation</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-stone-800 font-medium">
                    {p.specs?.mountingType || 'Standard'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">Primary Material</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-stone-700">
                    {p.specs?.material}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">Internal Valve / Cartridge</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-stone-700">
                    {p.specs?.cartridge || 'Precision Ceramic Valve'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">Water Flow Velocity</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-stone-700">
                    {p.specs?.flowRate || 'Standard Optimized Flow'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">Physical Dimensions</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-stone-700 font-mono text-[11px]">
                    {p.specs?.dimensions}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">Architectural Finishes</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.finishes.map((f) => (
                        <span
                          key={f.code}
                          className="px-2 py-0.5 rounded-full text-[10px] border border-stone-300 bg-white"
                        >
                          {f.name}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">In The Box</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-stone-600 text-[11px]">
                    <ul className="list-disc list-inside space-y-0.5">
                      {p.whatsInTheBox.included.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-medium text-stone-500">Required Separately</td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 text-[#725C48] text-[11px]">
                    {p.whatsInTheBox.requiredSeparately ? (
                      <ul className="list-disc list-inside">
                        {p.whatsInTheBox.requiredSeparately.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-stone-400">Complete self-contained kit</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
