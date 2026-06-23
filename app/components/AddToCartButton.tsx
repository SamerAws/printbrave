
"use client";

import { useCart } from "../context/CartContext";

export default function AddToCartButton({
  product,
}: {
  product: {
    id: number;
    name: string;
    price: number;
    image?: string | null;
  };
}) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
      className="w-full bg-orange-500 hover:bg-orange-600 text-black py-4 rounded-2xl font-bold text-xl"
    >
      أضف للسلة
    </button>
  );
}
