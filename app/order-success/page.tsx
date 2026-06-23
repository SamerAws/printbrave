
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-5xl font-bold text-green-500 mb-6">
          ✅ تم استلام طلبك
        </h1>

        <p className="text-zinc-400 mb-8">
          شكراً لطلبك، سيتم التواصل معك قريباً.
        </p>

        <Link
          href="/"
          className="bg-orange-500 text-black px-8 py-4 rounded-xl font-bold"
        >
          العودة للرئيسية
        </Link>

      </div>
    </main>
  );
}
