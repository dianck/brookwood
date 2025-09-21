"use client";

export default function Inspiration() {
  const inspirations = [
    {
      title: "Kost Putri Az-Zahra",
      items: 9,
      img: "/assets/images/homepage/inspiration-1.png",
    },
    {
      title: "Kost Putri Azkya",
      items: 15,
      img: "/assets/images/homepage/inspiration-2.png",
    },
    {
      title: "Kost Putra Al-Fatih",
      items: 10,
      img: "/assets/images/homepage/inspiration-3.png",
    },
  ];

  return (
    <section id="homepage-inspiration" className="py-2">
      <div className="container">
        <h2 className="heading-small">Graha Group</h2>

        <div className="flex flex-col gap-4">
          {inspirations.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden h-[100px]" // tinggi fix 200px
            >
              {/* Background image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center px-6">
                <h3 className="text-white font-bold text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="text-white text-sm">{item.items} kamar</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
