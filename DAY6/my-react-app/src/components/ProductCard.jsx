import React from 'react';

export default function ProductCard({ product }) {
  const handlePurchase = () => {
    alert(`Order successful: ${product.title}!`);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <div className="position-relative">
          <img
            className="card-img-top"
            src={product.image}
            onError={(e) => (e.target.src = product.fallbackImage)}
            alt={product.title}
          />
          <span className="badge bg-dark position-absolute top-0 end-0 m-2">
            {product.category}
          </span>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{product.title}</h5>
          <p className="card-text flex-grow-1">{product.description}</p>

          <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
            <button onClick={handlePurchase} className="btn btn-primary fw-bold">
              PURCHASE NOW
            </button>
            <span className="fw-bold fs-5 text-dark">{product.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
}