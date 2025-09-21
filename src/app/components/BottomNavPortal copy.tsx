"use client";

import { createPortal } from "react-dom";
import { Home, Heart, QrCode, Bell, User } from "lucide-react";

export default function BottomNavPortal() {
  return createPortal(
        <nav className="bottom-navbar">
        {/* grup kiri */}
        <div className="nav-group">
            <button><Home size={22} /></button>
            <button><Heart size={22} /></button>
        </div>

        {/* Cart floating */}
        <button className="cart-btn">
            <QrCode size={24} />
        </button>





        {/* grup kanan */}
        <div className="nav-group">
            <button><Bell size={22} /></button>
            <button><User size={22} /></button>
        </div>
        </nav>
,
    document.body
  );
}
