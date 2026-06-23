import { login } from "./actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          تسجيل دخول الإدارة
        </h1>

        <form action={login} className="space-y-4">

          <input
            name="username"
            type="text"
            placeholder="اسم المستخدم"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="كلمة المرور"
            className="w-full bg-zinc-800 p-4 rounded-xl"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl"
          >
            تسجيل الدخول
          </button>

        </form>

      </div>
    </main>
  );
}