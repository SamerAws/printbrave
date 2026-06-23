
"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="ابحث عن منتج..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white"
      />
    </div>
  );
}
