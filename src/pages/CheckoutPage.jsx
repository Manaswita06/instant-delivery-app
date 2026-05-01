import { Link } from "react-router-dom";
import { groceries, vegetables, fruits } from "../data/products";

export default function CheckoutPage({ cart, totalItems }) {
  const allProducts = [...groceries, ...vegetables, ...fruits];
  
  // Calculate total price
  const cartItems = allProducts.filter(p => cart[p.id]);
  const totalPrice = cartItems.reduce((acc, p) => acc + (p.price * cart[p.id]), 0);
  const deliveryFee = totalItems > 0 ? 25 : 0;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center px-4">
          <Link to="/store" className="text-white text-xl font-bold no-underline mr-4">←</Link>
          <h2 className="text-xl font-bold m-0">Checkout</h2>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full p-4 md:p-6 space-y-6">
        {/* Order Summary */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest">Your Order</h3>
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt="" className="w-10 h-10 object-contain rounded-md bg-slate-50" />
                    <div>
                      <p className="font-bold text-sm text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-400">{cart[item.id]} x ₹{item.price}</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-800">₹{item.price * cart[item.id]}</p>
                </div>
              ))}
              <hr className="border-slate-100" />
              <div className="flex justify-between text-sm text-slate-500">
                <span>Item Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-500">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between text-lg font-black text-slate-900 pt-2">
                <span>Total to Pay</span>
                <span>₹{totalPrice + deliveryFee}</span>
              </div>
            </div>
          ) : (
            <p className="text-slate-400 text-center py-4">Your cart is empty.</p>
          )}
        </section>

        {/* Delivery Address */}
        <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <h3 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest">Delivery Details</h3>
          <div className="space-y-4">
            <input type="text" placeholder="House / Flat No." className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 ring-primary/20" />
            <input type="text" placeholder="Landmark" className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 ring-primary/20" />
            <select className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none">
              <option>Payment Method: Cash on Delivery</option>
              <option>UPI / Online Payment</option>
            </select>
          </div>
        </section>

        <button 
          disabled={totalItems === 0}
          className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-lg hover:brightness-95 active:scale-95 transition-all disabled:grayscale disabled:opacity-50"
          onClick={() => alert("Order Placed Successfully! 🚀")}
        >
          Place Order • ₹{totalPrice + deliveryFee}
        </button>
      </main>
    </div>
  );
}