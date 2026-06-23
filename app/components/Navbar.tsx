
"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-8">
          <Link href="/" className="hover:text-orange-500">
            الرئيسية
          </Link>
<Link href="/auth" className="hover:text-orange-500">
  حسابي
</Link>
          <Link href="/shop" className="hover:text-orange-500">
            المتجر
          </Link>
<Link href="/orders" className="hover:text-orange-500">
  طلباتي
</Link>
          <Link href="/upload" className="hover:text-orange-500">
            اطلب تصميم خاص
          </Link>

          <Link href="/contact" className="hover:text-orange-500">
            تواصل
          </Link>
        </div>

        
<form action="/search">
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
    </nav>
  );
}
