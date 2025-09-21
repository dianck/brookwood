"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Categories() {
  const categories = [
    { name: "Chairs", items: 178, img: "/assets/images/homepage/category-1.png" },
    { name: "Sofas", items: 89, img: "/assets/images/homepage/category-2.png" },
    { name: "Tables", items: 120, img: "/assets/images/homepage/category-3.png" },
    { name: "Outdoor", items: 56, img: "/assets/images/homepage/category-2.png" },
    // { name: "Bedroom", items: 67, img: "/assets/images/homepage/category-5.png" },
    // { name: "Living Room", items: 99, img: "/assets/images/homepage/category-6.png" },
  ];

  return (
    <section id="homepage-category" className="py-1">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="heading-small">Kategori</h2>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Lihat →
          </a>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={100}
          slidesPerView={3} // tampil 3 kotak sekaligus
          loop={true}
          autoplay={{
            delay: 1000, // 1 detik
            disableOnInteraction: false,
            reverseDirection: false, // bergerak dari kanan ke kiri
          }}
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex-shrink-0 w-36">
                {/* Kotak gambar abu-abu */}
                <div className="bg-gray-100 rounded-lg flex items-center justify-center h-36 w-36">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Teks rata kiri */}
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  {cat.name}
                </p>
                <p className="text-xs text-gray-500">{cat.items} items</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
