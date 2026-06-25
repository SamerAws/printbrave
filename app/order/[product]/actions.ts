"use server";

import { prisma } from "@/app/lib/prisma";
import { cookies } from "next/headers";

export async function createOrder(formData: FormData) {
  const customer = formData.get("customer") as string;
  const phone = formData.get("phone") as string;
  const governorate = formData.get("governorate") as string;
  const product = formData.get("product") as string;
  const notes = formData.get("notes") as string;

  const cookieStore = await cookies();

  const email = cookieStore.get("userEmail")?.value;

  console.log("EMAIL =", email);

  let userId: number | null = null;

  if (email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    console.log("USER =", user);

    if (user) {
      userId = user.id;
    }
  }

  console.log("USER ID =", userId);

  await prisma.order.create({
    data: {
      customer,
      phone,
      governorate,
      product,
      notes,
      userId,
    },
  });

  console.log("ORDER CREATED");
}