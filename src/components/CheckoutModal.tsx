import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Check,
  CreditCard,
  Building,
  Truck,
  ArrowRight,
  ArrowLeft,
  Download,
  Lock,
} from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discount: number;
  discountCode: string;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discount,
  discountCode,
  onClearCart,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    firstName: 'Marcus',
    lastName: 'Vance',
    company: 'Vance Architectural Studio',
    email: 'marcus@vancearchitecture.com',
    phone: '+1 (555) 382-9901',
    address: '742 Evergreen Terrace, Suite 400',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
    deliveryInstructions: 'Direct to ground floor architectural loading bay.',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '•••',
  });
  const [orderNumber, setOrderNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const shipping = subtotal > 1000 ? 0 : 75;
  const total = Math.max(0, subtotal - discount + shipping);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        const randomNum = `SMPL-${Math.floor(100000 + Math.random() * 900000)}`;
        setOrderNumber(randomNum);
        setStep(3);
        onClearCart();
      }, 1400);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/75 backdrop-blur-xs" />

      {/* Modal Card */}
      <div className="relative bg-[#FAF8F5] border border-[#DDD5C8] rounded-[3px] max-w-3xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#24211E] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#725C48] flex items-center justify-center font-serif text-sm">
              S
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wider uppercase font-mono">
                SMPL Architectural Checkout
              </h2>
              <span className="text-[11px] text-stone-400">
                Encrypted 256-Bit SSL · Trade & Residential Logistics
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="bg-[#EFEAE2] border-b border-[#DDD5C8] px-6 py-3 flex items-center justify-between text-xs font-mono">
          <div
            className={`flex items-center gap-2 ${
              step >= 1 ? 'text-[#725C48] font-bold' : 'text-stone-500'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-[#725C48] text-white flex items-center justify-center text-[10px]">
              1
            </span>
            <span>Site & Contact</span>
          </div>
          <span className="text-stone-400">───</span>
          <div
            className={`flex items-center gap-2 ${
              step >= 2 ? 'text-[#725C48] font-bold' : 'text-stone-500'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step >= 2 ? 'bg-[#725C48] text-white' : 'bg-stone-300 text-stone-700'
              }`}
            >
              2
            </span>
            <span>Payment & Verification</span>
          </div>
          <span className="text-stone-400">───</span>
          <div
            className={`flex items-center gap-2 ${
              step === 3 ? 'text-emerald-800 font-bold' : 'text-stone-500'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 3 ? 'bg-emerald-800 text-white' : 'bg-stone-300 text-stone-700'
              }`}
            >
              3
            </span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div className="border-b border-[#E3DDD2] pb-3 mb-4">
                <h3 className="font-serif text-xl text-[#1C1917] font-normal">
                  Site Delivery & Architect Details
                </h3>
                <p className="text-xs text-stone-600">
                  Where should our white-glove palletized freight carrier deliver this specification?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                    Practice / Client Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                  Site Street Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full bg-white border border-[#DDD5C8] rounded-[2px] p-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#725C48]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#DDD5C8]">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-stone-600 hover:text-black font-semibold cursor-pointer"
                >
                  Return to Bag
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#725C48] hover:bg-[#584636] text-white text-xs uppercase font-semibold tracking-wider rounded-[2px] flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="border-b border-[#E3DDD2] pb-3">
                <h3 className="font-serif text-xl text-[#1C1917] font-normal">
                  Payment & Final Review
                </h3>
                <p className="text-xs text-stone-600">
                  Select your preferred settlement method. All transactions are securely processed.
                </p>
              </div>

              {/* Order Summary Recap */}
              <div className="bg-[#F2ECE1] p-4 rounded-[2px] border border-[#DDD5C8] space-y-2 text-xs">
                <div className="flex justify-between text-stone-700">
                  <span>Subtotal ({items.length} fittings)</span>
                  <span className="font-mono font-medium">${subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Architectural Discount ({discountCode})</span>
                    <span className="font-mono">-${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-700">
                  <span>White-Glove Insured Delivery</span>
                  <span className="font-mono">{shipping === 0 ? 'COMPLIMENTARY' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-[#DDD5C8]">
                  <span>Total Order Due</span>
                  <span className="font-mono text-base text-[#1C1917]">${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
                  Payment Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3.5 border rounded-[2px] text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'border-[#725C48] bg-white ring-2 ring-[#725C48]/20 shadow-xs'
                        : 'border-[#DDD5C8] bg-[#FAF8F5]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#725C48] mb-1" />
                    <div className="text-xs font-semibold text-stone-900">Credit / Debit Card</div>
                    <div className="text-[10px] text-stone-500">Visa, Mastercard, Amex</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'trade' })}
                    className={`p-3.5 border rounded-[2px] text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'trade'
                        ? 'border-[#725C48] bg-white ring-2 ring-[#725C48]/20 shadow-xs'
                        : 'border-[#DDD5C8] bg-[#FAF8F5]'
                    }`}
                  >
                    <Building className="w-4 h-4 text-[#725C48] mb-1" />
                    <div className="text-xs font-semibold text-stone-900">Trade Net 30</div>
                    <div className="text-[10px] text-stone-500">AIA / RIBA invoicing</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'wire' })}
                    className={`p-3.5 border rounded-[2px] text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'wire'
                        ? 'border-[#725C48] bg-white ring-2 ring-[#725C48]/20 shadow-xs'
                        : 'border-[#DDD5C8] bg-[#FAF8F5]'
                    }`}
                  >
                    <Lock className="w-4 h-4 text-[#725C48] mb-1" />
                    <div className="text-xs font-semibold text-stone-900">Direct Wire Transfer</div>
                    <div className="text-[10px] text-stone-500">0.5% bank rebate</div>
                  </button>
                </div>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="space-y-3 bg-white p-4 rounded-[2px] border border-[#DDD5C8]">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#DDD5C8] rounded-[2px] p-2 text-xs font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cardExp}
                        onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#DDD5C8] rounded-[2px] p-2 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 uppercase mb-1">
                        Security CVC
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-[#DDD5C8] rounded-[2px] p-2 text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center justify-between border-t border-[#DDD5C8]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-stone-600 hover:text-black font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Site Details</span>
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-8 py-3.5 bg-[#725C48] hover:bg-[#584636] text-white text-xs uppercase font-semibold tracking-wider rounded-[2px] flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Authorizing Order...</span>
                  ) : (
                    <>
                      <span>Complete Order — ${total.toLocaleString()}</span>
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#725C48] font-bold block mb-1">
                  ORDER CONFIRMED & COMMITTED TO DISPATCH
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-normal mb-2">
                  Thank You, {formData.firstName}.
                </h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Your order reference <strong className="font-mono text-stone-900">{orderNumber}</strong> has been assigned to our logistics facility. A white-glove consignment tracking link has been sent to <strong>{formData.email}</strong>.
                </p>
              </div>

              <div className="bg-[#F4EFEA] p-5 rounded-[2px] border border-[#DDD5C8] max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between font-semibold text-stone-900 pb-2 border-b border-[#DDD5C8]">
                  <span>Delivery Address:</span>
                  <span className="font-normal text-stone-700">{formData.address}, {formData.city}</span>
                </div>
                <div className="flex justify-between font-semibold text-stone-900 pb-2 border-b border-[#DDD5C8]">
                  <span>Estimated Dispatch:</span>
                  <span className="font-normal text-emerald-800 font-semibold">Within 24–48 Hours</span>
                </div>
                <div className="flex justify-between font-semibold text-stone-900">
                  <span>Warranty Activation:</span>
                  <span className="font-normal text-stone-700">15-Year PVD Certificate Attached</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-3">
                <button
                  onClick={handlePrintReceipt}
                  className="px-5 py-2.5 bg-white border border-[#DDD5C8] text-xs font-semibold rounded-[2px] flex items-center gap-1.5 hover:bg-[#F2ECE1] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#725C48]" />
                  <span>Print Tax Invoice & Cut Sheet</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#725C48] text-white text-xs uppercase font-semibold tracking-wider rounded-[2px] hover:bg-[#584636] cursor-pointer"
                >
                  Return to Catalogue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
