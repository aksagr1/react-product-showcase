import React from 'react';

// --- ProductCard Component ---
const ProductCard = ({ name, price, stockStatus, imageUrl }) => {
  const isAvailable = stockStatus === 'In Stock';

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 text-center flex flex-col items-center group overflow-hidden">
      {/* Product Image */}
      <div className="relative w-full h-48 mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/f0f0f0/333?text=Product'; }}
        />
      </div>

      {/* Product Name */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>

      {/* Product Price */}
      <p className="text-2xl font-bold text-gray-900 mb-3">${price.toFixed(2)}</p>

      {/* Stock Status */}
      <div className={`text-sm font-medium py-1 px-3 rounded-full ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {stockStatus}
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  const products = [
    {
      id: 1,
      name: 'Aura Wireless Headphones',
      price: 249.99,
      stockStatus: 'In Stock',
      imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Zenith Tablet Pro',
      price: 649.00,
      stockStatus: 'In Stock',
      imageUrl: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Voyager Drone',
      price: 899.50,
      stockStatus: 'Out of Stock',
      imageUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'Rift VR Headset',
      price: 499.00,
      stockStatus: 'In Stock',
      imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="mb-4 text-2xl font-bold text-gray-800 tracking-widest uppercase">
            Nexus
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Latest in Tech
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Discover our new collection of premium electronics, designed for performance and style.
          </p>
        </header>

        {/* Product Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.filter(product => product.imageUrl).map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              stockStatus={product.stockStatus}
              imageUrl={product.imageUrl}
            />
          ))}
        </main>

         {/* Footer */}
        <footer className="text-center mt-20 text-gray-400">
            <p>&copy; {new Date().getFullYear()} Modern Electronics. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
