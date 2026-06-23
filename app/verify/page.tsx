export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-10">
          تحقق من البريد
        </h1>

        <div className="bg-zinc-900 rounded-3xl p-8">

          <p className="text-center text-zinc-400 mb-6">
            أدخل رمز التحقق المرسل إلى:
          </p>

          <p className="text-center text-orange-500 mb-8">
            {params.email}
          </p>

          <form className="space-y-4">

            <input
              name="code"
              placeholder="رمز التحقق"
              className="w-full bg-zinc-800 p-4 rounded-xl"
            />

            <button
              className="w-full bg-orange-500 text-black font-bold py-4 rounded-xl"
            >
              تأكيد الرمز
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}