"use client";

import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import Inspiration from "../components/Inspiration";

export default function HomePage() {
  return (
    <Layout>
      <div className="pb-20"> 
        {/* Tambahkan padding bottom agar konten tidak ketutupan BottomNav */}
        <HeroCarousel />
        <Categories />
        <Trending />
        <Inspiration />
      </div>
    </Layout>
  );
}
