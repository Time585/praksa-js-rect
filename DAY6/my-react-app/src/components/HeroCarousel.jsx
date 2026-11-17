import React from 'react';

export default function HeroCarousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide my-4">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/slogan.jpg"
            onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80")}
            className="d-block w-100"
            alt="HAUM Slogan"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/home2.jpg"
            onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80")}
            className="d-block w-100"
            alt="Smart Haum"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="p-2 rounded"><b>Your very own smarthaum</b></h5>
            <p className="p-1 rounded">With over 10000 features!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/home.jpg"
            onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80")}
            className="d-block w-100"
            alt="HAUM AI"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="p-2 rounded"><b>Built in HAUM.ai</b></h5>
            <p className="p-1 rounded">It will control all systems inside the haum.</p>
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
  );
}