"use server";

import { prisma } from "@/app/lib/prisma";

export async function createOrder(formData: FormData) {
  const customer = formData.get("customer") as string;
  const phone = formData.get("phone") as string;
  const governorate = formData.get("governorate") as string;
  const product = formData.get("product") as string;
  const notes = formData.get("notes") as string;

  await prisma.order.create({
    data: {
      customer,
      phone,
      governorate,
      product,
      notes,
    },
  });
}