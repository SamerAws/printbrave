
import { prisma } from "../../lib/prisma";
import ProductSlider from "../../components/ProductSlider";
import AddToCartButton from "../../components/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
  where: {
    id: Number(id),
  },
  include: {
    media: true,
  },
});

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        المنتج غير موجود
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-20">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">

          <ProductSlider
  image={product.image}
  video={product.video}
  media={product.media}
/>

          <div className="p-8">

            <h1 className="text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-zinc-400 text-lg mb-8">
              {product.description}
            </p>

            <p className="text-orange-500 text-4xl font-bold mb-8">
              {product.price.toLocaleString()} د.ع
            </p>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />

          </div>

        </div>

      </div>

    </main>
  );
}
