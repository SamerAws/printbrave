"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">

      {/* Desktop */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 h-20 items-center justify-between">

        <div className="hidden md:flex items-center gap-8">
          <Link href="/">الرئيسية</Link>
          <Link href="/auth">حسابي</Link>
          <Link href="/shop">المتجر</Link>
          <Link href="/orders">طلباتي</Link>
          <Link href="/upload">اطلب تصميم خاص</Link>
          <Link href="/contact">تواصل</Link>
        </div>

        <form action="/search" className="hidden md:block">
          <input
            type="text"
            name="q"
            placeholder="ابحث عن منتج..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2"
          />
        </form>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="bg-orange-500 text-black px-4 py-2 rounded-xl font-bold"
          >
            🛒 {cartCount}
          </Link>

          <h1 className="text-3xl font-bold">
            <span className="text-white">PRINT</span>{" "}
            <span className="text-orange-500">BRAVE</span>
          </h1>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">

        <div className="flex items-center justify-between px-4 py-4">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white"
          >
            ☰
          </button>

          <h1 className="text-2xl font-bold">
            <span className="text-white">PRINT</span>{" "}
            <span className="text-orange-500">BRAVE</span>
          </h1>

          <Link
            href="/cart"
            className="bg-orange-500 text-black px-4 py-3 rounded-xl font-bold text-lg"
          >
            🛒 {cartCount}
          </Link>
        </div>

        <div className="px-4 pb-4">
          <form action="/search">
            <input
              type="text"
              name="q"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3"
            />
          </form>
        </div>

        {menuOpen && (
          <div className="bg-zinc-950 border-t border-zinc-800 px-4 py-4 flex flex-col gap-4">

            <Link href="/">الرئيسية</Link>

            <Link href="/auth">
              حسابي
            </Link>

            <Link href="/shop">
              المتجر
            </Link>

            <Link href="/orders">
              طلباتي
            </Link>

            <Link href="/upload">
              اطلب تصميم خاص
            </Link>

            <Link href="/contact">
              تواصل
            </Link>

          </div>
        )}

      </div>

    </nav>
  );
}