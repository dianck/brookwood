// components/SidebarMenu.tsx
"use client";

import { X, Home, QrCode, DollarSign, UserCog, Info, HelpCircle, LogOut } from "lucide-react";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  return (
    <>
      {/* Overlay transparan */}
      <div
        className={`fixed inset-0 transition-opacity duration-200
          ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
          z-30`}
        style={{
          background: "none",
          backgroundColor: "transparent",
        }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          z-40 flex flex-col min-w-[140px] max-w-[200px]`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-sm font-bold">Account</h2>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-2 space-y-[10px]"> {/* jarak antar item 10px */}
          <MenuItem icon={<UserCog className="h-5 w-5" />} label="Profile" />
          <MenuItem icon={<Home className="h-5 w-5" />} label="Homepage2" />
          <MenuItem icon={<QrCode className="h-5 w-5" />} label="Access QR" />
          <MenuItem icon={<DollarSign className="h-5 w-5" />} label="Currency" />
          <MenuItem icon={<Info className="h-5 w-5" />} label="About Us" />
          <MenuItem icon={<HelpCircle className="h-5 w-5" />} label="FAQs" />
          <MenuItem icon={<LogOut className="h-5 w-5" />} label="Sign Out" />
        </nav>
      </aside>
    </>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <div className="flex items-center gap-2">
        <div className="p-2 bg-gray-900 text-white rounded-lg">{icon}</div>
        <span className="text-gray-800 text-sm">{label}</span>
      </div>
      <span className="text-gray-400">{">"}</span>
    </a>
  );
}
