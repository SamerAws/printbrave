
export default function Home() {
  return (
    <>
      <main className="bg-black text-white">

        {/* Hero */}
        <section className="text-center py-24 px-6">

          <span className="bg-orange-500 text-black px-4 py-2 rounded-full font-bold">
            PRINT BRAVE
          </span>

          <h1 className="text-5xl font-bold mt-8">
            انت فكر...
            <br />
            واحنا نحولها إلى واقع
          </h1>

          <p className="mt-6 text-zinc-400 text-xl">
            متجر وخدمات طباعة احترافية مع شحن لجميع المحافظات
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/shop"
              className="bg-orange-500 text-black px-8 py-3 rounded-xl font-bold"
            >
              ابدأ الطلب
            </a>
          </div>

        </section>

        {/* Services */}
        <section className="py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            خدماتنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">
                تصميم احترافي
              </h3>
              <p className="text-zinc-400">
                تصاميم مخصصة للشركات والأفراد بجودة عالية.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
              <div className="text-5xl mb-4">🖨️</div>
              <h3 className="text-2xl font-bold mb-3">
                طباعة احترافية
              </h3>
              <p className="text-zinc-400">
                طباعة لوحات، كروت، ألعاب، ومواد دعائية.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-3">
                شحن لكل العراق
              </h3>
              <p className="text-zinc-400">
                توصيل لجميع المحافظات بسرعة وأمان.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">
                تنفيذ سريع
              </h3>
              <p className="text-zinc-400">
                سرعة في التصميم والطباعة وتجهيز الطلبات.
              </p>
            </div>

          </div>
        </section>

        {/* Shipping */}
        <section className="bg-orange-500 text-black py-10 text-center">

          <h2 className="text-3xl font-bold">
            الشحن متوفر لجميع محافظات العراق
          </h2>

          <p className="mt-3 text-xl">
            سعر الشحن الموحد: 5,000 د.ع
          </p>

        </section>

      </main>
    </>
  );
}
