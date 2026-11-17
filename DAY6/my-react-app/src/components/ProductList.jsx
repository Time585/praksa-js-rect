import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onReset }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-5 bg-white rounded shadow-sm">
        <h4 className="text-muted">Nema pronađenih proizvoda za odabrane kriterije.</h4>
        <button className="btn btn-outline-dark mt-3" onClick={onReset}>
          Resetiraj filtere
        </button>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}