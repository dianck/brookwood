"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Trending() {
  const products = [
    {
      name: "Lavender",
      price: 1250,
      img: "/assets/images/homepage/tranding-1.png",
    },
    {
      name: "Jasmine",
      price: 1350,
      img: "/assets/images/homepage/tranding-2.png",
    },
    {
      name: "Rose",
      price: 1500,
      img: "/assets/images/homepage/tranding-1.png",
    },
    {
      name: "Orchid",
      price: 1600,
      img: "/assets/images/homepage/tranding-2.png",
    },
  ];

  return (
    <section id="homepage-trending" className="trending-sec py-1">
      <div className="container">
        <div className="flex justify-between items-center mb-4">
          <h2 className="heading-small">Trending Items</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Lihat →
          </a>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000, // 3 detik
            disableOnInteraction: false,
          }}
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col">
                {/* Kotak gambar */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Teks di luar card */}
                <div className="mt-2">
                  <h6 className="font-semibold text-gray-800 text-sm">
                    {p.name}
                  </h6>
                  <p className="text-gray-600 text-sm">Rp.{p.price}rb</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
