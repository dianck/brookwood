"use client";

export default function HeroCarousel() {
  return (
    <section className="homepage-first-sec">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"   // otomatis pindah tiap 4 detik
      >
        {/* Indicators */}
        <div className="carousel-indicators homepage-custom-indicator">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active homepage-custom-dots"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="homepage-custom-dots"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="homepage-custom-dots"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/images/homepage/bg-img.png"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption custom-slider-caption">
              <p className="homepage-slide-txt">This Week Offers</p>
              <h1 className="homepage-slide-title">
                Ruangmu, Gayamu
              </h1>
              <div className="shop-now-btn mt-16">
                <a href="#">Booking</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/assets/images/homepage/bg-img.png"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption custom-slider-caption">
              <p className="homepage-slide-txt">This Week Offers</p>
              <h1 className="homepage-slide-title">
                Keanggunan yang Nyaman
              </h1>
              <div className="shop-now-btn mt-16">
                <a href="#">Booking</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/assets/images/homepage/bg-img.png"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption custom-slider-caption">
              <p className="homepage-slide-txt">This Week Offers</p>
              <h1 className="homepage-slide-title">
                Elegan dan Penuh Makna
              </h1>
              <div className="shop-now-btn mt-16">
                <a href="#">Booking</a>
              </div>
            </div>
          </div>
        </div>

        {/* Controls (opsional) */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
