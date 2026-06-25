import { prisma } from "../lib/prisma";
import {
  createProduct,
  deleteProduct,
  deleteOrder,
  addProductMedia,
  deleteProductMedia,
} from "./actions";

import type { Product, Order } from "@prisma/client";

export default async function AdminPage() {
  
const media = await prisma.productMedia.findMany({
  orderBy: {
    id: "desc",
  },
});

  const products: Product[] = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  const orders: Order[] = await prisma.order.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        لوحة الإدارة
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">
          إضافة منتج جديد
        </h2>
        
<div className="bg-zinc-900 p-6 rounded-2xl mb-10">
  <h2 className="text-2xl font-bold mb-4">
    إضافة صور وفيديوهات
  </h2>

  <form
    action={addProductMedia}
    className="space-y-4"
  >
    <select
      name="productId"
      className="w-full bg-zinc-800 p-4 rounded-xl"
      required
    >
      <option value="">
        اختر المنتج
      </option>

      {products.map((product) => (
        <option
          key={product.id}
          value={product.id}
        >
          {product.name}
        </option>
      ))}
    </select>

    <input
      name="url"
      type="text"
      placeholder="/uploads/image.jpg"
      className="w-full bg-zinc-800 p-4 rounded-xl"
      required
    />

    <select
      name="type"
      className="w-full bg-zinc-800 p-4 rounded-xl"
      required
    >
      <option value="image">
        صورة
      </option>

      <option value="video">
        فيديو
      </option>
    </select>

    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-xl"
    >
      إضافة الوسائط
    </button>
  </form>
</div>

        <form action={createProduct} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="اسم المنتج"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <textarea
            name="description"
            placeholder="وصف المنتج"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <input
            name="price"
            type="number"
            placeholder="السعر"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <input
            name="image"
            type="text"
            placeholder="/uploads/mafia.png"
            className="w-full bg-zinc-800 p-4 rounded-xl"
          />

          <input
            name="video"
            type="text"
            placeholder="/uploads/mafia.mp4"
            className="w-full bg-zinc-800 p-4 rounded-xl"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-xl"
          >
            إضافة المنتج
          </button>

        </form>
      </div>

      <div className="bg-zinc-900 p-6 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">
          المنتجات الحالية
        </h2>

        {products.length === 0 ? (
          <p className="text-zinc-400">
            لا توجد منتجات حالياً
          </p>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-zinc-800 p-4 rounded-xl"
              >
                <h3 className="font-bold text-lg">
                  {product.name}
                </h3>

                <p className="text-zinc-400 mb-3">
                  {product.price} د.ع
                </p>
              
<div className="mb-4 space-y-2">

  {media
    .filter(
      (item) => item.productId === product.id
    )
    .map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between bg-zinc-900 p-2 rounded-lg"
      >
        <span className="text-sm">
          {item.type} : {item.url}
        </span>

        <form
          action={async () => {
            "use server";
            await deleteProductMedia(item.id);
          }}
        >
          <button
            type="submit"
            className="bg-red-600 px-3 py-1 rounded-lg"
          >
            حذف
          </button>
        </form>
      </div>
    ))}

</div>

                <div className="flex gap-3">

                  <a
                    href={`/admin/edit/${product.id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-lg font-bold"
                  >
                    تعديل المنتج
                  </a>

                  <form
  action={async () => {
                      "use server";
                      await deleteProduct(product.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      حذف المنتج
                    </button>
                  </form>

                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-zinc-900 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">
          الطلبات الواردة
        </h2>

        {orders.length === 0 ? (
          <p className="text-zinc-400">
            لا توجد طلبات حالياً
          </p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-zinc-800 p-4 rounded-xl"
              >
                <p><strong>الاسم:</strong> {order.customer}</p>
                <p><strong>الهاتف:</strong> {order.phone}</p>
                <p><strong>المحافظة:</strong> {order.governorate}</p>
                <p><strong>الملاحظات:</strong> {order.notes || "-"}</p>
                <p><strong>الإجمالي:</strong> {order.total.toLocaleString()} د.ع</p>
                <p><strong>المنتجات:</strong></p>

                <pre className="whitespace-pre-wrap text-zinc-300">
                  {order.product}
                </pre>

                <form
                  action={async () => {
                    "use server";
                    await deleteOrder(order.id);
                  }}
                  className="mt-3"
                >
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    حذف الطلب
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>

    </main>
  );
}
