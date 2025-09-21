"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Home, Heart, ShoppingCart, Bell, User } from "lucide-react";

export default function BottomNav() {
  const [active, setActive] = useState<string>("home");
  const [mounted, setMounted] = useState(false);

  // avoid SSR mismatch - only render portal on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menus = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "wishlist", icon: <Heart size={20} />, label: "Wishlist" },
    { id: "cart", icon: <ShoppingCart size={26} />, label: "Cart" },
    { id: "notif", icon: <Bell size={20} />, label: "Notif" },
    { id: "profile", icon: <User size={20} />, label: "Profile" },
  ];

  const nav = (
    // nav is appended to body so fixed works reliably
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-0 right-0 z-[60]"
      // include safe-area inset for devices with notch
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* center and limit width so middle floating button lines up with page content */}
      <div className="mx-auto max-w-4xl px-4">
        <ul className="relative flex items-center justify-between bg-white border-t border-gray-100 shadow-[0_-6px_20px_rgba(2,6,23,0.06)] rounded-t-lg py-3">
          {menus.map((m) => {
            const isCart = m.id === "cart";
            const isActive = active === m.id;
            return (
              <li
                key={m.id}
                className={`flex flex-col items-center justify-center ${
                  isCart ? "relative -mt-6" : ""
                }`}
              >
                <button
                  onClick={() => setActive(m.id)}
                  className={`flex items-center justify-center transition-transform duration-200 ease-in-out
                    ${isCart ? "w-14 h-14 rounded-full shadow-lg" : "w-10 h-10 rounded"}
                    ${
                      isCart
                        ? `bg-[#0ea5e9] text-white ${isActive ? "scale-110" : "scale-100"}`
                        : `${isActive ? "text-[#0ea5e9] scale-110" : "text-gray-400 scale-100"}`
                    }`}
                >
                  {m.icon}
                </button>

                {/* label under icon (hide for cart) */}
                {!isCart && (
                  <span
                    className={`mt-1 text-[11px] transition-colors duration-200 ${
                      isActive ? "text-[#0ea5e9] font-medium" : "text-gray-400"
                    }`}
                  >
                    {m.label}
                  </span>
                )}

                {/* badges (example: cart and notif) */}
                {m.id === "cart" && (
                  <span className="absolute -top-2 right-0 inline-flex items-center justify-center bg-white rounded-full px-1 text-[11px] text-[#0ea5e9] border border-gray-200">
                    2
                  </span>
                )}
                {m.id === "notif" && (
                  <span className="absolute -top-2 right-0 inline-flex items-center justify-center bg-[#0ea5e9] text-white rounded-full w-5 h-5 text-xs">
                    3
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );

  return createPortal(nav, document.body);
}
