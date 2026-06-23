import { createOrder } from "./actions";

export default async function OrderPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-2xl">

        <h1 className="text-4xl font-bold mb-3 text-center">
          إكمال الطلب
        </h1>

        <p className="text-center text-zinc-400 mb-8">
          المنتج: {decodeURIComponent(product)}
        </p>

        <form action={createOrder} className="space-y-5">

          <input
            name="customer"
            type="text"
            placeholder="الاسم الكامل"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <input
            name="phone"
            type="text"
            placeholder="رقم الهاتف"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <input
            name="governorate"
            type="text"
            placeholder="المحافظة"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <input
            type="hidden"
            name="product"
            value={decodeURIComponent(product)}
          />

          <textarea
            name="notes"
            placeholder="ملاحظات إضافية"
            className="w-full bg-zinc-800 p-4 rounded-xl h-32"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl"
          >
            إرسال الطلب
          </button>

        </form>

      </div>
    </main>
  );
}