// src/components/Products.jsx
import React from 'react';
import { products } from '../data/products';

const Products = () => {
  return (
    <main className="flex-grow p-8 bg-black">
      <h2 className="text-3xl font-bold mb-4 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-700 mb-2">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
