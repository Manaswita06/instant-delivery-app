import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { groceries, vegetables, fruits } from "../data/products";

export default function StorePage({ cart, addToCart, removeFromCart, totalItems }) {
  const { category } = useParams(); // Gets 'grocery', 'vegetables', etc. from URL

  // Logic to decide which items to show
  let displayProducts = [];

  if (!category) {
    // Show everything if no category is selected (Shop All)
    displayProducts = [...groceries, ...vegetables, ...fruits];
  } else if (category === "grocery") {
    displayProducts = groceries;
  } else if (category === "vegetables") {
    displayProducts = vegetables;
  } else if (category === "fruits") {
    displayProducts = fruits;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-white text-xl font-bold no-underline">← QuickKart</Link>
          <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold uppercase">
            {category ? `${category} Section` : "All Items"}
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 pb-32">
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
            {displayProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                quantity={cart[product.id] || 0}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-slate-400">No products found in this category.</h2>
            <Link to="/store" className="text-primary font-bold">View all products</Link>
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="text-left">
            <span className="text-xl font-black block">{totalItems} Items</span>
            <p className="text-[10px] font-bold text-slate-400 uppercase m-0">In Your Cart</p>
          </div>
          <button className="bg-accent-yellow px-10 py-3 rounded-xl font-black shadow-md hover:brightness-95 active:scale-95 transition-all">
            Checkout →
          </button>
        </div>
      </footer>
    </div>
  );
}