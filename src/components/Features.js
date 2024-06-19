import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Features() {
  return (
    <section className="py-5" id="features">
      <div className="container text-center">
        <h2 className="display-4">Features</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Feature 1" className="mb-3 img-fluid" />
            <h3>Feature 1</h3>
            <p>Detail about feature 1.</p>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Feature 2" className="mb-3 img-fluid" />
            <h3>Feature 2</h3>
            <p>Detail about feature 2.</p>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/150" alt="Feature 3" className="mb-3 img-fluid" />
            <h3>Feature 3</h3>
            <p>Detail about feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
