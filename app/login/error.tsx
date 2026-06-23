"use client";

export default function ErrorPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold text-red-500">
        اسم المستخدم أو كلمة المرور غير صحيحة
      </h1>
    </main>
  );
}