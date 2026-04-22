import { Link } from "react-router-dom";

export default function WelcomePage() {
  const categories = [
    { name: "Grocery", slug: "grocery", icon: "🥫", bg: "bg-orange-100" },
    { name: "Vegetables", slug: "vegetables", icon: "🥦", bg: "bg-green-100" },
    { name: "Fruits", slug: "fruits", icon: "🍎", bg: "bg-red-100" },
    { name: "Dairy", slug: "dairy", icon: "🥛", bg: "bg-blue-100" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="bg-primary p-12 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black mb-4">10 Minute Delivery 🚀</h1>
          <p className="text-lg opacity-90 mb-8">Freshness delivered to your home.</p>
          <Link to="/store" className="bg-white text-primary px-8 py-4 rounded-2xl font-black shadow-xl inline-block">
            Shop All Items
          </Link>
        </div>
      </div>
      <main className="max-w-7xl mx-auto w-full p-8">
        <h2 className="text-2xl font-black mb-8 text-slate-900">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link 
              to={`/store/${cat.slug}`} 
              key={cat.name} 
              className={`${cat.bg} p-8 rounded-3xl flex flex-col items-center hover:shadow-lg transition-all border-2 border-transparent hover:border-white`}
            >
              <span className="text-5xl mb-4">{cat.icon}</span>
              <span className="font-bold text-slate-800">{cat.name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}