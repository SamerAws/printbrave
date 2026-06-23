
"use server";

import { prisma } from "../lib/prisma";

export async function createOrder(formData: FormData) {
  const customer = formData.get("customer") as string;
  const phone = formData.get("phone") as string;
  const governorate = formData.get("governorate") as string;

  const area = formData.get("area") as string;
  const landmark = formData.get("landmark") as string;

  const product = formData.get("product") as string;
  const notes = formData.get("notes") as string;
  const total = Number(formData.get("total"));

  await prisma.order.create({
    data: {
      customer,
      phone,
      governorate,
      area,
      landmark,
      product,
      notes,
      total,
    },
  });
}
