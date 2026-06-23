
"use server";

import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const admin = await (prisma as any).admin.findFirst({
    where: {
      username,
      password,
    },
  });

  if (!admin) {
    redirect("/login");
  }

  redirect("/admin");
}
