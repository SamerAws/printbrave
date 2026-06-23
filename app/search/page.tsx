
import { prisma } from "../lib/prisma";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const { q } = await searchParams;

  const products = q
    ? await prisma.product.findMany({
        where: {
          name: {
            contains: q,
          },
        },
      })
    : [];

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          نتائج البحث
        </h1>

        {products.length === 0 ? (
          <p className="text-zinc-400">
            لا توجد نتائج
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
              >
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                )}

                <div className="p-4">

                  <h2 className="text-xl font-bold mb-2">
                    {product.name}
                  </h2>

                  <p className="text-orange-500 font-bold">
                    {product.price.toLocaleString()} د.ع
                  </p>

                </div>

              </Link>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
