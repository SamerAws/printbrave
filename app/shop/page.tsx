import { prisma } from "../lib/prisma";
import ShopClient from "../components/ShopClient";

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  console.log("SHOP PRODUCTS:", products);

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-16">
          المتجر
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-zinc-400">
            لا توجد منتجات حالياً
          </p>
        ) : (
          <ShopClient products={products as any[]} />
        )}

      </div>
    </main>
  );
}