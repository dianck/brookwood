"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Logout from "./logout";

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const originalParentRef = useRef<HTMLElement | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (headerRef.current) {
      originalParentRef.current =
        headerRef.current.parentElement as HTMLElement | null;
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const attachToBody = () => {
      if (header.parentElement === document.body) return;
      const rect = header.getBoundingClientRect();
      const ph = document.createElement("div");
      ph.className = "navbar-placeholder";
      ph.style.width = `${rect.width}px`;
      ph.style.height = `${rect.height}px`;
      header.parentElement?.insertBefore(ph, header);
      placeholderRef.current = ph;
      document.body.appendChild(header);
      header.classList.add("scrolled");
    };

    const restoreOriginal = () => {
      const ph = placeholderRef.current;
      const parent = originalParentRef.current;
      if (ph && parent) {
        parent.insertBefore(header, ph);
        ph.remove();
        placeholderRef.current = null;
      }
      header.classList.remove("scrolled");
    };

    if (isStuck) attachToBody();
    else restoreOriginal();

    return () => restoreOriginal();
  }, [isStuck]);

  return (
    <>
      {/* Navbar */}
      <header ref={headerRef} id="top-navbar" className="top-navbar">
        {/* <div className="flex items-center justify-between px-1 py-2 bg-white shadow-sm"> */}
        <div className="flex items-center justify-between">
          {/* Left Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="menu"
            className="p-2"
          >
            <Image
              src="/assets/images/profile-page/menu-icon.svg"
              alt="menu-icon"
              width={24}
              height={24}
            />
          </button>

          {/* Center Title */}
          <div className="text-center flex-grow">
            <p className="m-0 font-bold text-primary">{process.env.NEXT_PUBLIC_APP_NAME}</p>
          </div>

          {/* Right Menu */}
          <ul className="flex items-center space-x-4 m-0">
            <li>
              <a href="search-page.html" aria-label="search">
                <Image
                  src="/assets/images/homepage/search-icon.svg"
                  alt="search-icon"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li className="relative">
              <a href="shopping-cart.html" aria-label="cart">
                <Image
                  src="/assets/images/homepage/cart-icon.svg"
                  alt="cart-icon"
                  width={20}
                  height={20}
                />
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs px-1">
                  2
                </span>
              </a>
            </li>
            <li>
            {session ? (
              <Logout />
            ) : (
              <Link
                href="/login"
                className="text-gray-700 hover:text-indigo-600 transition"
                data-cy="login-button"
              >
                Login
              </Link>
            )}              
            </li>
          </ul>
        </div>
      </header>

      {/* Sidebar Menu */}
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
