
import Link from "next/link";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10 text-center">
          حسابي
        </h1>

        <div className="bg-zinc-900 rounded-3xl p-8">

          <p className="text-zinc-400 text-center mb-8">
            سجل الدخول للوصول إلى طلباتك السابقة وإدارة حسابك.
          </p>

          <form className="space-y-4 mb-8">

            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full bg-zinc-800 p-4 rounded-xl"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl"
            >
              إرسال رمز التحقق
            </button>

          </form>

          <div className="border-t border-zinc-800 pt-6">

            <Link
              href="/orders"
              className="block text-center bg-zinc-800 hover:bg-zinc-700 py-4 rounded-xl"
            >
              عرض طلباتي
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}
