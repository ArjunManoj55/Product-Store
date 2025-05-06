import React, { useEffect } from 'react';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-semibold text-center mb-8 text-blue-400 flex items-center justify-center gap-2">
        Current Products <span>🚀</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            product && (
              <ProductCard
                key={product._id || product.id || index} // ✅ Ensure unique fallback key
                product={product}
              />
            )
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
