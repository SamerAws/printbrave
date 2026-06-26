import Link from "next/link";
import { cookies } from "next/headers";
import { prisma } from "../lib/prisma";

export default async function OrdersPage() {
  const cookieStore = await cookies();

  const email = cookieStore.get("userEmail")?.value;
console.log("===== COOKIES =====");
console.log(cookieStore.getAll());
console.log("Current email:", email);
  if (!email) {
    return (
      <main className="min-h-screen bg-black text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-zinc-900 p-8 rounded-3xl text-center">
            <h1 className="text-4xl font-bold mb-6">
              طلباتي
            </h1>

            <p className="text-zinc-400 mb-8">
              يرجى تسجيل الدخول لعرض الطلبات السابقة.
            </p>

            <Link
              href="/auth"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-xl"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-zinc-900 p-8 rounded-3xl text-center">
            <h1 className="text-4xl font-bold mb-6">
              طلباتي
            </h1>

            <p>لم يتم العثور على المستخدم.</p>
          </div>
        </div>
      </main>
    );
  }

  const orders = await prisma.order.findMany({
  where: {
    userId: user.id,
  },
  include: {
    items: true,
  },
  orderBy: {
    id: "desc",
  },
});

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-8">
          طلباتي
        </h1>

        <p className="text-orange-500 mb-8">
          {email}
        </p>

        {orders.length === 0 ? (
          <div className="bg-zinc-900 p-6 rounded-2xl">
            لا توجد طلبات مرتبطة بهذا الحساب.
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-zinc-900 p-6 rounded-2xl"
              >
                

                <p>
                  <strong>الاسم:</strong> {order.customer}
                </p>

                <p>
                  <strong>الهاتف:</strong> {order.phone}
                </p>

                <p>
                  <strong>المحافظة:</strong> {order.governorate}
                </p>

                <p>
                  <strong>الحالة:</strong> {order.status}
                </p>

                <p>
                  <strong>الإجمالي:</strong>{" "}
                  {order.total.toLocaleString()} د.ع
                </p>

                <div className="mt-5 space-y-4">
  {order.items.map((item) => (
    <div
      key={item.id}
      className="flex items-center gap-4 bg-zinc-800 p-4 rounded-xl"
    >
      <img
        src={item.productImage || "/placeholder.png"}
        alt={item.productName}
        className="w-20 h-20 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="font-bold text-lg">
          {item.productName}
        </h3>

        <p className="text-zinc-400">
          الكمية: {item.quantity}
        </p>

        <p className="text-orange-500 font-bold">
          {item.price.toLocaleString()} د.ع
        </p>
      </div>
    </div>
  ))}
</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}