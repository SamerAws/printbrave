
"use client";

import { useState } from "react";
import ProductSlider from "./ProductSlider";

export default function ShopClient({
  products,
}: {
  products: any[];
}) {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-10">
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
          >

            <ProductSlider
              image={product.image}
              video={product.video}
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3">
                {product.name}
              </h2>

              <p className="text-zinc-400 mb-6">
                {product.description}
              </p>

              <p className="text-orange-500 text-2xl font-bold mb-6">
                {product.price.toLocaleString()} د.ع
              </p>

              <a
                href={`/product/${product.id}`}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl font-bold"
              >
                عرض المنتج
              </a>

            </div>

          </div>
        ))}

      </div>
    </>
  );
}
