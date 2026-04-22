export default function ProductCard({ product, quantity, onAdd, onRemove }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 flex-1 flex flex-col items-center">
        <div className="h-32 w-full flex items-center justify-center mb-3">
          <img src={product.image} alt={product.name} className="max-h-full rounded-lg object-contain hover:scale-105 transition-transform" />
        </div>
        <h3 className="text-sm font-bold text-slate-800 mb-1 text-center line-clamp-2">{product.name}</h3>
        <p className="text-primary font-extrabold">₹{product.price}</p>
      </div>

      <div className="p-3 pt-0">
        {quantity === 0 ? (
          <button
            onClick={() => onAdd(product.id)}
            className="bg-primary text-white w-full py-2.5 rounded-xl font-bold hover:brightness-95 active:scale-95 transition-all shadow-sm"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center justify-between bg-primary rounded-xl p-1 shadow-sm">
            <button onClick={() => onRemove(product.id)} className="text-white w-9 h-9 flex items-center justify-center text-xl font-bold hover:bg-black/10 rounded-lg">−</button>
            <span className="text-white font-bold text-lg">{quantity}</span>
            <button onClick={() => onAdd(product.id)} className="text-white w-9 h-9 flex items-center justify-center text-xl font-bold hover:bg-black/10 rounded-lg">+</button>
          </div>
        )}
      </div>
    </div>
  );
}