
import { prisma } from "../../lib/prisma";

export default async function SearchOrders({
  searchParams,
}: {
  searchParams: Promise<{
    phone?: string;
  }>;
}) {
  const { phone } = await searchParams;

  const orders = phone
    ? await prisma.order.findMany({
        where: {
          phone,
        },
        orderBy: {
          id: "desc",
        },
      })
    : [];

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          الطلبات السابقة
        </h1>

        {orders.length === 0 ? (
          <p className="text-zinc-400">
            لا توجد طلبات
          </p>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-zinc-900 p-6 rounded-2xl"
              >
                <h2 className="text-2xl font-bold mb-3">
                  الطلب #{order.id}
                </h2>

                <p className="mb-2">
                  <strong>المنتجات:</strong>
                </p>

                <pre className="whitespace-pre-wrap text-zinc-300 mb-4">
                  {order.product}
                </pre>

                <p className="mb-2">
                  <strong>الإجمالي:</strong>{" "}
                  {order.total.toLocaleString()} د.ع
                </p>

                <p className="text-zinc-400">
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString("ar-IQ")}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
