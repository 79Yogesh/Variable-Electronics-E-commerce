import React, { useState, useEffect } from "react";
import ProductService from '../services/product.service';
import ShowProducts from './Products';

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch a limited number of products from the database
    ProductService.getAllProducts().then((response) => {
      setProducts(response.data.slice(0, 5)); // Displaying only the first 5 products
    });
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <ShowProducts product={product} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
