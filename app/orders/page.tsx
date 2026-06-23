
import Link from "next/link";

export default function OrdersPage() {
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
