import React from "react";
import Gambar from "../../../img/carousel-mlm2.png";
export default function CarouselMlm() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Gambar} className="d-block w-100 img-fluid" alt="..." />
            <div class="carousel-caption">
              <h1>Program Ahli Madya (D III)</h1>
              <h1>Manajemen Logistik dan Material</h1>
              <h1>Institut Transportasi dan Logistik Trisakti</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
