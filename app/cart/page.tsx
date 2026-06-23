
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  image?: string | null;
  quantity: number;
};

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart() as unknown as {
    cart: CartItem[];
    increaseQuantity: (id: string | number) => void;
    decreaseQuantity: (id: string | number) => void;
    removeFromCart: (id: string | number) => void;
  };

  const total = cart.reduce(
    (sum: number, item: CartItem) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping = 5000;
  const grandTotal = total + shipping;

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          سلة المشتريات
        </h1>

        {cart.length === 0 ? (
          <p className="text-zinc-400">
            السلة فارغة
          </p>
        ) : (
          <>
            <div className="space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900 p-4 rounded-2xl"
                >
                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4">

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                      )}

                      <div>
                        <h2 className="text-xl font-bold">
                          {item.name}
                        </h2>

                        <p className="text-zinc-400">
                          الكمية: {item.quantity}
                        </p>
                      </div>

                    </div>

                    <div className="text-orange-500 font-bold">
                      {(item.price * item.quantity).toLocaleString()} د.ع
                    </div>

                  </div>

                  <div className="flex gap-3 mt-4">

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-green-600 px-4 py-2 rounded-lg"
                    >
                      +
                    </button>

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-yellow-600 px-4 py-2 rounded-lg"
                    >
                      -
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 px-4 py-2 rounded-lg"
                    >
                      حذف
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-10 bg-zinc-900 p-6 rounded-2xl">

              <h2 className="text-3xl font-bold mb-4">
                ملخص الطلب
              </h2>

              <p className="mb-3">
                المنتجات: {total.toLocaleString()} د.ع
              </p>

              <p className="mb-3">
                الشحن: {shipping.toLocaleString()} د.ع
              </p>

              <p className="text-orange-500 text-3xl font-bold mb-6">
                الإجمالي: {grandTotal.toLocaleString()} د.ع
              </p>

              <Link
                href="/checkout"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl"
              >
                إتمام الطلب
              </Link>

            </div>

          </>
        )}

      </div>
    </main>
  );
}
