
import { prisma } from "../../../lib/prisma";
import { updateProduct } from "../../actions";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        المنتج غير موجود
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        تعديل المنتج
      </h1>

      <form
        action={async (formData) => {
          "use server";
          await updateProduct(product.id, formData);
        }}
        className="bg-zinc-900 p-6 rounded-2xl space-y-4"
      >

        <input
          name="name"
          defaultValue={product.name}
          className="w-full bg-zinc-800 p-4 rounded-xl"
          required
        />

        <textarea
          name="description"
          defaultValue={product.description}
          className="w-full bg-zinc-800 p-4 rounded-xl"
          required
        />

        <input
          name="price"
          type="number"
          defaultValue={product.price}
          className="w-full bg-zinc-800 p-4 rounded-xl"
          required
        />

        <input
          name="image"
          defaultValue={product.image ?? ""}
          placeholder="/uploads/image.jpg"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <input
          name="video"
          defaultValue={(product as any).video ?? ""}
          placeholder="/uploads/video.mp4"
          className="w-full bg-zinc-800 p-4 rounded-xl"
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-xl"
        >
          حفظ التعديلات
        </button>

      </form>

    </main>
  );
}
