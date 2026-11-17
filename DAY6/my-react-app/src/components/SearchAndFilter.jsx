import React from 'react';

export default function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  categories
}) {
  return (
    <div className="card p-3 mb-4 shadow-sm border-0 bg-white">
      <div className="row g-3 align-items-center">
        {/* Search Input */}
        <div className="col-12 col-md-5">
          <label htmlFor="search" className="form-label fw-bold mb-1">Pretraži proizvode</label>
          <input
            id="search"
            type="text"
            className="form-control"
            placeholder="Unesi naziv ili opis (npr. TV, lock, AI)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="col-12 col-sm-6 col-md-4">
          <label htmlFor="category" className="form-label fw-bold mb-1">Kategorija</label>
          <select
            id="category"
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "All" ? "Sve kategorije" : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="col-12 col-sm-6 col-md-3">
          <label htmlFor="priceRange" className="form-label fw-bold mb-1">
            Max cijena: <span className="text-primary">{maxPrice}$</span>
          </label>
          <input
            id="priceRange"
            type="range"
            className="form-range"
            min="400"
            max="2600"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}