
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-12">
          تواصل <span className="text-orange-500">معنا</span>
        </h1>

        <div className="space-y-4">

          <a
            href="https://www.instagram.com/print.brave?igsh=MWRvNWxjeGpvZW05eQ%3D%3D&utm_source=qr"
            target="_blank"
            className="block w-full bg-pink-600 hover:bg-pink-700 text-center py-4 rounded-2xl font-bold text-xl"
          >
            📷 Instagram <span className="text-orange-300">●</span>
          </a>

          <a
            href="https://wa.me/9647814188133"
            target="_blank"
            className="block w-full bg-green-600 hover:bg-green-700 text-center py-4 rounded-2xl font-bold text-xl"
          >
            💬 WhatsApp <span className="text-orange-300">●</span>
          </a>

          <a
            href="https://t.me/printbrave"
            target="_blank"
            className="block w-full bg-sky-500 hover:bg-sky-600 text-center py-4 rounded-2xl font-bold text-xl"
          >
            ✈️ Telegram <span className="text-orange-300">●</span>
          </a>

          <a
            href="tel:+9647814188133"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-center py-4 rounded-2xl font-bold text-xl text-black"
          >
            📞 اتصال مباشر
          </a>

        </div>

      </div>
    </main>
  );
}
