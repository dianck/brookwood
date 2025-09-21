"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Logout() {
  return (
    <button
      onClick={() => signOut({ redirectTo: "/" })}
      className="inline-flex items-center justify-center px-3 py-1 bg-red-700 hover:bg-red-600 text-white text-sm font-semibold shadow-md cursor-pointer transition"
      style={{ borderRadius: "9999px" }} // paksa jadi kapsul
      data-cy="logout-button"
    >
      Logout
    </button>
  );
}



