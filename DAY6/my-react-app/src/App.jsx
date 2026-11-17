import React, { useState } from 'react';
import { productsData } from './data/productsData';
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Pretraga ISKLJUČIVO po imenu proizvoda (title)
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePurchase = (title) => {
    alert(`Order successful: ${title}!`);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* NAVBAR */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#top"><b>HAUM electronics</b></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#top">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#about">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#products">Products</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* CAROUSEL */}
      <div id="carouselExampleCaptions" className="carousel slide my-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/slogan.jpg" className="d-block w-100" alt="Slogan" />
          </div>
          <div className="carousel-item">
            <img src="/images/home2.jpg" className="d-block w-100" alt="Home 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5><b>Your very own smarthaum</b></h5>
              <p>With over 10000 features!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/home.jpg" className="d-block w-100" alt="Home" />
            <div className="carousel-caption d-none d-md-block">
              <h5><b>Built in HAUM.ai</b></h5>
              <p>It will control all systems inside the haum.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* PRODUCTS SECTION + SEARCH */}
      <section className="py-5" id="products">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Our Products</h2>
          
          {/* Jednostavan Search input */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control p-3 shadow-sm"
                placeholder="Pretraži proizvode po imenu (npr. TV, Lock)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Kartice proizvoda */}
          <div className="row g-4" id="product-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 shadow-sm">
                    <img className="card-img-top" src={product.image} alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                    <div className="card-body">
                      <button 
                        className="btn btn-primary" 
                        onClick={() => handlePurchase(product.title)}
                      >
                        PURCHASE NOW
                      </button>
                      <span className="fw-bold fs-5 text-primary product-price">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4">
                <p className="fs-5 text-muted">Nema rezultata za pretragu "{searchTerm}".</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">About HAUM Electronics</h2>
              <p className="lead text">
                We are dedicated to delivering modern electronics solutions with top-notch performance and quality.
              </p>
              <p>
                Founded in 2010 in the Bay area, HAUM Electronics specializes in high-quality hardware and innovative tech products designed to simplify everyday life. Our mission is to combine sleek design with reliable engineering for modern homes.
              </p>
              <a href="#products" className="btn btn-primary mt-2">Explore Our Products</a>
            </div>
            <div className="col-md-6">
              <img src="/images/team.jpg" className="img-fluid rounded shadow-sm" alt="About HAUM Electronics" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; 2026 HAUM electronics Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}