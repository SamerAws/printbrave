"use server";

import { cookies } from "next/headers";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export async function verifyCode(
  formData: FormData
) {
  const email = formData.get("email") as string;
  const code = formData.get("code") as string;

  const latestCode =
    await prisma.verificationCode.findFirst({
      where: {
        email,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  if (!latestCode) {
    redirect(
      `/verify?email=${encodeURIComponent(email)}&error=1`
    );
  }

  if (latestCode.code !== code) {
    redirect(
      `/verify?email=${encodeURIComponent(email)}&error=1`
    );
  }

  let user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
      },
    });
  }

  const cookieStore = await cookies();

  cookieStore.set({
    name: "userEmail",
    value: email,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/orders");
}