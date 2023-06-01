import React from "react";
import "./Main_c.css";

function Mainsection() {
  return (
    <div className="MainSection">
    <div id="carouselExampleCaptions" class="carousel slide carousel-custom" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="5000" data-bs-pause="hover">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <img src="#" class="d-block w-100 cp cp1" alt=""/>
            <div class="carousel-caption d-none d-md-block fss">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" >
            <img src="#" class="d-block w-100 cp cp2" alt=""/>
            <div class="carousel-caption d-none d-md-block fss">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item" >
            <img src="#" class="d-block w-100 cp cp3" alt=""/>
            <div class="carousel-caption d-none d-md-block fss">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div>
  );
}

export default Mainsection;
