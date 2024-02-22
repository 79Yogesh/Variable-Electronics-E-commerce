import React from "react";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();

  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {homeCarouselData.map((item, index) => (
          <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`} onClick={() => navigate(item.path)}>
            <img
              className="d-block w-100 cursor-pointer mb-1"
              src={item.image}
              alt=""
              onDragStart={handleDragStart}
              role="presentation"
              style={{ height: '604px' }}
            />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HomeCarousel;
