export default function UploadPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-2xl w-full max-w-xl text-center">

        <h1 className="text-4xl font-bold mb-6">
          رفع الملفات
        </h1>

        <p className="text-zinc-400 mb-8">
          أرسل ملفاتك مباشرة عبر واتساب
        </p>

        <a
          href="https://wa.me/9647814188133"
          target="_blank"
          className="block w-full bg-orange-500 text-black py-4 rounded-xl font-bold"
        >
          إرسال عبر واتساب
        </a>

      </div>
    </main>
  );
}