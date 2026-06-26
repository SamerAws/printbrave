
"use client";

import { useRouter } from "next/navigation";
import { createOrder } from "../actions/order";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, clearCart } = useCart();

  const productsText = cart
    .map(
      (item) =>
        `${item.name} × ${item.quantity}`
    )
    .join("\n");


const total = cart.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
);

if (cart.length === 0) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          السلة فارغة
        </h1>

        <p className="text-zinc-400">
          أضف منتجات أولاً ثم أكمل الطلب.
        </p>
      </div>
    </main>
  );
}

async function handleSubmit(
  formData: FormData
) {
  await createOrder(formData);

  clearCart();

  router.push("/order-success");
}

  
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          إتمام الطلب
        </h1>

        <form
  onSubmit={() => console.log("FORM SUBMITTED")}
  action={handleSubmit}>
    
          <input
            name="customer"
            type="text"
            placeholder="الاسم الكامل"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <input
  name="phone"
  type="tel"
  placeholder="07xxxxxxxxx "
  pattern="^(07[0-9]{9}|\+964[0-9]{10})$"
  title="أدخل رقم عراقي صحيح"
  className="w-full bg-zinc-800 p-4 rounded-xl"
  required
/>

          <select
  name="governorate"
  className="w-full bg-zinc-800 p-4 rounded-xl"
  required
  defaultValue=""
>
  <option value="" disabled>
    اختر المحافظة
  </option>

  <option value="بغداد">بغداد</option>
  <option value="البصرة">البصرة</option>
  <option value="نينوى">نينوى</option>
  <option value="أربيل">أربيل</option>
  <option value="دهوك">دهوك</option>
  <option value="السليمانية">السليمانية</option>
  <option value="كركوك">كركوك</option>
  <option value="الأنبار">الأنبار</option>
  <option value="صلاح الدين">صلاح الدين</option>
  <option value="ديالى">ديالى</option>
  <option value="بابل">بابل</option>
  <option value="كربلاء">كربلاء</option>
  <option value="النجف">النجف</option>
  <option value="واسط">واسط</option>
  <option value="القادسية">القادسية</option>
  <option value="ذي قار">ذي قار</option>
  <option value="ميسان">ميسان</option>
  <option value="المثنى">المثنى</option>
</select>
<input
  name="area"
  type="text"
  placeholder="المنطقة"
  className="w-full bg-zinc-800 p-4 rounded-xl"
  required
/>

<input
  name="landmark"
  type="text"
  placeholder="أقرب نقطة دالة"
  className="w-full bg-zinc-800 p-4 rounded-xl"
  required
/>
          <textarea
            value={productsText}
            readOnly
            className="w-full bg-zinc-800 p-4 rounded-xl"
          />

          <input
  type="hidden"
  name="product"
  value={productsText}
/>

<input
  type="hidden"
  name="cart"
  value={JSON.stringify(
    cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }))
  )}
/>

          

          <textarea
            name="notes"
            placeholder="ملاحظات إضافية"
            className="w-full bg-zinc-800 p-4 rounded-xl"
          />

          <input
            type="hidden"
            name="total"
            value={total}
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl"
          >
            تأكيد الطلب
          </button>

        </form>

      </div>
    </main>
  );
}
