import React from 'react';

export default function About() {
  return (
    <section className="py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">About HAUM Electronics</h2>
            <p className="lead">
              We are dedicated to delivering modern electronics solutions with top-notch performance and quality.
            </p>
            <p>
              Founded in 2010 in the Bay area, HAUM Electronics specializes in high-quality hardware and innovative tech products designed to simplify everyday life. Our mission is to combine sleek design with reliable engineering for modern homes.
            </p>
            <a href="#products" className="btn btn-primary mt-2 fw-bold">
              Explore Our Products
            </a>
          </div>

          <div className="col-md-6">
            <img
              src="/images/team.jpg"
              onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80")}
              className="img-fluid rounded shadow-sm"
              alt="About HAUM Electronics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}